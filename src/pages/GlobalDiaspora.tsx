import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, MessageCircle, Network, Calendar, Clock, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackRegistrationClick } from "@/lib/analytics";

// Schedule data for Global Diaspora Connect
interface DiasporaSession {
  region: string;
  date: string;
  time: string;
  icon: string;
}

const diasporaSchedule: DiasporaSession[] = [
  {
    region: "GCC & African Countries",
    date: "18th December",
    time: "2:00 PM - 5:00 PM",
    icon: "🌍"
  },
  {
    region: "Australia, New Zealand & Southeast Asia",
    date: "19th December",
    time: "10:30 AM - 12:30 PM",
    icon: "🌏"
  },
  {
    region: "European (Nordic Nations & Europe)",
    date: "19th December",
    time: "2:00 PM - 4:00 PM",
    icon: "🇪🇺"
  },
  {
    region: "America & Canada",
    date: "19th December",
    time: "4:00 PM - 6:00 PM",
    icon: "🌎"
  }
];

// Key features
const keyFeatures = [
  {
    icon: Globe,
    title: "Connect with Global Achievers",
    description: "Meet innovators, entrepreneurs, and professionals from around the world."
  },
  {
    icon: MessageCircle,
    title: "Real Stories, Open Conversations",
    description: "No formal speeches — just honest journeys and authentic exchanges."
  },
  {
    icon: Users,
    title: "Mentorship & Cultural Exchange",
    description: "Learn from global perspectives and share your unique Andhra heritage."
  },
  {
    icon: Network,
    title: "Build Future Connections",
    description: "Create networks that expand your possibilities across continents."
  }
];

const openRegistrationForm = () => {
  trackRegistrationClick('global_diaspora_page');
  window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
};

const GlobalDiaspora = () => {
  const contentRef = useRef(null);
  const scheduleRef = useRef(null);
  const featuresRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const isScheduleInView = useInView(scheduleRef, { once: true, margin: "-100px" });
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    title: "గ్లోబల్ డయాస్పోరా కనెక్ట్",
    subtitle: "ఆంధ్ర ప్రపంచాన్ని కలుసుకునే చోటు",
    heroDescription: "యువకులు సాధకులు, ఆవిష్కర్తలు మరియు ప్రపంచవ్యాప్త నిపుణులను కలుసుకునే ఉత్సాహభరితమైన వేదిక. అధికారిక ప్రసంగాలు కాదు — నిజమైన కథలు, నిజాయితీ ప్రయాణాలు మరియు బహిరంగ సంభాషణలు.",
    sectionEyebrow: "ప్రపంచవ్యాప్త జ్ఞానం, యువశక్తి",
    sectionTitle: "ఆంధ్ర ప్రకాశవంతమైన మనసులకు గ్లోబల్ వంతెన",
    sectionDescription: "గ్లోబల్ డయాస్పోరా కనెక్ట్, ప్రపంచవ్యాప్త నిపుణులు, వ్యవస్థాపకులు, ఆవిష్కర్తలు మరియు యువ సాధకులను ఆంధ్ర ప్రదేశ్ యువమనసులతో ఏకం చేసే దార్శనిక వేదిక. విక్సిత్ భారత్ 2047 జాతీయ దృష్టితో AP యువతను అనుసంధానం చేయడం, ప్రపంచవ్యాప్తంగా అనుసంధానమైన భవిష్యత్ తరాన్ని సృష్టించడం.",
    scheduleTitle: "డయాస్పోరా షెడ్యూల్",
    scheduleDuration: "2 రోజులు",
    registerButton: "🌍 గ్లోబల్ డయాస్పోరా కనెక్ట్ కోసం నమోదు చేయండి",
    date: "18-19 డిసెంబర్ 2025",
    time: "బహుళ సెషన్లు",
    location: "విజయవాడ, ఆంధ్ర ప్రదేశ్"
  } : {
    title: "Global Diaspora Connect",
    subtitle: "Where Andhra meets the world",
    heroDescription: "A lively space where young people meet achievers, innovators, and professionals from around the world. No formal speeches — just real stories, honest journeys, and open conversations.",
    sectionEyebrow: "Worldwide Wisdom, Youth Power",
    sectionTitle: "A Global Bridge for Andhra's Bright Minds",
    sectionDescription: "Global Diaspora Connect, a visionary platform uniting global professionals, entrepreneurs, innovators, and youth achievers with the young minds of Andhra Pradesh. Global professionals, learn from their journeys, and build networks that expand your future possibilities across continents. AP youth with the national vision of Viksit Bharat 2047, creating a globally connected future generation.",
    scheduleTitle: "Diaspora Schedule",
    scheduleDuration: "2 Days",
    registerButton: "🌍 Register for Global Diaspora Connect",
    date: "18-19 December 2025",
    time: "Multiple Sessions",
    location: "Vijayawada, Andhra Pradesh"
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="global-diaspora"
        title={content.title}
        subtitle={`${content.subtitle} — ${content.heroDescription}`}
        date={content.date}
        time={content.time}
        location={content.location}
      />

      {/* Core Description Section */}
      <section ref={contentRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {content.sectionEyebrow}
            </span>
            <h2 className="section-title">{content.sectionTitle}</h2>
            <p className="section-subtitle mx-auto max-w-3xl">
              {content.sectionDescription}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <motion.button
              onClick={openRegistrationForm}
              className="btn-primary text-lg md:text-xl px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.registerButton}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
      <section ref={featuresRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              Why Join Global Diaspora Connect?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {keyFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section ref={scheduleRef} className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          {/* Schedule Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
              <Calendar className="w-4 h-4" />
              {content.scheduleDuration}
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              {content.scheduleTitle}
            </h2>
          </motion.div>

          {/* Schedule Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {diasporaSchedule.map((session, index) => (
              <motion.div
                key={session.region}
                initial={{ opacity: 0, y: 30 }}
                animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500"
              >
                {/* Region with Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{session.icon}</span>
                  <h3 className="font-bold text-lg text-foreground">
                    {session.region}
                  </h3>
                </div>

                {/* Date & Time */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">{session.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <motion.button
              onClick={openRegistrationForm}
              className="btn-primary text-lg px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.registerButton}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white">
              <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                Building Viksit Bharat 2047
              </h2>
              <p className="text-white/90 text-lg leading-relaxed mb-8">
                Global Diaspora Connect aligns AP youth with the national vision of Viksit Bharat 2047, 
                creating a globally connected future generation ready to lead India's transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">K L University, Vaddeswaram</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">December 18-19, 2025</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/15 rounded-full">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Global Connections</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GlobalDiaspora;

