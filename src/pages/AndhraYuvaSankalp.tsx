import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { 
  Smartphone, 
  TrendingUp, 
  Heart, 
  Dumbbell, 
  Sparkles,
  Target,
  Users,
  Award,
  CheckCircle,
  Instagram,
  ExternalLink
} from "lucide-react";

const themes = [
  {
    icon: Heart,
    title: "Youth Empowerment",
    description: "Creating content that inspires and empowers the youth of Andhra Pradesh to reach their full potential.",
    color: "text-pink-500",
    bg: "bg-pink-100"
  },
  {
    icon: Sparkles,
    title: "Artificial Intelligence",
    description: "Exploring AI innovations and how youth can leverage technology for social good and career growth.",
    color: "text-purple-500",
    bg: "bg-purple-100"
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    description: "Promoting physical and mental health awareness among young people through engaging content.",
    color: "text-green-500",
    bg: "bg-green-100"
  },
  {
    icon: TrendingUp,
    title: "Social Impact",
    description: "Driving positive change in communities through awareness campaigns and social initiatives.",
    color: "text-blue-500",
    bg: "bg-blue-100"
  }
];

const marathonFeatures = [
  "Create engaging content on assigned themes",
  "Compete with creators across Andhra Pradesh",
  "Get featured on official government channels",
  "Win exciting prizes and recognition",
  "Build your portfolio with meaningful content",
  "Network with industry professionals"
];

// Social media posts for the carousel - now with actual images
const socialPosts = [
  {
    id: "ays-1",
    type: "instagram" as const,
    url: "https://x.com/naralokesh/status/1955123971164344469",
    title: "Event Announcement",
    description: "Latest updates from Hon'ble Minister",
    image: "/ays/a1.png"
  },
  {
    id: "ays-2",
    type: "instagram" as const,
    url: "https://www.instagram.com/p/DNPeH4JTuJ0/",
    title: "Event Highlight",
    description: "Moments from YUVA community",
    image: "/ays/a2.png"
  },
  {
    id: "ays-3",
    type: "instagram" as const,
    url: "https://www.instagram.com/reel/DP1yDDKkuvC/",
    title: "Behind the Scenes",
    description: "Exclusive backstage moments",
    image: "/ays/a3.png"
  },
  {
    id: "ays-4",
    type: "instagram" as const,
    url: "https://www.instagram.com/reel/DP1slFKEruB/",
    title: "Event Coverage",
    description: "Festival highlights",
    image: "/ays/a4.png"
  },
  {
    id: "ays-5",
    type: "instagram" as const,
    url: "https://www.instagram.com/reel/DPok_5Bk6NF/",
    title: "Live Moments",
    description: "Capturing the energy",
    image: "/ays/a5.png"
  },
];

const AndhraYuvaSankalp = () => {
  const themesRef = useRef(null);
  const marathonRef = useRef(null);
  const socialRef = useRef(null);
  
  const isThemesInView = useInView(themesRef, { once: true, margin: "-100px" });
  const isMarathonInView = useInView(marathonRef, { once: true, margin: "-100px" });
  const isSocialInView = useInView(socialRef, { once: true, margin: "-100px" });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        eyebrow="Digital Marathon"
        eyebrowIcon={Smartphone}
        title="Andhra Yuva Sankalp"
        description="A digital marathon on the themes of Youth Empowerment, AI, Fitness & Social Impact. Unleashing the talent and creativity of youth through content creation for social awareness."
        themeKey="andhra-yuva-sankalp"
      />

      {/* Themes Section
      <section ref={themesRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isThemesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Content Creation Themes
            </span>
            <h2 className="section-title">Create Content That Matters</h2>
            <p className="section-subtitle mx-auto">
              Choose your theme and create impactful content that resonates with the youth of Andhra Pradesh.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {themes.map((theme, index) => (
              <motion.div
                key={theme.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isThemesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-all duration-300 group"
              >
                <div className={`w-14 h-14 ${theme.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <theme.icon className={`w-7 h-7 ${theme.color}`} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {theme.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {theme.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Digital Marathon Section
      <section ref={marathonRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isMarathonInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  The Challenge
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Digital Marathon
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The Andhra Yuva Sankalp Digital Marathon is a state-wide content creation competition 
                where young creators compete to produce the most impactful, creative, and engaging 
                content on themes that matter to society.
              </p>

              <div className="space-y-3">
                {marathonFeatures.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isMarathonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isMarathonInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-festival-gold-light to-festival-offwhite rounded-3xl p-8 md:p-10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-white rounded-2xl shadow-card">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">26</div>
                    <div className="text-sm text-muted-foreground">Districts</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-card">
                    <Smartphone className="w-8 h-8 text-accent mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">4</div>
                    <div className="text-sm text-muted-foreground">Themes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-card">
                    <Award className="w-8 h-8 text-festival-gold mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">₹50K+</div>
                    <div className="text-sm text-muted-foreground">Prizes</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-2xl shadow-card">
                    <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-3xl font-bold text-foreground">1M+</div>
                    <div className="text-sm text-muted-foreground">Reach</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

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
              Social Highlights
            </p>
            <h2 className="section-title">Follow the Buzz</h2>
            <p className="section-subtitle mx-auto">
              Real moments from YUVA community across social platforms
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
                      alt={post.title}
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
                        {post.title}
                      </p>
                      <p className="text-xs text-white/70">
                        {post.description}
                      </p>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <span className="flex items-center gap-2 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                        <ExternalLink className="w-4 h-4" />
                        View Post
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
              Follow @andhrayuvasankalp2k25
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AndhraYuvaSankalp;
