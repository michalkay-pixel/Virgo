"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrustBadgeInline } from "@/components/ui/TrustBadge";
import { DiamondStar } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function OfferBadge() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (100vh)
      const shouldShow = window.scrollY > window.innerHeight * 0.5;
      setIsVisible(shouldShow && !isDismissed);

      // Trigger attention animation once when first appears
      if (shouldShow && !hasAnimated) {
        setHasAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed, hasAnimated]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className={cn(
            "fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-auto md:right-6",
            "md:max-w-sm"
          )}
        >
          {/* Glow effect container */}
          <div className="relative">
            {/* Animated glow pulse - only on desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                hasAnimated
                  ? {
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.02, 1],
                    }
                  : {}
              }
              transition={{
                duration: 2,
                repeat: 3,
                ease: "easeInOut",
              }}
              className="absolute -inset-1 hidden rounded-lg bg-copper/30 blur-lg md:block"
            />

            <div className="relative border-t border-copper/30 bg-cream shadow-2xl md:rounded-lg md:border">
              {/* Decorative corner accent */}
              <div className="absolute -right-1 -top-1 hidden md:block">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <DiamondStar className="h-3 w-3 text-copper/40" />
                </motion.div>
              </div>

              {/* Close button */}
              <button
                onClick={() => setIsDismissed(true)}
                className="absolute right-3 top-3 p-1 text-taupe transition-colors hover:text-charcoal"
                aria-label="Dismiss offer"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="p-4 md:p-5">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-3 flex items-center gap-2"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                    }}
                  >
                    <Sparkles className="h-4 w-4 text-copper" />
                  </motion.div>
                  <span className="font-body text-xs uppercase tracking-[0.2em] text-copper">
                    Introductory Offer
                  </span>
                </motion.div>

                {/* Title */}
                <h3 className="font-heading text-xl text-charcoal md:text-2xl">
                  Soprano Ice Platinum
                </h3>
                <p className="mb-4 mt-1 font-body text-sm text-taupe">
                  The world&apos;s most advanced, virtually pain-free laser.
                </p>

                {/* Price with shine animation */}
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="relative font-heading text-3xl text-copper">
                    £69
                    {/* Animated shine */}
                    <motion.span
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 overflow-hidden"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </motion.span>
                  </span>
                  <span className="font-body text-sm text-taupe">
                    for 3 sessions
                  </span>
                </div>

                {/* CTA */}
                <Button className="w-full press-effect group" size="sm">
                  <span className="relative">
                    Claim Exclusive Offer
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </span>
                </Button>

                {/* Trust badge */}
                <div className="mt-3 flex justify-center">
                  <TrustBadgeInline rating={5.0} platform="google" />
                </div>
              </div>

              {/* Bottom copper accent line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-0.5 w-full origin-left bg-gradient-to-r from-copper via-copper-light to-copper"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
