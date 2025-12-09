import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { useLanguage } from "@/i18n/LanguageContext";
import { 
  Instagram,
  ExternalLink,
} from "lucide-react";

// Social media posts for the carousel - now with actual images
const socialPosts = [
  {
    id: "ays-1",
    type: "instagram" as const,
    url: "https://x.com/naralokesh/status/1955123971164344469",
    image: "/ays/a1.jpg"
  },
  {
    id: "ays-2",
    type: "instagram" as const,
    url: "https://www.instagram.com/p/DNPeH4JTuJ0/",
    image: "/ays/a2.jpg"
  },
  {
    id: "ays-3",
    type: "instagram" as const,
    url: "https://www.instagram.com/reel/DP1yDDKkuvC/",
    image: "/ays/a3.jpg"
  },
  {
    id: "ays-4",
    type: "instagram" as const,
    url: "https://www.instagram.com/reel/DP1slFKEruB/",
    image: "/ays/a4.jpg"
  },
  {
    id: "ays-5",
    type: "instagram" as const,
    url: "https://www.instagram.com/reel/DPok_5Bk6NF/",
    image: "/ays/a5.jpg"
  },
];

const AndhraYuvaSankalp = () => {
  const socialRef = useRef(null);
  const isSocialInView = useInView(socialRef, { once: true, margin: "-100px" });
  const { locale } = useLanguage();

  const content = locale === 'te' ? {
    title: "ఆంధ్ర యువ సంకల్ప్",
    subtitle: "యువ సాధికారత, AI, ఫిట్‌నెస్ & సామాజిక ప్రభావ థీమ్‌లపై డిజిటల్ మారథాన్. సామాజిక అవగాహన కోసం కంటెంట్ సృష్టి ద్వారా యువత ప్రతిభ మరియు సృజనాత్మకతను విడుదల చేయడం.",
    socialEyebrow: "సామాజిక ముఖ్యాంశాలు",
    socialTitle: "బజ్‌ను అనుసరించండి",
    socialSubtitle: "సామాజిక వేదికల్లో YUVA సమూహం నుండి నిజమైన క్షణాలు",
    postTitles: ["ఈవెంట్ ప్రకటన", "ఈవెంట్ హైలైట్", "వెనుక దృశ్యాలు", "ఈవెంట్ కవరేజ్", "లైవ్ క్షణాలు"],
    postDescs: ["గౌరవనీయ మంత్రి నుండి తాజా అప్‌డేట్‌లు", "YUVA సమూహం నుండి క్షణాలు", "ప్రత్యేక బ్యాక్‌స్టేజ్ క్షణాలు", "ఉత్సవ ముఖ్యాంశాలు", "శక్తిని సంగ్రహించడం"],
    viewPost: "పోస్ట్ చూడండి",
    followButton: "@andhrayuvasankalp2k25 ను అనుసరించండి"
  } : {
    title: "Andhra Yuva Sankalp",
    subtitle: "A digital marathon on the themes of Youth Empowerment, AI, Fitness & Social Impact. Unleashing the talent and creativity of youth through content creation for social awareness.",
    socialEyebrow: "Social Highlights",
    socialTitle: "Follow the Buzz",
    socialSubtitle: "Real moments from YUVA community across social platforms",
    postTitles: ["Event Announcement", "Event Highlight", "Behind the Scenes", "Event Coverage", "Live Moments"],
    postDescs: ["Latest updates from Hon'ble Minister", "Moments from YUVA community", "Exclusive backstage moments", "Festival highlights", "Capturing the energy"],
    viewPost: "View Post",
    followButton: "Follow @andhrayuvasankalp2k25"
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="andhra-yuva-sankalp"
        title={content.title}
        subtitle={content.subtitle}
        imageUrl="/eventpages/andhrayuvasankalp.png"
      />

      {/* Social Media Highlights Section */}
      <section ref={socialRef} className="section-padding bg-gradient-to-b from-festival-offwhite to-primary/5">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSocialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-4">
              {content.socialEyebrow}
            </p>
            <h2 className="section-title">{content.socialTitle}</h2>
            <p className="section-subtitle mx-auto">
              {content.socialSubtitle}
            </p>
          </motion.div>

          {/* Horizontal Scrollable Container on mobile, Grid on desktop */}
          <div className="overflow-x-auto pb-4 md:pb-0 -mx-4 px-4">
            <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 md:gap-6 min-w-max md:min-w-full">
              {socialPosts.map((post, index) => (
                <motion.a
                  key={post.id}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isSocialInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="block flex-shrink-0 w-64 md:w-full group"
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                    {/* Actual Image */}
                    <img
                      src={post.image}
                      alt={content.postTitles[index]}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Instagram className="w-4 h-4 text-white" />
                        <span className="text-xs text-white/80 font-medium">
                          @andhrayuvasankalp2k25
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-white mb-0.5">
                        {content.postTitles[index]}
                      </p>
                      <p className="text-xs text-white/70">
                        {content.postDescs[index]}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        <ExternalLink className="w-4 h-4" />
                        {content.viewPost}
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA to Instagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSocialInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://www.instagram.com/andhrayuvasankalp2k25"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg transition-all font-semibold"
            >
              <Instagram className="w-5 h-5" />
              {content.followButton}
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AndhraYuvaSankalp;
