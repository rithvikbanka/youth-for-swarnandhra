import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import classicalDance from "@/assets/classical-dance.jpg";
import youthSinging from "@/assets/youth-singing.jpg";
import artsCrafts from "@/assets/arts-crafts.jpg";
import literary from "@/assets/literary.jpg";
import startup from "@/assets/startup.jpg";
import wellness from "@/assets/wellness.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const EventCard = ({ category, index }: { category: { id: number; title: string; description: string; image: string; icon: string; color: string }; index: number }) => {
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
      </div>
    </motion.div>
  );
};

export const EventCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    eyebrow: "ఆరు శ్రేష్ఠత విభాగాలు",
    title: "మాతో జరుపుకోండి",
    subtitle: "అన్ని 26 జిల్లాల విజేతల నుండి ఆరు హై-వోల్టేజ్ పోటీలను కనుగొనండి.",
    categories: [
      { title: "జానపద నృత్య బృందం", description: "అధిక-శక్తి జానపద లయలు, రంగులు మరియు సంస్కృతి." },
      { title: "జానపద గాన బృందం", description: "ప్రాంతీయ మూలాలను జరుపుకునే ఆత్మపూర్వక ఆంధ్ర జానపద పాటలు." },
      { title: "కథా రచన", description: "శక్తివంతమైన కథలను జీవంతో తీసుకువచ్చే యువ కథకులు." },
      { title: "చిత్రలేఖనం", description: "ఉత్సాహభరితమైన కాన్వాస్‌లపై పేలుతున్న యువ ఊహలు." },
      { title: "వాక్చాతుర్యం", description: "యువత గొంతు & ఆంధ్ర గర్వాన్ని ప్రతిధ్వనిస్తున్న తీవ్రమైన ప్రసంగాలు." },
      { title: "కవిత్వం", description: "యువ సృజనాత్మకతను వ్యక్తం చేసే శ్లోకాలు మరియు కవితలు." },
    ]
  } : {
    eyebrow: "Six Categories of Excellence",
    title: "Celebrate with Us",
    subtitle: "Discover six high-voltage competitions from Winners of all 26 Districts.",
    categories: [
      { title: "Folk Dance Group", description: "High-energy folk rhythms, colours and culture." },
      { title: "Folk Song Group", description: "Soulful Andhra folk songs celebrating regional roots." },
      { title: "Story Writing", description: "Young storytellers bringing powerful tales alive." },
      { title: "Painting", description: "Youthful imaginations exploding on vibrant canvases." },
      { title: "Declamation", description: "Fierce speeches echoing youth's voice & Andhra's pride." },
      { title: "Poetry", description: "Verses and poems expressing youth creativity." },
    ]
  };

  const categories = [
    { id: 1, ...content.categories[0], image: classicalDance, icon: "💃", color: "from-red-500/20 to-orange-500/20" },
    { id: 2, ...content.categories[1], image: youthSinging, icon: "🎶", color: "from-orange-500/20 to-yellow-500/20" },
    { id: 3, ...content.categories[2], image: literary, icon: "✍️", color: "from-yellow-500/20 to-green-500/20" },
    { id: 4, ...content.categories[3], image: artsCrafts, icon: "🎨", color: "from-green-500/20 to-teal-500/20" },
    { id: 5, ...content.categories[4], image: startup, icon: "🎙️", color: "from-blue-500/20 to-purple-500/20" },
    { id: 6, ...content.categories[5], image: wellness, icon: "📝", color: "from-purple-500/20 to-pink-500/20" },
  ];

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
            {content.eyebrow}
          </motion.span>
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle mx-auto">
            {content.subtitle}
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
