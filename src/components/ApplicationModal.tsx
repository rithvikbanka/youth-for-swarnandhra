import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, User, Mail, Phone, Building, GraduationCap, MapPin, ChevronDown, Check, FileText, Link } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const applicationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  district: z.string().min(1, "Please select your district"),
  institution: z.string().min(2, "Please enter your institution/affiliation"),
  education: z.string().min(1, "Please select your education level"),
  role: z.string().min(1, "Please select a role"),
  motivation: z.string().min(20, "Please provide at least 20 characters explaining your motivation"),
  experience: z.string().min(10, "Please provide at least 10 characters about your experience"),
  portfolioLink: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

const districts = [
  "Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa",
  "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam",
  "Visakhapatnam", "Vizianagaram", "West Godavari", "Alluri Sitharama Raju",
  "Anakapalli", "Bapatla", "Eluru", "Kakinada", "Konaseema",
  "NTR", "Palnadu", "Parvathipuram Manyam", "Sri Potti Sriramulu Nellore",
  "Sri Sathya Sai", "Tirupati",
];

const educationLevels = [
  "10th Standard",
  "12th Standard / Intermediate",
  "Diploma",
  "Undergraduate (B.A / B.Sc / B.Com / B.Tech / etc.)",
  "Postgraduate (M.A / M.Sc / M.Com / M.Tech / MBA / etc.)",
  "Ph.D / Doctorate",
  "Other",
];

const roleOptions = [
  { value: "reporter", label: "YUVA Reporters" },
  { value: "fellow", label: "Yuvasrishti Fellows" },
  { value: "creator", label: "YUVA Creators Squad" },
];

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRole?: "reporter" | "fellow" | "creator";
}

