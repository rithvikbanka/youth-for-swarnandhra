import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { 
  Mic, 
  Music, 
  Sparkles,
  Star,
  Users,
  Trophy,
  Zap,
  PartyPopper
} from "lucide-react";

const experiences = [
  {
    icon: Mic,
    title: "Open Mic Stage",
    description: "Take the spotlight and perform your heart out in front of an enthusiastic crowd. Every voice matters!",
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    icon: Music,
    title: "Live Music & Dance",
    description: "From classical to contemporary, showcase your musical talents and dance moves that set the stage on fire.",
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    icon: Sparkles,
    title: "Poetry & Storytelling",
    description: "Words have power. Share your stories, poems, and spoken word pieces that inspire and move audiences.",
    color: "text-purple-500",
    bg: "bg-purple-100"
  },
  {
    icon: Zap,
    title: "Stand-up & Beatbox",
    description: "Make them laugh, make them groove! Comedians and beatboxers bring unique energy to the carnival.",
    color: "text-festival-gold",
    bg: "bg-festival-gold/10"
  }
];

const whyLoveIt = [
  {
    icon: Star,
    title: "Zero Judgment Zone",
    description: "A supportive environment where every performance is celebrated, regardless of experience level."
  },
  {
    icon: Users,
    title: "Connect with Fellow Artists",
    description: "Meet like-minded creative souls from across Andhra Pradesh and build lasting connections."
  },
  {
    icon: Trophy,
    title: "Recognition & Prizes",
    description: "Outstanding performers get recognized with awards, certificates, and exciting prizes."
  },
  {
    icon: PartyPopper,
    title: "Unforgettable Experience",
    description: "Create memories that last a lifetime in the most energetic festival atmosphere."
  }
];

const howToParticipate = [
  "Register online through the YUVA portal",
  "Select your performance category (music, poetry, stand-up, etc.)",
  "Prepare your act (2-5 minutes)",
  "Arrive at the venue on your scheduled day",
  "Perform and shine! 🌟"
];

const YouthTalentCarnival = () => {
  const experienceRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);
  
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isHowInView = useInView(howRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        eyebrow="Your Voice. Your Moment."
        eyebrowIcon={Mic}
        title="Youth Talent Carnival"
        description="The most energetic stage of the festival—an open mic arena where you perform music, poetry, dance, stand-up, storytelling, beatboxing, monologues, or anything that reflects your creative spark."
        decorativeIcon={Mic}
        decorativeIcon2={Music}
      />

      {/* What You'll Experience */}
      <section ref={experienceRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              The Experience
            </span>
            <h2 className="section-title">What You'll Experience</h2>
            <p className="section-subtitle mx-auto">
              A celebration of raw talent, creativity, and the boundless energy of youth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-xl transition-all duration-300 flex gap-5"
              >
                <div className={`w-14 h-14 ${exp.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <exp.icon className={`w-7 h-7 ${exp.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why You'll Love It */}
      <section ref={whyRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              The Magic
            </span>
            <h2 className="section-title">Why You'll Love It</h2>
            <p className="section-subtitle mx-auto">
              More than just a stage—it's where dreams take flight.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLoveIt.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section ref={howRef} className="section-padding bg-gradient-to-br from-festival-gold-light to-festival-offwhite">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHowInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                Join The Stage
              </span>
              <h2 className="section-title">How to Participate</h2>
            </motion.div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card">
              <div className="space-y-4">
                {howToParticipate.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isHowInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default YouthTalentCarnival;
