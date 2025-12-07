import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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

const roleOptions = [
  {
    key: "participant",
    label: "Participant",
    description:
      "Take part in the event and showcase your talents or skills directly as a competitor or performer.",
  },
  {
    key: "junior-reporter",
    label: "Junior Reporter",
    description:
      "Be the eyes and ears at the event, report stories, conduct interviews, and share insights with the community.",
  },
  {
    key: "creator-squad",
    label: "Creator Squad",
    description:
      "Capture the vibrance! Shoot photos and videos, create reels and graphics, and help document the festival's magic.",
  },
  {
    key: "utsaahee-fellow",
    label: "Utsaahee Fellow",
    description:
      "Join the Utsaahee fellows to coordinate, ideate, and ensure the festival experience is memorable for all.",
  },
  {
    key: "organizing-team",
    label: "Organizing Team",
    description:
      "Be a pillar of the event. Help organize, coordinate logistics, support participants and ensure smooth execution.",
  },
];

// Simple demo registration form
function RegistrationForm({ role, eventTitle }: { role: string; eventTitle: string }) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    // Submit logic here
  }

  if (submitted) {
    return (
      <motion.div
        className="p-4 bg-green-100 rounded mt-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Thank you for registering as <strong>{roleOptions.find(r => r.key === role)?.label}</strong> for <strong>{eventTitle}</strong>!
      </motion.div>
    );
  }

  return (
    <motion.form
      className="mt-6 bg-gray-50 p-6 rounded shadow flex flex-col gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
    >
      <label className="font-medium">
        Name
        <input
          required
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="block p-2 mt-1 border rounded w-full"
        />
      </label>
      <label className="font-medium">
        Email
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="block p-2 mt-1 border rounded w-full"
        />
      </label>
      <button
        type="submit"
        className="py-2 px-5 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition"
      >
        Submit Registration
      </button>
    </motion.form>
  );
}

const RegisterModal = ({
  open,
  onClose,
  selectedRole,
  setSelectedRole,
  eventTitle,
}: {
  open: boolean;
  onClose: () => void;
  selectedRole: string | null;
  setSelectedRole: (role: string) => void;
  eventTitle: string;
}) => (
  <AnimatePresence>
    {open && (
      <motion.div
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4 p-6 relative"
          initial={{ scale: 0.9, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
        >
          <button
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-700 text-xl"
            onClick={onClose}
            aria-label="Close"
          >
            ×
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">Register as:</h2>
          <div className="flex flex-col gap-3">
            {roleOptions.map((role) => (
              <motion.button
                key={role.key}
                type="button"
                onClick={() => setSelectedRole(role.key)}
                className={`text-left w-full p-3 rounded-lg border transition flex flex-col focus:outline-none
                  ${
                    selectedRole === role.key
                      ? "border-blue-600 bg-blue-50 shadow"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
                whileTap={{ scale: 0.97 }}
              >
                <span className="font-semibold">{role.label}</span>
                <span className="text-gray-500 text-sm">{role.description}</span>
              </motion.button>
            ))}
          </div>
          {selectedRole && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">
                Register as {roleOptions.find((r) => r.key === selectedRole)?.label}
              </h3>
              <RegistrationForm
                role={selectedRole}
                eventTitle={eventTitle}
              />
            </div>
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Event = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const data = eventData[eventId ?? ""] || {
    title: eventId ? eventId.replace(/-/g, " ") : "Event",
    heroImage: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    description: "Event details will be updated soon.",
    rules: [],
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  function openModal() {
    setModalOpen(true);
    setSelectedRole(null);
  }
  function closeModal() {
    setModalOpen(false);
    setSelectedRole(null);
  }

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

        {/* Register Now Button */}
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg text-xl shadow-lg transition focus:outline-none"
          >
            Register Now
          </motion.button>
        </div>
      </div>

      {/* Modal/Dialog */}
      <RegisterModal
        open={modalOpen}
        onClose={closeModal}
        selectedRole={selectedRole}
        setSelectedRole={setSelectedRole}
        eventTitle={data.title}
      />
    </div>
  );
};

export default Event;
