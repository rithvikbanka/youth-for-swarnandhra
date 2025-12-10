import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { 
  Gem,
  Palette, 
  Heart, 
  Users,
  Sparkles,
  Star,
  ShoppingBag,
  HandHeart,
  Leaf,
  BookOpen
} from "lucide-react";

const Yuvasrishti = () => {
  const { t } = useLanguage();
  const seeRef = useRef(null);
  const connectRef = useRef(null);
  const zoneRef = useRef(null);
  
  const isSeeInView = useInView(seeRef, { once: true, margin: "-100px" });
  const isConnectInView = useInView(connectRef, { once: true, margin: "-100px" });
  const isZoneInView = useInView(zoneRef, { once: true, margin: "-100px" });

  const youllSee = [
    {
      icon: Palette,
      title: t('events.yuvasrishti.traditionalCrafts', "Traditional Crafts"),
      description: t('events.yuvasrishti.traditionalCraftsDesc', "Witness master artisans at work—pottery, weaving, wood carving, and centuries-old techniques passed down through generations.")
    },
    {
      icon: Gem,
      title: t('events.yuvasrishti.handloomHeritage', "Handloom Heritage"),
      description: t('events.yuvasrishti.handloomHeritageDesc', "Explore the rich tradition of Andhra handlooms—Mangalagiri, Uppada, Venkatagiri, and more—each thread telling a story.")
    },
    {
      icon: ShoppingBag,
      title: t('events.yuvasrishti.artisanMarketplace', "Artisan Marketplace"),
      description: t('events.yuvasrishti.artisanMarketplaceDesc', "Shop directly from artisans, supporting local communities while taking home authentic pieces of Andhra's heritage.")
    },
    {
      icon: Sparkles,
      title: t('events.yuvasrishti.liveDemonstrations', "Live Demonstrations"),
      description: t('events.yuvasrishti.liveDemonstrationsDesc', "Watch craftspeople create magic before your eyes—from block printing to bronze casting.")
    }
  ];

  const connectsWith = [
    {
      icon: HandHeart,
      title: t('events.yuvasrishti.masterArtisans', "Master Artisans"),
      description: t('events.yuvasrishti.masterArtisansDesc', "Meet the guardians of traditional crafts and learn their stories of preserving heritage.")
    },
    {
      icon: Users,
      title: t('events.yuvasrishti.youngEntrepreneurs', "Young Entrepreneurs"),
      description: t('events.yuvasrishti.youngEntrepreneursDesc', "Connect with youth who are reviving traditional crafts with modern business approaches.")
    },
    {
      icon: Leaf,
      title: t('events.yuvasrishti.sustainablePractices', "Sustainable Practices"),
      description: t('events.yuvasrishti.sustainablePracticesDesc', "Discover eco-friendly craft techniques that honor both tradition and the environment.")
    },
    {
      icon: BookOpen,
      title: t('events.yuvasrishti.culturalStories', "Cultural Stories"),
      description: t('events.yuvasrishti.culturalStoriesDesc', "Every craft has a story—learn about the history, symbolism, and meaning behind each creation.")
    }
  ];

  const experienceZones = [
    {
      title: t('events.yuvasrishti.heritageWalk', "Heritage Walk"),
      description: t('events.yuvasrishti.heritageWalkDesc', "Guided tours through craft villages and artisan communities")
    },
    {
      title: t('events.yuvasrishti.handsOnWorkshop', "Hands-On Workshop"),
      description: t('events.yuvasrishti.handsOnWorkshopDesc', "Try your hand at traditional crafts with expert guidance")
    },
    {
      title: t('events.yuvasrishti.artisanStories', "Artisan Stories"),
      description: t('events.yuvasrishti.artisanStoriesDesc', "Interactive sessions with master craftspeople sharing their journeys")
    },
    {
      title: t('events.yuvasrishti.youthInnovationHub', "Youth Innovation Hub"),
      description: t('events.yuvasrishti.youthInnovationHubDesc', "Where traditional crafts meet modern design and technology")
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="yuvasrishti"
        title={t('events.yuvasrishti.title', "Yuvasrishti")}
        subtitle={t('events.yuvasrishti.subtitle', "Step into the heart of Andhra's heritage — explore crafts, handlooms, local artistry and culture, led by youth for youth. Traditional skills meet youthful energy, with interactive stalls, artisans' stories and creative showcases rooted in our culture.")}
        // TODO: Uncomment when banner images are ready
        // imageUrl="/eventpages/yuvasrishti.png"
        date={t('events.yuvasrishti.date', "18-20 December 2025")}
        time={t('events.yuvasrishti.time', "Full Day")}
        location={t('events.yuvasrishti.location', "Vijayawada, Andhra Pradesh")}
      />

      {/* You'll See Section */}
      <section ref={seeRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isSeeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {t('events.yuvasrishti.sectionEyebrow', "Discover Heritage")}
            </span>
            <h2 className="section-title">{t('events.yuvasrishti.sectionTitle', "You'll See")}</h2>
            <p className="section-subtitle mx-auto">
              {t('events.yuvasrishti.sectionSubtitle', "A living showcase of Andhra Pradesh's rich artistic heritage and craftsmanship.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {youllSee.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isSeeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-xl transition-all duration-300 flex gap-5"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What Yuvasrishti Connects You With */}
      <section ref={connectRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isConnectInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {t('events.yuvasrishti.makeConnections', "Make Connections")}
            </span>
            <h2 className="section-title">{t('events.yuvasrishti.connectsWith', "Yuvasrishti Connects You With")}</h2>
            <p className="section-subtitle mx-auto">
              {t('events.yuvasrishti.connectsWithSubtitle', "More than exhibits—meaningful connections with the people and stories behind the craft.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {connectsWith.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isConnectInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-full shadow-card flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Zones */}
      <section ref={zoneRef} className="section-padding bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isZoneInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {t('events.yuvasrishti.interactiveExperiences', "Interactive Experiences")}
            </span>
            <h2 className="section-title">{t('events.yuvasrishti.experienceZones', "Experience Zones")}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {experienceZones.map((zone, index) => (
              <motion.div
                key={zone.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isZoneInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      {zone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {zone.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Yuvasrishti;
