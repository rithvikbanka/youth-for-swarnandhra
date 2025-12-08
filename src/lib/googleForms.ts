// Google Forms Integration for YUVA 2025
// This file handles form submissions to Google Sheets via Google Forms

// ==========================================
// OFFICIAL GOOGLE FORM URLs (for opening in new tab)
// ==========================================

export const PARTICIPANT_FORM_VIEW_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdFe9jkT-uebemyf0XakZYV6bzs9ofYIeIYtGgy0obUuQgZ4A/viewform";

export const ORG_TEAM_FORM_VIEW_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeEgQzLH2oUoViPc7TGZybONnWQHCv-GgUG43D5t8HKC1gb8Q/viewform";

// ==========================================
// PARTICIPANT REGISTRATION FORM (for programmatic submission - currently unused)
// ==========================================

const PARTICIPANT_FORM_ACTION = 
  "https://docs.google.com/forms/d/e/1FAIpQLSdFe9jkT-uebemyf0XakZYV6bzs9ofYIeIYtGgy0obUuQgZ4A/formResponse";

export type ParticipantFormData = {
  fullName: string;
  email: string;
  phone: string;              // 10 digits
  district: string;           // dropdown value
  place: string;
  institution: string;
  education: string;          // radio: Engineering, Sciences, Arts & Humanities, Medicine, Law, Business, Other
  yctTalks: string[];         // checkbox array (can be empty)
  youthCon: string[];         // checkbox array (can be empty)
  impactLabs: string[];       // checkbox array (can be empty)
  artWall: string[];          // checkbox array (can be empty)
  otherEvents: string[];      // checkbox array (can be empty) - Talent Carnival & Parade
  whyAttend: string;          // optional paragraph
};

export async function submitParticipantForm(data: ParticipantFormData): Promise<{ success: boolean; error?: unknown }> {
  const formData = new FormData();

  // Text fields
  formData.append("entry.197315648", data.fullName);           // Full Name
  formData.append("entry.1255820046", data.email);             // Email
  formData.append("entry.635788945", data.phone);              // Phone
  formData.append("entry.1925065098", data.district);          // District
  formData.append("entry.1819089087", data.place);             // Place
  formData.append("entry.1263661996", data.institution);       // Institution
  formData.append("entry.1262906876", data.education);         // Education (radio - single value)

  // Checkbox arrays - join with ", " separator
  formData.append("entry.1815929920", data.yctTalks.join(", "));       // YCT Talks
  formData.append("entry.1359227093", data.youthCon.join(", "));       // Youth CON
  formData.append("entry.1254925815", data.impactLabs.join(", "));     // Impact Labs
  formData.append("entry.1857872356", data.artWall.join(", "));        // Art Wall
  formData.append("entry.1357949505", data.otherEvents.join(", "));    // Other Events (Talent Carnival + Parade)
  formData.append("entry.1995886076", data.whyAttend);                 // Why Attend

  try {
    // Temporary logging for verification - REMOVE after confirming submissions work
    console.log("Submitting PARTICIPANT form", PARTICIPANT_FORM_ACTION, Object.fromEntries(formData));
    
    await fetch(PARTICIPANT_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    return { success: true };
  } catch (error) {
    console.error("Participant form submission error:", error);
    return { success: false, error };
  }
}

// ==========================================
// ORGANISING TEAM APPLICATION FORM
// ==========================================

const ORG_TEAM_FORM_ACTION = 
  "https://docs.google.com/forms/d/e/1FAIpQLSeEgQzLH2oUoViPc7TGZybONnWQHCv-GgUG43D5t8HKC1gb8Q/formResponse";

export type OrgTeamFormData = {
  fullName: string;
  email: string;
  phone: string;
  district: string;
  institution: string;
  role: string;               // YUVA Reporters | Yuvasrishti Fellows | YUVA Creators Squad | YUVA Organisers
  whyApply: string;           // paragraph, required
  portfolioLink?: string;     // optional URL/text
};

export async function submitOrgTeamForm(data: OrgTeamFormData): Promise<{ success: boolean; error?: unknown }> {
  const formData = new FormData();

  formData.append("entry.2033916031", data.fullName);               // Full Name
  formData.append("entry.1988851141", data.email);                  // Email
  formData.append("entry.1223652227", data.phone);                  // Phone
  formData.append("entry.1555009844", data.district);               // District
  formData.append("entry.1800093693", data.institution);            // Institution
  formData.append("entry.693143127", data.role);                    // Which role (radio)
  formData.append("entry.1910063239", data.whyApply);               // Why apply (required)
  formData.append("entry.542022404", data.portfolioLink || "");     // Portfolio (optional)

  try {
    // Temporary logging for verification - REMOVE after confirming submissions work
    console.log("Submitting ORG form", ORG_TEAM_FORM_ACTION, Object.fromEntries(formData));
    
    await fetch(ORG_TEAM_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });
    return { success: true };
  } catch (error) {
    console.error("Org team form submission error:", error);
    return { success: false, error };
  }
}

