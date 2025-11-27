import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Palette, Mic2, BookOpen, Lightbulb, Heart } from "lucide-react";
import classicalDance from "@/assets/classical-dance.jpg";
import youthSinging from "@/assets/youth-singing.jpg";
import artsCrafts from "@/assets/arts-crafts.jpg";
import literary from "@/assets/literary.jpg";
import startup from "@/assets/startup.jpg";
import wellness from "@/assets/wellness.jpg";

const categories = [
  {
    id: 1,
    title: "Classical Dance Performances",
    description: "Bharatanatyam, Kuchipudi, and mesmerizing folk traditions",
    image: classicalDance,
    icon: "🎭",
    color: "from-red-500/20 to-orange-500/20",
  },
  {
    id: 2,
    title: "Youth Voice & Singing",
    description: "Discover emerging singers and vocal talents from across Andhra",
    image: youthSinging,
    icon: "🎤",
    IconComponent: Mic2,
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    id: 3,
    title: "Arts & Crafts Pavilion",
    description: "Explore painting, drawing, traditional textiles, and handicrafts",
    image: artsCrafts,
    icon: "🎨",
    IconComponent: Palette,
    color: "from-yellow-500/20 to-green-500/20",
  },
  {
    id: 4,
    title: "Literary & Spoken Word",
    description: "Poetry, storytelling, and written expression from young authors",
    image: literary,
    icon: "📖",
    IconComponent: BookOpen,
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    id: 5,
    title: "Startup & Innovation Hub",
    description: "Ideas. Pitches. Mentorship. Building the future of Andhra",
    image: startup,
    icon: "💡",
    IconComponent: Lightbulb,
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 6,
    title: "Wellness & Sports Zone",
    description: "Yoga, sports, and holistic wellness for youth",
    image: wellness,
    icon: "🧘",
    IconComponent: Heart,
    color: "from-purple-500/20 to-pink-500/20",
  },
];

const EventCard = ({ category, index }: { category: typeof categories[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card-event group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-48 md:h-56 overflow-hidden">
        <motion.img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
        
        {/* Icon Badge */}
        <motion.div
          className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl shadow-lg"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          {category.icon}
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3 className="text-lg md:text-xl font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {category.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {category.description}
        </p>
        <motion.a
          href="#schedule"
          className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:text-primary transition-colors group/link"
          whileHover={{ x: 4 }}
        >
          See Schedule
          <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export const EventCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="events" className="section-padding bg-gradient-warm pattern-rangoli">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3"
          >
            Six Categories of Excellence
          </motion.span>
          <h2 className="section-title">Celebrate with Us</h2>
          <p className="section-subtitle mx-auto">
            Explore six categories of extraordinary performances and experiences
          </p>
        </motion.div>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <EventCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
