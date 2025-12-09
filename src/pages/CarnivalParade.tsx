import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { useLanguage } from "@/i18n/LanguageContext";
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

const CarnivalParade = () => {
  const experienceRef = useRef(null);
  const celebrateRef = useRef(null);
  const timelineRef = useRef(null);
  
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const isCelebrateInView = useInView(celebrateRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    title: "కార్నివల్ పరేడ్",
    subtitle: "గర్వంతో కూడిన ఉత్సాహభరితమైన నడక — సంగీతం, శక్తి, జెండాలు మరియు యువ స్ఫూర్తితో 26 జిల్లాలను ప్రతినిధి. పూర్తి రంగు, ఐక్యత మరియు ఆనందంతో YUVA 2025 ప్రారంభం. మార్చ్‌లో భాగం అవ్వండి. ఉద్యమంలో భాగం అవ్వండి.",
    date: "18 డిసెంబర్ 2025",
    time: "మ. 3 - సా. 6",
    location: "విజయవాడ, ఆంధ్ర ప్రదేశ్",
    sectionEyebrow: "గొప్ప దృశ్యం",
    sectionTitle: "మీరు అనుభవిస్తారు",
    sectionSubtitle: "ఆంధ్ర ప్రదేశ్ యువత వారి వారసత్వం మరియు గర్వాన్ని ప్రదర్శించే ఇంద్రియాలకు విందు.",
    spiritEyebrow: "ఆత్మ",
    spiritTitle: "పరేడ్ జరుపుకుంటుంది",
    spiritSubtitle: "కేవలం మార్చ్ కాదు—మనల్ని ఆంధ్రా అని గర్వంగా చెప్పుకునేలా చేసే అన్నిటిని జరుపుకోవడం.",
    timelineEyebrow: "పరేడ్ రోజు",
    timelineTitle: "ఈవెంట్ టైమ్‌లైన్",
    experiences: [
      { title: "26 జిల్లా బృందాలు", description: "ప్రతి జిల్లా తమ ప్రత్యేక సంస్కృతి, వేషధారణలు మరియు సంప్రదాయాలను పరేడ్‌కు తీసుకువస్తుంది, ఆంధ్ర వైవిధ్యంలో వస్త్రాన్ని సృష్టిస్తుంది." },
      { title: "ప్రత్యక్ష సంగీతం & బ్యాండ్లు", description: "మార్చింగ్ బ్యాండ్లు, జానపద సంగీతకారులు మరియు సమకాలీన కళాకారులు పరేడ్ కోసం విద్యుత్ ధ్వనిని సృష్టిస్తారు." },
      { title: "సాంప్రదాయ ప్రదర్శనలు", description: "బృందాలు వెళ్ళేటప్పుడు అద్భుతమైన జానపద నృత్యాలు, మార్షల్ ఆర్ట్స్ ప్రదర్శనలు మరియు సాంప్రదాయ ప్రదర్శనలను చూడండి." },
      { title: "ఫ్లోట్‌లు & అలంకరణలు", description: "ప్రతి జిల్లా వారసత్వం, విజయాలు మరియు ఆకాంక్షలను ప్రతినిధించే విస్తృతంగా అలంకరించబడిన ఫ్లోట్‌లు." }
    ],
    celebrates: [
      { title: "వైవిధ్యంలో ఐక్యత", description: "26 జిల్లాలు, ఒక స్ఫూర్తి—ఆంధ్ర ప్రదేశ్ సాంస్కృతిక వారసత్వం యొక్క సంపన్న వస్త్రాన్ని జరుపుకోవడం." },
      { title: "యువ గర్వం", description: "యువ ప్రతిభ, శక్తి మరియు మన రాష్ట్ర భవిష్యత్ నాయకుల ప్రదర్శన." },
      { title: "సాంస్కృతిక వారసత్వం", description: "మన గుర్తింపును నిర్వచించే సాంప్రదాయ కళలు, చేతిపనులు, సంగీతం మరియు నృత్యం." },
      { title: "ఆవిష్కరణ & ప్రగతి", description: "సంప్రదాయాన్ని ఆధునికతతో మిళితం చేయడం, స్వర్ణాంధ్ర 2047 వైపు ఆంధ్ర ప్రయాణాన్ని ప్రదర్శించడం." }
    ],
    timeline: [
      { time: "మ. 3:00", title: "సమావేశం", description: "అన్ని బృందాలు నిర్దేశిత ప్రారంభ స్థానాల్లో సమావేశమవుతాయి" },
      { time: "మ. 4:00", title: "పరేడ్ ప్రారంభం", description: "జెండా బృందంతో గొప్ప మార్చ్ ప్రారంభమవుతుంది" },
      { time: "మ. 4:30", title: "జిల్లా ప్రదర్శన", description: "ప్రతి జిల్లా వారి సాంస్కృతిక ఫ్లోట్లు మరియు ప్రదర్శనలను అందిస్తుంది" },
      { time: "సా. 6:00", title: "గొప్ప ముగింపు", description: "ప్రధాన వేదికపై ముగింపు వేడుక కోసం అన్ని బృందాలు ఐక్యమవుతాయి" }
    ]
  } : {
    title: "Carnival Parade",
    subtitle: "A vibrant walk of pride — representing 26 districts, with music, energy, flags and youth spirit. It's the opening of YUVA 2025 in full colour, unity and joy. Be part of the march. Be part of the movement.",
    date: "18 December 2025",
    time: "3 PM - 6 PM",
    location: "Vijayawada, Andhra Pradesh",
    sectionEyebrow: "The Grand Spectacle",
    sectionTitle: "You'll Experience",
    sectionSubtitle: "A feast for the senses as Andhra Pradesh's youth showcase their heritage and pride.",
    spiritEyebrow: "The Spirit",
    spiritTitle: "The Parade Celebrates",
    spiritSubtitle: "More than a march—it's a celebration of everything that makes us proud to be Andhra.",
    timelineEyebrow: "Parade Day",
    timelineTitle: "Event Timeline",
    experiences: [
      { title: "26 District Contingents", description: "Each district brings its unique culture, costumes, and traditions to the parade, creating a tapestry of Andhra's diversity." },
      { title: "Live Music & Bands", description: "Marching bands, folk musicians, and contemporary artists create an electrifying soundtrack for the parade." },
      { title: "Traditional Performances", description: "Watch spectacular folk dances, martial arts displays, and traditional performances as contingents march by." },
      { title: "Floats & Decorations", description: "Elaborately decorated floats representing each district's heritage, achievements, and aspirations." }
    ],
    celebrates: [
      { title: "Unity in Diversity", description: "26 districts, one spirit—celebrating the rich tapestry of Andhra Pradesh's cultural heritage." },
      { title: "Youth Pride", description: "A showcase of young talent, energy, and the future leaders of our state." },
      { title: "Cultural Heritage", description: "Traditional arts, crafts, music, and dance that define our identity." },
      { title: "Innovation & Progress", description: "Blending tradition with modernity, showcasing Andhra's journey towards Swarnandhra 2047." }
    ],
    timeline: [
      { time: "3:00 PM", title: "Assembly", description: "All contingents gather at designated starting points" },
      { time: "4:00 PM", title: "Parade Begins", description: "The grand march starts with the flag contingent" },
      { time: "4:30 PM", title: "District Showcase", description: "Each district presents their cultural floats and performances" },
      { time: "6:00 PM", title: "Grand Finale", description: "All contingents unite for the closing ceremony at the main stage" }
    ]
  };

  const experienceIcons = [Flag, Music, Drum, PartyPopper];
  const celebrateIcons = [Heart, Users, Star, Sparkles];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="carnival-parade"
        title={content.title}
        subtitle={content.subtitle}
        imageUrl="/eventpages/carnivalparade.png"
        date={content.date}
        time={content.time}
        location={content.location}
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
              {content.sectionEyebrow}
            </span>
            <h2 className="section-title">{content.sectionTitle}</h2>
            <p className="section-subtitle mx-auto">
              {content.sectionSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.experiences.map((exp, index) => {
              const Icon = experienceIcons[index];
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-xl transition-all duration-300 flex gap-5"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
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
              );
            })}
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
              {content.spiritEyebrow}
            </span>
            <h2 className="section-title">{content.spiritTitle}</h2>
            <p className="section-subtitle mx-auto">
              {content.spiritSubtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.celebrates.map((item, index) => {
              const Icon = celebrateIcons[index];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isCelebrateInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-gradient-to-br from-festival-gold-light to-white rounded-2xl"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-card flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
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
              {content.timelineEyebrow}
            </span>
            <h2 className="section-title">{content.timelineTitle}</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />
              
              {content.timeline.map((item, index) => (
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
