import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { RoleSection, type RoleKey } from "@/components/RoleSection";
import { ORG_TEAM_FORM_VIEW_URL } from "@/lib/googleForms";
import { useLanguage } from "@/i18n/LanguageContext";

/**
 * Opens the official Organising Team Google Form in a new tab
 */
const openOrgTeamForm = () => {
  window.open(ORG_TEAM_FORM_VIEW_URL, "_blank");
};

const JoinOurTeam = () => {
  const { locale } = useLanguage();
  
  // Handler for "Apply Now" button on role cards - opens Google Form
  const handleApplyClick = (_roleKey: RoleKey, _roleLabel: string) => {
    openOrgTeamForm();
  };

  const content = locale === 'te' ? {
    heroButton: "ఆర్గనైజింగ్ టీమ్‌లో భాగం అవ్వండి",
    title: "YUVA ఆర్గనైజింగ్ టీమ్‌లో చేరండి",
    subtitle: "ఆంధ్ర ప్రదేశ్ రాష్ట్ర యువ ఉత్సవాన్ని రూపొందించడంలో సహాయపడటానికి రిపోర్టర్, ఫెల్లో లేదా క్రియేటర్‌గా వెనుక భాగంలో సహకరించడానికి దరఖాస్తు చేయండి.",
    openPositions: "ఓపెన్ పొజిషన్లు",
    chooseRole: "మీ పాత్రను ఎంచుకోండి",
    chooseRoleDesc: "నాలుగు ఉత్తేజకరమైన పాత్రలలో మా బృందంలో చేరడానికి మేము ఉత్సాహవంతులైన యువతను వెతుకుతున్నాము.",
    readyToMakeDifference: "తేడా చేయడానికి సిద్ధంగా ఉన్నారా?",
    dontMissOpportunity: "ఆంధ్ర ప్రదేశ్‌లో అతిపెద్ద యువ ఉత్సవంలో భాగం అయ్యే ఈ అవకాశాన్ని మిస్ చేయకండి. పరిమిత సమయం వరకు దరఖాస్తులు తెరిచి ఉన్నాయి.",
    applyNow: "🎉 ఇప్పుడు దరఖాస్తు చేయండి"
  } : {
    heroButton: "Be Part of the Organising Team",
    title: "Join the YUVA Organising Team",
    subtitle: "Apply to contribute behind the scenes as a reporter, fellow, or creator and help shape the Andhra Pradesh State Youth Festival.",
    openPositions: "Open Positions",
    chooseRole: "Choose Your Role",
    chooseRoleDesc: "We're looking for passionate young people to join our team in four exciting roles.",
    readyToMakeDifference: "Ready to Make a Difference?",
    dontMissOpportunity: "Don't miss this opportunity to be part of the largest youth festival in Andhra Pradesh. Applications are open for a limited time.",
    applyNow: "🎉 Apply Now"
  };

  const rolesData = locale === 'te' ? [
    {
      roleKey: "reporter" as RoleKey,
      title: "YUVA రిపోర్టర్లు",
      tagline: "ఉత్సవ గొంతుక అవ్వండి",
      intro: "YUVA రిపోర్టర్లు ఉత్సవ కథకులు, క్షణాలను సంగ్రహిస్తారు, పాల్గొనేవారిని ఇంటర్వ్యూ చేస్తారు మరియు YUVA 2025 శక్తిని ప్రపంచంతో పంచుకుంటారు. యువ ప్రతిభ మరియు ఉత్సవ ముఖ్యాంశాలను ప్రదర్శించే ఆకర్షణీయమైన కంటెంట్ సృష్టించడానికి మీరు మీడియా బృందంతో కలిసి పని చేస్తారు.",
      responsibilities: [
        "ఈవెంట్‌లను కవర్ చేయండి మరియు నిజ-సమయ కథలను సంగ్రహించండి",
        "పాల్గొనేవారు, స్పీకర్లు మరియు నిర్వాహకులను ఇంటర్వ్యూ చేయండి",
        "వ్యాసాలు, సామాజిక మీడియా పోస్టులు మరియు ఈవెంట్ సారాంశాలు రాయండి",
        "కంటెంట్ వ్యూహంపై మీడియా బృందంతో సహకరించండి",
        "ఉత్సవంలో బహుళ వేదికల నుండి నివేదించండి",
      ],
      whoShouldApply: [
        "జర్నలిజం లేదా మీడియాలో ఆసక్తి ఉన్న విద్యార్థులు",
        "బలమైన కమ్యూనికేషన్ మరియు రాయడం నైపుణ్యాలు",
        "అపరిచితులతో మాట్లాడటానికి సౌకర్యంగా ఉండటం",
        "ఉత్సవ మొత్తం 3 రోజులు అందుబాటులో ఉండటం",
        "సామాజిక మీడియా ప్లాట్‌ఫారమ్‌లలో చురుకుగా ఉండటం",
      ],
      incentives: [
        "అధికారిక YUVA రిపోర్టర్ క్రెడెన్షియల్ మరియు కిట్",
        "పాల్గొనే సర్టిఫికేట్",
        "ప్రచురించిన బైలైన్‌లు మరియు పోర్ట్‌ఫోలియో నిర్మాణం",
        "మీడియా నిపుణులతో నెట్‌వర్కింగ్",
        "అన్ని ఉత్సవ ఈవెంట్‌లకు ఉచిత యాక్సెస్",
      ],
      outcomes: [
        "ప్రచురించిన పని యొక్క పోర్ట్‌ఫోలియో నిర్మించండి",
        "నిజమైన జర్నలిజం అనుభవం పొందండి",
        "మీడియా పరిశ్రమ మెంటార్‌లతో కనెక్ట్ అవ్వండి",
        "అత్యుత్తమ రిపోర్టర్ల కోసం సిఫారసు లేఖ",
        "భవిష్యత్ రాష్ట్ర-స్థాయి మీడియా పాత్రలకు అవకాశం",
      ],
    },
    {
      roleKey: "fellow" as RoleKey,
      title: "యువసృష్టి ఫెల్లోలు",
      tagline: "యువ విధాన భవిష్యత్తును రూపొందించండి",
      intro: "యువసృష్టి ఫెల్లోలు విధాన చర్చలు, యువ అభివృద్ధి కార్యక్రమాలు మరియు సమాజ నిశ్చితార్థానికి సహకరించే ఉద్భవిస్తున్న నాయకులు. ఈ ఫెల్లోషిప్ ఆంధ్ర ప్రదేశ్‌లో లక్షలాది యువతను ప్రభావితం చేసే కార్యక్రమాలను రూపొందించడానికి ప్రభుత్వ అధికారులు మరియు విధాన నిపుణులతో కలిసి పని చేయడానికి ప్రత్యేక అవకాశాన్ని అందిస్తుంది.",
      responsibilities: [
        "విధాన పరిశోధన మరియు డాక్యుమెంటేషన్‌లో పాల్గొనండి",
        "ప్రత్యేక ఈవెంట్‌ల సమన్వయానికి మద్దతు ఇవ్వండి",
        "యువ పాల్గొనేవారితో నిశ్చితార్థం మరియు ఫీడ్‌బ్యాక్ సేకరించండి",
        "ప్యానల్ చర్చలు మరియు వర్క్‌షాప్‌ల నిర్వహణలో సహాయపడండి",
        "ఉత్తమ అభ్యాసాలు మరియు విజయ కథలను డాక్యుమెంట్ చేయండి",
      ],
      whoShouldApply: [
        "గ్రాడ్యుయేట్ విద్యార్థులు లేదా ఇటీవలి గ్రాడ్యుయేట్లు",
        "పబ్లిక్ పాలసీ మరియు పాలనలో ఆసక్తి",
        "కళాశాల లేదా సమాజంలో నాయకత్వ అనుభవం",
        "బలమైన విశ్లేషణాత్మక మరియు పరిశోధన నైపుణ్యాలు",
        "యువ అభివృద్ధికి నిబద్ధత",
      ],
      incentives: [
        "అధికారిక యువసృష్టి ఫెల్లోషిప్ సర్టిఫికేట్",
        "ఫెల్లోషిప్ వ్యవధికి స్టైపెండ్",
        "సీనియర్ అధికారుల నుండి ప్రత్యక్ష మార్గదర్శకత్వం",
        "ప్రత్యేక విధాన సెషన్‌లకు యాక్సెస్",
        "వీడ్కోలు వేడుకలో గుర్తింపు",
      ],
      outcomes: [
        "హ్యాండ్స్-ఆన్ పాలసీ అనుభవం",
        "ప్రభుత్వ నాయకులతో నెట్‌వర్క్",
        "రాష్ట్ర యువ విజన్ డాక్యుమెంట్‌కు సహకారం",
        "భవిష్యత్ ప్రభుత్వ ఫెల్లోషిప్‌లకు మార్గం",
        "ఉన్నత విద్య దరఖాస్తులకు బలమైన రిఫరెన్స్",
      ],
    },
    {
      roleKey: "creator" as RoleKey,
      title: "YUVA క్రియేటర్స్ స్క్వాడ్",
      tagline: "స్ఫూర్తినిచ్చే కంటెంట్ సృష్టించండి",
      intro: "YUVA క్రియేటర్స్ స్క్వాడ్ అనేది ఉత్సవాన్ని ఆన్‌లైన్‌లో జీవంతం చేసే డిజిటల్ కంటెంట్ క్రియేటర్ల బృందం. ఇన్‌స్టాగ్రామ్ రీల్స్ నుండి యూట్యూబ్ వ్లాగ్స్ వరకు, గ్రాఫిక్ డిజైన్ నుండి ఫోటోగ్రఫీ వరకు, క్రియేటర్లు YUVA 2025 స్ఫూర్తిని సంగ్రహించే మరియు సామాజిక మీడియాలో లక్షలాది మందికి చేరుకునే ఆకర్షణీయమైన కంటెంట్‌ను ఉత్పత్తి చేస్తారు.",
      responsibilities: [
        "ఆకర్షణీయమైన సామాజిక మీడియా కంటెంట్ సృష్టించండి (రీల్స్, స్టోరీలు, పోస్టులు)",
        "ఉత్సవ ఈవెంట్‌లను ఫోటోగ్రాఫ్ మరియు వీడియోగ్రాఫ్ చేయండి",
        "గ్రాఫిక్స్ మరియు విజువల్ ఆస్సెట్స్ డిజైన్ చేయండి",
        "అధికారిక ఛానల్‌లలో లైవ్ కవరేజ్ నిర్వహించండి",
        "కమ్యూనికేషన్స్ టీమ్‌తో సహకరించండి",
      ],
      whoShouldApply: [
        "యాక్టివ్ సోషల్ ప్రెజెన్స్ ఉన్న కంటెంట్ క్రియేటర్లు",
        "వీడియో ఎడిటింగ్, ఫోటోగ్రఫీ లేదా డిజైన్ నైపుణ్యాలు",
        "ఇన్‌స్టాగ్రామ్, యూట్యూబ్ లేదా సమానమైన ప్లాట్‌ఫారమ్‌లలో అనుభవం",
        "సృజనాత్మక మనస్తత్వం మరియు సౌందర్యానికి కన్ను",
        "సొంత పరికరాలు (మంచి కెమెరా ఉన్న స్మార్ట్‌ఫోన్ సరిపోతుంది)",
      ],
      incentives: [
        "అధికారిక క్రియేటర్ స్క్వాడ్ బ్యాడ్జ్ మరియు మర్చండైజ్",
        "అధికారిక YUVA సామాజిక మీడియా ఛానల్‌లలో ఫీచర్",
        "ఈవెంట్ సమయంలో ప్రొఫెషనల్ పరికరాలకు యాక్సెస్",
        "పరిశ్రమ నిపుణుల నుండి కంటెంట్ సృష్టిపై వర్క్‌షాప్",
        "వివిధ విభాగాలలో ఉత్తమ కంటెంట్ కోసం బహుమతులు",
      ],
      outcomes: [
        "మీ వ్యక్తిగత బ్రాండ్‌కు భారీ ఎక్స్‌పోజర్",
        "ప్రొఫెషనల్ ఈవెంట్ కంటెంట్ పోర్ట్‌ఫోలియో",
        "బ్రాండ్లు మరియు ఏజెన్సీలతో కనెక్ట్",
        "సర్టిఫికేట్ మరియు రికమండేషన్ లెటర్",
        "భవిష్యత్ ప్రభుత్వ ఈవెంట్‌ల కోసం సంభావ్య సహకారం",
      ],
    },
    {
      roleKey: "organiser" as RoleKey,
      title: "YUVA ఆర్గనైజర్లు",
      tagline: "YUVA 2025 వెన్నెముక అవ్వండి",
      intro: "ఆంధ్ర ప్రదేశ్ రాష్ట్ర యువ ఉత్సవం (YUVA 2025) ఉత్సవాన్ని సజావుగా మరియు ప్రొఫెషనల్‌గా నిర్వహించడానికి మేనేజ్‌మెంట్ టీమ్‌తో కలిసి పని చేసే ఆర్గనైజింగ్ టీమ్‌లో చేరడానికి డైనమిక్ యువతను ఆహ్వానిస్తోంది. నిజమైన ఈవెంట్ అనుభవం, టీమ్‌వర్క్, నాయకత్వ పాత్రలు కావాలనుకునే మరియు రాష్ట్ర-స్థాయి ఉద్యమంలో భాగం కావాలనుకునే విద్యార్థులకు ఇది సరైన అవకాశం.",
      responsibilities: [
        "ఉత్సవ ఆపరేషన్లు & సమన్వయం",
        "రిజిస్ట్రేషన్ & హెల్ప్ డెస్క్",
        "యూత్ కాన్ సపోర్ట్",
        "యూత్ ఇంపాక్ట్ ల్యాబ్స్ సపోర్ట్",
        "కల్చరల్ & టాలెంట్ జోన్స్ అసిస్టెన్స్",
        "క్రియేటివ్స్ & మీడియా సపోర్ట్",
        "లాజిస్టిక్స్ సపోర్ట్",
        "కమ్యూనికేషన్ & అనౌన్స్‌మెంట్స్",
        "VIP & స్పీకర్ హ్యాండ్లింగ్",
        "జనరల్ ఫెస్టివల్ ఆపరేషన్స్",
        "ఈవెంట్ విజయాన్ని నిర్ధారించే ఏదైనా పనికి సపోర్ట్",
      ],
      whoShouldApply: [
        "నాయకత్వం, చొరవ మరియు టీమ్‌వర్క్ స్ఫూర్తి ఉన్న విద్యార్థులు",
        "ఈవెంట్ మేనేజ్‌మెంట్, ఆపరేషన్స్, పబ్లిక్ అడ్మినిస్ట్రేషన్ మరియు ప్రాజెక్ట్ కోఆర్డినేషన్‌లో ఆసక్తి ఉన్న యువత",
        "నిజమైన ఈవెంట్‌లను నిర్వహించడంలో ఉత్సాహం ఉన్న యాక్టివ్, ఎనర్జెటిక్ యువత",
        "ఆన్-గ్రౌండ్ ఉండటం, వ్యక్తులతో ఇంటరాక్ట్ చేయడం మరియు సవాళ్లను పరిష్కరించడం ఇష్టపడేవారు",
        "స్వర్ణాంధ్ర యువ ఉద్యమానికి సహకరించాలనుకునే యువత",
        "తప్పనిసరి: 15–20 డిసెంబర్ (ఫుల్-టైమ్) అందుబాటులో ఉండాలి",
        "తప్పనిసరి: బాధ్యతగల, క్రమశిక్షణ కలిగిన మరియు సమయపాలన ఉన్నవారు",
        "తప్పనిసరి: కమ్యూనికేషన్ మరియు వ్యక్తులను నిర్వహించడంలో మంచివారు",
      ],
      incentives: [
        "ఆంధ్ర ప్రదేశ్ ప్రభుత్వ సర్టిఫికేట్",
        "బ్యాక్‌స్టేజ్ యాక్సెస్ & నెట్‌వర్కింగ్",
        "నిజమైన ఈవెంట్ మేనేజ్‌మెంట్ అనుభవం",
        "రెజ్యూమ్ & జాబ్ ఇంటర్వ్యూలకు విలువైన అనుభవం",
        "అధికారిక పేజీలలో గుర్తింపు",
        "భవిష్యత్ యూత్ ప్రోగ్రామ్‌లకు ప్రాధాన్యత",
        "భవిష్యత్ యూత్ లీడర్లుగా మారడానికి మార్గం",
      ],
      outcomes: [
        "యూత్ ఈవెంట్‌లలో నాయకత్వ పాత్రలు",
        "ప్రొఫెషనల్ ఈవెంట్ మేనేజ్‌మెంట్",
        "పబ్లిక్ పాలసీ ఎక్స్‌పోజర్",
        "ఎంటర్‌ప్రెన్యూర్‌షిప్ & క్రియేటివ్ లీడర్‌షిప్",
        "మెంటార్లు & అచీవర్లతో బలమైన నెట్‌వర్క్ నిర్మించడం",
        "ఆర్గనైజింగ్ టీమ్‌లో భాగం కావడం యూత్ లీడర్‌షిప్ మరియు ఈవెంట్ మేనేజ్‌మెంట్‌లో కెరీర్‌కు తలుపులు తెరుస్తుంది. ఇది వాలంటీర్ పాత్ర కంటే ఎక్కువ — ఇది ఆంధ్ర యూత్ లీడర్‌షిప్ ఎకోసిస్టమ్‌లోకి ఎంట్రీ పాయింట్.",
      ],
    },
  ] : [
    {
      roleKey: "reporter" as RoleKey,
      title: "YUVA Reporters",
      tagline: "Be the voice of the festival",
      intro: "YUVA Reporters are the storytellers of the festival, capturing moments, interviewing participants, and sharing the energy of YUVA 2025 with the world. You'll work closely with the media team to create compelling content that showcases youth talent and festival highlights.",
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
      intro: "Yuvasrishti Fellows are emerging leaders who contribute to policy discussions, youth development initiatives, and community engagement. This fellowship offers a unique opportunity to work alongside government officials and policy experts to shape programs that impact millions of young people in Andhra Pradesh.",
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
      intro: "The YUVA Creators Squad is a team of digital content creators who bring the festival to life online. From Instagram reels to YouTube vlogs, from graphic design to photography, creators will produce engaging content that captures the spirit of YUVA 2025 and reaches millions across social media.",
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
      intro: "The Andhra Pradesh State Youth Festival (YUVA 2025) invites dynamic youth to join the Organising Team, the group that works closely with the management team to run the festival smoothly and professionally. This is the perfect opportunity for students who want real event experience, enjoy teamwork, love leadership roles, and want to be part of a state-level movement.",
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
              {content.heroButton}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight"
            >
              {content.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/90 leading-relaxed"
            >
              {content.subtitle}
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
              {content.openPositions}
            </span>
            <h2 className="section-title">{content.chooseRole}</h2>
            <p className="section-subtitle mx-auto">
              {content.chooseRoleDesc}
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
              {content.readyToMakeDifference}
            </h2>
            <p className="text-muted-foreground mb-8">
              {content.dontMissOpportunity}
            </p>
            <motion.button
              onClick={openOrgTeamForm}
              className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-festival-red-light to-festival-red text-white rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {content.applyNow}
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
