import { motion } from "framer-motion";
import { LucideIcon, Calendar, Clock, MapPin } from "lucide-react";
import { eventThemes, type EventThemeKey } from "@/lib/eventThemes";

export interface EventHeroProps {
  eyebrow: string;
  eyebrowIcon?: LucideIcon;
  title: string;
  description: string;
  // New: theme-based styling
  themeKey?: EventThemeKey;
  // Legacy support for custom gradient
  gradient?: string;
  decorativeIcon?: LucideIcon;
  decorativeIcon2?: LucideIcon;
  // Schedule override (optional - will use theme defaults if not provided)
  scheduleDate?: string;
  scheduleTime?: string;
  scheduleLocation?: string;
}

// Default gradient for backward compatibility
const DEFAULT_GRADIENT = "linear-gradient(135deg, #F59E0B 0%, #DC2626 50%, #B91C1C 100%)";

export const EventHero = ({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  description,
  themeKey,
  gradient,
  decorativeIcon: DecorativeIcon,
  decorativeIcon2: DecorativeIcon2,
  scheduleDate,
  scheduleTime,
  scheduleLocation,
}: EventHeroProps) => {
  // Get theme if themeKey provided
  const theme = themeKey ? eventThemes[themeKey] : null;
  
  // Determine background
  const bgStyle = theme 
    ? { background: theme.bg }
    : { background: gradient || DEFAULT_GRADIENT };
  
  // Determine schedule info
  const date = scheduleDate || theme?.schedule.date;
  const time = scheduleTime || theme?.schedule.time;
  const location = scheduleLocation || theme?.schedule.location;

  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={bgStyle}
      />
      
      {/* Texture overlay for themed pages */}
      {theme && (
        <div 
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at top, rgba(255,255,255,0.9), transparent 60%),
              radial-gradient(circle at bottom, rgba(255,255,255,0.8), transparent 55%)
            `,
            mixBlendMode: 'soft-light'
          }}
        />
      )}
      
      {/* Decorative Elements - Blurred Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-yellow-300 rounded-full blur-3xl"
        />
        
        {/* Optional Decorative Icons (for non-themed pages) */}
        {!theme && DecorativeIcon && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            transition={{ duration: 1 }}
            className="absolute top-10 right-10 md:top-16 md:right-16"
          >
            <DecorativeIcon className="w-24 h-24 md:w-32 md:h-32 text-white" />
          </motion.div>
        )}
        {!theme && DecorativeIcon2 && (
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
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Left text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-xl"
          >
            {/* Eyebrow Badge */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={`inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm text-sm font-semibold rounded-full mb-6 ${
                theme 
                  ? 'bg-white/70 text-neutral-800 border border-white/50' 
                  : 'bg-white/20 text-white'
              }`}
            >
              {EyebrowIcon && <EyebrowIcon size={16} />}
              {eyebrow}
            </motion.span>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight ${
                theme ? 'text-neutral-900' : 'text-white'
              }`}
            >
              {title}
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-lg md:text-xl leading-relaxed mb-6 ${
                theme ? 'text-neutral-700' : 'text-white/90'
              }`}
            >
              {description}
            </motion.p>

            {/* Schedule mini strip */}
            {(date || time || location) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap gap-3 items-center text-xs md:text-sm"
              >
                {date && (
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm ${
                    theme ? 'bg-white/80 text-neutral-800' : 'bg-white/20 text-white'
                  }`}>
                    <Calendar size={14} className={theme ? 'text-emerald-600' : 'text-white'} />
                    {date}
                  </span>
                )}
                {time && (
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
                    theme ? 'bg-white/70 text-neutral-700' : 'bg-white/15 text-white/90'
                  }`}>
                    <Clock size={14} />
                    {time}
                  </span>
                )}
                {location && (
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${
                    theme ? 'bg-white/70 text-neutral-700' : 'bg-white/15 text-white/90'
                  }`}>
                    <MapPin size={14} />
                    {location}
                  </span>
                )}
              </motion.div>
            )}
          </motion.div>

          {/* Right side image - only for themed pages */}
          {theme && theme.image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex-1 flex justify-center md:justify-end"
            >
              <div className="relative w-64 md:w-80 aspect-square">
                {/* Glow effect behind image */}
                <div 
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${theme.accent} opacity-50 blur-3xl`}
                />
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden border border-white/60 shadow-xl bg-white/60 backdrop-blur-md h-full">
                  <img
                    src={theme.image}
                    alt={title}
                    className="w-full h-full object-contain p-6 md:p-8"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
