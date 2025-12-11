import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Radio, 
  Mic, 
  Waves, 
  Users, 
  Globe, 
  Award, 
  CheckCircle,
  Megaphone,
  Headphones,
  Signal,
  Star,
  Zap
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
// import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms"; // Not needed anymore
import { useLanguage } from "@/i18n/LanguageContext";
import { trackRegistrationClick } from "@/lib/analytics";

// New constant for applicant form URL per instructions
const YOUTH_RADIO_FORM_URL = "https://forms.gle/5sBVsGHtKuduAc1f9";

const openRegistrationForm = () => {
  trackRegistrationClick('andhra_youth_radio_page');
  window.open(YOUTH_RADIO_FORM_URL, "_blank");
};

// Why Participate benefits
const whyParticipate = [
  {
    icon: Headphones,
    title: "Full Festival Access",
    description: "Cover all events, interview artists, and capture the buzz across all three days."
  },
  {
    icon: Users,
    title: "Reach & Impact",
    description: "Connect with thousands of youth across Andhra Pradesh through your broadcasts."
  },
  {
    icon: Award,
    title: "National Spotlight",
    description: "Best content goes to National Youth Festival in Delhi in the presence of the PM."
  },
  {
    icon: Mic,
    title: "Content Creation",
    description: "Create powerful, engaging radio content for your listeners back home."
  },
  {
    icon: Globe,
    title: "Networking",
    description: "Meet other stations, collaborate, and amplify together as one voice."
  }
];

// What You Get benefits
const whatYouGet = [
  "Festival Passes & Credentials for all team members",
  "Event schedule & coverage guidelines",
  "Venue maps & logistics information",
  "Technical setup details for broadcast segment",
  // "Welcome package & coordination support",
  // "Featured placement in festival communications"
];

// How to Participate steps
const howToParticipate = [
  {
    step: "01",
    title: "Submit",
    description: "Station name, contact person, and team size"
  },
  {
    step: "02",
    title: "Confirm",
    description: "Primary contact email & mobile number"
  },
  {
    step: "03",
    title: "Receive",
    description: "Passes, credentials, and welcome package"
  },
  {
    step: "04",
    title: "Coordinate",
    description: "Technical setup & broadcast schedules"
  },
  {
    step: "05",
    title: "Broadcast",
    description: "Create and share amazing festival coverage!"
  }
];

// Stats
const stats = [
  { value: "2000+", label: "Youth Listeners" },
  { value: "3 Days", label: "Live Coverage" },
  { value: "26", label: "Districts Reached" },
  { value: "National", label: "Opportunity" }
];

