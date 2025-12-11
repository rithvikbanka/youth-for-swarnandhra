import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { 
  Palette, 
  Brush, 
  Sparkles, 
  Heart,
  Camera,
  Star,
  PenTool,
  Layers,
  Eye
} from "lucide-react";

const YouthArtWall = () => {
  const { t } = useLanguage();
  const artRef = useRef(null);
  const howRef = useRef(null);
  const galleryRef = useRef(null);
  
  const isArtInView = useInView(artRef, { once: true, margin: "-100px" });
  const isHowInView = useInView(howRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  const artForms = [
    {
      icon: Brush,
      title: t('events.youthArtWall.painting', "Painting"),
      description: t('events.youthArtWall.paintingDesc', "Express your vision through vibrant colors and bold strokes on the giant collaborative canvas.")
    },
    {
      icon: PenTool,
      title: t('events.youthArtWall.sketching', "Sketching"),
      description: t('events.youthArtWall.sketchingDesc', "Quick sketches, detailed portraits, or abstract lines—every mark tells a story.")
    },
    {
      icon: Sparkles,
      title: t('events.youthArtWall.doodling', "Doodling"),
      description: t('events.youthArtWall.doodlingDesc', "Let your imagination run wild with playful doodles that bring joy and creativity.")
    },
    {
      icon: Layers,
      title: t('events.youthArtWall.graffitiArt', "Graffiti Art"),
      description: t('events.youthArtWall.graffitiArtDesc', "Street art meets festival spirit—create bold statements that capture youth energy.")
    },
    {
      icon: Eye,
      title: t('events.youthArtWall.visualStorytelling', "Visual Storytelling"),
      description: t('events.youthArtWall.visualStorytellingDesc', "Use art to narrate stories of hope, dreams, and the future you envision.")
    },
    {
      icon: Heart,
      title: t('events.youthArtWall.collaborativeArt', "Collaborative Art"),
      description: t('events.youthArtWall.collaborativeArtDesc', "Join hands with fellow artists to create something bigger than yourself.")
    }
  ];

  const howToParticipate = [
    {
      step: "01",
      title: t('events.youthArtWall.showUp', "Show Up"),
      description: t('events.youthArtWall.showUpDesc', "Visit the Youth Art Wall zone during the festival. No prior registration needed!")
    },
    {
      step: "02",
      title: t('events.youthArtWall.pickYourSpot', "Pick Your Spot"),
      description: t('events.youthArtWall.pickYourSpotDesc', "Choose an empty section of the wall or join an ongoing collaborative piece.")
    },
    {
      step: "03",
      title: t('events.youthArtWall.create', "Create"),
      description: t('events.youthArtWall.createDesc', "Express yourself freely. All art supplies are provided—just bring your creativity!")
    },
    {
      step: "04",
      title: t('events.youthArtWall.signShare', "Sign & Share"),
      description: t('events.youthArtWall.signShareDesc', "Sign your artwork and share it on social media with #YUVAArtWall.")
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="youth-art-wall"
        title={t('events.youthArtWall.title', "Youth Art Wall")}
        subtitle={t('events.youthArtWall.subtitle', "Your imagination, your canvas. Paint, sketch, doodle, draw or tell stories — let your art speak for your dreams, hopes, angst or joy. This isn't just a wall, it's where your voice becomes visible.")}
        // TODO: Uncomment when banner images are ready
        // imageUrl="/eventpages/youthartwall.webp"
        date={t('events.youthArtWall.date', "18-20 December 2025")}
        time={t('events.youthArtWall.time', "Full Day")}
        location={t('events.youthArtWall.location', "Vijayawada, Andhra Pradesh")}
      />

      {/* Art Forms Section */}
      <section ref={artRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isArtInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {t('events.youthArtWall.sectionEyebrow', "Express Yourself")}
            </span>
            <h2 className="section-title">{t('events.youthArtWall.sectionTitle', "Every Form of Art Welcome")}</h2>
            <p className="section-subtitle mx-auto">
              {t('events.youthArtWall.sectionSubtitle', "Whether you're a seasoned artist or picking up a brush for the first time, the Youth Art Wall welcomes all forms of creative expression.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artForms.map((art, index) => (
              <motion.div
                key={art.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isArtInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <art.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {art.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {art.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section ref={howRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {t('events.youthArtWall.getStarted', "Get Started")}
            </span>
            <h2 className="section-title">{t('events.youthArtWall.howToParticipate', "How to Participate")}</h2>
            <p className="section-subtitle mx-auto">
              {t('events.youthArtWall.howToParticipateSubtitle', "No barriers, no rules—just pure creative freedom.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToParticipate.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isHowInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-card h-full">
                  <div className="text-5xl font-bold text-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                {index < howToParticipate.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview / Info Section */}
      <section ref={galleryRef} className="section-padding bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8">
              <div className="flex justify-center gap-4 mb-6">
                {[Palette, Brush, Star, Camera].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="w-14 h-14 bg-white rounded-xl shadow-card flex items-center justify-center"
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>
                ))}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {t('events.youthArtWall.bePartOf', "Be Part of Something Beautiful")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('events.youthArtWall.bePartOfDesc', "The Youth Art Wall isn't just about individual pieces—it's about creating a collective masterpiece that represents the dreams and aspirations of Andhra Pradesh's youth.")}
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default YouthArtWall;
