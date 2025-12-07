import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Clock, X, Lightbulb, Rocket, Globe, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getSessionsByTagOnly } from "@/data/schedule";

// Derive schedule data from shared source
const impactLabsSchedule = getSessionsByTagOnly("Youth Impact Labs");

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

const roles = [
  "Participant",
  "Junior Reporter",
  "Creator Squad",
  "Utsaahee Fellow",
  "Organizing Team"
];

const EventYouthImpactLabs = () => {
  const [showModal, setShowModal] = useState(false);
  const scheduleRef = useRef(null);
  const hackathonRef = useRef(null);
  const isScheduleInView = useInView(scheduleRef, { once: true, margin: "-100px" });
  const isHackathonInView = useInView(hackathonRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section - Matching Youth Con Style */}
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
              Youth Impact Labs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              For those who want to change the World - Social Hackathon & Discussions 
              on Social Entrepreneurship
            </motion.p>
          </motion.div>
        </div>
      </section>

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
              Innovation & Social Entrepreneurship
            </span>
            <h2 className="section-title">Create Real Impact</h2>
            <p className="section-subtitle mx-auto">
              Collaborate with changemakers and innovators to solve real-world problems 
              through social entrepreneurship and hackathon challenges.
            </p>
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

export default EventYouthImpactLabs;
