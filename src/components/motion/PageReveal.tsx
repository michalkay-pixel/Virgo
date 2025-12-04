"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { DiamondStar } from "@/components/ui/Logo";

interface PageRevealProps {
  children: React.ReactNode;
  enabled?: boolean;
}

/**
 * Orchestrated page load sequence with Virgo branding
 * Creates a "moment of arrival" experience
 */
export function PageReveal({ children, enabled = true }: PageRevealProps) {
  const [isLoading, setIsLoading] = useState(enabled);
  const [showContent, setShowContent] = useState(!enabled);

  useEffect(() => {
    if (!enabled) return;

    // Minimum display time for the loader
    const minLoadTime = 1800;
    const startTime = Date.now();

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minLoadTime - elapsed);

      setTimeout(() => {
        setIsLoading(false);
        // Small delay before showing content for smooth transition
        setTimeout(() => setShowContent(true), 100);
      }, remaining);
    };

    // Check if document is already loaded
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, [enabled]);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          >
            {/* Subtle texture background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "url('/images/textures/silk-fabric.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 bg-cream/90" />

            {/* Loader Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Animated Diamond Star */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <DiamondStar className="h-12 w-12 text-copper md:h-16 md:w-16" />
              </motion.div>

              {/* VIRGO Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 text-center"
              >
                <span className="font-heading text-3xl tracking-[0.2em] text-charcoal md:text-4xl">
                  VIRGO
                </span>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="mt-2 font-body text-xs uppercase tracking-[0.3em] text-taupe"
                >
                  Laser Clinic
                </motion.p>
              </motion.div>

              {/* Loading indicator */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-8 h-px w-24 origin-left bg-copper/40"
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="h-full w-full origin-left bg-copper"
                />
              </motion.div>
            </div>

            {/* Corner decorations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.5 }}
              className="absolute left-8 top-8"
            >
              <div className="h-16 w-16 border-l border-t border-copper" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 right-8"
            >
              <div className="h-16 w-16 border-b border-r border-copper" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div
        initial={enabled ? { opacity: 0 } : { opacity: 1 }}
        animate={showContent ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </>
  );
}

/**
 * Section reveal wrapper for scroll-triggered animations
 */
interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function SectionReveal({
  children,
  className,
  delay = 0,
}: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered children reveal
 */
interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerReveal({
  children,
  className,
  staggerDelay = 0.1,
}: StaggerRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

