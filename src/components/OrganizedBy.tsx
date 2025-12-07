import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const OrganizedBy = () => {
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center section-padding bg-background"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <p className="text-muted-foreground text-sm uppercase tracking-wider mb-4">
          Organized By
        </p>

        {/* Logo */}
        <motion.div
          className="flex justify-center mb-3"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isSectionInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src="/ap_logo.png"
            alt="Government of Andhra Pradesh"
            className="h-[180px] w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-1"
        >
          <p className="text-lg md:text-xl font-semibold text-foreground">
            Department of Youth Services
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Government of Andhra Pradesh
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
