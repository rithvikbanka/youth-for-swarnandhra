import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface EventHeroProps {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  description: string;
  gradient?: string;
  decorativeIcon?: LucideIcon;
  decorativeIcon2?: LucideIcon;
}

// Default gradient: Yellow to Red (consistent across all events)
const DEFAULT_GRADIENT = "linear-gradient(135deg, #F59E0B 0%, #DC2626 50%, #B91C1C 100%)";

export const EventHero = ({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  gradient = DEFAULT_GRADIENT,
  decorativeIcon: DecorativeIcon,
  decorativeIcon2: DecorativeIcon2,
}: EventHeroProps) => {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{ background: gradient }}
      />
      
      {/* Decorative Elements - Blurred Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"
        />
        
        {/* Optional Decorative Icons */}
        {DecorativeIcon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ duration: 1 }}
            className="absolute top-10 right-10 md:top-16 md:right-16"
          >
            <DecorativeIcon className="w-24 h-24 md:w-32 md:h-32 text-white" />
          </motion.div>
        )}
        {DecorativeIcon2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-10 left-10 md:bottom-16 md:left-16"
          >
            <DecorativeIcon2 className="w-20 h-20 md:w-24 md:h-24 text-white" />
          </motion.div>
        )}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Eyebrow Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6"
          >
            {EyebrowIcon && <EyebrowIcon size={16} />}
            {eyebrow}
          </motion.span>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight"
          >
            {title}
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 leading-relaxed"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

