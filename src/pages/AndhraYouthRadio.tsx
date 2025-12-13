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
  Zap,
  Instagram
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

// Radio Partners
const anchoredBy = {
  name: "KL Radio",
  location: "Vaddeswaram",
  instagram: "https://www.instagram.com/kl__radio/",
  image: "/radio/kl_radio.webp"
};

const collaborationPartners = [
  {
    name: "Annamacharya Radio 89.6",
    location: "New Boyanapalli, Rajampet",
    instagram: "https://www.instagram.com/annamacharya_radio",
    image: "/radio/annamacharya_radio.webp"
  },
  {
    name: "Radio Vishnu",
    location: "Sri Vishnu Educational Society, Bhimavaram",
    googleShare: "https://share.google/4fdKleWBHWskpUq7l",
    image: "/radio/vishnu_radio.webp"
  },
  {
    name: "Vishnu Podcast",
    location: "Sri Vishnu Educational Society, Bhimavaram",
    spotify: "https://open.spotify.com/show/1gkoF4xROWOeCepGKDhLPa?si=M3XrDcZqQp-nr9z7dhov6w",
    youtube: "https://youtube.com/@vishnupodcast0220?si=SuVleT3HhduACpHP",
    image: "/radio/vishnu_podcast.webp"
  },
  {
    name: "GMRIT Community Radio Station 90.4",
    instagram: "https://www.instagram.com/_community_radio_90.4/",
    image: "/radio/gmrit_radio.webp"
  }
];

const AndhraYouthRadio = () => {
  const aboutRef = useRef(null);
  const radioPartnersRef = useRef(null);
  const whyRef = useRef(null);
  const getRef = useRef(null);
  const howRef = useRef(null);
  
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });
  const isRadioPartnersInView = useInView(radioPartnersRef, { once: true, margin: "-100px" });
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

      {/* Radio Partners Section */}
      <section ref={radioPartnersRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRadioPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Youth Radio Andhra</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Amplifying Youth Voices Across Andhra Pradesh
            </p>
          </motion.div>

          {/* Anchored By Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRadioPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-center mb-8 text-primary">
              Anchored By
            </h3>
            {/* 
              Change here:
              - Remove max-w-sm and mx-auto (which center and set a smaller width than the grid cards)
              - Add the same classes as the collaboration cards for width and padding for consistency
              - Each collaboration partner card has: bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col h-full 
              - The "border-2 border-primary/20" is similar but border width and color slightly different, let’s use border border-gray-200 for unity.
            */}
            <div className="flex justify-center">
              <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col h-full w-full max-w-[320px]">
                {/* Logo - Full display, no cropping */}
                <div className="flex justify-center items-center w-[120px] h-[120px] mx-auto mb-4 rounded-lg bg-gray-50 border border-gray-100 p-2">
                  <img
                    src={anchoredBy.image}
                    alt={anchoredBy.name}
                    loading="lazy"
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Name */}
                <h4 className="text-lg font-bold text-foreground text-center mb-1">
                  {anchoredBy.name}
                </h4>
                
                {/* Location */}
                {anchoredBy.location && (
                  <p className="text-sm text-gray-500 text-center">
                    {anchoredBy.location}
                  </p>
                )}
                
                {/* Spacer to push icons to bottom */}
                <div className="flex-grow" />

                {/* Icons - Bottom aligned with separator */}
                {anchoredBy.instagram && (
                  <div className="flex items-center justify-center gap-5 mt-4 pt-4 border-t border-gray-100">
                    <a
                      href={anchoredBy.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit Instagram"
                      aria-label={`${anchoredBy.name} on Instagram`}
                      className="text-gray-500 hover:text-pink-600 hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* In Collaboration With Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isRadioPartnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-heading font-bold text-center mb-8 text-primary">
              In Collaboration With
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {collaborationPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isRadioPartnersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 border border-gray-200 flex flex-col h-full"
                >
                  {/* Logo - Full display, no cropping */}
                  <div className="flex justify-center items-center w-[120px] h-[120px] mx-auto mb-4 rounded-lg bg-gray-50 border border-gray-100 p-2">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      loading="lazy"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Name */}
                  <h4 className="text-lg font-bold text-foreground text-center mb-1">
                    {partner.name}
                  </h4>
                  
                  {/* Location */}
                  {partner.location && (
                    <p className="text-sm text-gray-500 text-center">
                      {partner.location}
                    </p>
                  )}
                  
                  {/* Spacer to push icons to bottom */}
                  <div className="flex-grow" />
                  
                  {/* Icons - Bottom aligned */}
                  <div className="flex items-center justify-center gap-5 mt-4 pt-4 border-t border-gray-100">
                    {partner.instagram && (
                      <a
                        href={partner.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Visit Instagram"
                        aria-label={`${partner.name} on Instagram`}
                        className="text-gray-500 hover:text-pink-600 hover:scale-110 transition-all duration-300"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    )}
                    {partner.googleShare && (
                      <a
                        href={partner.googleShare}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Listen Now"
                        aria-label={`${partner.name} - Listen`}
                        className="text-gray-500 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                      >
                        <Radio className="w-6 h-6" />
                      </a>
                    )}
                    {partner.spotify && (
                      <a
                        href={partner.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Listen on Spotify"
                        aria-label={`${partner.name} on Spotify`}
                        className="text-gray-500 hover:text-[#1DB954] hover:scale-110 transition-all duration-300"
                      >
                        {/* Spotify SVG Icon */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                      </a>
                    )}
                    {partner.youtube && (
                      <a
                        href={partner.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Watch on YouTube"
                        aria-label={`${partner.name} on YouTube`}
                        className="text-gray-500 hover:text-red-600 hover:scale-110 transition-all duration-300"
                      >
                        {/* YouTube SVG Icon */}
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
