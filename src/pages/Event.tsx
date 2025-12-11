import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PARTICIPANT_FORM_VIEW_URL } from "@/lib/googleForms";

// Dummy event data for demo. In real app, fetch based on param.
const eventData: Record<
  string,
  {
    title: string;
    heroImage: string;
    description: string;
    rules: string[];
  }
> = {
  "classical-dance": {
    title: "Classical Dance",
    heroImage:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    description:
      "Delight in the grace and elegance of India's rich classical dance heritage. Showcase your talent and immerse yourself in mesmerizing rhythms.",
    rules: [
      "Open to all age groups.",
      "Performance time: Maximum 5 minutes.",
      "Use of recorded music is allowed.",
      "Solo or group up to 5 participants.",
    ],
  },
  "youth-changemaker-talk": {
    title: "Youth Changemaker Talk",
    heroImage:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
    description:
      "Inspire and be inspired! If you've made a difference in your community, share your story at the Youth Changemaker Talk.",
    rules: [
      "Talk duration: 7 minutes.",
      "No promotional content.",
      "Open to individuals aged 15-24.",
      "Presenters must submit a brief synopsis.",
    ],
  },
};

const openRegistrationForm = () => {
  window.open(PARTICIPANT_FORM_VIEW_URL, "_blank");
};

const Event = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const data = eventData[eventId ?? ""] || {
    title: eventId ? eventId.replace(/-/g, " ") : "Event",
    heroImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    description: "Event details will be updated soon.",
    rules: [],
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Event Header */}
      <header className="bg-white shadow p-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          {data.title}
        </h1>
      </header>

      {/* Hero Image */}
      <section className="w-full aspect-[16/6] sm:aspect-[16/5] relative overflow-hidden">
        <motion.img
          src={data.heroImage}
          alt={data.title}
          loading="eager"
          className="object-cover w-full h-full"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* Description + Rules */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <motion.section
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-2xl font-semibold mb-2">About the Event</h2>
          <p className="text-gray-700 leading-relaxed">{data.description}</p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.17 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Rules & Guidelines</h2>
          {data.rules.length > 0 ? (
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {data.rules.map((rule, i) => (
                <li key={i}>{rule}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Rules will be announced soon.</p>
          )}
        </motion.section>

        {/* Register Now Button - Opens Google Form in new tab */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={openRegistrationForm}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-xl shadow-lg transition focus:outline-none"
          >
            Register Now
          </motion.button>
        </div>
      </div>

      {/* NOTE: Registration modal disabled - now using direct Google Form link */}
    </div>
  );
};

export default Event;
