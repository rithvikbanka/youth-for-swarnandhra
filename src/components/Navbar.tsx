import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinksNoHome = [
  // Home will be rendered first, not included here
  // Events handled separately as dropdown
  { href: "#schedule", label: "Schedule", section: "schedule" },
  { href: "#gallery", label: "Gallery", section: "gallery" },
  { href: "#faq", label: "FAQ", section: "faq" },
  { href: "/join-our-team", label: "Join Us", section: "join-our-team", isRoute: true },
];

const eventDropdown = [
  {
    label: "Special Events",
    items: [
      { label: "Youth Changemaker Talks", section: "youth-changemaker-talks", route: "/event/youth-changemaker-talks" },
      { label: "Youth Con", section: "youth-con", route: "/event/youth-con" },
      { label: "Youth Impact Labs", section: "youth-impact-labs", route: "/event/youth-impact-labs" },
    ],
  },
  {
    label: "Other Events",
    items: [
      { label: "Yuvasrishti", section: "yuvasrishti", route: "/" },
      { label: "Youth Talent Carnival", section: "youth-talent-carnival", route: "/" },
      { label: "Youth Art Wall", section: "youth-art-wall", route: "/" },
      { label: "Carnival Parade", section: "carnival-parade", route: "/" },
    ],
  },
];

