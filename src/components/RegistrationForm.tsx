import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";
import { useLanguage } from "@/i18n/LanguageContext";

const openRegistrationForm = () => {
  window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
};

export const RegistrationForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    eyebrow: "ఉత్సవంలో చేరండి",
    title: "YUVA 2025 కోసం నమోదు చేయండి",
    subtitle: "ఆంధ్ర ప్రదేశ్ అంతటి వేలమంది యువతతో చేరండి. స్వర్ణాంధ్ర భవిష్యత్తులో భాగం అవ్వండి.",
    cardTitle: "YUVA 2025 లో భాగం కావడానికి సిద్ధంగా ఉన్నారా?",
    cardDescription: "ఆంధ్ర ప్రదేశ్ రాష్ట్ర యువ ఉత్సవంలో మీ స్థానాన్ని భద్రపరచడానికి మా నమోదు ఫారమ్‌ను పూరించండి. మీకు ఇష్టమైన ఈవెంట్‌లను ఎంచుకుని రాష్ట్రం అంతటా యువ నాయకులతో కనెక్ట్ అవ్వండి.",
    button: "🎉 ఇప్పుడు నమోదు చేయండి",
    note: "నమోదు ఉచితం మరియు ఆంధ్ర ప్రదేశ్ నుండి అన్ని యువతకు తెరిచి ఉంది"
  } : {
    eyebrow: "Join the Festival",
    title: "Register for YUVA 2025",
    subtitle: "Join thousands of youth from across Andhra Pradesh. Be part of Swarnandhra's future.",
    cardTitle: "Ready to be part of YUVA 2025?",
    cardDescription: "Fill out our registration form to secure your spot at the Andhra Pradesh State Youth Festival. Choose your preferred events and connect with youth leaders across the state.",
    button: "🎉 Register Now",
    note: "Registration is free and open to all youth from Andhra Pradesh"
  };

  return (
    <section id="register" className="section-padding bg-gradient-warm pattern-rangoli">
      <div className="container mx-auto max-w-2xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            {content.eyebrow}
          </span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle mx-auto">
            {content.subtitle}
          </p>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-card p-8 md:p-12 text-center"
          >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <span className="text-6xl">🎉</span>
          </motion.div>

          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
            {content.cardTitle}
          </h3>
          
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            {content.cardDescription}
          </p>

          <motion.button
            onClick={openRegistrationForm}
            className="btn-hero group inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
                >
            {content.button}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <p className="mt-6 text-sm text-muted-foreground">
            {content.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
