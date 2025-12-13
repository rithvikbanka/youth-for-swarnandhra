import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, FileText, Globe } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventHero } from "@/components/EventHero";
import { SocialIcon } from "@/components/icons/SocialIcon";
import { getSessionsByTagOnly } from "@/data/schedule";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";
import { useLanguage } from "@/i18n/LanguageContext";
import { trackRegistrationClick } from "@/lib/analytics";

// Derive schedule data from shared source
const talksSchedule = getSessionsByTagOnly("Youth Changemaker Talks");

// Event PDF resource
const EVENT_PDF_URL = "https://drive.google.com/file/d/1XXjw1BD7tiFGLwypRJn3HgowKHKkNykF/view?usp=drive_link";

// SPEAKERS in the required custom order:
const speakers = [
  // Dr. G. Trinadh Kumar
  {
    name: "Dr. G Trinadh Kumar, IFS",
    designation: "Inspector General of Forests (Central), Hyderabad.",
    image: "/speakers/s12.webp",
    // website: "https://fsi.nic.in/regional-director-southern-zone"
  },
  // Amitabh Ranjan
  {
    name: "Amitabh Ranjan",
    designation: "An IIT-educated administrator driving national capacity building, e-governance innovation, and public sector leadership",
    image: "/speakers/s13.webp"
  },
  // Vikas Marmat
  {
    name: "Vikas Marmat IAS",
    designation: "Project Director, Kuppam Area Development Authority, GoAP. Mechanical Engg, IIT Kanpur; MA Public Policy, JNU; LLM (Pro), NLUD; Author & Pianist.",
    image: "/speakers/s9.webp",
    // linkedinUrl: "https://www.linkedin.com/in/vikas-marmat/"
  },
  // Kommi Shiva Kishore
  {
    name: "Kommi Shiva Kishore, IPS",
    designation: "Indian Police Service officer and AI practitioner. IIT Kharagpur alumnus (2010–15) with expertise in financial engineering.",
    image: "/speakers/s6.webp",
    // linkedinUrl: "https://www.linkedin.com/in/kishorekommi/"
  },
  // Dhatri Reddy
  {
    name: "Dhatri Reddy, IAS",
    designation: "CEO, RTIH & APIS; IAS 2020 batch. Former Deutsche Bank professional and IIT Kharagpur graduate.",
    image: "/speakers/s7.webp",
    // linkedinUrl: "https://www.linkedin.com/in/dhatrireddy/"
  },
  // Apoorva Bharat
  {
    name: "Apoorva Bharat, IAS",
    designation: "Sub Collector, Etipaka, Government of Andhra Pradesh.",
    image: "/speakers/s8.webp"
  },
  // Sushmitha Ramanathan
  {
    name: "Sushmitha Ramanathan, IPS",
    designation: "ASP, Jangareddygudem, Eluru District, Andhra Pradesh.",
    image: "/speakers/s10.webp",
    // instagramUrl: "https://www.instagram.com/sushmitha.ramanathan_ips/"
  },
  // Madhish Parikh
  {
    name: "Madhish Parikh",
    designation: "National Youth Awardee, Govt of India. Founder & President, Elixir Foundation; Founding Director, BRICS Youth Alliance; Co-founder, Invincible; former Curator & Shaper, World Economic Forum.",
    image: "/speakers/s11.webp",
    // linkedinUrl: "https://www.linkedin.com/in/madhish/"
  },
  // Sudhanshu Kaushik
  {
    name: "Sudhanshu Kaushik",
    designation: "President & CEO, Centre for Youth Policy",
    image: "/speakers/s1.webp",
    // linkedinUrl: "https://www.linkedin.com/in/sudhanshukaushik/"
  },
  // Malika Pandey
  {
    name: "Malika Pandey",
    designation: "Public Policy Professional, represented India in BRICS Women & Former Assistant Private Secretary to Union Minister of Women & Child Development",
    image: "/speakers/s3.webp",
    // linkedinUrl: "https://www.linkedin.com/in/malika-pandey-035783182/"
  },
  // Anudeep Muttavarapu
  {
    name: "Anudeep Muttavarapu",
    designation: "Senior Director @ Motorola Solutions | Global Cloud, Data & AI Leader",
    image: "/speakers/s5.webp",
    // linkedinUrl: "https://www.linkedin.com/in/amuttavarapu/"
  },
  // Devansh S.
  {
    name: "Devansh S.",
    designation: "Policy Consultant to Government of India (GoI)",
    image: "/speakers/s4.webp",
    // linkedinUrl: "https://www.linkedin.com/in/devanshshah10/"
  },
  // Yash Agarwal
  {
    name: "Yash Agarwal",
    designation: "Founder, Public Policy India & Proficy",
    image: "/speakers/s2.webp",
    // linkedinUrl: "https://www.linkedin.com/in/yashagarwalm/"
  },
  // Prof. K V S G Murali Krishna
  {
    name: "Prof. K V S G Murali Krishna",
    designation: "Founder, Environmental Protection Society, Ex Vice Chancellor of JNTUK, Ex Member of SEAC (State Expert Appraisal Committee of AP), Author of 20+ Books",
    image: "/speakers/s14.webp"
  },
  // Dr. Shyla Talluri
  {
    name: "Dr. Shyla Talluri",
    designation: "Founder & CEO, PURE, US Presidential Lifetime Achievement Awardee",
    image: "/speakers/s15.webp"
  },
  // Dr. Jagadeesh G
  {
    name: "Dr. Jagadeesh G",
    designation: "Founder Smart Bhujal, Consultant International Water Management Institute (IWMI), Consultant CTO - CWD",
    image: "/speakers/s16.webp"
  },
  // Chandini Chandana
  {
    name: "Chandini Chandana",
    designation: "Co founder AVERA AI MOBILITY, Chairwomen CII IWIN AP",
    image: "/speakers/s17.webp"
  },
  // Vinay Nandina
  {
    name: "Vinay Nandina",
    designation: "Founder SRREPL, Alumni IIM Kozhikode",
    image: "/speakers/s18.webp"
  },
  // Jaya Peesapaty
  {
    name: "Jaya Peesapaty",
    designation: "Founder, Telugu Association Hong Kong, Cultural Ambassador & Awardee",
    image: "/speakers/s19.webp"
  },
  // Dr. Karumachi Nalini
  {
    name: "Dr. Karumachi Nalini",
    designation: "Obstetrics and Gynaecologist",
    image: "/speakers/s20.webp"
  },
];

