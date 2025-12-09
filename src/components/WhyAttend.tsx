import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const CountUpNumber = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const WhyAttend = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    eyebrow: "పెద్ద దానిలో భాగం అవ్వండి",
    title: "మాతో ఎందుకు చేరాలి?",
    stats: [
      { value: 2000, suffix: "+", label: "ఆంధ్ర అంతటా యువ పాల్గొనేవారు", color: "text-primary" },
      { value: 50, suffix: "+", label: "ఈవెంట్‌లు & ప్రదర్శనలు", color: "text-accent" },
      { value: 26, suffix: "", label: "జిల్లాల ప్రాతినిధ్యం", color: "text-festival-gold" },
    ],
    testimonials: [
      {
        quote: "ఈ ఉత్సవం నా సామర్థ్యాన్ని ఒక కళాకారుడిగా చూసే విధానాన్ని మార్చింది. ఆంధ్ర అంతటా యువత నుండి వచ్చిన శక్తి నిజంగా స్ఫూర్తిదాయకంగా ఉంది.",
        author: "ప్రియ రెడ్డి",
        role: "భరతనాట్య నర్తకి",
        location: "విశాఖపట్నం",
      },
      {
        quote: "వివిధ జిల్లాల నుండి యువ ఆవిష్కర్తలను కలవడం మన రాష్ట్రంలో అద్భుతమైన ప్రతిభను చూడడానికి నా కళ్ళు తెరిచింది.",
        author: "అర్జున్ కుమార్",
        role: "స్టార్టప్ వ్యవస్థాపకుడు",
        location: "విజయవాడ",
      },
    ]
  } : {
    eyebrow: "Be Part of Something Big",
    title: "Why Join Us?",
    stats: [
      { value: 2000, suffix: "+", label: "Youth Participants from Across Andhra", color: "text-primary" },
      { value: 50, suffix: "+", label: "Events & Performances", color: "text-accent" },
      { value: 26, suffix: "", label: "Districts Represented", color: "text-festival-gold" },
    ],
    testimonials: [
      {
        quote: "This festival changed how I see my potential as an artist. The energy from youth across Andhra was truly inspiring.",
        author: "Priya Reddy",
        role: "Bharatanatyam Dancer",
        location: "Visakhapatnam",
      },
      {
        quote: "Meeting young innovators from different districts opened my eyes to the incredible talent in our state.",
        author: "Arjun Kumar",
        role: "Startup Founder",
        location: "Vijayawada",
      },
    ]
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            {content.eyebrow}
          </span>
          <h2 className="section-title">{content.title}</h2>
        </motion.div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
          {content.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-8 bg-card rounded-2xl hover:bg-festival-gold-light transition-colors duration-300"
            >
              <div className={`stat-number ${stat.color} mb-2`}>
                <CountUpNumber value={stat.value} suffix={stat.suffix} isInView={isStatsInView} />
              </div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          {content.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={isSectionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="relative bg-card p-6 md:p-8 rounded-2xl border-l-4 border-l-primary"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-festival-gold text-festival-gold" />
                ))}
              </div>
              <p className="text-foreground text-lg mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
