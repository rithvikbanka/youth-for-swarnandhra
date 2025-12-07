import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Clock, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getSessionsByTagOnly } from "@/data/schedule";

// Derive schedule data from shared source
const talksSchedule = getSessionsByTagOnly("Youth Changemaker Talks");

const speakers = [
  {
    name: "Sudhanshu Kaushik",
    designation: "President & CEO, Centre for Youth Policy",
    image: "/speakers/s1.png"
  },
  {
    name: "Yash Agarwal",
    designation: "Founder, Public Policy India & Proficy",
    image: "/speakers/s2.png"
  },
  {
    name: "Malika Pandey",
    designation: "Assistant Private Secretary to Union Minister of Women and Child Development",
    image: "/speakers/s3.png"
  },
  {
    name: "Devansh S.",
    designation: "Policy Consultant to Government of India (GoI)",
    image: "/speakers/s4.png"
  },
  {
    name: "Anudeep Muttavarapu",
    designation: "Senior Director @ Motorola Solutions | Global Cloud, Data & AI Leader",
    image: "/speakers/s5.png"
  }
];

const moderators = [
  {
    name: "Keshav Kaviti",
    designation: "Cloud FinOps Manager @ Motorola Solutions",
    image: "/moderators/m2.png"
  },
  {
    name: "Rakesh Pendyala",
    designation: "Senior Product Management Analyst @ Motorola Solutions",
    image: "/moderators/m1.png"
  }
];

const roles = [
  "Participant",
  "Junior Reporter",
  "Creator Squad",
  "Utsaahee Fellow",
  "Organizing Team"
];

const EventYouthChangemaker = () => {
  const [showModal, setShowModal] = useState(false);
  const scheduleRef = useRef(null);
  const speakersRef = useRef(null);
  const moderatorsRef = useRef(null);
  const isScheduleInView = useInView(scheduleRef, { once: true, margin: "-100px" });
  const isSpeakersInView = useInView(speakersRef, { once: true, margin: "-100px" });
  const isModeratorsInView = useInView(moderatorsRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Gradient Only */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, #BF8315 0%, #B22418 55%, rgba(34, 197, 94, 0.02) 100%)"
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-accent text-accent-foreground text-sm font-semibold rounded-full mb-6"
            >
              Special Events
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Youth Changemaker Talks
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Focused on empowering young people to become active agents of positive change, 
              highlighting their innovative solutions, leadership, and passion for tackling social 
              and economic issues, moving beyond 'future leaders' to 'present-day doers'.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Combined Section: Header + Schedule + Register Button */}
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
              Transformative Talks & Interactions
            </span>
            <h2 className="section-title">Meet India's Changemakers</h2>
            <p className="section-subtitle mx-auto">
              Connect with visionary speakers, industry experts, and social entrepreneurs 
              driving innovation and impact across the nation.
            </p>
          </motion.div>

          {/* Schedule Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {talksSchedule.map((day, dayIndex) => (
              <motion.div
                key={day.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                    {day.label}
                  </h3>
                  <p className="text-white/80 text-sm">{day.date}</p>
                </div>

                {/* Events List */}
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
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        <span>{session.location}</span>
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
              onClick={() => setShowModal(true)}
              className="btn-primary text-lg md:text-xl px-10 py-4 bg-gradient-to-r from-festival-red-light to-festival-red text-white rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎉 Register Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section ref={speakersRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isSpeakersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-heading font-bold text-center mb-10"
          >
            Meet the Speakers
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isSpeakersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  className="w-[200px] h-[200px] mx-auto mb-4 overflow-hidden rounded-xl bg-muted"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {speaker.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {speaker.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moderators Section */}
      <section ref={moderatorsRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isModeratorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-heading font-bold text-center mb-10"
          >
            Meet the Moderators
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {moderators.map((moderator, index) => (
              <motion.div
                key={moderator.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isModeratorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <motion.div
                  className="w-[200px] h-[200px] mx-auto mb-4 overflow-hidden rounded-xl bg-muted"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={moderator.image}
                    alt={moderator.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="font-bold text-lg text-foreground mb-1">
                  {moderator.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {moderator.designation}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Registration Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-heading font-bold text-foreground">
                Select Your Role
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-3">
              {roles.map((role, index) => (
                <motion.button
                  key={role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="w-full p-4 text-left bg-festival-offwhite hover:bg-festival-gold-light rounded-xl font-medium transition-colors duration-200"
                  onClick={() => {
                    alert(`You selected: ${role}`);
                    setShowModal(false);
                  }}
                >
                  {role}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
};

export default EventYouthChangemaker;
