export type ScheduleSession = {
  time: string;
  topic: string;
  description: string;
  location: string;
  tag?: string; // e.g. "Youth Changemaker Talks" | "Youth Con" | "Youth Impact Labs" | "All Events" | "Yuvasrishti" | "Youth Art Wall" | "Talent Carnival" | "Carnival Parade"
};

export type DaySchedule = {
  label: string; // "Day 1"
  date: string; // "December 18"
  sessions: ScheduleSession[];
};

export const scheduleByDay: DaySchedule[] = [
  {
    label: "Day 1",
    date: "December 18",
    sessions: [
      {
        time: "10:00 AM - 01:00 PM",
        topic: "Inauguration",
        description: "Official opening ceremony of the State Youth Festival YUVA 2025.",
        location: "K L University, Vijayawada",
        tag: "All Events"
      },
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Green Innovation",
        description: "Eco-entrepreneurship insights focusing on Green Hydrogen and Solar Energy.",
        location: "K L University, Vijayawada",
        tag: "Youth Changemaker Talks"
      },
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Speed Networking 1",
        description: "Rapid networking session to connect youth with peers and mentors.",
        location: "K L University, Vijayawada",
        tag: "Youth Con"
      },
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Speed Mentoring 1",
        description: "One-on-one quick mentoring opportunities with industry experts.",
        location: "K L University, Vijayawada",
        tag: "Youth Con"
      },
      // {
      //   time: "11:00 AM - 01:00 PM",
      //   topic: "Carnival Parade",
      //   description: "Traditional and costume parade showcasing cultural diversity.",
      //   location: "K L University, Vijayawada",
      //   tag: "Carnival Parade"
      // },
      {
        time: "11:00 AM onwards",
        topic: "Youth Talent Carnival",
        description: "Dance, Acting, Singing, Poetry & More performances.",
        location: "K L University, Vijayawada",
        tag: "Talent Carnival"
      },
      {
        time: "02:00 PM - 05:00 PM",
        topic: "GCC & African Countries",
        description: "Connect with professionals and innovators from Gulf and African nations.",
        location: "K L University, Vijayawada",
        tag: "Global Diaspora Connect"
      },
      // {
      //   time: "Full Day",
      //   topic: "Yuvasrishti",
      //   description: "Ongoing initiatives and participation throughout the festival.",
      //   location: "K L University, Vijayawada",
      //   tag: "Yuvasrishti"
      // },
      // {
      //   time: "Full Day",
      //   topic: "Youth Art Wall",
      //   description: "2D, 3D, Multimedia Artwork Display and exhibition.",
      //   location: "K L University, Vijayawada",
      //   tag: "Youth Art Wall"
      // }
    ]
  },
  {
    label: "Day 2",
    date: "December 19",
    sessions: [
      {
        time: "10:00 AM - 04:00 PM",
        topic: "Social Hackathon 1",
        description: "Collaborative lab session connecting local youth with the global diaspora.",
        location: "K L University, Vijayawada",
        tag: "Youth Impact Labs"
      },
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Thought Leadership",
        description: "A strategic session on shaping the State Youth Vision Document.",
        location: "K L University, Vijayawada",
        tag: "Youth Changemaker Talks"
      },
      {
        time: "10:00 AM - 12:00 PM",
        topic: "Future of Work",
        description: "Exploring Youth roles in AI, Quantum Computing, and the Gig Economy.",
        location: "K L University, Vijayawada",
        tag: "Youth Changemaker Talks"
      },
      {
        time: "10:00 AM - 12:00 AM",
        topic: "Speed Mentoring 2",
        description: "Second session of speed mentoring with professionals.",
        location: "K L University, Vijayawada",
        tag: "Youth Con"
      },
      {
        time: "12:00 PM - 02:00 PM",
        topic: "Meetup 1",
        description: "Casual community meetup for participants to share ideas.",
        location: "K L University, Vijayawada",
        tag: "Youth Con"
      },
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Wellness & Wellbeing",
        description: "Designing healthy habits in the era of lifestyle disorders.",
        location: "K L University, Vijayawada",
        tag: "Youth Changemaker Talks"
      },
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Speed Mentoring 3",
        description: "Third session of speed mentoring for career guidance.",
        location: "K L University, Vijayawada",
        tag: "Youth Con"
      },
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Speed Networking 2",
        description: "Second rapid networking opportunity for attendees.",
        location: "K L University, Vijayawada",
        tag: "Youth Con"
      },
      {
        time: "04:00 PM - 06:00 PM",
        topic: "Meetup 2",
        description: "Evening meetup session for group discussions and bonding.",
        location: "K L University, Vijayawada",
        tag: "Youth Con"
      },
      {
        time: "11:00 AM onwards",
        topic: "Youth Talent Carnival",
        description: "Dance, Acting, Singing, Poetry & More performances.",
        location: "K L University, Vijayawada",
        tag: "Talent Carnival"
      },
      {
        time: "10:30 AM - 12:30 PM",
        topic: "Austria, New Zealand & Southeast Asia",
        description: "Connect with achievers from Austria, New Zealand and Southeast Asian nations.",
        location: "K L University, Vijayawada",
        tag: "Global Diaspora Connect"
      },
      {
        time: "02:00 PM - 05:00 PM",
        topic: "European (Nordic Nations & Europe)",
        description: "Meet professionals and entrepreneurs from Nordic and European countries.",
        location: "K L University, Vijayawada",
        tag: "Global Diaspora Connect"
      },
      {
        time: "06:00 PM - 10:00 PM",
        topic: "America & Canada",
        description: "Network with innovators and leaders from North America.",
        location: "K L University, Vijayawada",
        tag: "Global Diaspora Connect"
      },
      // {
      //   time: "Full Day",
      //   topic: "Yuvasrishti",
      //   description: "Ongoing initiatives and participation throughout the festival.",
      //   location: "K L University, Vijayawada",
      //   tag: "Yuvasrishti"
      // },
      // {
      //   time: "Full Day",
      //   topic: "Youth Art Wall",
      //   description: "2D, 3D, Multimedia Artwork Display and exhibition.",
      //   location: "K L University, Vijayawada",
      //   tag: "Youth Art Wall"
      // }
    ]
  },
  {
    label: "Day 3",
    date: "December 20",
    sessions: [
      {
        time: "10:00 AM - 02:00 PM",
        topic: "Social Hackathon 2",
        description: "Continued collaborative session for youth impact and global connection.",
        location: "K L University, Vijayawada",
        tag: "Youth Impact Labs"
      },
      {
        time: "10:00 AM - 12:00 PM",
        topic: "Swarnandhra for Viksit Bharat 2047",
        description: "Visionary talk on the roadmap for a developed India by 2047.",
        location: "K L University, Vijayawada",
        tag: "Youth Changemaker Talks"
      },
      {
        time: "12:00 PM - 02:00 PM",
        topic: "Meetup 3",
        description: "Final meetup gathering for the youth festival participants.",
        location: "K L University, Vijayawada",
        tag: "Youth Con"
      },
      {
        time: "03:00 PM - 06:00 PM",
        topic: "Valedictory",
        description: "Closing ceremony, awards, and final address of the festival.",
        location: "K L University, Vijayawada",
        tag: "All Events"
      },
      {
        time: "11:00 AM onwards",
        topic: "Youth Talent Carnival",
        description: "Dance, Acting, Singing, Poetry & More performances.",
        location: "K L University, Vijayawada",
        tag: "Talent Carnival"
      },
      // {
      //   time: "Full Day",
      //   topic: "Yuvasrishti",
      //   description: "Ongoing initiatives and participation throughout the festival.",
      //   location: "K L University, Vijayawada",
      //   tag: "Yuvasrishti"
      // },
      // {
      //   time: "Full Day",
      //   topic: "Youth Art Wall",
      //   description: "2D, 3D, Multimedia Artwork Display and exhibition.",
      //   location: "K L University, Vijayawada",
      //   tag: "Youth Art Wall"
      // }
    ]
  }
];

// Helper function to get sessions filtered by tag
export const getSessionsByTag = (tag: string): DaySchedule[] => {
  if (tag === "all") {
    return scheduleByDay;
  }
  
  return scheduleByDay
    .map(day => ({
      ...day,
      sessions: day.sessions.filter(
        session => session.tag === tag || session.tag === "All Events"
      )
    }))
    .filter(day => day.sessions.length > 0);
};

// Helper to get sessions for a specific event type only (no "All Events")
export const getSessionsByTagOnly = (tag: string): DaySchedule[] => {
  return scheduleByDay
    .map(day => ({
      ...day,
      sessions: day.sessions.filter(session => session.tag === tag)
    }))
    .filter(day => day.sessions.length > 0);
};
