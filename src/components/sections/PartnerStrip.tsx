"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { DiamondStar } from "@/components/ui/Logo";

// Partner data - logos will be added later
const partners = [
  { name: "Obagi", id: "obagi" },
  { name: "ZO Skin Health", id: "zo" },
  { name: "Soprano ICE", id: "soprano" },
  { name: "Juvederm", id: "juvederm" },
  { name: "Profhilo", id: "profhilo" },
];

export function PartnerStrip() {
  return (
    <section className="relative bg-cream py-16 md:py-20">
      {/* Top decorative divider */}
      <div className="absolute left-0 right-0 top-0">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-copper/40 to-copper/40" />
          <DiamondStar className="h-3 w-3 text-copper/50" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-copper/40 to-copper/40" />
        </div>
      </div>

      {/* Bottom decorative divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mx-auto flex max-w-xl items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-copper/40 to-copper/40" />
          <DiamondStar className="h-3 w-3 text-copper/50" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-copper/40 to-copper/40" />
        </div>
      </div>

      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <Badge variant="secondary" className="mb-4">
            Trusted Partners
          </Badge>
          <h2 className="font-heading text-2xl tracking-wide text-charcoal md:text-3xl">
            Clinical Excellence, At Home
          </h2>
          <p className="mt-3 font-body text-sm text-taupe">
            Official partners of the world&apos;s most advanced skincare
            formularies
          </p>
        </motion.div>

        {/* Partner Logos - Static version */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-cream to-transparent" />

          {/* Partner logos row */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group relative flex h-16 items-center justify-center px-4"
              >
                {/* Placeholder - Text logo until actual logos are provided */}
                <span className="relative font-heading text-lg tracking-[0.1em] text-taupe/50 transition-all duration-500 group-hover:text-charcoal md:text-xl">
                  {partner.name}
                  {/* Underline on hover */}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
                </span>

                {/* Note: Replace with actual logo images when available
                <Image
                  src={`/images/partners/${partner.id}.png`}
                  alt={partner.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto opacity-40 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
                */}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Optional: Animated infinite scroll version (uncomment if preferred)
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-cream to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-cream to-transparent" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-16"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex h-16 shrink-0 items-center justify-center px-4"
              >
                <span className="font-heading text-lg tracking-[0.1em] text-taupe/50 md:text-xl">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
        */}

        {/* Bottom accent text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center font-body text-xs uppercase tracking-[0.2em] text-taupe/50"
        >
          Authorised stockist &amp; treatment provider
        </motion.p>
      </Container>
    </section>
  );
}
