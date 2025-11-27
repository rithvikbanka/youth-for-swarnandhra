import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Check, X, User, Mail, Phone, Building, Sparkles, MapPin, ChevronDown } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  organization: z.string().min(2, "Please enter your college/organization name"),
  eventCategory: z.string().min(1, "Please select an event category"),
  district: z.string().min(1, "Please select your district"),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const eventCategories = [
  "Classical Dance Performances",
  "Youth Voice & Singing",
  "Arts & Crafts Pavilion",
  "Literary & Spoken Word",
  "Startup & Innovation Hub",
  "Wellness & Sports Zone",
];

const districts = [
  "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa",
  "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam",
  "Visakhapatnam", "Vizianagaram", "West Godavari",
];

const InputField = ({
  label,
  icon: Icon,
  error,
  valid,
  children,
}: {
  label: string;
  icon: React.ElementType;
  error?: string;
  valid?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <label className="input-label flex items-center gap-2">
      <Icon size={14} className="text-muted-foreground" />
      {label}
    </label>
    <div className="relative">
      {children}
      {/* Validation Icon */}
      <AnimatePresence>
        {(error || valid) && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {error ? (
              <X className="w-5 h-5 text-destructive" />
            ) : (
              <Check className="w-5 h-5 text-green-500" />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    {error && (
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="input-error"
      >
        {error}
      </motion.p>
    )}
  </div>
);

export const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    reset,
    watch,
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
  });

  const watchedFields = watch();

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmittedEmail(data.email);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    toast({
      title: "Registration Successful!",
      description: "Check your email for confirmation details.",
    });
  };

  const closeSuccessModal = () => {
    setIsSuccess(false);
    reset();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    closeSuccessModal();
  };

  return (
    <section id="register" className="section-padding bg-gradient-warm pattern-rangoli">
      <div className="container mx-auto max-w-2xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Join the Festival
          </span>
          <h2 className="section-title">Register for the Festival</h2>
          <p className="section-subtitle mx-auto">
            Join thousands of youth. Be part of Swarnandhra's future.
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-2xl shadow-card p-6 md:p-10 space-y-6"
        >
          {/* Full Name */}
          <InputField
            label="Full Name"
            icon={User}
            error={errors.fullName?.message}
            valid={dirtyFields.fullName && !errors.fullName}
          >
            <input
              {...register("fullName")}
              placeholder="e.g., Priya Sharma"
              className={`input-field pr-10 ${errors.fullName ? "border-destructive bg-red-50" : ""}`}
            />
          </InputField>

          {/* Email */}
          <InputField
            label="Email Address"
            icon={Mail}
            error={errors.email?.message}
            valid={dirtyFields.email && !errors.email}
          >
            <input
              {...register("email")}
              type="email"
              placeholder="your.email@example.com"
              className={`input-field pr-10 ${errors.email ? "border-destructive bg-red-50" : ""}`}
            />
          </InputField>

          {/* Phone */}
          <InputField
            label="Mobile Number"
            icon={Phone}
            error={errors.phone?.message}
            valid={dirtyFields.phone && !errors.phone}
          >
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">+91</span>
              <input
                {...register("phone")}
                type="tel"
                placeholder="XXXXX XXXXX"
                className={`input-field pl-14 pr-10 ${errors.phone ? "border-destructive bg-red-50" : ""}`}
              />
            </div>
          </InputField>

          {/* Organization */}
          <InputField
            label="College/Organization"
            icon={Building}
            error={errors.organization?.message}
            valid={dirtyFields.organization && !errors.organization}
          >
            <input
              {...register("organization")}
              placeholder="e.g., Andhra University, Visakhapatnam"
              className={`input-field pr-10 ${errors.organization ? "border-destructive bg-red-50" : ""}`}
            />
          </InputField>

          {/* Event Category */}
          <InputField
            label="Primary Event Category"
            icon={Sparkles}
            error={errors.eventCategory?.message}
            valid={dirtyFields.eventCategory && !errors.eventCategory}
          >
            <div className="relative">
              <select
                {...register("eventCategory")}
                className={`input-field appearance-none pr-10 ${
                  errors.eventCategory ? "border-destructive bg-red-50" : ""
                } ${!watchedFields.eventCategory ? "text-muted-foreground" : ""}`}
              >
                <option value="">Select your interest</option>
                {eventCategories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </InputField>

          {/* District */}
          <InputField
            label="Your District"
            icon={MapPin}
            error={errors.district?.message}
            valid={dirtyFields.district && !errors.district}
          >
            <div className="relative">
              <select
                {...register("district")}
                className={`input-field appearance-none pr-10 ${
                  errors.district ? "border-destructive bg-red-50" : ""
                } ${!watchedFields.district ? "text-muted-foreground" : ""}`}
              >
                <option value="">Select your district</option>
                {districts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </InputField>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || !isValid}
            className={`w-full btn-hero flex items-center justify-center gap-2 ${
              (!isValid || isSubmitting) ? "opacity-50 cursor-not-allowed" : ""
            }`}
            whileHover={isValid && !isSubmitting ? { scale: 1.02 } : {}}
            whileTap={isValid && !isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                Registering
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ...
                </motion.span>
              </>
            ) : (
              <>
                🎉 Register Now
              </>
            )}
          </motion.button>
        </motion.form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeSuccessModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl p-8 md:p-12 max-w-md w-full text-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-green-600" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                🎉 You're Registered!
              </h3>
              <p className="text-muted-foreground mb-2">
                Thanks for joining Youth for Swarnandhra 2047.
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Confirmation email sent to: <span className="font-medium text-foreground">{submittedEmail}</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={() => scrollToSection("schedule")}
                  className="btn-primary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Schedule
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection("events")}
                  className="btn-secondary flex-1"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Explore Events
                </motion.button>
              </div>
              <button
                onClick={closeSuccessModal}
                className="mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
