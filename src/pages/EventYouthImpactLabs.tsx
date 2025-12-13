import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Lightbulb, Rocket, Globe, CheckCircle, FileText, Globe as GlobeIcon } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { getSessionsByTagOnly } from "@/data/schedule";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackRegistrationClick } from "@/lib/analytics";

// Derive schedule data from shared source
const impactLabsSchedule = getSessionsByTagOnly("Youth Impact Labs");

// Event PDF resource
const EVENT_PDF_URL = "https://drive.google.com/file/d/1RsL33qCBjeER1yPUELxlhQD_59uoIGLk/view?usp=drive_link";

const hackathonPoints = [
  {
    icon: Lightbulb,
    title: "Identify Real Problems",
    description: "Work on genuine social challenges facing communities in Andhra Pradesh and beyond."
  },
  {
    icon: Rocket,
    title: "Build Solutions",
    description: "Collaborate with teams to design and prototype innovative solutions in just 2 days."
  },
  {
    icon: Globe,
    title: "Global Mentorship",
    description: "Get guidance from diaspora mentors and industry experts from around the world."
  },
  {
    icon: CheckCircle,
    title: "Create Impact",
    description: "Present your solutions and get a chance to implement them with government support."
  }
];

const speakers = [
  {
    name: "Dr. G Trinadh Kumar, IFS",
    designation: "Inspector General of Forests (Central), Hyderabad.",
    image: "/speakers/s12.webp"
  },
  {
    name: "Geetanjali Sharma, IAS",
    designation: "MD, APSFL, Director (Communications), ITE&C Dept., Govt. of AP, Vice Chairperson, MUDA",
    image: "/speakers/s21.webp"
  },
  {
    name: "Sushmitha Ramanathan, IPS",
    designation: "ASP, Jangareddygudem, Andhra Pradesh",
    image: "/speakers/s10.webp"
  },
  {
    name: "Dr. Anil Rachamalla",
    designation: "Vice President @ FourthSquare, Founder @ EndNow Foundation, Author, Columnist, UNDP Awardee",
    image: "/speakers/s22.webp"
  },
  {
    name: "Archana Suresh",
    designation: "Social Finance Expert, Former T-SIG Director, Telangana Govt, TEDx Speaker",
    image: "/speakers/s23.webp"
  },
  {
    name: "Priya Modi",
    designation: "Co-Founder & COO, Social Enterprise Academy India, Ex Director - WASH Innovation Hub (ASCI)",
    image: "/speakers/s24.webp"
  },
  {
    name: "Bollineni Keerthi",
    designation: "President at Vasavya Mahila Mandali NGO, MC Member BNI DIAMONDS",
    image: "/speakers/s25.webp"
  },
  {
    name: "J.S.R. Annamayya",
    designation: "Assistant Director CGR, IEC Advisor to TTD, Former IEC Advisor Municipal Corporations in Government of AP",
    image: "/speakers/s26.webp"
  }
];

const openRegistrationForm = () => {
  trackRegistrationClick('youth_impact_labs_page');
  window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
};

