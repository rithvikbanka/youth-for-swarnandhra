import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { MapPin, Clock, Users, Handshake, Coffee, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { scheduleByDay, type ScheduleSession } from "@/data/schedule";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackRegistrationClick } from "@/lib/analytics";

// Helper to get date string from day label
const getDayWithDate = (dayLabel: string, date: string) => {
  return `${dayLabel} · ${date}`;
};

// Event PDF resource
const EVENT_PDF_URL = "https://drive.google.com/file/d/19BP0stjo-y0L682P-waEc2ckK-lIM3FX/view?usp=drive_link";

// Type for session with day info
type SessionWithDay = ScheduleSession & { dayLabel: string; date: string };

const openRegistrationForm = () => {
  trackRegistrationClick('youth_con_page');
  window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
};

const EventYouthCon = () => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    title: "యువ కాన్",
    subtitle: "అపరిచితులను కలుపుట - యువత మరియు పరిశ్రమ నాయకుల మధ్య అర్థవంతమైన సంభాషణలు, నెట్‌వర్కింగ్ మరియు మార్గదర్శకత్వం కోసం ప్రత్యేక వేదిక.",
    date: "18-20 డిసెంబర్ 2025",
    time: "మధ్యాహ్నం మరియు సాయంత్రం",
    location: "విజయవాడ, ఆంధ్ర ప్రదేశ్",
    sectionEyebrow: "నెట్‌వర్కింగ్ & మెంటరింగ్ అవకాశాలు",
    sectionTitle: "అపరిచితులను కలుపుట",
    sectionSubtitle: "భారతదేశం అంతటా పరిశ్రమ నాయకులు, వ్యవస్థాపకులు మరియు సహచరులతో సంబంధాలను నిర్మించండి.",
    viewPDF: "ఈవెంట్ వివరాలు PDF చూడండి",
    registerNow: "🎉 ఇప్పుడు నమోదు చేయండి"
  } : {
    title: "Youth Con",
    subtitle: "Networking just got a makeover. Youth Con brings together curious students and industry leaders — a place where you can talk, learn, and build real connections. It's not just about resumes and CVs — it's about passion, mentorship and meaningful conversations that might change your path.",
    date: "18-20 December 2025",
    time: "Afternoons and evenings",
    location: "Vijayawada, Andhra Pradesh",
    sectionEyebrow: "Networking & Mentoring Opportunities",
    sectionTitle: "Connecting the Strangers",
    sectionSubtitle: "Build relationships with industry leaders, entrepreneurs, and peers from across India.",
    viewPDF: "View Event Details PDF",
    registerNow: "🎉 Register Now"
  };

  // Derive Youth Con sessions from shared data
  const youthConSessions = useMemo(() => {
    const sessions: SessionWithDay[] = [];
    scheduleByDay.forEach(day => {
      day.sessions
        .filter(session => session.tag === "Youth Con")
        .forEach(session => {
          sessions.push({
            ...session,
            dayLabel: day.label,
            date: day.date
          });
        });
    });
    return sessions;
  }, []);

  // Group sessions by type
  const speedMentoring = useMemo(() => 
    youthConSessions.filter(s => s.topic.toLowerCase().includes("mentoring")),
    [youthConSessions]
  );

  const speedNetworking = useMemo(() => 
    youthConSessions.filter(s => s.topic.toLowerCase().includes("networking")),
    [youthConSessions]
  );

  const meetups = useMemo(() => 
    youthConSessions.filter(s => s.topic.toLowerCase().includes("meetup")),
    [youthConSessions]
  );

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="youth-con"
        title={content.title}
        subtitle={content.subtitle}
        // TODO: Uncomment when banner images are ready
        // imageUrl="/eventpages/youthcon.png"
        date={content.date}
        time={content.time}
        location={content.location}
      />

      {/* Unified Content Section */}
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

          {/* Speed Mentoring Block */}
          <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4"
          >
              <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Users className="w-6 h-6 text-primary" />
            </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Speed Mentoring
                </h3>
              </div>
              <motion.button
                onClick={openRegistrationForm}
                className="btn-primary px-6 py-2.5 bg-gradient-to-r from-festival-red-light to-festival-red text-white rounded-full shadow-md text-sm font-semibold w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.registerNow}
              </motion.button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-8 max-w-2xl"
          >
            Get personalized guidance from experienced mentors in quick, focused sessions. 
            Learn from their journeys and get actionable advice for your career.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speedMentoring.map((session, index) => (
              <motion.div
                  key={`${session.topic}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                    {getDayWithDate(session.dayLabel, session.date)}
                </span>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                  <Clock size={14} />
                  <span>{session.time}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2 text-lg">
                    {session.topic.replace("Youth Con: ", "")}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                    {session.description}
                </p>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  <span>{session.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

          {/* Speed Networking Block */}
          <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4"
            >
              <div className="flex items-center gap-3">
            <div className="p-3 bg-accent/10 rounded-xl">
              <Handshake className="w-6 h-6 text-accent" />
            </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Speed Networking
                </h3>
              </div>
              <motion.button
                onClick={openRegistrationForm}
                className="btn-primary px-6 py-2.5 bg-gradient-to-r from-festival-red-light to-festival-red text-white rounded-full shadow-md text-sm font-semibold w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.registerNow}
              </motion.button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground mb-8 max-w-2xl"
          >
            Fast-paced networking sessions to meet fellow youth, entrepreneurs, and professionals. 
            Expand your network and discover collaboration opportunities.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {speedNetworking.map((session, index) => (
              <motion.div
                  key={`${session.topic}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 border-l-4 border-accent"
              >
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full mb-3">
                    {getDayWithDate(session.dayLabel, session.date)}
                </span>
                <div className="flex items-center gap-2 text-accent font-semibold text-sm mb-2">
                  <Clock size={14} />
                  <span>{session.time}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2 text-lg">
                    {session.topic.replace("Youth Con: ", "")}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                    {session.description}
                </p>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  <span>{session.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

          {/* Meetups Block */}
          <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4"
            >
              <div className="flex items-center gap-3">
            <div className="p-3 bg-festival-gold/10 rounded-xl">
              <Coffee className="w-6 h-6 text-festival-gold" />
            </div>
                <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Meetups
                </h3>
              </div>
              <motion.button
                onClick={openRegistrationForm}
                className="btn-primary px-6 py-2.5 bg-gradient-to-r from-festival-red-light to-festival-red text-white rounded-full shadow-md text-sm font-semibold w-fit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.registerNow}
              </motion.button>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
              animate={isContentInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground mb-8 max-w-2xl"
          >
            Informal gatherings to connect with like-minded individuals, share experiences, 
            and build lasting friendships in a relaxed environment.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meetups.map((session, index) => (
              <motion.div
                  key={`${session.topic}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                  animate={isContentInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <span className="inline-block px-3 py-1 bg-festival-gold/10 text-festival-gold text-xs font-semibold rounded-full mb-3">
                    {getDayWithDate(session.dayLabel, session.date)}
                </span>
                <div className="flex items-center gap-2 text-festival-gold font-semibold text-sm mb-2">
                  <Clock size={14} />
                  <span>{session.time}</span>
                </div>
                <h4 className="font-bold text-foreground mb-2 text-lg">
                    {session.topic.replace("Youth Con: ", "")}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                    {session.description}
                </p>
                <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                  <MapPin size={14} />
                  <span>{session.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <Footer />

      {/* NOTE: Registration modal disabled - now using direct Google Form link */}
    </main>
  );
};

export default EventYouthCon;
