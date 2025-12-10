import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Mail, HelpCircle } from "lucide-react";

const FAQItem = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string | JSX.Element;
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

  // FAQ data - NEW as per prompt
  const faqs = [
    {
      question: "Who can participate in the festival?",
      answer:
        "Youth aged 15–29 with a connection to Andhra Pradesh can participate.",
    },
    {
      question: "Is there any registration fee?",
      answer: "No. Participation is completely free.",
    },
    {
      question: "Will accommodation and food be provided?",
      answer:
        "Accommodation and food is to be arranged by participants. There will be food stalls and a canteen at the venue.",
    },
    {
      question: "Can I attend even if I’m not selected for special roles?",
      answer:
        "Yes! Many parts of the festival are open to all registered youth, including the Youth Changemaker Talks, Youth CON, Youth Impact Labs, Carnival Parade, Talent Carnival, Art Wall, exhibitions, and several sessions.",
    },
    {
      question: "What should I bring to the festival?",
      answer:
        "Any Govt./College ID, water bottle, notebook/pen, your creativity & energy!",
    },
    {
      question: "Can school students participate?",
      answer: "Yes, students aged 15 and above can join.",
    },
    {
      question: "Will I get to meet speakers and mentors?",
      answer:
        "Yes. Networking sessions, meetups, speed mentoring, and Youth Con interactions allow direct engagement with speakers, industry leaders, and global achievers.",
    },
    {
      question: "I’m not from Vijayawada. Can I still participate?",
      answer: "Absolutely. Youth from all districts are encouraged and supported.",
    },
    {
      question: "Do I need prior experience to participate?",
      answer: (
        <>
          <span>
            No prior experience is required for most segments.<br />
            Some roles (like Reporter, Creator Squad, Yuvasrishti Fellows, organisers) require selection through an application.
          </span>
        </>
      ),
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
            Still have questions?
          </p>
          <a
            href="mailto:apstateyouthfestival@gmail.com"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            <Mail size={18} />
            Contact us at apstateyouthfestival@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};
