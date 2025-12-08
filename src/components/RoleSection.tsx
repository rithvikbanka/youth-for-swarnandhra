import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Users, Gift, TrendingUp } from "lucide-react";

export type RoleKey = "reporter" | "fellow" | "creator" | "organiser";

export interface RoleSectionProps {
  roleKey: RoleKey;
  title: string;
  tagline: string;
  intro: string;
  responsibilities: string[];
  whoShouldApply: string[];
  incentives: string[];
  outcomes: string[];
  onApplyClick: (roleKey: RoleKey, roleLabel: string) => void;
}

export const RoleSection = ({
  roleKey,
  title,
  tagline,
  intro,
  responsibilities,
  whoShouldApply,
  incentives,
  outcomes,
  onApplyClick,
}: RoleSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const sections = [
    {
      icon: Briefcase,
      title: "What you'll do",
      items: responsibilities,
      color: "text-primary",
      bg: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Who should apply",
      items: whoShouldApply,
      color: "text-accent",
      bg: "bg-accent/10",
    },
    {
      icon: Gift,
      title: "What you get",
      items: incentives,
      color: "text-festival-gold",
      bg: "bg-festival-gold/10",
    },
    {
      icon: TrendingUp,
      title: "Where this leads",
      items: outcomes,
      color: "text-green-600",
      bg: "bg-green-100",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-2xl shadow-card overflow-hidden"
    >
      <div className="p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Role Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Title & Tagline */}
            <div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">
                {title}
              </h3>
              <p className="text-accent font-medium">{tagline}</p>
            </div>

            {/* Intro */}
            <p className="text-muted-foreground leading-relaxed">{intro}</p>

            {/* Sections Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${section.bg}`}>
                      <section.icon className={`w-4 h-4 ${section.color}`} />
                    </div>
                    <h4 className="font-semibold text-foreground">{section.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${section.bg.replace('/10', '')} flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-festival-offwhite rounded-xl p-6 sticky top-24"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Ready to make an impact?</p>
                  <p className="text-sm text-muted-foreground">
                    Join our team and be part of YUVA 2025
                  </p>
                </div>
                <motion.button
                  onClick={() => onApplyClick(roleKey, title)}
                  className="w-full btn-primary bg-gradient-to-r from-festival-red-light to-festival-red text-white py-3"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Apply Now
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

