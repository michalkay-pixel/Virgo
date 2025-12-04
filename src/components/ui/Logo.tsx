"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  showStar?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  linkClassName?: string;
}

/**
 * Four-pointed diamond star icon - represents laser precision/constellation
 * Per brand identity guidelines
 */
function DiamondStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      {/* Four-pointed star */}
      <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
    </svg>
  );
}

export function Logo({
  variant = "dark",
  showStar = true,
  size = "md",
  className,
  linkClassName,
}: LogoProps) {
  const sizeClasses = {
    sm: {
      wrapper: "",
      virgo: "text-xl tracking-[0.12em]",
      subtitle: "text-[8px] tracking-[0.25em]",
      star: "h-2.5 w-2.5",
      gap: "gap-1",
    },
    md: {
      wrapper: "",
      virgo: "text-2xl tracking-[0.15em] md:text-3xl",
      subtitle: "text-[10px] tracking-[0.3em]",
      star: "h-3 w-3",
      gap: "gap-1.5",
    },
    lg: {
      wrapper: "",
      virgo: "text-4xl tracking-[0.15em] md:text-5xl",
      subtitle: "text-xs tracking-[0.3em]",
      star: "h-4 w-4",
      gap: "gap-2",
    },
  };

  const colorClasses = {
    light: {
      virgo: "text-cream",
      subtitle: "text-cream/70",
      star: "text-copper-light",
    },
    dark: {
      virgo: "text-charcoal",
      subtitle: "text-taupe",
      star: "text-copper",
    },
  };

  const sizes = sizeClasses[size];
  const colors = colorClasses[variant];

  return (
    <Link href="/" className={cn("relative z-10 block", linkClassName)}>
      <div className={cn("flex flex-col items-start", sizes.gap, className)}>
        {/* Star + VIRGO Row */}
        <div className="flex items-center gap-2">
          {showStar && (
            <DiamondStar
              className={cn(
                sizes.star,
                colors.star,
                "animate-twinkle transition-colors duration-300"
              )}
            />
          )}
          <span
            className={cn(
              "font-heading transition-colors duration-300",
              sizes.virgo,
              colors.virgo
            )}
          >
            VIRGO
          </span>
        </div>
        {/* Subtitle */}
        <span
          className={cn(
            "font-body uppercase transition-colors duration-300",
            sizes.subtitle,
            colors.subtitle,
            showStar && "ml-5" // Indent to align with text after star
          )}
        >
          Laser Clinic
        </span>
      </div>
    </Link>
  );
}

export { DiamondStar };

