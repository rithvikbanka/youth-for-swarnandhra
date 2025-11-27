import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube, Twitter, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
  festival: {
    title: "Swarnandhra 2047",
    links: [
      { label: "About the Festival", href: "#" },
      { label: "Vision & Mission", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Press Kit", href: "#" },
    ],
  },
  explore: {
    title: "Explore",
    links: [
      { label: "Events", href: "#events" },
      { label: "Schedule", href: "#schedule" },
      { label: "Gallery", href: "#gallery" },
      { label: "Partners", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "X/Twitter" },
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-festival-offwhite border-t border-border">
      {/* Decorative Wave */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-festival-gold" />

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Festival Info */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-4">
              {footerLinks.festival.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.festival.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-4">
              {footerLinks.explore.title}
            </h3>
            <ul className="space-y-3">
              {footerLinks.explore.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-4">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:bg-festival-gold-light hover:text-primary transition-all duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              @APYouthFest2025
            </p>
          </div>

          {/* Official Info */}
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-4">
              Department of Youth Services
            </h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Secretariat, Vijayawada-521004, A.P., India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0" />
                <span>+91 (866) XXX-XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a
                  href="mailto:info@apyouthfest2025.gov.in"
                  className="hover:text-primary transition-colors"
                >
                  info@apyouthfest2025.gov.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 Andhra Pradesh Youth Festival. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Organized by Department of Youth Services, Government of Andhra Pradesh
          </p>
        </div>
      </div>
    </footer>
  );
};
