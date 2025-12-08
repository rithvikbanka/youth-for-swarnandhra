import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const eventButtons = [
  {
    id: "yct",
    title: "Youth Changemaker Talks",
    description: "Green Innovation, Thought Leadership, Future of Work, Wellness & Swarnandhra",
    href: "/event/youth-changemaker-talks",
    gradient: "from-blue-500/10 to-blue-600/10",
    borderColor: "border-blue-200",
    hoverBg: "hover:border-blue-400",
  },
  {
    id: "youthcon",
    title: "Youth CON",
    description: "Speed Mentoring, Speed Networking, Table Lunches & Meetups",
    href: "/event/youth-con",
    gradient: "from-purple-500/10 to-purple-600/10",
    borderColor: "border-purple-200",
    hoverBg: "hover:border-purple-400",
  },
  {
    id: "impact",
    title: "Youth Impact Labs",
    description: "Social Hackathons on UN SDGs and Innovation & Entrepreneurship",
    href: "/event/youth-impact-labs",
    gradient: "from-green-500/10 to-green-600/10",
    borderColor: "border-green-200",
    hoverBg: "hover:border-green-400",
  },
  {
    id: "artwall",
    title: "Youth Art Wall",
    description: "Showcase your 2D, 3D or Multimedia Artwork across all three days",
    href: "/other-events/youth-art-wall",
    gradient: "from-pink-500/10 to-pink-600/10",
    borderColor: "border-pink-200",
    hoverBg: "hover:border-pink-400",
  },
  {
    id: "talent",
    title: "Talent Carnival",
    description: "Open Mic, Poetry, Music, Dance, Stand-up Comedy & Beatboxing",
    href: "/other-events/youth-talent-carnival",
    gradient: "from-orange-500/10 to-orange-600/10",
    borderColor: "border-orange-200",
    hoverBg: "hover:border-orange-400",
  },
  {
    id: "yuvasrishti",
    title: "Yuvasrishti",
    description: "Full-day initiatives bringing innovation, fellowship, and creative projects",
    href: "/other-events/yuvasrishti",
    gradient: "from-red-500/10 to-red-600/10",
    borderColor: "border-red-200",
    hoverBg: "hover:border-red-400",
  },
];

export const TransformSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      className="section-padding border-y border-[#f0d7c9]"
      style={{
        background: `
          radial-gradient(circle at top, rgba(255,200,200,0.45), transparent 55%),
          radial-gradient(circle at bottom, rgba(200,220,255,0.5), transparent 60%),
          #fff7f2
        `
      }}
    >
      <div className="container mx-auto">
        {/* Eyebrow & Headline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
            Join. Express. Network. Learn. Collaborate.
          </p>
          <h2 className="section-title">Transform Yourself Here</h2>
          <p className="section-subtitle mx-auto">
            A world you have never seen. A place you have never been.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventButtons.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={event.href}>
                <div
                  className={`group relative h-full p-6 rounded-xl border-2 ${event.borderColor} bg-gradient-to-br ${event.gradient} ${event.hoverBg} hover:shadow-lg transition-all duration-300 cursor-pointer backdrop-blur-sm`}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-primary/10" />

                  <div className="relative z-10">
                    {/* Title */}
                    <h3 className="text-xl font-bold font-heading text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    {/* Arrow Button */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