const InputField = ({
  label,
  icon: Icon,
  error,
  valid,
  required,
  children,
}: {
  label: string;
  icon: React.ElementType;
  error?: string;
  valid?: boolean;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <label className="input-label flex items-center gap-2">
      <Icon size={14} className="text-muted-foreground" />
      {label}
      {required && <span className="text-destructive">*</span>}
    </label>
    <div className="relative">
      {children}
      <AnimatePresence>
        {(error || valid) && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="absolute right-3 top-3"
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

export const ApplicationModal = ({ isOpen, onClose, preselectedRole }: ApplicationModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
    reset,
    setValue,
    watch,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    mode: "onChange",
    defaultValues: {
      role: preselectedRole || "",
      portfolioLink: "",
    },
  });

  const watchedFields = watch();

  // Set preselected role when modal opens
  useEffect(() => {
    if (isOpen && preselectedRole) {
      setValue("role", preselectedRole);
    }
  }, [isOpen, preselectedRole, setValue]);

  // Focus trap and escape key handling
  useEffect(() => {
    if (!isOpen) return;

    // Store the element that triggered the modal
    triggerRef.current = document.activeElement as HTMLElement;

    // Focus the close button when modal opens
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }

      // Focus trap
      if (e.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
      // Return focus to trigger element
      triggerRef.current?.focus();
    };
  }, [isOpen, onClose]);

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Log the form data with clear structure
    console.log("=== YUVA Application Submission ===");
    console.log("Role:", roleOptions.find((r) => r.value === data.role)?.label);
    console.log("Personal Info:", {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      district: data.district,
      institution: data.institution,
      education: data.education,
    });
    console.log("Motivation & Experience:", {
      motivation: data.motivation,
      experience: data.experience,
      portfolioLink: data.portfolioLink || "Not provided",
    });
    console.log("===================================");

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Application Submitted!",
      description: "Thank you for applying. We'll review your application and get back to you soon.",
    });
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setIsSuccess(false);
      reset();
      onClose();
    }
  };

  const handleSuccessClose = () => {
    setIsSuccess(false);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={handleClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="application-modal-title"
      >
        <motion.div
          ref={modalRef}
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="bg-card rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Success State */}
          {isSuccess ? (
            <div className="p-8 md:p-12 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2, bounce: 0.5 }}
                className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Check className="w-10 h-10 text-green-600" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
                🎉 Application Submitted!
              </h3>
              <p className="text-muted-foreground mb-6">
                Thank you for applying to join the YUVA Organising Team. We'll review your application and contact you soon.
              </p>

              <motion.button
                onClick={handleSuccessClose}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
                <h2
                  id="application-modal-title"
                  className="text-xl font-heading font-bold text-foreground"
                >
                  Apply to Join YUVA Team
                </h2>
                <button
                  ref={closeButtonRef}
                  onClick={handleClose}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-5">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Personal Information
                  </h3>

                  {/* Full Name */}
                  <InputField
                    label="Full Name"
                    icon={User}
                    error={errors.fullName?.message}
                    valid={dirtyFields.fullName && !errors.fullName}
                    required
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
                    required
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
                    label="Phone Number"
                    icon={Phone}
                    error={errors.phone?.message}
                    valid={dirtyFields.phone && !errors.phone}
                    required
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

                  {/* District */}
                  <InputField
                    label="District"
                    icon={MapPin}
                    error={errors.district?.message}
                    valid={dirtyFields.district && !errors.district}
                    required
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
                          <option key={district} value={district}>
                            {district}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </InputField>

                  {/* Institution */}
                  <InputField
                    label="Institution / Affiliation"
                    icon={Building}
                    error={errors.institution?.message}
                    valid={dirtyFields.institution && !errors.institution}
                    required
                  >
                    <input
                      {...register("institution")}
                      placeholder="e.g., Andhra University, Visakhapatnam"
                      className={`input-field pr-10 ${errors.institution ? "border-destructive bg-red-50" : ""}`}
                    />
                  </InputField>

                  {/* Education */}
                  <InputField
                    label="Education Level"
                    icon={GraduationCap}
                    error={errors.education?.message}
                    valid={dirtyFields.education && !errors.education}
                    required
                  >
                    <div className="relative">
                      <select
                        {...register("education")}
                        className={`input-field appearance-none pr-10 ${
                          errors.education ? "border-destructive bg-red-50" : ""
                        } ${!watchedFields.education ? "text-muted-foreground" : ""}`}
                      >
                        <option value="">Select your education level</option>
                        {educationLevels.map((level) => (
                          <option key={level} value={level}>
                            {level}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </InputField>
                </div>

                {/* Role Selection */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Role Selection
                  </h3>

                  <InputField
                    label="Which role are you applying for?"
                    icon={FileText}
                    error={errors.role?.message}
                    valid={dirtyFields.role && !errors.role}
                    required
                  >
                    <div className="relative">
                      <select
                        {...register("role")}
                        className={`input-field appearance-none pr-10 ${
                          errors.role ? "border-destructive bg-red-50" : ""
                        } ${!watchedFields.role ? "text-muted-foreground" : ""}`}
                      >
                        <option value="">Select a role</option>
                        {roleOptions.map((role) => (
                          <option key={role.value} value={role.value}>
                            {role.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                    </div>
                  </InputField>
                </div>

                {/* Motivation & Experience */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                    Motivation & Experience
                  </h3>

                  <div className="space-y-2">
                    <label className="input-label flex items-center gap-2">
                      <FileText size={14} className="text-muted-foreground" />
                      Why do you want to apply for this role?
                      <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      {...register("motivation")}
                      placeholder="Tell us why you're interested in this role and what excites you about YUVA 2025..."
                      rows={4}
                      className={`input-field resize-none ${errors.motivation ? "border-destructive bg-red-50" : ""}`}
                    />
                    {errors.motivation && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="input-error"
                      >
                        {errors.motivation.message}
                      </motion.p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="input-label flex items-center gap-2">
                      <FileText size={14} className="text-muted-foreground" />
                      Relevant skills or experience
                      <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      {...register("experience")}
                      placeholder="Share any relevant skills, past experience, or projects that make you a good fit..."
                      rows={4}
                      className={`input-field resize-none ${errors.experience ? "border-destructive bg-red-50" : ""}`}
                    />
                    {errors.experience && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="input-error"
                      >
                        {errors.experience.message}
                      </motion.p>
                    )}
                  </div>

                  <InputField
                    label="Portfolio or sample work link (optional)"
                    icon={Link}
                    error={errors.portfolioLink?.message}
                    valid={dirtyFields.portfolioLink && !errors.portfolioLink && !!watchedFields.portfolioLink}
                  >
                    <input
                      {...register("portfolioLink")}
                      type="url"
                      placeholder="https://your-portfolio.com"
                      className={`input-field pr-10 ${errors.portfolioLink ? "border-destructive bg-red-50" : ""}`}
                    />
                  </InputField>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                  <motion.button
                    type="button"
                    onClick={handleClose}
                    className="btn-secondary flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    className={`btn-primary flex-1 bg-gradient-to-r from-festival-red-light to-festival-red text-white ${
                      (!isValid || isSubmitting) ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    whileHover={isValid && !isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={isValid && !isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        Submitting
                        <motion.span
                          animate={{ opacity: [1, 0.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          ...
                        </motion.span>
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </motion.button>
                </div>
              </form>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

