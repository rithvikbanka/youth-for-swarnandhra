import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { 
  Mic, 
  Music, 
  Sparkles,
  Star,
  Users,
  Trophy,
  Zap,
  PartyPopper
} from "lucide-react";

const YouthTalentCarnival = () => {
  const { t } = useLanguage();
  const experienceRef = useRef(null);
  const whyRef = useRef(null);
  const howRef = useRef(null);
  
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-100px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isHowInView = useInView(howRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      icon: Mic,
      title: t('events.talentCarnival.openMic', "Open Mic Stage"),
      description: t('events.talentCarnival.openMicDesc', "Take the spotlight and perform your heart out in front of an enthusiastic crowd. Every voice matters!"),
      color: "text-primary",
      bg: "bg-primary/10"
    },
    {
      icon: Music,
      title: t('events.talentCarnival.liveMusic', "Live Music & Dance"),
      description: t('events.talentCarnival.liveMusicDesc', "From classical to contemporary, showcase your musical talents and dance moves that set the stage on fire."),
      color: "text-accent",
      bg: "bg-accent/10"
    },
    {
      icon: Sparkles,
      title: t('events.talentCarnival.poetryStorytelling', "Poetry & Storytelling"),
      description: t('events.talentCarnival.poetryStorytellingDesc', "Words have power. Share your stories, poems, and spoken word pieces that inspire and move audiences."),
      color: "text-purple-500",
      bg: "bg-purple-100"
    },
    {
      icon: Zap,
      title: t('events.talentCarnival.standupBeatbox', "Stand-up & Beatbox"),
      description: t('events.talentCarnival.standupBeatboxDesc', "Make them laugh, make them groove! Comedians and beatboxers bring unique energy to the carnival."),
      color: "text-festival-gold",
      bg: "bg-festival-gold/10"
    }
  ];

  const whyLoveIt = [
    {
      icon: Star,
      title: t('events.talentCarnival.zeroJudgment', "Zero Judgment Zone"),
      description: t('events.talentCarnival.zeroJudgmentDesc', "A supportive environment where every performance is celebrated, regardless of experience level.")
    },
    {
      icon: Users,
      title: t('events.talentCarnival.connectArtists', "Connect with Fellow Artists"),
      description: t('events.talentCarnival.connectArtistsDesc', "Meet like-minded creative souls from across Andhra Pradesh and build lasting connections.")
    },
    {
      icon: Trophy,
      title: t('events.talentCarnival.recognitionPrizes', "Recognition & Prizes"),
      description: t('events.talentCarnival.recognitionPrizesDesc', "Outstanding performers get recognized with awards, certificates, and exciting prizes.")
    },
    {
      icon: PartyPopper,
      title: t('events.talentCarnival.unforgettableExp', "Unforgettable Experience"),
      description: t('events.talentCarnival.unforgettableExpDesc', "Create memories that last a lifetime in the most energetic festival atmosphere.")
    }
  ];

  const howToParticipate = [
    t('events.talentCarnival.step1', "Register online through the YUVA portal"),
    t('events.talentCarnival.step2', "Select your performance category (music, poetry, stand-up, etc.)"),
    t('events.talentCarnival.step3', "Prepare your act (2-5 minutes)"),
    t('events.talentCarnival.step4', "Arrive at the venue on your scheduled day"),
    t('events.talentCarnival.step5', "Perform and shine! 🌟")
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="talent-carnival"
        title={t('events.talentCarnival.title', "Youth Talent Carnival")}
        subtitle={t('events.talentCarnival.subtitle', "Think of it as stage-time for everything you love — poetry, dance, music, stand-up, storytelling, beatboxing… basically anything that shows your creative spark. No judgement, no dynamics — just a stage waiting for your vibe.")}
        imageUrl="/eventpages/youthtalentcarnival.png"
        date={t('events.talentCarnival.date', "18-20 December 2025")}
        time={t('events.talentCarnival.time', "11 AM onwards")}
        location={t('events.talentCarnival.location', "Vijayawada, Andhra Pradesh")}
      />

      {/* What You'll Experience */}
      <section ref={experienceRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {t('events.talentCarnival.sectionEyebrow', "The Experience")}
            </span>
            <h2 className="section-title">{t('events.talentCarnival.sectionTitle', "What You'll Experience")}</h2>
            <p className="section-subtitle mx-auto">
              {t('events.talentCarnival.sectionSubtitle', "A celebration of raw talent, creativity, and the boundless energy of youth.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-card hover:shadow-xl transition-all duration-300 flex gap-5"
              >
                <div className={`w-14 h-14 ${exp.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <exp.icon className={`w-7 h-7 ${exp.color}`} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why You'll Love It */}
      <section ref={whyRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {t('events.talentCarnival.whyMagic', "The Magic")}
            </span>
            <h2 className="section-title">{t('events.talentCarnival.whyYoullLove', "Why You'll Love It")}</h2>
            <p className="section-subtitle mx-auto">
              {t('events.talentCarnival.whyYoullLoveSubtitle', "More than just a stage—it's where dreams take flight.")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLoveIt.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
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

      {/* How to Participate */}
      <section ref={howRef} className="section-padding bg-gradient-to-br from-festival-gold-light to-festival-offwhite">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHowInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                {t('events.talentCarnival.joinTheStage', "Join The Stage")}
              </span>
              <h2 className="section-title">{t('events.talentCarnival.howToParticipate', "How to Participate")}</h2>
            </motion.div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card">
              <div className="space-y-4">
                {howToParticipate.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isHowInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default YouthTalentCarnival;
