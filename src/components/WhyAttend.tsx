import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const stats = [
  { value: 2000, suffix: "+", label: "Youth Participants from Across Andhra", color: "text-primary" },
  { value: 50, suffix: "+", label: "Events & Performances", color: "text-accent" },
  { value: 13, suffix: "", label: "Districts Represented", color: "text-festival-gold" },
];

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

const testimonials = [
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
];

const partnerLogos = [
  { name: "Govt. of Andhra Pradesh", abbr: "AP" },
  { name: "Dept. of Youth Services", abbr: "DYS" },
  { name: "Cultural Affairs", abbr: "CA" },
  { name: "Education Dept.", abbr: "ED" },
];

export const WhyAttend = () => {
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
            Be Part of Something Big
          </span>
          <h2 className="section-title">Why Join Us?</h2>
        </motion.div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24">
          {stats.map((stat, index) => (
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
          {testimonials.map((testimonial, index) => (
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

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isSectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">
            Organized By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner) => (
              <motion.div
                key={partner.name}
                className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
                whileHover={{ y: -2 }}
              >
                <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center text-foreground font-bold text-lg">
                  {partner.abbr}
                </div>
                <span className="text-xs text-muted-foreground">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
