import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import heroDancer from "@/assets/hero-dancer.webp";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackRegistrationClick } from "@/lib/analytics";

// Set countdown timer target to December 18, 2025
const targetDate = new Date("2025-12-18T00:00:00").getTime();

const CountdownTimer = () => {
  const { t } = useLanguage();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const labels: Record<string, string> = {
    days: t('countdown.days', 'DAYS'),
    hours: t('countdown.hours', 'HOURS'),
    minutes: t('countdown.minutes', 'MINUTES'),
    seconds: t('countdown.seconds', 'SECONDS'),
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 md:gap-4">
      {Object.entries(timeLeft).map(([key, value]) => (
        <motion.div
          key={key}
          className="countdown-box"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.8 }}
        >
          <motion.span
            key={value}
            className="countdown-number"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {String(value).padStart(2, "0")}
          </motion.span>
          <span className="countdown-label">{labels[key]}</span>
        </motion.div>
      ))}
    </div>
  );
};

export const Hero = () => {
  const { t } = useLanguage();
  
  const openRegistrationForm = () => {
    trackRegistrationClick('hero_section');
    window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
  };

  const scrollToEvents = () => {
    const element = document.getElementById("transform-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroDancer}
          alt="Classical Bharatanatyam dancer performing"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Additional dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 right-10 w-32 h-32 opacity-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-festival-yellow">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20 pb-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* LEFT SIDE: Text Content */}
          <div className="flex-1 max-w-3xl lg:max-w-2xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-festival-yellow rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                {t('hero.badge', 'Andhra Pradesh State Youth Festival 2025')}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight mb-4"
            >
              {t('hero.title', 'Youth for')}{" "}
              <span className="text-gradient-gold">{t('hero.highlight', 'Swarnandhra')}</span>{" "}
              {t('hero.year', '2047')}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 font-light mb-6"
            >
              {t('hero.subtitle', 'Lead. Create. Celebrate.')}
            </motion.p>

            {/* Info Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
                <Users size={16} />
                <span>{t('hero.participants', '2000+ Youth Participants')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
                <Calendar size={16} />
                <span>{t('hero.dates', '18, 19, 20 December 2025')}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm">
                <MapPin size={16} />
                <a
                  href="https://maps.app.goo.gl/Gi8e5ziY1eWZaqtd7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus:outline-none"
                >
                  {t('hero.location', 'K L University, Vaddeswaram, Andhra Pradesh')}
                </a>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={openRegistrationForm}
                className="btn-hero group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.registerNow', 'Register Now')}
                <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={20} />
              </motion.button>
              <motion.button
                onClick={scrollToEvents}
                className="btn-hero-outline"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('hero.exploreEvents', 'Explore Events')}
              </motion.button>
            </motion.div>

            {/* Countdown Timer - COMMENTED OUT (Festival has started)
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <p className="text-white/70 text-sm mb-3 uppercase tracking-wider">
                {t('hero.countdown', 'Festival Begins In')}
              </p>
              <CountdownTimer />
            </motion.div>
            */}
          </div>

          {/* RIGHT SIDE: Hero Image - CM Chandrababu Naidu */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:flex flex-1 items-end justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-2xl xl:max-w-3xl">
              {/* Decorative glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-t from-festival-gold/20 via-transparent to-transparent blur-3xl scale-110" />
              
              {/* Hero Image */}
              <motion.img
                src="/eventpages/hero.webp"
                alt="Hon'ble Chief Minister Shri Nara Chandrababu Naidu Garu"
                className="relative w-full h-auto object-contain drop-shadow-2xl"
                loading="eager"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))',
                  maxHeight: '850px', // Increased from 600px
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Optional: Floating badge/label */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2"
              >
                <span className="text-white/90 text-xs font-medium whitespace-nowrap">
                  🇮🇳 Vision for Swarnandhra 2047
                </span>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Hero Image - Shows below content on smaller screens */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="lg:hidden relative z-10 px-4 pb-8"
      >
        <div className="relative max-w-lg mx-auto">
          <motion.img
            src="/eventpages/hero.webp"
            alt="Hon'ble Chief Minister Shri Nara Chandrababu Naidu Garu"
            className="w-full h-auto object-contain drop-shadow-xl"
            loading="eager"
            style={{
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.3))',
              maxHeight: '600px', // Increased from 400px
            }}
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
