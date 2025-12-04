"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TrustBadgeProps {
  rating?: number;
  reviewCount?: number;
  platform?: "google" | "trustpilot";
  variant?: "light" | "dark";
  size?: "sm" | "md";
  className?: string;
  showText?: boolean;
}

/**
 * Trust badge component displaying Google/Trustpilot ratings
 * Per website structure doc: "Add a small verified reviews star rating"
 */
export function TrustBadge({
  rating = 5.0,
  reviewCount = 150,
  platform = "google",
  variant = "light",
  size = "sm",
  className,
  showText = true,
}: TrustBadgeProps) {
  const colorClasses = {
    light: {
      text: "text-cream/70",
      star: "text-copper-light",
      platform: "text-cream/50",
    },
    dark: {
      text: "text-taupe",
      star: "text-copper",
      platform: "text-taupe/60",
    },
  };

  const sizeClasses = {
    sm: {
      star: "h-3 w-3",
      text: "text-xs",
      gap: "gap-1",
    },
    md: {
      star: "h-4 w-4",
      text: "text-sm",
      gap: "gap-1.5",
    },
  };

  const colors = colorClasses[variant];
  const sizes = sizeClasses[size];

  // Generate star fill based on rating (handles half stars)
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        "inline-flex items-center",
        sizes.gap,
        className
      )}
    >
      {/* Stars */}
      <div className={cn("flex", sizes.gap)}>
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <svg
            key={`full-${i}`}
            className={cn(sizes.star, colors.star)}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}

        {/* Half star */}
        {hasHalfStar && (
          <svg
            className={cn(sizes.star, colors.star)}
            viewBox="0 0 20 20"
          >
            <defs>
              <linearGradient id="halfStarGradient">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill="url(#halfStarGradient)"
              stroke="currentColor"
              strokeWidth="0.5"
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        )}

        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <svg
            key={`empty-${i}`}
            className={cn(sizes.star, "opacity-30", colors.star)}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Text */}
      {showText && (
        <span className={cn("font-body", sizes.text, colors.text)}>
          {rating.toFixed(1)} {platform === "google" ? "Google" : "Trustpilot"}{" "}
          {reviewCount && `(${reviewCount}+)`}
        </span>
      )}
    </motion.div>
  );
}

/**
 * Compact inline trust badge for use near CTAs
 */
export function TrustBadgeInline({
  rating = 5.0,
  platform = "google",
  variant = "dark",
  className,
}: Omit<TrustBadgeProps, "reviewCount" | "size" | "showText">) {
  const colorClasses = {
    light: {
      text: "text-cream/60",
      star: "text-copper-light",
    },
    dark: {
      text: "text-taupe/70",
      star: "text-copper",
    },
  };

  const colors = colorClasses[variant];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.15em]",
        colors.text,
        className
      )}
    >
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={cn("h-2.5 w-2.5", colors.star)}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span>
        {rating.toFixed(1)} on {platform === "google" ? "Google" : "Trustpilot"}
      </span>
    </div>
  );
}

/**
 * Row of trust indicators
 */
interface TrustIndicatorsProps {
  variant?: "light" | "dark";
  className?: string;
}

export function TrustIndicators({
  variant = "dark",
  className,
}: TrustIndicatorsProps) {
  const indicators = [
    "NMC Registered Nurse",
    "20+ Years Experience",
    "Award-Winning Technology",
  ];

  const colorClasses = {
    light: {
      dot: "bg-copper-light",
      text: "text-cream/70",
    },
    dark: {
      dot: "bg-copper",
      text: "text-taupe",
    },
  };

  const colors = colorClasses[variant];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={cn(
        "flex flex-wrap items-center justify-center gap-6 md:gap-10",
        className
      )}
    >
      {indicators.map((indicator, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em]",
            colors.text
          )}
        >
          <div className={cn("h-1.5 w-1.5 rounded-full", colors.dot)} />
          {indicator}
        </div>
      ))}
    </motion.div>
  );
}

