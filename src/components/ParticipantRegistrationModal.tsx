/*
  NOTE: ParticipantRegistrationModal is temporarily disabled.
  We now redirect users to the official Google Form instead of
  submitting via the custom UI.

  The original implementation has been commented out below.
  To re-enable, uncomment the code and remove the stub export at the bottom.
*/

/*
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { X, User, Mail, Phone, MapPin, Building, GraduationCap, ChevronDown, Check, Loader2 } from "lucide-react";
import { 
  submitParticipantForm, 
  type ParticipantFormData,
  AP_DISTRICTS,
  EDUCATION_OPTIONS,
  YCT_TALKS_OPTIONS,
  YOUTH_CON_OPTIONS,
  IMPACT_LABS_OPTIONS,
  ART_WALL_OPTIONS,
  OTHER_EVENTS_OPTIONS,
} from "@/lib/googleForms";

interface ParticipantRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const initialFormState: ParticipantFormData = {
  fullName: "",
  email: "",
  phone: "",
  district: "",
  place: "",
  institution: "",
  education: "",
  yctTalks: [],
  youthCon: [],
  impactLabs: [],
  artWall: [],
  otherEvents: [],
  whyAttend: "",
};

export const ParticipantRegistrationModal = ({ isOpen, onClose }: ParticipantRegistrationModalProps) => {
  // ... original implementation was here ...
  return null;
};
*/

// Stub export to prevent import errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ParticipantRegistrationModal = (_props: { isOpen: boolean; onClose: () => void }) => null;
