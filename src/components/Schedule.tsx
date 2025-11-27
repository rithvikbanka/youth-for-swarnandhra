import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, MapPin, Users, Download, Clock } from "lucide-react";

const categories = [
  { id: "all", label: "All Events" },
  { id: "dance", label: "Classical Dance" },
  { id: "singing", label: "Youth Singing" },
  { id: "arts", label: "Arts & Crafts" },
  { id: "literary", label: "Literary" },
  { id: "wellness", label: "Wellness" },
];

const scheduleData = {
  day1: {
    date: "December 12",
    events: [
      { time: "9:00 AM - 10:30 AM", title: "Opening Ceremony", venue: "Main Stage", category: "all", attendees: 500 },
      { time: "11:00 AM - 12:30 PM", title: "Bharatanatyam Showcase", venue: "Cultural Hall", category: "dance", attendees: 245 },
      { time: "2:00 PM - 3:30 PM", title: "Youth Vocal Competition", venue: "Auditorium", category: "singing", attendees: 180 },
      { time: "4:00 PM - 5:30 PM", title: "Traditional Art Workshop", venue: "Art Pavilion", category: "arts", attendees: 120 },
      { time: "6:00 PM - 8:00 PM", title: "Folk Dance Ensemble", venue: "Open Air Theatre", category: "dance", attendees: 350 },
    ],
  },
  day2: {
    date: "December 13",
    events: [
      { time: "9:00 AM - 10:30 AM", title: "Poetry Recitation", venue: "Literary Corner", category: "literary", attendees: 95 },
      { time: "11:00 AM - 12:30 PM", title: "Kuchipudi Performance", venue: "Main Stage", category: "dance", attendees: 280 },
      { time: "2:00 PM - 3:30 PM", title: "Morning Yoga Session", venue: "Wellness Zone", category: "wellness", attendees: 150 },
      { time: "4:00 PM - 5:30 PM", title: "Fusion Music Concert", venue: "Auditorium", category: "singing", attendees: 220 },
      { time: "6:00 PM - 8:00 PM", title: "Art Exhibition", venue: "Gallery Hall", category: "arts", attendees: 300 },
    ],
  },
  day3: {
    date: "December 14",
    events: [
      { time: "9:00 AM - 10:30 AM", title: "Startup Pitch Competition", venue: "Innovation Hub", category: "all", attendees: 175 },
      { time: "11:00 AM - 12:30 PM", title: "Classical Instrumental", venue: "Music Hall", category: "singing", attendees: 140 },
      { time: "2:00 PM - 3:30 PM", title: "Storytelling Session", venue: "Literary Corner", category: "literary", attendees: 85 },
      { time: "4:00 PM - 5:30 PM", title: "Dance Finals", venue: "Main Stage", category: "dance", attendees: 400 },
      { time: "6:00 PM - 9:00 PM", title: "Grand Closing Ceremony", venue: "Main Stage", category: "all", attendees: 600 },
    ],
  },
};

const categoryColors: Record<string, string> = {
  all: "bg-festival-charcoal text-white",
  dance: "bg-primary text-primary-foreground",
  singing: "bg-accent text-accent-foreground",
  arts: "bg-festival-gold text-white",
  literary: "bg-green-600 text-white",
  wellness: "bg-purple-600 text-white",
};

export const Schedule = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filterEvents = (events: typeof scheduleData.day1.events) => {
    if (activeCategory === "all") return events;
    return events.filter(event => event.category === activeCategory || event.category === "all");
  };

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
            Three Days of Celebration
          </span>
          <h2 className="section-title flex items-center justify-center gap-3">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            December 12–14, 2025
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
          {Object.entries(scheduleData).map(([dayKey, day], dayIndex) => (
            <motion.div
              key={dayKey}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + dayIndex * 0.1 }}
              className="bg-white rounded-2xl shadow-card overflow-hidden"
            >
              {/* Day Header */}
              <div className="bg-gradient-to-r from-primary to-accent p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                  Day {dayIndex + 1}
                </h3>
                <p className="text-white/80 text-sm">{day.date}</p>
              </div>

              {/* Events List */}
              <div className="p-4 md:p-6 space-y-4">
                {filterEvents(day.events).map((event, eventIndex) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: eventIndex * 0.05 }}
                    className="p-4 bg-festival-offwhite rounded-xl hover:bg-festival-gold-light transition-colors duration-200 cursor-pointer group"
                  >
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {event.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {event.venue}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={12} />
                        {event.attendees} registered
                      </span>
                    </div>
                    <span className={`inline-block mt-3 px-2 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
                      {categories.find(c => c.id === event.category)?.label || "General"}
                    </span>
                  </motion.div>
                ))}
                
                {filterEvents(day.events).length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No events in this category for Day {dayIndex + 1}
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
          <motion.button
            className="btn-secondary inline-flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download size={18} />
            Download Full Schedule as PDF
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
