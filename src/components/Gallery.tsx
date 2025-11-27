import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Play, Eye } from "lucide-react";
import classicalDance from "@/assets/classical-dance.jpg";
import youthSinging from "@/assets/youth-singing.jpg";
import artsCrafts from "@/assets/arts-crafts.jpg";
import literary from "@/assets/literary.jpg";
import startup from "@/assets/startup.jpg";
import wellness from "@/assets/wellness.jpg";
import heroDancer from "@/assets/hero-dancer.jpg";

const galleryImages = [
  { src: heroDancer, alt: "Classical Bharatanatyam performance", size: "large" },
  { src: classicalDance, alt: "Kuchipudi dancer in motion", size: "normal" },
  { src: youthSinging, alt: "Young vocalist performing", size: "normal" },
  { src: artsCrafts, alt: "Traditional art workshop", size: "large" },
  { src: literary, alt: "Poetry recitation event", size: "normal" },
  { src: startup, alt: "Youth innovation hub", size: "normal" },
  { src: wellness, alt: "Morning yoga session", size: "normal" },
  { src: classicalDance, alt: "Folk dance ensemble", size: "large" },
];

const videos = [
  { id: 1, title: "2025 Festival Promo", thumbnail: heroDancer, views: "1.2K" },
  { id: 2, title: "Youth Talents Showcase", thumbnail: youthSinging, views: "856" },
  { id: 3, title: "Behind the Scenes", thumbnail: artsCrafts, views: "543" },
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Visual Journey
          </span>
          <h2 className="section-title">Celebrate the Spirit</h2>
          <p className="section-subtitle mx-auto">
            Highlights from past festivals and this year's lineup
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${
                image.size === "large" ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                <span className="text-white text-sm font-medium">{image.alt}</span>
                <motion.div
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <Eye className="w-5 h-5 text-white" />
                </motion.div>
              </div>
              {/* Border on hover */}
              <div className="absolute inset-0 border-3 border-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center mb-8">
            2025 Festival Promo Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl aspect-video mb-3">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <motion.div
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-7 h-7 text-white ml-1" fill="white" />
                    </motion.div>
                  </div>
                </div>
                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {video.title}
                </h4>
                <p className="text-sm text-muted-foreground">{video.views} views</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            onClick={() => setSelectedImage(null)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImage}
            alt="Gallery image"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};
