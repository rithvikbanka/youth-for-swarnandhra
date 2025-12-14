import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, Clock, Download } from "lucide-react";
import { scheduleByDay, type DaySchedule, type ScheduleSession } from "@/data/schedule";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackScheduleDownload } from "@/lib/analytics";

export const Schedule = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    eyebrow: "మూడు రోజుల ఉత్సవం",
    title: "18, 19, 20 డిసెంబర్ 2025",
    allEvents: "అన్ని ఈవెంట్‌లు",
    yctLabel: "యువ చేంజ్‌మేకర్ చర్చలు",
    youthConLabel: "యువ కాన్",
    impactLabsLabel: "యువ ఇంపాక్ట్ ల్యాబ్‌లు",
    diasporaLabel: "గ్లోబల్ డయాస్పోరా",
    talentLabel: "ప్రతిభ కార్నివాల్",
    artWallLabel: "యువ కళ గోడ",
    yuvasrishtiLabel: "యువసృష్టి",
    downloadPDF: "పూర్తి షెడ్యూల్‌ను PDF గా డౌన్‌లోడ్ చేయండి",
    noEvents: "ఈ విభాగంలో ఈవెంట్‌లు లేవు"
  } : {
    eyebrow: "Three Days of Celebration",
    title: "18, 19, 20 December 2025",
    allEvents: "All Events",
    yctLabel: "Youth Changemaker Talks",
    youthConLabel: "Youth Con",
    impactLabsLabel: "Youth Impact Labs",
    diasporaLabel: "Global Diaspora",
    // talentLabel: "Talent Carnival",
    // artWallLabel: "Youth Art Wall",
    // yuvasrishtiLabel: "Yuvasrishti",
    downloadPDF: "Download Full Schedule as PDF",
    noEvents: "No events in this category"
  };

  const categories = [
    { id: "all", label: content.allEvents, tag: "all" },
    { id: "changemaker", label: content.yctLabel, tag: "Youth Changemaker Talks" },
    { id: "con", label: content.youthConLabel, tag: "Youth Con" },
    { id: "impact", label: content.impactLabsLabel, tag: "Youth Impact Labs" },
    { id: "diaspora", label: content.diasporaLabel, tag: "Global Diaspora Connect" },
    // { id: "talent", label: content.talentLabel, tag: "Talent Carnival" },
    // { id: "artwall", label: content.artWallLabel, tag: "Youth Art Wall" },
    // { id: "yuvasrishti", label: content.yuvasrishtiLabel, tag: "Yuvasrishti" },
  ];

  const categoryColors: Record<string, string> = {
    "All Events": "bg-festival-charcoal text-white",
    "Youth Changemaker Talks": "bg-primary text-primary-foreground",
    "Youth Con": "bg-accent text-accent-foreground",
    "Youth Impact Labs": "bg-festival-gold text-white",
    "Global Diaspora Connect": "bg-indigo-600 text-white",
    "Talent Carnival": "bg-pink-500 text-white",
    "Youth Art Wall": "bg-blue-500 text-white",
    "Yuvasrishti": "bg-purple-500 text-white",
    "Carnival Parade": "bg-orange-500 text-white",
  };

  const filterSessions = (sessions: ScheduleSession[]) => {
    const selectedCategory = categories.find(c => c.id === activeCategory);
    if (!selectedCategory || selectedCategory.tag === "all") {
      return sessions;
    }
    return sessions.filter(
      session => session.tag === selectedCategory.tag || session.tag === "All Events"
    );
  };

  const getFilteredDays = (): DaySchedule[] => {
    return scheduleByDay
      .map(day => ({
        ...day,
        sessions: filterSessions(day.sessions)
      }))
      .filter(day => day.sessions.length > 0);
  };

  const filteredDays = getFilteredDays();

  return (
    <section id="schedule" className="section-padding bg-festival-offwhite">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            {content.eyebrow}
          </span>
          <h2 className="section-title flex items-center justify-center gap-3">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            {content.title}
          </h2>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-white text-foreground hover:bg-festival-gold-light border border-border"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredDays.map((day, dayIndex) => (
            <motion.div
              key={day.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + dayIndex * 0.1 }}
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
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sessionIndex * 0.05 }}
                    className="p-4 bg-festival-offwhite rounded-xl hover:bg-festival-gold-light transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Clock size={14} />
                      <span>{session.time}</span>
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {session.topic}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {session.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {session.location}
                      </span>
                    </div>
                    {session.tag && (
                      <span className={`inline-block mt-3 px-2 py-1 rounded-full text-xs font-medium ${categoryColors[session.tag] || "bg-gray-200 text-gray-700"}`}>
                        {session.tag}
                    </span>
                    )}
                  </motion.div>
                ))}
                
                {day.sessions.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    {content.noEvents} {day.label}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 md:mt-12"
        >
          <motion.a
            href="https://drive.google.com/file/d/13AV92p4GTdnWYpFIYxeqfts5KsC1hgAR/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => trackScheduleDownload()}
          >
            <Download size={18} />
            {content.downloadPDF}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