function useScrollToSectionEffect(setActiveSection: (id: string) => void) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        ...eventDropdown.flatMap(grp => grp.items.map(item => item.section)),
        "schedule",
        "gallery",
        "faq"
      ];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const eventsDropdownRef = useRef<HTMLDivElement | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<null | number>(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Active state logic only uses router pathname (not scrolling positions)
  const isHomeActive = location.pathname === "/";
  const isEventsActive = location.pathname.startsWith("/event");
  const isJoinUsActive = location.pathname.startsWith("/join-our-team");

  // Listen to scroll for nav color and (if on home page) for section highlight
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsAtTop(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track current section only on the home page for highlighting scroll position (not routing)
  useScrollToSectionEffect(isHomeActive ? setActiveSection : () => {});

  // To close dropdown on click outside
  useEffect(() => {
    if (!showEventsDropdown) return;
    const handleClick = (e: MouseEvent) => {
      if (
        eventsDropdownRef.current &&
        !eventsDropdownRef.current.contains(e.target as Node)
      ) {
        setShowEventsDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [showEventsDropdown]);

  /** 
   * Helper: scrolls smoothly to section if possible. 
   * Used only when on the home page. 
   */
  const scrollToSectionOnly = (sectionId: string) => {
    if (sectionId.startsWith("#")) sectionId = sectionId.slice(1);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
    setShowEventsDropdown(false);
  };

  /**
   * Route-aware helper: If already at home, just scroll, otherwise go home then scroll after navigation.
   */
  const goToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      scrollToSectionOnly(sectionId);
    } else {
      // Go to home, then after navigation, scroll
      navigate("/", { replace: false });
      setTimeout(() => {
        // Needs a tick for home page content to mount/render
        scrollToSectionOnly(sectionId);
      }, 60);
    }
    setIsMobileOpen(false);
    setShowEventsDropdown(false);
  };

  /**
   * Go home ("/") and scroll to top
   */
  const goHome = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/", { replace: false });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 30);
    }
    setIsMobileOpen(false);
    setShowEventsDropdown(false);
  };

  /** 
   * Register button: home-page scroll, or route then scroll after navigation 
   */
  const goToRegister = () => {
    goToSection("register");
  };

  /** 
   * Handle Special Events (router navigation only!).
   * For Other Events: go home and scroll to section.
   */
  const handleEventDropdownClick = (item: { section: string, route?: string }) => {
    // Special Events: must navigate to dedicated route (no scrolling!)
    const isSpecial = !!eventDropdown[0].items.find(i => i.section === item.section && i.route && i.route.startsWith("/event/"));
    if (isSpecial && item.route) {
      navigate(item.route, { replace: false });
      setShowEventsDropdown(false);
      setIsMobileOpen(false);
      return;
    }
    // Other Events: go home and scroll to section
    goToSection(item.section);
  };

  // Determine text color class based on scroll position
  // Tailwind: "text-white" at top, default ("text-foreground") when scrolled
  const navbarTextColor =
    isAtTop
      ? "text-white"
      : "text-foreground";

  // Helper function to get nav link classes based on active state and scroll position
  // When NOT scrolled (top): active = gold (#EBB41B)
  // When scrolled: active = red (text-primary)
  const getNavLinkClasses = (isActive: boolean) => {
    const baseClasses = "nav-link transition-colors duration-300 font-medium";
    
    if (isActive) {
      if (isScrolled) {
        // Scrolled (navbar has solid bg): active = red
        return `${baseClasses} text-primary`;
      } else {
        // Not scrolled (at top, transparent bg): active = gold
        return `${baseClasses} text-[#EBB41B]`;
      }
    } else {
      // Inactive items - keep current colors
      return `${baseClasses} ${navbarTextColor}`;
    }
  };

  // Used on nav-link. We want smooth transitions, so add transition to color
  const navLinkBase =
    `nav-link transition-colors duration-300 ${navbarTextColor}`;

  // Used on mobile button, etc
  const navIconTextColor =
    `transition-colors duration-300 ${isAtTop ? "text-white" : "text-foreground"}`;

  // CTA btn-primary button styling
  const ctaButtonText =
    isAtTop
      ? "btn-primary text-sm bg-gradient-to-r from-festival-red-light to-festival-red text-white transition-colors duration-300"
      : "btn-primary text-sm transition-colors duration-300";

  // Mobile menu styling
  const mobileNavText =
    isAtTop
      ? "text-white"
      : "text-foreground";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={
        `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ` +
        (isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent")
      }
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              goHome();
            }}
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative h-[50px] w-auto">
              <img
                src="/yuva_logo.png"
                alt="APYF Logo"
                className={`h-[50px] w-auto absolute transition-opacity duration-300 ${
                  isAtTop ? "opacity-0" : "opacity-100"
                }`}
              />
              <img
                src="/yuva_logo1.png"
                alt="APYF Logo"
                className={`h-[50px] w-auto transition-opacity duration-300 ${
                  isAtTop ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Home Link */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                goHome();
              }}
              className={getNavLinkClasses(isHomeActive)}
            >
              Home
            </a>

            {/* Events dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowEventsDropdown(true)}
              onMouseLeave={() => setShowEventsDropdown(false)}
              ref={eventsDropdownRef}
            >
              <button
                className={`${getNavLinkClasses(isEventsActive)} flex items-center gap-1`}
                onClick={(e) => {
                  e.preventDefault();
                  setShowEventsDropdown((val) => !val);
                }}
                aria-haspopup="menu"
                aria-expanded={showEventsDropdown}
                type="button"
              >
                Events
                <ChevronDown 
                  size={18} 
                  className={`ml-0.5 transition-colors duration-300 ${
                    isEventsActive
                      ? (isScrolled ? "text-primary" : "text-[#EBB41B]")
                      : (isAtTop ? "text-white" : "text-foreground")
                  }`} 
                />
              </button>
              <AnimatePresence>
                {showEventsDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, pointerEvents: "none" }}
                    animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
                    exit={{ opacity: 0, y: 10, pointerEvents: "none" }}
                    transition={{ duration: 0.19 }}
                    className="absolute left-0 top-full pt-2 z-[99]"
                  >
                    <div className="min-w-[275px] rounded-lg shadow-lg bg-background border border-border flex flex-col p-3">
                    {eventDropdown.map((group, idx) => (
                      <div key={group.label} className="mb-1 last:mb-0">
                        <div
                          className="font-semibold px-3 pb-1 text-xs uppercase tracking-wide"
                          style={{ color: "#666666" }}
                        >
                          {group.label}
                        </div>
                        {group.items.map((item) => (
                          <motion.a
                            key={item.section}
                            href={
                              group.label === "Special Events" && item.route
                                ? item.route
                                : `#${item.section}`
                            }
                            onClick={e => {
                              e.preventDefault();
                              handleEventDropdownClick(item);
                            }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.98 }}
                            className={`block px-3 py-2 rounded-lg font-medium text-sm transition-colors cursor-pointer ${
                              // Don't highlight sections on event page, only on home
                              isHomeActive && activeSection === item.section
                                ? "bg-festival-gold-light text-primary"
                                : "hover:bg-muted text-foreground"
                            }`}
                          >
                            {item.label}
                          </motion.a>
                        ))}
                        {idx < eventDropdown.length - 1 && (
                          <div className="my-2 border-t border-border" />
                        )}
                      </div>
                    ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Rest of the links */}
            {navLinksNoHome.map((link) => {
              // Determine if this link is active
              const linkIsActive = link.isRoute
                ? (link.href === "/join-our-team" && isJoinUsActive)
                : (isHomeActive && activeSection === link.section);
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.isRoute) {
                      navigate(link.href);
                      setIsMobileOpen(false);
                    } else {
                      goToSection(link.section);
                    }
                  }}
                  className={getNavLinkClasses(linkIsActive)}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#register"
              onClick={(e) => {
                e.preventDefault();
                goToRegister();
              }}
              className={ctaButtonText}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`md:hidden p-2 ${navIconTextColor}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <div className="container px-4 py-4 flex flex-col gap-2">
              {/* Home link */}
              <motion.a
                href="#home"
                onClick={e => {
                  e.preventDefault();
                  goHome();
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.01 }}
                className={`py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${mobileNavText} ${
                  isHomeActive
                    ? "bg-festival-gold-light text-primary"
                    : "hover:bg-muted"
                }`}
              >
                Home
              </motion.a>

              {/* Events dropdown in mobile, as accordion */}
              <div>
                <button
                  className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium transition-colors duration-300 text-left mt-1 ${mobileNavText} ${
                    mobileDropdownOpen !== null ? "bg-muted" : "hover:bg-muted"
                  }${isEventsActive ? " active" : ""}`}
                  onClick={() =>
                    setMobileDropdownOpen(
                      mobileDropdownOpen === 0 ? null : 0
                    )
                  }
                  aria-expanded={mobileDropdownOpen === 0}
                  aria-controls="mobile-events-dropdown"
                  type="button"
                >
                  <span className="flex items-center gap-1">
                    Events
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-150 ${mobileDropdownOpen === 0 ? "rotate-180" : ""} ${mobileNavText}`}
                    size={21}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileDropdownOpen === 0 && (
                    <motion.div
                      id="mobile-events-dropdown"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.23 }}
                      className="pl-2"
                    >
                      {eventDropdown.map((group, idx) => (
                        <div key={group.label} className="mb-1 last:mb-0">
                          <div
                            className="font-semibold px-3 pb-1 text-xs uppercase tracking-wide"
                            style={{ color: "#666666" }}
                          >
                            {group.label}
                          </div>
                          {group.items.map((item, subidx) => (
                            <motion.a
                              key={item.section}
                              href={
                                group.label === "Special Events" && item.route
                                  ? item.route
                                  : `#${item.section}`
                              }
                              onClick={e => {
                                e.preventDefault();
                                handleEventDropdownClick(item);
                              }}
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 0.05 * (subidx + 1) }}
                              className={`block rounded-lg px-4 py-2 my-[1.5px] font-medium transition-colors duration-300 ${mobileNavText} text-sm ${
                                isHomeActive && activeSection === item.section
                                  ? "bg-festival-gold-light text-primary"
                                  : "hover:bg-muted"
                              }`}
                            >
                              {item.label}
                            </motion.a>
                          ))}
                          {idx < eventDropdown.length - 1 && (
                            <div className="my-2 border-t border-border" />
                          )}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Rest of nav links */}
              {navLinksNoHome.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    if (link.isRoute) {
                      navigate(link.href);
                      setIsMobileOpen(false);
                    } else {
                      goToSection(link.section);
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: (index + 2) * 0.05
                  }}
                  className={`py-3 px-4 rounded-lg font-medium transition-colors duration-300 ${mobileNavText} ${
                    link.isRoute
                      ? (link.href === "/join-our-team" && isJoinUsActive ? "bg-festival-gold-light text-primary" : "hover:bg-muted")
                      : (isHomeActive && activeSection === link.section ? "bg-festival-gold-light text-primary" : "hover:bg-muted")
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#register"
                onClick={(e) => {
                  e.preventDefault();
                  goToRegister();
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (navLinksNoHome.length + 2) * 0.05 }}
                className={`btn-primary text-center mt-2 ${isAtTop ? "bg-gradient-to-r from-festival-red-light to-festival-red text-white" : ""} transition-colors duration-300`}
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
