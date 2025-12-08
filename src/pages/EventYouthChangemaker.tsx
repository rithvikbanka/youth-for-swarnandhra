import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Mic, Linkedin, FileText } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { getSessionsByTagOnly } from "@/data/schedule";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";

// Derive schedule data from shared source
const talksSchedule = getSessionsByTagOnly("Youth Changemaker Talks");

// Event PDF resource
const EVENT_PDF_URL = "https://drive.google.com/file/d/1XXjw1BD7tiFGLwypRJn3HgowKHKkNykF/view?usp=drive_link";

const speakers = [
  {
    name: "Sudhanshu Kaushik",
    designation: "President & CEO, Centre for Youth Policy",
    image: "/speakers/s1.png",
    linkedinUrl: "https://www.linkedin.com/in/sudhanshukaushik/"
  },
  {
    name: "Yash Agarwal",
    designation: "Founder, Public Policy India & Proficy",
    image: "/speakers/s2.png",
    linkedinUrl: "https://www.linkedin.com/in/yashagarwalm/"
  },
  {
    name: "Malika Pandey",
    designation: "Assistant Private Secretary to Union Minister of Women and Child Development",
    image: "/speakers/s3.png",
    linkedinUrl: "https://www.linkedin.com/in/malika-pandey-035783182/"
  },
  {
    name: "Devansh S.",
    designation: "Policy Consultant to Government of India (GoI)",
    image: "/speakers/s4.png",
    linkedinUrl: "https://www.linkedin.com/in/devanshshah10/"
  },
  {
    name: "Anudeep Muttavarapu",
    designation: "Senior Director @ Motorola Solutions | Global Cloud, Data & AI Leader",
    image: "/speakers/s5.png",
    linkedinUrl: "https://www.linkedin.com/in/amuttavarapu/"
  }
];

const moderators = [
  {
    name: "Keshav Kaviti",
    designation: "Cloud FinOps Manager, Motorola Solutions",
    image: "/moderators/m2.png",
    linkedinUrl: "https://www.linkedin.com/in/keshav-kaviti-700358249/"
  },
  {
    name: "Rakesh Pendyala",
    designation: "MBA Gold Medalist, Business Leadership @ IIM Kozhikode",
    image: "/moderators/m1.png",
    linkedinUrl: "https://www.linkedin.com/in/rakesh-pendyala/"
  }
];

const openRegistrationForm = () => {
  window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
};

const EventYouthChangemaker = () => {
  const scheduleRef = useRef(null);
  const speakersRef = useRef(null);
  const moderatorsRef = useRef(null);
  const isScheduleInView = useInView(scheduleRef, { once: true, margin: "-100px" });
  const isSpeakersInView = useInView(speakersRef, { once: true, margin: "-100px" });
  const isModeratorsInView = useInView(moderatorsRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        eyebrow="Special Events"
        eyebrowIcon={Mic}
        title="Youth Changemaker Talks"
        description="Focused on empowering young people to become active agents of positive change, highlighting their innovative solutions, leadership, and passion for tackling social and economic issues, moving beyond 'future leaders' to 'present-day doers'."
        themeKey="youth-changemaker-talks"
      />

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
            
            {/* Event PDF Button */}
            <div className="mt-6">
              <a
                href={EVENT_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold"
              >
                <FileText className="w-4 h-4" />
                View Event Details PDF
              </a>
            </div>
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
              onClick={openRegistrationForm}
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {speaker.designation}
                </p>
                {speaker.linkedinUrl && (
                  <a
                    href={speaker.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
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
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {moderator.designation}
                </p>
                {moderator.linkedinUrl && (
                  <a
                    href={moderator.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-sm font-semibold"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* NOTE: Registration modal disabled - now using direct Google Form link */}
    </main>
  );
};

export default EventYouthChangemaker;
