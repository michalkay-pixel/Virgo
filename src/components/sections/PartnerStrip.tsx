"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";

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
    <section className="relative bg-cream">
      {/* Top copper rule - full width */}
      <div className="h-px w-full bg-copper/40" />

      <div className="relative py-16 md:py-20">
        {/* Decorative corner brackets */}
        <div className="pointer-events-none absolute inset-x-6 inset-y-4 md:inset-x-12 md:inset-y-6">
          {/* Top left corner */}
          <div className="absolute left-0 top-0 h-6 w-6 md:h-8 md:w-8">
            <div className="absolute left-0 top-0 h-full w-px bg-copper/30" />
            <div className="absolute left-0 top-0 h-px w-full bg-copper/30" />
          </div>
          {/* Top right corner */}
          <div className="absolute right-0 top-0 h-6 w-6 md:h-8 md:w-8">
            <div className="absolute right-0 top-0 h-full w-px bg-copper/30" />
            <div className="absolute right-0 top-0 h-px w-full bg-copper/30" />
          </div>
          {/* Bottom left corner */}
          <div className="absolute bottom-0 left-0 h-6 w-6 md:h-8 md:w-8">
            <div className="absolute bottom-0 left-0 h-full w-px bg-copper/30" />
            <div className="absolute bottom-0 left-0 h-px w-full bg-copper/30" />
          </div>
          {/* Bottom right corner */}
          <div className="absolute bottom-0 right-0 h-6 w-6 md:h-8 md:w-8">
            <div className="absolute bottom-0 right-0 h-full w-px bg-copper/30" />
            <div className="absolute bottom-0 right-0 h-px w-full bg-copper/30" />
          </div>
        </div>

        <Container>
          {/* Eyebrow label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center font-body text-[11px] uppercase tracking-[0.4em] text-copper"
          >
            Clinical Partners
          </motion.p>

          {/* Partner Gallery Rail */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center"
          >
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group flex items-center"
              >
                {/* Partner name */}
                <span className="relative px-6 py-3 font-heading text-lg tracking-[0.1em] text-taupe/60 transition-colors duration-300 group-hover:text-charcoal md:px-8 md:text-xl lg:px-10 lg:text-2xl">
                  {partner.name}
                  {/* Underline on hover */}
                  <span className="absolute bottom-2 left-1/2 h-px w-0 -translate-x-1/2 bg-copper transition-all duration-300 group-hover:w-2/3" />
                </span>

                {/* Vertical divider (not after last item) */}
                {index < partners.length - 1 && (
                  <div className="hidden h-6 w-px bg-copper/30 md:block" />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-center font-body text-[10px] uppercase tracking-[0.3em] text-taupe/40"
          >
            Authorised Stockist &amp; Treatment Provider
          </motion.p>
        </Container>
      </div>

      {/* Bottom copper rule - full width */}
      <div className="h-px w-full bg-copper/40" />
    </section>
  );
}
