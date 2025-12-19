import { motion } from "framer-motion";
import { Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

// Use https and trailing slash for robust hyperlinking
const INSTAGRAM_URL = "https://www.instagram.com/apyouthservices/";

const socialLinks = [
  { icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
];

export const Footer = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const footerNavLinks = [
    { label: t('nav.events', 'Events'), href: "/", isRoute: true, section: "transform-section" },
    { label: t('nav.schedule', 'Schedule'), href: "/", isRoute: true, section: "schedule" },
    { label: t('nav.gallery', 'Gallery'), href: "/", isRoute: true, section: "gallery" },
    { label: t('nav.joinUs', 'Join Us'), href: "/join-our-team", isRoute: true, section: null },
  ];

  const handleNavClick = (link: typeof footerNavLinks[0]) => {
    if (link.href === "/join-our-team") {
      navigate("/join-our-team");
    } else if (link.section) {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(link.section!);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      }, 100);
    } else {
      navigate(link.href);
    }
  };

  return (
    <footer className="bg-festival-offwhite border-t border-border">
      {/* Decorative Wave */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-festival-gold" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Swarnandhra 2047 - Navigation Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-4">
              {t('footer.swarnandhra', 'Swarnandhra 2047')}
            </h3>
            <ul className="space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.label}>
                  {link.href === "/join-our-team" ? (
                    <Link
                      to="/join-our-team"
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                    </Link>
                  ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                        handleNavClick(link);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-4">
              {t('footer.followUs', 'Follow Us')}
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-festival-gold-light hover:text-primary transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground font-medium hover:text-primary transition-colors"
                aria-label="@APYouthServices Instagram"
              >
                @APYouthServices
              </a>
            </div>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-4">
              {t('footer.department', 'Department of Youth Services')}
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <a
                  href="https://share.google/XFjNT2RI7GBMoqX55"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Director of Youth Services & Managing Director, APSTEP, Canara Bank Rd, Patamata, Auto Nagar, Vijayawada, Andhra Pradesh 520007, India
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <a
                  href="tel:+919491204654"
                  className="hover:text-primary transition-colors"
                >
                  +91 94912 04654
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a
                  href="mailto:apstateyouthfestival@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  apstateyouthfestival@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>{t('footer.copyright', '© Andhra Pradesh State Youth Festival 2025. All rights reserved.')}</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <a
                href="https://linktr.ee/rithvikbanka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-all duration-200"
              >
                Designed & Developed by Rithvik Banka 👋
              </a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.privacy', 'Privacy Policy')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.terms', 'Terms of Service')}</a>
              <a href="#" className="hover:text-primary transition-colors">{t('footer.accessibility', 'Accessibility')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
