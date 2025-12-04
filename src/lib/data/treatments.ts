import { Sparkles, Scale, Droplets, Sun, Leaf } from "lucide-react";

export interface Treatment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: typeof Sparkles;
  href: string;
}

export const treatments: Treatment[] = [
  {
    id: "ageless",
    name: "The Ageless Program",
    tagline: "Anti-Aging & Restoration",
    description:
      "Turn back time with our signature anti-aging protocols including dermal fillers, Profhilo, and advanced skin boosters.",
    icon: Sparkles,
    href: "/treatments/ageless",
  },
  {
    id: "sculpt",
    name: "The Sculpt Program",
    tagline: "Body Contouring & Weight Loss",
    description:
      "Reshape your silhouette with our 7-week contouring journey featuring fat freezing, EMS sculpting, and laser lipolysis.",
    icon: Scale,
    href: "/treatments/sculpt",
  },
  {
    id: "clarity",
    name: "The Clarity Program",
    tagline: "Acne & Scarring Solutions",
    description:
      "Achieve clear, confident skin with our intensive 8-week protocol designed to address acne and minimize scarring.",
    icon: Droplets,
    href: "/treatments/clarity",
  },
  {
    id: "radiance",
    name: "The Radiance Program",
    tagline: "Pigmentation Correction",
    description:
      "Restore luminous, even-toned skin with our advanced pigmentation treatments including clinical peels and IV therapy.",
    icon: Sun,
    href: "/treatments/radiance",
  },
  {
    id: "restoration",
    name: "The Restoration Program",
    tagline: "Hair Loss Therapies",
    description:
      "Revitalize your hair with our 12-week stimulation cycle featuring PRP therapy and advanced growth protocols.",
    icon: Leaf,
    href: "/treatments/restoration",
  },
];