const AndhraYouthRadio = () => {
  const aboutRef = useRef(null);
  const whyRef = useRef(null);
  const getRef = useRef(null);
  const howRef = useRef(null);
  
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isGetInView = useInView(getRef, { once: true, margin: "-100px" });
  const isHowInView = useInView(howRef, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  // Only change the apply button in EN version; leave Telugu untouched
  const content = locale === 'te' ? {
    title: "ఆంధ్ర యూత్ రేడియో",
    subtitle: "మీ స్వరాన్ని విస్తరించండి. ఆంధ్రప్రదేశ్ యువత స్వరాన్ని రాష్ట్రంలోని శ్రోతలకు చేరవేయడానికి అంకితమైన ప్రత్యేక విభాగం. రేడియో స్టేషన్లకు పూర్తి ఉత్సవ ప్రవేశం లభిస్తుంది — ఈవెంట్లను కవర్ చేయండి, కళాకారులను ఇంటర్వ్యూ చేయండి, శక్తిని సంగ్రహించండి, ప్రత్యక్షంగా ప్రసారం చేయండి.",
    date: "18-20 డిసెంబర్ 2025",
    time: "అన్ని రోజులు",
    location: "విజయవాడ, ఆంధ్ర ప్రదేశ్",
    registerNow: "🎙️ ఆంధ్ర యూత్ రేడియో కోసం దరఖాస్తు చేయండి"
  } : {
    title: "Youth Radio Andhra",
    subtitle: "Amplify Your Voice. A special segment dedicated to broadcasting the voice of Andhra Pradesh's youth to listeners across the state. Radio stations get full festival access — cover events, interview artists, capture the energy, and broadcast live.",
    date: "18-20 December 2025",
    time: "All Days",
    location: "Vijayawada, Andhra Pradesh",
    registerNow: "🎙️ Apply for Youth Radio Andhra"
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* 
        EventHero Banner Section
        NOTE: The hero banner image is currently:
        imageUrl="/eventpages/hero.webp"
        If you wish to change or set the banner image, adjust this prop.
      */}
      <EventHero
        slug="andhra-youth-radio"
        title={content.title}
        subtitle={content.subtitle}
        // imageUrl="/eventpages/hero.webp"  // <-- This is the banner image. Temporarily commented as per instruction.
        date={content.date}
        time={content.time}
        location={content.location}
      />
      {/* 
        // If you want to restore the image to the hero, uncomment the line above.
        // imageUrl prop accepts a string URL for the banner image.
      */}

      {/* Stats Section */}
      {/* Changed the gradient from blue/green to warm amber/orange/pink per instruction */}
      <section className="py-8 bg-gradient-to-r from-amber-700 via-pink-700 to-orange-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-amber-200 mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Youth Radio Andhra Section */}
      <section ref={aboutRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-rose-600 uppercase tracking-wider mb-3">
              Media & Broadcasting
            </span>
            <h2 className="section-title">What is Youth Radio Andhra?</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-rose-500 rounded-xl flex items-center justify-center">
                    <Radio className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Amplifying Youth Voices</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This is a special segment dedicated to <strong className="text-foreground">amplifying the voice of Andhra Pradesh's youth</strong> to listeners across the state. Radio stations get full festival access to cover events, interview artists, capture the energy, and broadcast live.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  It's about <strong className="text-foreground">connecting youth voices</strong> with the larger state audience — creating powerful content that resonates, inspires, and brings the festival spirit to every corner of Andhra Pradesh.
                </p>
              </div>
            </motion.div>

            {/* Right: Icon Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Mic, label: "Live Interviews", color: "from-orange-400 to-amber-500" },
                { icon: Waves, label: "Live Broadcasts", color: "from-pink-400 to-rose-500" },
                { icon: Signal, label: "State Coverage", color: "from-fuchsia-500 to-pink-600" },
                { icon: Megaphone, label: "Youth Power", color: "from-amber-500 to-orange-400" }
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isAboutInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-card hover:shadow-lg transition-shadow text-center group"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Participate Section */}
      <section ref={whyRef} className="section-padding bg-gradient-to-br from-orange-900 via-rose-900 to-fuchsia-900 text-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-amber-300 uppercase tracking-wider mb-3">
              Benefits for Radio Stations
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Why Participate?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join Youth Radio Andhra and become part of something bigger — amplify voices, create impact, and shine on a national stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyParticipate.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all group"
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-pink-400 to-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* National Spotlight Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-r from-amber-300/20 to-pink-400/20 rounded-2xl p-6 md:p-8 border border-amber-300/30 text-center">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Star className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">National Opportunity</span>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <p className="text-white text-lg">
                Best radio content from YUVA 2025 might be showcased at the <strong className="text-amber-300">National Youth Festival in Delhi</strong> in the presence of the <strong className="text-amber-300">Prime Minister</strong>!
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section ref={getRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGetInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold text-rose-600 uppercase tracking-wider mb-3">
              Your Benefits
            </span>
            <h2 className="section-title">What You Get</h2>
            <p className="section-subtitle mx-auto">
              Everything you need for a successful festival broadcast experience
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isGetInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-card"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {whatYouGet.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isGetInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to Participate Section */}
      <section ref={howRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-pink-600 uppercase tracking-wider mb-3">
              Get Started
            </span>
            <h2 className="section-title">How to Participate</h2>
            <p className="section-subtitle mx-auto">
              Simple steps to join Youth Radio Andhra at YUVA 2025
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
            {howToParticipate.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isHowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-card h-full text-center">
                  <div className="text-4xl font-bold text-orange-400/20 mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {index < howToParticipate.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300" />
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            {/* 
              For the EN version, swap the button to a direct anchor tag with the correct href.
              Telugu stays as before (button that pops the form).
            */}
            {locale === 'te' ? (
              <motion.button
                onClick={openRegistrationForm}
                className="btn-primary text-lg md:text-xl px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg inline-flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mic className="w-6 h-6" />
                {content.registerNow}
                <Zap className="w-5 h-5" />
              </motion.button>
            ) : (
              <motion.a
                href={YOUTH_RADIO_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-lg md:text-xl px-10 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-full shadow-lg inline-flex items-center gap-3 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mic className="w-6 h-6" />
                {content.registerNow}
                <Zap className="w-5 h-5" />
              </motion.a>
            )}
            <p className="mt-4 text-muted-foreground text-sm">
              Open to all radio stations — big, small, community, and student
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AndhraYouthRadio;

