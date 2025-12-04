"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { DiamondStar } from "@/components/ui/Logo";

export function HeroVideo() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  // Parallax effect on scroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    // Trigger animation after a short delay for smooth entry
    const timer = setTimeout(() => setVideoLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="h-full w-full object-cover"
          poster="/images/textures/water-ripple.png"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-charcoal/40" />

        {/* Vignette overlay for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(44, 42, 41, 0.4) 100%)",
          }}
        />

        {/* Subtle grain texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content Overlay with parallax */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <div className="max-w-4xl">
          {/* Diamond Star Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={videoLoaded ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <DiamondStar className="h-8 w-8 text-copper-light animate-twinkle md:h-10 md:w-10" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={videoLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="font-heading text-4xl tracking-wide text-cream md:text-6xl lg:text-7xl"
          >
            <span className="tracking-[0.1em] md:tracking-[0.15em]">
              Timeless Skin.
            </span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={videoLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="text-copper-light"
            >
              Tailored to You.
            </motion.span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={videoLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-6 font-body text-lg font-light tracking-wide text-cream/90 md:text-xl"
          >
            Harrow&apos;s Premier Destination for Laser &amp; Aesthetic Artistry.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={videoLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
            className="mt-10"
          >
            <a
              href="#consultation"
              className="group relative inline-block overflow-hidden border-2 border-copper bg-copper px-8 py-4 font-body text-sm uppercase tracking-[0.2em] text-cream transition-all duration-300 hover:bg-transparent hover:text-copper press-effect"
            >
              {/* Shine effect on hover */}
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Request Your Consultation</span>
            </a>
          </motion.div>

          {/* Trust indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={videoLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            className="mt-8 flex items-center justify-center gap-6"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-3.5 w-3.5 text-copper-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-body text-xs text-cream/70">
                5.0 Google Rating
              </span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Refined animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={videoLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          className="absolute bottom-16 left-1/2 z-30 -translate-x-1/2"
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-3"
          >
            <span className="font-body text-xs uppercase tracking-[0.3em] text-cream/80">
              Discover
            </span>
            <div className="flex flex-col items-center gap-1">
              <div className="h-6 w-px bg-gradient-to-b from-cream/70 to-cream/20" />
              <DiamondStar className="h-2.5 w-2.5 text-copper-light" />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade for smooth transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
        style={{
          height: "200px",
          background: "linear-gradient(to bottom, transparent 0%, transparent 20%, rgba(245, 243, 239, 0.3) 50%, rgba(245, 243, 239, 0.7) 75%, var(--color-cream) 100%)",
        }}
      />
    </section>
  );
}
