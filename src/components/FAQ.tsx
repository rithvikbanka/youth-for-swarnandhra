import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQItem = ({ question, answer, index, isOpen, onToggle }: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="overflow-hidden"
    >
      <button
        onClick={onToggle}
        className={`faq-trigger ${isOpen ? "" : "rounded-lg"}`}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="faq-content">
          <p className="leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t, locale } = useLanguage();

  // FAQ data with translations
  const faqs = locale === 'te' ? [
    {
      question: "పాల్గొనేవారికి వయస్సు అర్హత ఏమిటి?",
      answer: "ఉత్సవం ఆంధ్ర ప్రదేశ్ అంతటి నుండి 13-30 వయస్సు గల యువతను స్వాగతిస్తుంది. అన్ని నైపుణ్య స్థాయిలు ప్రోత్సహించబడతాయి!",
    },
    {
      question: "నమోదు ఉచితమా?",
      answer: "అవును, నమోదు పూర్తిగా ఉచితం. నమోదైన పాల్గొనేవారికి అన్ని ఈవెంట్‌లు తెరిచి ఉన్నాయి.",
    },
    {
      question: "నేను బహుళ విభాగాలలో పాల్గొనవచ్చా?",
      answer: "ఖచ్చితంగా! నమోదు సమయంలో మీరు 3 ఈవెంట్ విభాగాల వరకు ఎంచుకోవచ్చు.",
    },
    {
      question: "ఉత్సవం ఎక్కడ నిర్వహించబడుతోంది?",
      answer: "ఉత్సవం కేఎల్ యూనివర్సిటీ, వడ్డేశ్వరం వద్ద నిర్వహించబడుతుంది.",
    },
    {
      question: "నాకు వసతి లేదా ప్రత్యేక యాక్సెస్ అవసరమైతే ఏమి చేయాలి?",
      answer: "ఈ ఉత్సవాన్ని అందరికీ అందుబాటులో ఉంచడానికి మేము కట్టుబడి ఉన్నాము. దయచేసి apstateyouthfestival@gmail.com వద్ద మమ్మల్ని సంప్రదించండి.",
    },
  ] : [
    {
      question: "What is the age eligibility for participants?",
      answer: "The festival welcomes youth aged 13-30 from all across Andhra Pradesh. All skill levels are encouraged! Whether you're a beginner or an experienced performer, there's a place for you at Swarnandhra 2047.",
    },
    {
      question: "Is registration free?",
      answer: "Yes, registration is completely free. All events are open to registered participants. We believe in making cultural celebration accessible to everyone.",
    },
    {
      question: "Can I participate in multiple categories?",
      answer: "Absolutely! You can select up to 3 event categories during registration. Schedules are designed to allow participation across categories, so you can showcase your talents in multiple areas.",
    },
    {
      question: "Where is the festival being held?",
      answer: "The festival is being held at K L University, Vaddeswaram. Venue details will be sent to your registered email 7 days before the event.",
    },
    {
      question: "What if I need accommodations or special access?",
      answer: "We're committed to making this festival accessible to everyone. Please email us at apstateyouthfestival@gmail.com and we'll help with your specific needs, including wheelchair access, sign language interpretation, or other accommodations.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            {locale === 'te' ? 'ప్రశ్నలు ఉన్నాయా?' : 'Got Questions?'}
          </span>
          <h2 className="section-title flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            {t('faq.title', 'Frequently Asked Questions')}
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10 md:mt-12 p-6 bg-card rounded-2xl"
        >
          <p className="text-muted-foreground mb-2">
            {locale === 'te' ? 'ఇంకా ప్రశ్నలు ఉన్నాయా?' : 'Still have questions?'}
          </p>
          <a
            href="mailto:apstateyouthfestival@gmail.com"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Mail size={18} />
            {locale === 'te' ? 'apstateyouthfestival@gmail.com వద్ద మమ్మల్ని సంప్రదించండి' : 'Contact us at apstateyouthfestival@gmail.com'}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
