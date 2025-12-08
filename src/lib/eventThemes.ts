// Event theme configurations for each event page
// Provides consistent styling with unique visual identity per event

export const eventThemes = {
  "youth-changemaker-talks": {
    bg: "radial-gradient(circle at top, #ffe3dd 0%, #fff7f2 100%)",
    accent: "from-[#ff7a6c] to-[#ffb199]",
    accentColor: "#ff7a6c",
    image: "/eventpages/youthchangemakertalks.png",
    schedule: {
      date: "18–20 December 2025",
      time: "Different sessions across all three days",
      location: "Vijayawada, Andhra Pradesh"
    }
  },
  "youth-con": {
    bg: "radial-gradient(circle at top, #e4ddff 0%, #f7f4ff 100%)",
    accent: "from-[#7b5cff] to-[#b39dff]",
    accentColor: "#7b5cff",
    image: "/eventpages/youthcon.png",
    schedule: {
      date: "18–20 December 2025",
      time: "Afternoons and evenings",
      location: "Vijayawada, Andhra Pradesh"
    }
  },
  "youth-impact-labs": {
    bg: "radial-gradient(circle at top, #dcf7e8 0%, #f2fff7 100%)",
    accent: "from-[#36b87c] to-[#7de0aa]",
    accentColor: "#36b87c",
    image: "/eventpages/youthimpactlabs.png",
    schedule: {
      date: "19 & 20 December 2025",
      time: "10:00 AM – 2:00 PM",
      location: "Vijayawada, Andhra Pradesh"
    }
  },
  "youth-art-wall": {
    bg: "radial-gradient(circle at top, #ffe4f1 0%, #fff5fb 100%)",
    accent: "from-[#ff66b3] to-[#ff9fd2]",
    accentColor: "#ff66b3",
    image: "/eventpages/youthartwall.png",
    schedule: {
      date: "18–20 December 2025",
      time: "Full Day",
      location: "Vijayawada, Andhra Pradesh"
    }
  },
  "talent-carnival": {
    bg: "radial-gradient(circle at top, #fff0cc 0%, #fff9ea 100%)",
    accent: "from-[#ffb347] to-[#ffd26f]",
    accentColor: "#ffb347",
    image: "/eventpages/talentcarnival.png",
    schedule: {
      date: "18–20 December 2025",
      time: "11:00 AM onwards",
      location: "Vijayawada, Andhra Pradesh"
    }
  },
  "yuvasrishti": {
    bg: "radial-gradient(circle at top, #e0f4ff 0%, #f4fbff 100%)",
    accent: "from-[#36a3ff] to-[#7fd1ff]",
    accentColor: "#36a3ff",
    image: "/eventpages/yuvasrishti.png",
    schedule: {
      date: "18–20 December 2025",
      time: "Full Day",
      location: "Vijayawada, Andhra Pradesh"
    }
  },
  "andhra-yuva-sankalp": {
    bg: "radial-gradient(circle at top, #fff0c7 0%, #fff7e1 100%)",
    accent: "from-[#ffb347] to-[#ff5f5f]",
    accentColor: "#ffb347",
    image: "/eventpages/andhrayuva.png",
    schedule: {
      date: "December 2025",
      time: "Online Digital Marathon",
      location: "Across Andhra Pradesh"
    }
  },
  "carnival-parade": {
    bg: "radial-gradient(circle at top, #ffe8d6 0%, #fff5ee 100%)",
    accent: "from-[#ff8c42] to-[#ffb380]",
    accentColor: "#ff8c42",
    image: "/eventpages/carnivalparade.png",
    schedule: {
      date: "18 December 2025",
      time: "11:00 AM – 1:00 PM",
      location: "Vijayawada, Andhra Pradesh"
    }
  }
} as const;

export type EventThemeKey = keyof typeof eventThemes;

