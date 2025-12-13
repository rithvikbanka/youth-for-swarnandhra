import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const TransformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const eventButtons = [
    {
      id: "yct",
      titleKey: "events.youthChangemakerTalks.title",
      descKey: "events.youthChangemakerTalks.subtitle",
      fallbackTitle: "Youth Changemaker Talks",
      fallbackDesc: "Green Innovation, Thought Leadership, Future of Work, Wellness & Swarnandhra",
      href: "/event/youth-changemaker-talks",
      gradient: "from-blue-500/10 to-blue-600/10",
      borderColor: "border-blue-200",
      hoverBg: "hover:border-blue-400",
    },
    {
      id: "youthcon",
      titleKey: "events.youthCon.title",
      descKey: "events.youthCon.subtitle",
      fallbackTitle: "Youth CON",
      fallbackDesc: "Speed Mentoring, Speed Networking, Table Lunches & Meetups",
      href: "/event/youth-con",
      gradient: "from-purple-500/10 to-purple-600/10",
      borderColor: "border-purple-200",
      hoverBg: "hover:border-purple-400",
    },
    {
      id: "impact",
      titleKey: "events.youthImpactLabs.title",
      descKey: "events.youthImpactLabs.subtitle",
      fallbackTitle: "Youth Impact Labs",
      fallbackDesc: "Social Hackathons on UN SDGs and Innovation & Entrepreneurship",
      href: "/event/youth-impact-labs",
      gradient: "from-green-500/10 to-green-600/10",
      borderColor: "border-green-200",
      hoverBg: "hover:border-green-400",
    },
    {
      id: "radio",
      titleKey: "events.andhraYouthRadio.title",
      descKey: "events.andhraYouthRadio.subtitle",
      fallbackTitle: "Youth Radio Andhra",
      fallbackDesc: "Amplify youth voices — broadcast live, interview artists, create powerful radio content",
      href: "/event/andhra-youth-radio",
      gradient: "from-cyan-500/10 to-blue-600/10",
      borderColor: "border-cyan-200",
      hoverBg: "hover:border-cyan-400",
    },
    {
      id: "diaspora",
      titleKey: "events.globalDiaspora.title",
      descKey: "events.globalDiaspora.subtitle",
      fallbackTitle: "Global Diaspora Connect",
      fallbackDesc: "Where Andhra meets the world — connect with global achievers, innovators, and professionals",
      href: "/event/global-diaspora",
      gradient: "from-indigo-500/10 to-blue-600/10",
      borderColor: "border-indigo-200",
      hoverBg: "hover:border-indigo-400",
    },
    {
      id: "talent",
      titleKey: "events.talentCarnival.title",
      descKey: "events.talentCarnival.subtitle",
      fallbackTitle: "Talent Carnival",
      fallbackDesc: "Open Mic, Poetry, Music, Dance, Stand-up Comedy & Beatboxing",
      href: "/other-events/youth-talent-carnival",
      gradient: "from-orange-500/10 to-orange-600/10",
      borderColor: "border-orange-200",
      hoverBg: "hover:border-orange-400",
    },
    {
      id: "sankalp",
      titleKey: "events.andhraYuvaSankalp.title",
      descKey: "events.andhraYuvaSankalp.subtitle",
      fallbackTitle: "Andhra Yuva Sankalp",
      fallbackDesc: "Social media moments, viral content, and youth engagement highlights",
      href: "/other-events/andhra-yuva-sankalp",
      gradient: "from-orange-500/10 to-red-600/10",
      borderColor: "border-orange-200",
      hoverBg: "hover:border-orange-400",
    },
  ];

  return (
    <section 
      id="transform-section"
      className="section-padding border-y border-[#f0d7c9]"
      style={{
        background: `
          radial-gradient(circle at top, rgba(255,200,200,0.45), transparent 55%),
          radial-gradient(circle at bottom, rgba(200,220,255,0.5), transparent 60%),
          #fff7f2
        `
      }}
    >
      <div className="container mx-auto">
        {/* Eyebrow & Headline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            {t('transform.eyebrow', 'Join. Express. Network. Learn. Collaborate.')}
          </p>
          <h2 className="section-title">{t('transform.title', 'Transform Yourself Here')}</h2>
          <p className="section-subtitle mx-auto">
            {t('transform.subtitle', 'A world you have never seen. A place you have never been.')}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventButtons.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={event.href}>
                <div
                  className={`group relative h-full p-6 rounded-xl border-2 ${event.borderColor} bg-gradient-to-br ${event.gradient} ${event.hoverBg} hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm`}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-primary/10" />

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                      {t(event.titleKey, event.fallbackTitle)}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {t(event.descKey, event.fallbackDesc).substring(0, 100)}...
                    </p>

                    {/* Arrow Button */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      {t('transform.explore', 'Explore')} <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
