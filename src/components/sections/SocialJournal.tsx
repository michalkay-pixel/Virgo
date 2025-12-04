"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// Placeholder images - using texture images that exist in the project
// Replace with actual Instagram feed images when available
const galleryImages = [
  {
    id: 1,
    src: "/images/textures/stone.png",
    alt: "Luxury spa texture",
  },
  {
    id: 2,
    src: "/images/textures/silk-fabric.png",
    alt: "Silk fabric detail",
  },
  {
    id: 3,
    src: "/images/textures/water-ripple.png",
    alt: "Water ripple pattern",
  },
  {
    id: 4,
    src: "/images/textures/charcoal-paper.png",
    alt: "Charcoal paper texture",
  },
  {
    id: 5,
    src: "/images/textures/silk-fabric.png",
    alt: "Treatment room ambiance",
  },
];

export function SocialJournal() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-16 md:py-20">
      {/* Subtle grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-12"
        >
          <h2 className="font-heading text-2xl uppercase tracking-[0.3em] text-cream md:text-3xl md:tracking-[0.4em]">
            The Visual Diary
          </h2>
          <a
            href="https://www.instagram.com/virgolaserclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block font-body text-xs tracking-[0.2em] text-copper transition-colors duration-300 hover:text-copper-light"
          >
            @VIRGOLASERCLINIC
          </a>
        </motion.div>

        {/* Gallery Grid - Film Strip Look */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Mobile: Horizontal scroll / Desktop: Grid */}
          <div className="flex gap-1 overflow-x-auto px-4 scrollbar-hide md:grid md:grid-cols-5 md:gap-1 md:overflow-visible md:px-0">
            {galleryImages.map((image, index) => (
              <motion.a
                key={image.id}
                href="https://www.instagram.com/virgolaserclinic/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative aspect-square w-40 shrink-0 overflow-hidden rounded-none md:w-full"
              >
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  sizes="(max-width: 768px) 160px, 20vw"
                />

                {/* Copper overlay on hover */}
                <div className="absolute inset-0 bg-copper/0 transition-colors duration-500 group-hover:bg-copper/10" />

                {/* Corner accent on hover */}
                <div className="absolute bottom-2 right-2 h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 right-0 h-full w-px bg-copper/60" />
                  <div className="absolute bottom-0 right-0 h-px w-full bg-copper/60" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Fade edges for scroll indication on mobile */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-charcoal to-transparent md:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-charcoal to-transparent md:hidden" />
        </motion.div>

        {/* Footer Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center md:mt-12"
        >
          <a
            href="https://www.instagram.com/virgolaserclinic/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-cream/80 transition-colors duration-300 hover:text-cream"
          >
            <span className="relative">
              Join the Inner Circle
              <span className="absolute -bottom-1 left-0 h-px w-full bg-copper" />
            </span>
            <svg
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

