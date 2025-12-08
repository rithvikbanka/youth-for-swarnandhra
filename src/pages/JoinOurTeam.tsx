import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RoleSection, type RoleKey } from "@/components/RoleSection";
import { ORG_TEAM_FORM_VIEW_URL } from "@/lib/googleForms";

const rolesData = [
  {
    roleKey: "reporter" as RoleKey,
    title: "YUVA Reporters",
    tagline: "Be the voice of the festival",
    intro:
      "YUVA Reporters are the storytellers of the festival, capturing moments, interviewing participants, and sharing the energy of YUVA 2025 with the world. You'll work closely with the media team to create compelling content that showcases youth talent and festival highlights.",
    responsibilities: [
      "Cover events and capture real-time stories",
      "Interview participants, speakers, and organizers",
      "Write articles, social media posts, and event summaries",
      "Collaborate with the media team on content strategy",
      "Report from multiple venues across the festival",
    ],
    whoShouldApply: [
      "Students interested in journalism or media",
      "Strong communication and writing skills",
      "Comfortable speaking with strangers",
      "Available for all 3 days of the festival",
      "Active on social media platforms",
    ],
    incentives: [
      "Official YUVA Reporter credential and kit",
      "Certificate of participation",
      "Published bylines and portfolio building",
      "Networking with media professionals",
      "Free access to all festival events",
    ],
    outcomes: [
      "Build a portfolio of published work",
      "Gain real journalism experience",
      "Connect with media industry mentors",
      "Letter of recommendation for outstanding reporters",
      "Opportunity for future state-level media roles",
    ],
  },
  {
    roleKey: "fellow" as RoleKey,
    title: "Yuvasrishti Fellows",
    tagline: "Shape the future of youth policy",
    intro:
      "Yuvasrishti Fellows are emerging leaders who contribute to policy discussions, youth development initiatives, and community engagement. This fellowship offers a unique opportunity to work alongside government officials and policy experts to shape programs that impact millions of young people in Andhra Pradesh.",
    responsibilities: [
      "Participate in policy research and documentation",
      "Support the coordination of special events",
      "Engage with youth participants and gather feedback",
      "Assist in organizing panel discussions and workshops",
      "Document best practices and success stories",
    ],
    whoShouldApply: [
      "Graduate students or recent graduates",
      "Interest in public policy and governance",
      "Leadership experience in college or community",
      "Strong analytical and research skills",
      "Commitment to youth development",
    ],
    incentives: [
      "Official Yuvasrishti Fellowship certificate",
      "Stipend for the fellowship duration",
      "Direct mentorship from senior officials",
      "Access to exclusive policy sessions",
      "Recognition at the valedictory ceremony",
    ],
    outcomes: [
      "Hands-on policy experience",
      "Network with government leaders",
      "Contribute to the State Youth Vision Document",
      "Pathway to future government fellowships",
      "Strong reference for higher education applications",
    ],
  },
  {
    roleKey: "creator" as RoleKey,
    title: "YUVA Creators Squad",
    tagline: "Create content that inspires",
    intro:
      "The YUVA Creators Squad is a team of digital content creators who bring the festival to life online. From Instagram reels to YouTube vlogs, from graphic design to photography, creators will produce engaging content that captures the spirit of YUVA 2025 and reaches millions across social media.",
    responsibilities: [
      "Create engaging social media content (reels, stories, posts)",
      "Photograph and videograph festival events",
      "Design graphics and visual assets",
      "Manage live coverage on official channels",
      "Collaborate with the communications team",
    ],
    whoShouldApply: [
      "Content creators with an active social presence",
      "Skills in video editing, photography, or design",
      "Experience with Instagram, YouTube, or similar platforms",
      "Creative mindset and eye for aesthetics",
      "Own equipment (smartphone with good camera is sufficient)",
    ],
    incentives: [
      "Official Creator Squad badge and merchandise",
      "Feature on official YUVA social media channels",
      "Access to professional equipment during the event",
      "Workshop on content creation from industry experts",
      "Prizes for best content in different categories",
    ],
    outcomes: [
      "Massive exposure for your personal brand",
      "Portfolio of professional event content",
      "Connect with brands and agencies",
      "Certificate and recommendation letter",
      "Potential collaboration for future government events",
    ],
  },
  {
    roleKey: "organiser" as RoleKey,
    title: "YUVA Organisers",
    tagline: "Be the backbone of YUVA 2025",
    intro:
      "The Andhra Pradesh State Youth Festival (YUVA 2025) invites dynamic youth to join the Organising Team, the group that works closely with the management team to run the festival smoothly and professionally. This is the perfect opportunity for students who want real event experience, enjoy teamwork, love leadership roles, and want to be part of a state-level movement.",
    responsibilities: [
      "Festival Operations & Coordination",
      "Registration & Help Desk",
      "Youth Con Support",
      "Youth Impact Labs Support",
      "Cultural & Talent Zones Assistance",
      "Creatives & Media Support",
      "Logistics Support",
      "Communication & Announcements",
      "VIP & Speaker Handling",
      "General Festival Operations",
      "Supporting ANY task that ensures the event's success",
    ],
    whoShouldApply: [
      "Students with leadership, initiative, and teamwork spirit",
      "Youth interested in event management, operations, public administration, and project coordination",
      "Active, energetic youth passionate about organising real events",
      "Those who love being on-ground, interacting with people, and solving challenges",
      "Youth who want to contribute to Swarnandhra's youth movement",
      "Mandatory: Must be available 15–20 December (full-time)",
      "Mandatory: Must be responsible, disciplined, and punctual",
      "Mandatory: Must be good at communication and people-handling",
    ],
    incentives: [
      "Government of Andhra Pradesh Certificate",
      "Backstage Access & Networking",
      "Real Event Management Experience",
      "Valuable Experience for Resume & Job Interviews",
      "Recognition on Official Pages",
      "Priority for Future Youth Programs",
      "Pathway to Become Future Youth Leaders",
    ],
    outcomes: [
      "Leadership roles in youth events",
      "Professional event management",
      "Public policy exposure",
      "Entrepreneurship & creative leadership",
      "Building a strong network of mentors & achievers",
      "Being part of the Organising Team can open doors to a career in youth leadership and event management. This is more than a volunteer role — it is an entry point into Andhra's youth leadership ecosystem.",
    ],
  },
];

