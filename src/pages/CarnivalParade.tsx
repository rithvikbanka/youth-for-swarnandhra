import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { 
  Flag, 
  Music, 
  Users, 
  Sparkles,
  Heart,
  Star,
  Drum,
  PartyPopper
} from "lucide-react";

const experiences = [
  {
    icon: Flag,
    title: "26 District Contingents",
    description: "Each district brings its unique culture, costumes, and traditions to the parade, creating a tapestry of Andhra's diversity."
  },
  {
    icon: Music,
    title: "Live Music & Bands",
    description: "Marching bands, folk musicians, and contemporary artists create an electrifying soundtrack for the parade."
  },
  {
    icon: Drum,
    title: "Traditional Performances",
    description: "Watch spectacular folk dances, martial arts displays, and traditional performances as contingents march by."
  },
  {
    icon: PartyPopper,
    title: "Floats & Decorations",
    description: "Elaborately decorated floats representing each district's heritage, achievements, and aspirations."
  }
];

const celebrates = [
  {
    icon: Heart,
    title: "Unity in Diversity",
    description: "26 districts, one spirit—celebrating the rich tapestry of Andhra Pradesh's cultural heritage."
  },
  {
    icon: Users,
    title: "Youth Pride",
    description: "A showcase of young talent, energy, and the future leaders of our state."
  },
  {
    icon: Star,
    title: "Cultural Heritage",
    description: "Traditional arts, crafts, music, and dance that define our identity."
  },
  {
    icon: Sparkles,
    title: "Innovation & Progress",
    description: "Blending tradition with modernity, showcasing Andhra's journey towards Swarnandhra 2047."
  }
];

const timeline = [
  {
    time: "3:00 PM",
    title: "Assembly",
    description: "All contingents gather at designated starting points"
  },
  {
    time: "4:00 PM",
    title: "Parade Begins",
    description: "The grand march starts with the flag contingent"
  },
  {
    time: "4:30 PM",
    title: "District Showcase",
    description: "Each district presents their cultural floats and performances"
  },
  {
    time: "6:00 PM",
    title: "Grand Finale",
    description: "All contingents unite for the closing ceremony at the main stage"
  }
];

const CarnivalParade = () => {
  const experienceRef = useRef(null);
  const celebrateRef = useRef(null);
  const timelineRef = useRef(null);
  
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const isCelebrateInView = useInView(celebrateRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        eyebrow="26 Districts. One Andhra. One Youth."
        eyebrowIcon={Flag}
        title="Carnival Parade"
        description="The grand opening of YUVA 2025—a colourful explosion of music, movement, identity, and youth pride as 26 district contingents march through the festival arena."
        decorativeIcon={Flag}
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
              The Grand Spectacle
            </span>
            <h2 className="section-title">You'll Experience</h2>
            <p className="section-subtitle mx-auto">
              A feast for the senses as Andhra Pradesh's youth showcase their heritage and pride.
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
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <exp.icon className="w-7 h-7 text-white" />
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

      {/* What the Parade Celebrates */}
      <section ref={celebrateRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isCelebrateInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              The Spirit
            </span>
            <h2 className="section-title">The Parade Celebrates</h2>
            <p className="section-subtitle mx-auto">
              More than a march—it's a celebration of everything that makes us proud to be Andhra.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {celebrates.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isCelebrateInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-festival-gold-light to-white rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-card flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary" />
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

      {/* Parade Timeline */}
      <section ref={timelineRef} className="section-padding bg-gradient-to-br from-yellow-50 to-red-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Parade Day
            </span>
            <h2 className="section-title">Event Timeline</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative flex gap-6 mb-8 last:mb-0"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-16 h-16 bg-white rounded-full shadow-card items-center justify-center flex-shrink-0 z-10">
                    <span className="text-primary font-bold text-sm">{item.time}</span>
                  </div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-card">
                    <span className="md:hidden text-primary font-bold text-sm block mb-2">{item.time}</span>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CarnivalParade;
