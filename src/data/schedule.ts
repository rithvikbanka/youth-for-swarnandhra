export type ScheduleSession = {
  time: string;
  topic: string;
  description: string;
  location: string;
  tag?: string; // e.g. "Youth Changemaker Talks" | "Youth Con" | "Youth Impact Labs" | "All Events" | "Global Diaspora Connect" | "Competitions & Performances"
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
      // All Events
      {
        time: "10:00 AM - 12:00 PM",
        topic: "Inauguration",
        description: "Official opening ceremony of the State Youth Festival YUVA 2025.",
        location: "R & D Auditorium, K L University, Vijayawada",
        tag: "All Events"
      },
      // Youth Changemaker Talks
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Green Innovation",
        description: "Insights on eco-entrepreneurship, green hydrogen and solar energy.",
        location: "C.V. Raman Seminar Hall, K L University, Vijayawada",
        tag: "Youth Changemaker Talks"
      },
      // Youth Con - Day 1
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Speed Networking & Mentoring",
        description: "Youth networking, discussions and collaboration with industry experts.",
        location: "L Block, 5th Floor – Rooms 509 & 515",
        tag: "Youth Con"
      },
      // Global Diaspora - Day 1
      {
        time: "02:00 PM - 05:00 PM",
        topic: "GCC & African Countries – Interaction with NRIs",
        description: "Sessions connecting youth with the global diaspora from GCC and African regions.",
        location: "Rose Hall, K L University, Vijayawada",
        tag: "Global Diaspora Connect"
      },
      // Youth Talent Carnival
      {
        time: "11:00 AM onwards",
        topic: "Youth Talent Carnival",
        description: "Dance, Acting, Singing, Poetry & More performances.",
        location: "K L University, Vijayawada",
        tag: "Talent Carnival"
      },
      // Competitions & Performances - Day 1
      {
        time: "12:30 PM - 05:30 PM",
        topic: "Folk Dance – Group",
        description: "Traditional folk dance performances from across Andhra Pradesh.",
        location: "R & D Auditorium",
        tag: "Competitions & Performances"
      },
      {
        time: "12:30 PM - 05:30 PM",
        topic: "Folk Song Group",
        description: "Group performances of folk and cultural songs.",
        location: "Peacock Hall – C021",
        tag: "Competitions & Performances"
      },
      {
        time: "12:30 PM - 05:30 PM",
        topic: "Science Mela",
        description: "Interactive science exhibits and demos by students.",
        location: "Open place beside R & D Auditorium",
        tag: "Competitions & Performances"
      },
      {
        time: "12:30 PM - 05:30 PM",
        topic: "Story Writing & Poetry",
        description: "Creative writing and poetry competition.",
        location: "E103",
        tag: "Competitions & Performances"
      },
      {
        time: "12:30 PM - 05:30 PM",
        topic: "Declamation",
        description: "Declamation and expressive speech performances.",
        location: "Sun Flower Hall – C023",
        tag: "Competitions & Performances"
      },
      {
        time: "12:30 PM - 05:30 PM",
        topic: "Painting",
        description: "On-the-spot painting and visual art competition.",
        location: "R & D Block, 4th Floor, Room 407A",
        tag: "Competitions & Performances"
      },
      {
        time: "06:00 PM - 08:00 PM",
        topic: "Cultural Programmes",
        description: "Evening cultural performances by participants.",
        location: "R & D Auditorium",
        tag: "Competitions & Performances"
      }
    ]
  },
  {
    label: "Day 2",
    date: "December 19",
    sessions: [
      // Arrival & Registrations
      {
        time: "08:30 AM - 10:00 AM",
        topic: "Arrival & New Registrations",
        description: "Check-in and registration for new participants.",
        location: "Registration Desks, R & D Auditorium Entrance",
        tag: "All Events"
      },
      // Youth Impact Labs
      {
        time: "10:00 AM - 04:00 PM",
        topic: "Social Hackathon 1",
        description: "Collaborative lab session connecting youth with the global diaspora.",
        location: "Student Activity Centre (SAC), R & D Block",
        tag: "Youth Impact Labs"
      },
      // Youth Changemaker Talks - Morning
      {
        time: "10:00 AM - 12:00 PM",
        topic: "Thought Leadership",
        description: "Session to shape the State Youth Vision document.",
        location: "Peacock Hall",
        tag: "Youth Changemaker Talks"
      },
      // Global Diaspora - Morning
      {
        time: "10:30 AM - 12:30 PM",
        topic: "Australia, New Zealand & Southeast Asia – Interaction with NRIs",
        description: "Sessions connecting youth with the global diaspora from Australia, NZ and Southeast Asia.",
        location: "Rose Hall",
        tag: "Global Diaspora Connect"
      },
      // Youth Con
      {
        time: "11:00 AM - 01:00 PM",
        topic: "Speed Mentoring & Networking",
        description: "Youth networking, discussions and collaboration spaces.",
        location: "L Block, 5th/6th Floor",
        tag: "Youth Con"
      },
      // Youth Changemaker Talks - Afternoon
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Future of Work",
        description: "Exploring Youth roles in AI, Quantum Computing, and the Gig Economy.",
        location: "C.V. Raman Seminar Hall",
        tag: "Youth Changemaker Talks"
      },
      {
        time: "02:00 PM - 04:00 PM",
        topic: "Wellness & Wellbeing",
        description: "Designing healthy habits in the era of lifestyle disorders.",
        location: "Peacock Hall",
        tag: "Youth Changemaker Talks"
      },
      // Global Diaspora - Afternoon/Evening
      {
        time: "02:00 PM - 04:00 PM",
        topic: "European (Nordic Nations & Europe) – Interaction with NRIs",
        description: "Sessions connecting youth with the global diaspora from Europe.",
        location: "Rose Hall",
        tag: "Global Diaspora Connect"
      },
      {
        time: "04:00 PM - 06:00 PM",
        topic: "America & Canada – Interaction with NRIs",
        description: "Sessions connecting youth with the global diaspora from America and Canada.",
        location: "Rose Hall",
        tag: "Global Diaspora Connect"
      },
      // Youth Talent Carnival
      {
        time: "11:00 AM onwards",
        topic: "Youth Talent Carnival",
        description: "Dance, Acting, Singing, Poetry & More performances.",
        location: "K L University, Vijayawada",
        tag: "Talent Carnival"
      },
      // Competitions & Performances - Day 2
      {
        time: "10:00 AM - 05:00 PM",
        topic: "Folk Dance – Group (Continued)",
        description: "Traditional folk dance performances from across Andhra Pradesh.",
        location: "R & D Auditorium",
        tag: "Competitions & Performances"
      },
      {
        time: "10:00 AM - 05:00 PM",
        topic: "Folk Song Group (Continued)",
        description: "Group performances of folk and cultural songs.",
        location: "Jasmine Hall",
        tag: "Competitions & Performances"
      }
    ]
  },
  {
    label: "Day 3",
    date: "December 20",
    sessions: [
      // Arrival & Registrations
      {
        time: "07:00 AM - 10:00 AM",
        topic: "Arrival & New Registrations",
        description: "Final day check-in and registration.",
        location: "Registration Desks, R & D Auditorium Entrance",
        tag: "All Events"
      },
      // Andhra Yuva Sankalp
      {
        time: "10:00 AM - 03:00 PM",
        topic: "Andhra Yuva Sankalp 2K25 – Digital Marathon",
        description: "Digital marathon on Social Responsibility, Fitness & Sports, and Digital Innovation & AI.",
        location: "R & D Auditorium",
        tag: "All Events"
      },
      // Youth Changemaker Talks
      {
        time: "10:00 AM - 12:00 PM",
        topic: "Swarnandhra for Viksit Bharat 2047",
        description: "Vision talk on the roadmap to a developed India by 2047.",
        location: "C.V. Raman Seminar Hall",
        tag: "Youth Changemaker Talks"
      },
      // Youth Impact Labs
      {
        time: "10:00 AM - 04:00 PM",
        topic: "Social Hackathon 2 & Fire Side Chat",
        description: "Continued collaborative session for youth impact and innovation with fireside chats.",
        location: "Student Activity Centre (SAC), R & D Block",
        tag: "Youth Impact Labs"
      },
      // Youth Con
      {
        time: "11:00 AM - 01:00 PM",
        topic: "Youth Con – Final Networking & Commitments",
        description: "Final networking and commitment session for youth leaders.",
        location: "L Block, 6th Floor",
        tag: "Youth Con"
      },
      // Global Diaspora
      {
        time: "11:00 AM - 01:00 PM",
        topic: "Global Diaspora – Closing Dialogue",
        description: "Final dialogue session with global diaspora mentors and guests.",
        location: "Rose Hall",
        tag: "Global Diaspora Connect"
      },
      // Valedictory Prep & Ceremony
      {
        time: "02:00 PM - 03:00 PM",
        topic: "Preparations for Valedictory",
        description: "Setup and preparation for the closing ceremony.",
        location: "R & D Auditorium",
        tag: "All Events"
      },
      {
        time: "03:00 PM onwards",
        topic: "Valedictory Session & Closing Ceremony",
        description: "Closing ceremony, awards, and final address of the festival.",
        location: "R & D Auditorium",
        tag: "All Events"
      },
      // Youth Talent Carnival
      {
        time: "11:00 AM onwards",
        topic: "Youth Talent Carnival",
        description: "Dance, Acting, Singing, Poetry & More performances.",
        location: "K L University, Vijayawada",
        tag: "Talent Carnival"
      }
    ]
  }
];

