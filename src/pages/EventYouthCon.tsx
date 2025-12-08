import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { MapPin, Clock, Users, Handshake, Coffee } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { scheduleByDay, type ScheduleSession } from "@/data/schedule";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";

// Helper to get date string from day label
const getDayWithDate = (dayLabel: string, date: string) => {
  return `${dayLabel} · ${date}`;
};

// Type for session with day info
type SessionWithDay = ScheduleSession & { dayLabel: string; date: string };

const openRegistrationForm = () => {
  window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
};

const EventYouthCon = () => {
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-100px" });

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
        eyebrow="Special Events"
        eyebrowIcon={Users}
        title="Youth Con"
        description="Connecting the Strangers - A unique platform for meaningful conversations, networking, and mentoring between youth and industry leaders."
        decorativeIcon={Handshake}
        decorativeIcon2={Users}
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
              Networking & Mentoring Opportunities
            </span>
            <h2 className="section-title">Connecting the Strangers</h2>
            <p className="section-subtitle mx-auto">
              Build relationships with industry leaders, entrepreneurs, and peers from across India.
            </p>
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
                🎉 Register Now
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
                🎉 Register Now
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
                🎉 Register Now
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