const moderators = [
  {
    name: "Keshav Kaviti",
    designation: "Cloud FinOps Manager, Motorola Solutions",
    image: "/moderators/m2.webp",
    // linkedinUrl: "https://www.linkedin.com/in/keshav-kaviti-700358249/"
  },
  {
    name: "Rakesh Pendyala",
    designation: "MBA Gold Medalist, Business Leadership @ IIM Kozhikode",
    image: "/moderators/m1.webp",
    // linkedinUrl: "https://www.linkedin.com/in/rakesh-pendyala/"
  }
];

const openRegistrationForm = () => {
  trackRegistrationClick('youth_changemaker_talks_page');
  window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
};

const EventYouthChangemaker = () => {
  const scheduleRef = useRef(null);
  const speakersRef = useRef(null);
  const moderatorsRef = useRef(null);
  const isScheduleInView = useInView(scheduleRef, { once: true, margin: "-100px" });
  const isSpeakersInView = useInView(speakersRef, { once: true, margin: "-100px" });
  const isModeratorsInView = useInView(moderatorsRef, { once: true, margin: "-100px" });
  const { t, locale } = useLanguage();

  const content = locale === 'te' ? {
    title: "యువ చేంజ్‌మేకర్ చర్చలు",
    subtitle: "సానుకూల మార్పు యొక్క క్రియాశీల ఏజెంట్‌లుగా మారడానికి యువతను సశక్తం చేయడంపై దృష్టి, వారి వినూత్న పరిష్కారాలు, నాయకత్వం మరియు సామాజిక మరియు ఆర్థిక సమస్యలను పరిష్కరించాలనే ఆకాంక్షను హైలైట్ చేయడం.",
    date: "18-20 డిసెంబర్ 2025",
    time: "మూడు రోజులలో సెషన్లు",
    location: "విజయవాడ, ఆంధ్ర ప్రదేశ్",
    sectionEyebrow: "పరివర్తన చర్చలు & ఇంటరాక్షన్లు",
    sectionTitle: "భారతదేశ చేంజ్‌మేకర్లను కలవండి",
    sectionSubtitle: "దేశవ్యాప్తంగా ఆవిష్కరణ మరియు ప్రభావాన్ని నడిపిస్తున్న దార్శనిక స్పీకర్లు, పరిశ్రమ నిపుణులు మరియు సామాజిక వ్యవస్థాపకులతో కనెక్ట్ అవ్వండి.",
    viewPDF: "ఈవెంట్ వివరాలు PDF చూడండి",
    registerNow: "🎉 ఇప్పుడు నమోదు చేయండి",
    meetSpeakers: "స్పీకర్లను కలవండి",
    meetModerators: "మోడరేటర్లను కలవండి"
  } : {
    title: "Youth Changemaker Talks",
    subtitle: "A space for young minds who want to do more than dream — here you get to share ideas, propose solutions, and show how you can make real change. Whether you care about social issues, tech innovations, or community upliftment, this talk brings together energy, ideas and action. If you've got passion and purpose, this is where you get heard.",
    date: "18-20 December 2025",
    time: "Sessions across all three days",
    location: "Vijayawada, Andhra Pradesh",
    sectionEyebrow: "Transformative Talks & Interactions",
    sectionTitle: "Meet India's Changemakers",
    sectionSubtitle: "Connect with visionary speakers, industry experts, and social entrepreneurs driving innovation and impact across the nation.",
    viewPDF: "View Event Details PDF",
    registerNow: "🎉 Register Now",
    meetSpeakers: "Meet the Speakers",
    meetModerators: "Meet the Moderators"
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <EventHero
        slug="youth-changemaker-talks"
        title={content.title}
        subtitle={content.subtitle}
        // TODO: Uncomment when banner images are ready
        // imageUrl="/eventpages/youthchangemakertalks.webp"
        date={content.date}
        time={content.time}
        location={content.location}
      />

      {/* Combined Section: Header + Schedule + Register Button */}
      <section ref={scheduleRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              {content.sectionEyebrow}
            </span>
            <h2 className="section-title">{content.sectionTitle}</h2>
            <p className="section-subtitle mx-auto">
              {content.sectionSubtitle}
            </p>
            
            {/* Event PDF Button */}
            <div className="mt-6">
              <a
                href={EVENT_PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-colors text-sm font-semibold"
              >
                <FileText className="w-4 h-4" />
                {content.viewPDF}
              </a>
            </div>
          </motion.div>

          {/* Schedule Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {talksSchedule.map((day, dayIndex) => (
              <motion.div
                key={day.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: dayIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-primary to-accent p-4 md:p-6">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white">
                    {day.label}
                  </h3>
                  <p className="text-white/80 text-sm">{day.date}</p>
                </div>

                {/* Events List */}
                <div className="p-4 md:p-6 space-y-4">
                  {day.sessions.map((session, sessionIndex) => (
                    <motion.div
                      key={`${session.topic}-${sessionIndex}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isScheduleInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.2 + sessionIndex * 0.1 }}
                      className="p-4 bg-festival-offwhite rounded-xl hover:bg-festival-gold-light transition-colors duration-200"
                    >
                      <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                        <Clock size={14} />
                        <span>{session.time}</span>
                      </div>
                      <h4 className="font-bold text-foreground mb-2 text-base">
                        {session.topic}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        {session.description}
                      </p>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        <MapPin size={14} />
                        <span>{session.location}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
          <motion.button
              onClick={openRegistrationForm}
            className="btn-primary text-lg md:text-xl px-10 py-4 bg-gradient-to-r from-festival-red-light to-festival-red text-white rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              {content.registerNow}
          </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section ref={speakersRef} className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isSpeakersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
              Meet Distinguished Experts
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Learn from leaders shaping real-world impact across sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={speaker.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isSpeakersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <motion.div
                  className="w-[160px] h-[160px] mx-auto mb-4 overflow-hidden rounded-xl bg-muted"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Name & Designation */}
                <h3 className="font-bold text-lg text-foreground mb-1 text-center">
                  {speaker.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-center flex-grow">
                  {speaker.designation}
                </p>
                
                {/* Social Icon - Bottom Center */}
                {((speaker as any).linkedinUrl || (speaker as any).instagramUrl || (speaker as any).website) && (
                  <div className="flex justify-center pt-4 mt-4 border-t border-border">
                    {/* If the speaker has a "website" field, show globe icon, not LinkedIn */}
                    {(speaker as any).website && (
                      <a
                        href={(speaker as any).website as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${speaker.name} Website`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded transition-colors text-primary hover:text-accent"
                      >
                        <Globe className="w-5 h-5" />
                      </a>
                    )}
                    {/* Otherwise show relevant icons as before */}
                    {!(speaker as any).website && (speaker as any).linkedinUrl && (
                      <SocialIcon
                        href={(speaker as any).linkedinUrl as string}
                        platform="linkedin"
                        ariaLabel={`${speaker.name} on LinkedIn`}
                      />
                    )}
                    {!(speaker as any).website && (speaker as any).instagramUrl && (
                      <SocialIcon
                        href={(speaker as any).instagramUrl as string}
                        platform="instagram"
                        ariaLabel={`${speaker.name} on Instagram`}
                      />
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moderators Section */}
      <section ref={moderatorsRef} className="section-padding bg-festival-offwhite">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isModeratorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-heading font-bold text-center mb-10"
          >
            {content.meetModerators}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto">
            {moderators.map((moderator, index) => (
              <motion.div
                key={moderator.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isModeratorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-card hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
              >
                {/* Image */}
                <motion.div
                  className="w-[180px] h-[180px] mx-auto mb-4 overflow-hidden rounded-xl bg-muted"
                  whileHover={{ scale: 1.02 }}
                >
                  <img
                    src={moderator.image}
                    alt={moderator.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Name & Designation */}
                <h3 className="font-bold text-lg text-foreground mb-1 text-center">
                  {moderator.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-center flex-grow">
                  {moderator.designation}
                </p>
                
                {/* Social Icon - Bottom Center */}
                {(moderator as any).linkedinUrl && (
                  <div className="flex justify-center pt-4 mt-4 border-t border-border">
                    <SocialIcon
                      href={(moderator as any).linkedinUrl as string}
                      platform="linkedin"
                      ariaLabel={`${moderator.name} on LinkedIn`}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* NOTE: Registration modal disabled - now using direct Google Form link */}
    </main>
  );
};

export default EventYouthChangemaker;