/**
 * Parses a time range string like "10:00 AM - 01:00 PM" or "11:00 AM onwards"
 * and returns the START time as minutes since midnight for sorting.
 */
export const parseStartTimeToMinutes = (timeRange: string): number => {
  // Extract start time (before " - " or " onwards" or the whole string)
  const startPart = timeRange.split(/\s*-\s*|\s+onwards/i)[0].trim();
  
  // Match pattern: "HH:MM AM/PM"
  const match = startPart.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) {
    // If can't parse, return a large number to push to end
    return 9999;
  }
  
  let hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);
  const period = match[3].toUpperCase();
  
  // Convert to 24-hour format
  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }
  
  return hours * 60 + minutes;
};

/**
 * Sorts sessions by start time (ascending order).
 * Uses stable sort to preserve relative order of events with same start time.
 */
export const sortSessionsByTime = <T extends { time: string }>(sessions: T[]): T[] => {
  return [...sessions].sort((a, b) => {
    const timeA = parseStartTimeToMinutes(a.time);
    const timeB = parseStartTimeToMinutes(b.time);
    return timeA - timeB;
  });
};

// Helper function to get sessions filtered by tag (sorted by time)
export const getSessionsByTag = (tag: string): DaySchedule[] => {
  if (tag === "all") {
    return scheduleByDay.map(day => ({
      ...day,
      sessions: sortSessionsByTime(day.sessions)
    }));
  }
  
  return scheduleByDay
    .map(day => ({
      ...day,
      sessions: sortSessionsByTime(
        day.sessions.filter(
          session => session.tag === tag || session.tag === "All Events"
        )
      )
    }))
    .filter(day => day.sessions.length > 0);
};

// Helper to get sessions for a specific event type only (no "All Events", sorted by time)
export const getSessionsByTagOnly = (tag: string): DaySchedule[] => {
  return scheduleByDay
    .map(day => ({
      ...day,
      sessions: sortSessionsByTime(
        day.sessions.filter(session => session.tag === tag)
      )
    }))
    .filter(day => day.sessions.length > 0);
};
