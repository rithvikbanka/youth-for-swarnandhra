import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";

const faqs = [
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
    answer: "The festival spans across venues in Vijayawada and Amaravati. Venue details will be sent to your registered email 7 days before the event. Transportation information between venues will also be provided.",
  },
  {
    question: "What if I need accommodations or special access?",
    answer: "We're committed to making this festival accessible to everyone. Please email us at accessibility@apyouthfest2025.gov.in and we'll help with your specific needs, including wheelchair access, sign language interpretation, or other accommodations.",
  },
];

const FAQItem = ({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
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
        <span className="pr-4">{faq.question}</span>
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
          <p className="leading-relaxed">{faq.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Got Questions?
          </span>
          <h2 className="section-title flex items-center justify-center gap-3">
            <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
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
          <p className="text-muted-foreground mb-2">Still have questions?</p>
          <a
            href="mailto:hello@apyouthfest2025.gov.in"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Mail size={18} />
            Contact us at hello@apyouthfest2025.gov.in
          </a>
        </motion.div>
      </div>
    </section>
  );
};
