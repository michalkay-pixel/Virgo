"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { TreatmentCard } from "./TreatmentCard";
import { treatments } from "@/lib/data/treatments";
import { Badge } from "@/components/ui/badge";
import { DiamondStar } from "@/components/ui/Logo";

export function TreatmentGrid() {
  return (
    <section
      id="treatments"
      className="relative overflow-hidden bg-cream py-20 md:py-28"
    >
      {/* Subtle stone texture background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/textures/stone.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Decorative elements */}
      <div className="absolute left-1/2 top-20 -translate-x-1/2 opacity-5">
        <DiamondStar className="h-40 w-40 text-copper" />
      </div>

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <Badge className="mb-4">Bespoke Curations</Badge>
          <h2 className="font-heading text-3xl tracking-wide text-charcoal md:text-4xl lg:text-5xl">
            Tailored Solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-taupe">
            Every journey begins with understanding your unique concerns. Our
            signature programmes are designed for specific outcomes, curated by
            experts.
          </p>
        </motion.div>

        {/* Treatment Cards Grid - Asymmetric layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.slice(0, 3).map((treatment, index) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              index={index}
            />
          ))}
        </div>

        {/* Second row - 2 cards centered */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-2xl">
          {treatments.slice(3).map((treatment, index) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              index={index + 3}
            />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14 text-center"
        >
          <a
            href="/treatments"
            className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:text-copper"
          >
            <span className="relative">
              View Full Treatment Menu
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
            </span>
            <svg
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
      </Container>
    </section>
  );
}