const EventYouthImpactLabs = () => {
  const scheduleRef = useRef(null);
  const hackathonRef = useRef(null);
  const speakersRef = useRef(null);
  const isScheduleInView = useInView(scheduleRef, { once: true, margin: "-100px" });
  const isHackathonInView = useInView(hackathonRef, { once: true, margin: "-100px" });
  const isSpeakersInView = useInView(speakersRef, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    title: "యువ ఇంపాక్ట్ ల్యాబ్‌లు",
    subtitle: "సమాజ సవాళ్లకు ఆచరణాత్మక పరిష్కారాలను అభివృద్ధి చేయడానికి యువత కలిసి పనిచేసే ఆచరణాత్మక వర్క్‌షాప్‌లు మరియు ఆవిష్కరణ ల్యాబ్‌లు.",
    date: "19-20 డిసెంబర్ 2025",
    time: "ఉ. 10 - మ. 2",
    location: "విజయవాడ, ఆంధ్ర ప్రదేశ్",
    sectionEyebrow: "ఆవిష్కరణ & సామాజిక వ్యవస్థాపనత్వం",
    sectionTitle: "నిజమైన ప్రభావం సృష్టించండి",
    sectionSubtitle: "సామాజిక వ్యవస్థాపనత్వం మరియు హ్యాకథాన్ సవాళ్ల ద్వారా వాస్తవ-ప్రపంచ సమస్యలను పరిష్కరించడానికి చేంజ్‌మేకర్లు మరియు ఆవిష్కర్తలతో సహకరించండి.",
    viewPDF: "ఈవెంట్ వివరాలు PDF చూడండి",
    registerNow: "🎉 ఇప్పుడు నమోదు చేయండి"
  } : {
    title: "Youth Impact Labs",
    subtitle: "If you believe you can change the world — this is your playground. Dive into social-hackathons, brainstorm with like-minded youth, and build projects that matter. Come ready to think big, get creative, and leave with more than ideas — leave with impact.",
    date: "19-20 December 2025",
    time: "10 AM - 2 PM",
    location: "Vijayawada, Andhra Pradesh",
    sectionEyebrow: "Innovation & Social Entrepreneurship",
    sectionTitle: "Create Real Impact",
    sectionSubtitle: "Collaborate with changemakers and innovators to solve real-world problems through social entrepreneurship and hackathon challenges.",
    viewPDF: "View Event Details PDF",
    registerNow: "🎉 Register Now"
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="youth-impact-labs"
        title={content.title}
        subtitle={content.subtitle}
        // TODO: Uncomment when banner images are ready
        // imageUrl="/eventpages/youthimpactlabs.webp"
        date={content.date}
        time={content.time}
        location={content.location}
      />

      {/* Combined Section: Header + Schedule Cards + Register Button */}
      <section ref={scheduleRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
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
            
            {/* Event PDF Button */}
            <div className="mt-6">
              <a
                href={EVENT_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold"
              >
                <FileText className="w-4 h-4" />
                {content.viewPDF}
              </a>
            </div>
          </motion.div>

          {/* Schedule Cards - Matching Talks Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
            {impactLabsSchedule.map((day, dayIndex) => (
              <motion.div
                key={day.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
              >
                {/* Day Header - Same gradient as Talks */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                    {day.label}
                  </h3>
                  <p className="text-white/80 text-sm">{day.date}</p>
                </div>

                {/* Events List - Same layout as Talks */}
                <div className="p-4 md:p-6 space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div
                      key={`${session.topic}-${sessionIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isScheduleInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + sessionIndex * 0.1 }}
                      className="p-4 bg-festival-offwhite rounded-xl hover:bg-festival-gold-light transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                        <Clock size={14} />
                        <span>{session.time}</span>
                      </div>
                      <h4 className="font-bold text-foreground mb-2 text-base">
                        {session.topic}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {session.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-3">
                        <MapPin size={14} />
                        <span>{session.location}</span>
                      </div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          <Rocket size={12} /> Hackathon
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">
                          <Globe size={12} /> Global Connect
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              onClick={openRegistrationForm}
              className="btn-primary text-lg md:text-xl px-10 py-4 bg-gradient-to-r from-festival-red-light to-festival-red text-white rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.registerNow}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Meet Distinguished Experts Section */}
      <section ref={speakersRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSpeakersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-primary mb-3">
              Meet Distinguished Experts
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Learn from leaders shaping real-world impact across sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isSpeakersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <motion.div
                  className="w-[160px] h-[160px] mx-auto mb-4 overflow-hidden rounded-xl bg-muted"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Name & Designation */}
                <h3 className="font-bold text-lg text-foreground mb-1 text-center">
                  {speaker.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-center flex-grow">
                  {speaker.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is a Hackathon Section */}
      <section ref={hackathonRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHackathonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              What is a Social Hackathon?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A Social Hackathon is an intensive, collaborative event where young innovators 
              come together to solve pressing social challenges through technology, creativity, 
              and entrepreneurship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hackathonPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isHackathonInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHackathonInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-festival-gold-light to-festival-offwhite rounded-2xl p-6 md:p-8 max-w-3xl mx-auto"
          >
            <h3 className="font-bold text-lg text-foreground mb-4 text-center">
              Why Participate?
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Learn by Doing:</strong> Apply your skills to real problems 
                  and gain hands-on experience in solution design.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Network Globally:</strong> Connect with the diaspora community 
                  and build relationships that transcend borders.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Win Recognition:</strong> Showcase your innovations and 
                  get recognized by government and industry leaders.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* NOTE: Registration modal disabled - now using direct Google Form link */}
    </main>
  );
};

export default EventYouthImpactLabs;
