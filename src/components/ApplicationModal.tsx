/*
  NOTE: ApplicationModal is temporarily disabled in favour of
  opening the official Organising Team Google Form.

  The original implementation has been commented out below.
  To re-enable, uncomment the code and remove the stub export at the bottom.
*/

/*
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X, User, Mail, Phone, Building, MapPin, ChevronDown, Check, FileText, Link, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { submitOrgTeamForm, AP_DISTRICTS, ORG_TEAM_ROLES } from "@/lib/googleForms";

// ... original implementation was here ...

export const ApplicationModal = ({ isOpen, onClose, preselectedRole }: ApplicationModalProps) => {
  // ... original implementation ...
  return null;
};
*/

// Stub export to prevent import errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ApplicationModal = (_props: { isOpen: boolean; onClose: () => void; preselectedRole?: string }) => null;