// ==========================================
// SHARED UTILITIES
// ==========================================

// List of all 26 AP districts
export const AP_DISTRICTS = [
  "Anantapur",
  "Chittoor",
  "East Godavari",
  "Guntur",
  "Kadapa",
  "Krishna",
  "Kurnool",
  "Nellore",
  "Prakasam",
  "Srikakulam",
  "Visakhapatnam",
  "Vizianagaram",
  "West Godavari",
  "Alluri Sitharama Raju",
  "Anakapalli",
  "Bapatla",
  "Eluru",
  "Kakinada",
  "Konaseema",
  "NTR",
  "Palnadu",
  "Parvathipuram Manyam",
  "Sri Potti Sriramulu Nellore",
  "Sri Sathya Sai",
  "Tirupati",
  "Other",
];

// Education options for participant form
export const EDUCATION_OPTIONS = [
  "Engineering",
  "Sciences",
  "Arts & Humanities",
  "Medicine",
  "Law",
  "Business",
  "Other",
];

export const YCT_TALKS_OPTIONS = [
  "Day 1 (18 Dec, 2-4 PM) – Green Innovation: Green Hydrogen Entrepreneurship",
  "Day 2 (19 Dec, 10 AM-12 PM) – Thought Leadership: Youth Vision Document",
  "Day 2 (19 Dec, 10 AM-12 PM) – Future of Work: Youth, AI & Quantum Tech",
  "Day 2 (19 Dec, 2-4 PM) – Wellness: Healthy Habits in the Digital Era",
  "Day 3 (20 Dec, 10 AM-12 PM) – Swarnandhra for Viksit Bharat 2047",
];

export const YOUTH_CON_OPTIONS = [
  "Day 1 (18 Dec, 2-4 PM) – Speed Mentoring & Networking",
  "Day 2 (19 Dec, 10 AM-12 PM) – Speed Mentoring & Networking",
  "Day 2 (19 Dec, 2-4 PM) – Table Lunch with Leaders",
  "Day 2 (19 Dec, 2-4 PM) – Speed Mentoring & Networking",
  "Day 2 (19 Dec, 4-6 PM) – Table Meetup with Leaders",
  "Day 3 (20 Dec, 12-2 PM) – Table Lunch with Leaders",
];

// Youth Impact Labs options
export const IMPACT_LABS_OPTIONS = [
  "Day 2 (19 Dec, 10 AM-2 PM) – Social Hackathon 1: UN SDGs",
  "Day 3 (20 Dec, 10 AM-2 PM) – Social Hackathon 2: Innovation & Entrepreneurship",
];

// Youth Art Wall options
export const ART_WALL_OPTIONS = [
  "Art Display: 2D, 3D or Multimedia Artwork",
];

// Other Events options (Talent Carnival & Parade)
export const OTHER_EVENTS_OPTIONS = [
  "Talent Carnival & Open Mic: Dance, Acting, Singing, Poetry (All Days)",
  "Carnival Parade: Traditional/Costume Parade (18 Dec Morning)",
];

// Organising Team role options
export const ORG_TEAM_ROLES = [
  "YUVA Reporters",
  "Yuvasrishti Fellows",
  "YUVA Creators Squad",
  "YUVA Organisers",
];