/**
 * Opens the official Organising Team Google Form in a new tab
 */
const openOrgTeamForm = () => {
  window.open(ORG_TEAM_FORM_VIEW_URL, "_blank");
};

const JoinOurTeam = () => {
  // Handler for "Apply Now" button on role cards - opens Google Form
  const handleApplyClick = (_roleKey: RoleKey, _roleLabel: string) => {
    openOrgTeamForm();
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section - Matching event page banners */}
      <section 
        className="relative min-h-[55vh] flex items-center overflow-hidden"
        style={{ backgroundColor: "#780F7C" }}
      >
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-white/15 text-white text-sm font-semibold rounded-full mb-6"
            >
              Be Part of the Organising Team
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Join the YUVA Organising Team
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              Apply to contribute behind the scenes as a reporter, fellow, or creator 
              and help shape the Andhra Pradesh State Youth Festival.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Open Positions
            </span>
            <h2 className="section-title">Choose Your Role</h2>
            <p className="section-subtitle mx-auto">
              We're looking for passionate young people to join our team in four exciting roles.
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {rolesData.map((role, index) => (
              <motion.div
                key={role.roleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <RoleSection
                  {...role}
                  onApplyClick={handleApplyClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-festival-offwhite">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-muted-foreground mb-8">
              Don't miss this opportunity to be part of the largest youth festival in Andhra Pradesh. 
              Applications are open for a limited time.
            </p>
            <motion.button
              onClick={openOrgTeamForm}
              className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-festival-red-light to-festival-red text-white rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🎉 Apply Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* NOTE: ApplicationModal disabled - now using direct Google Form link */}
    </main>
  );
};

export default JoinOurTeam;
