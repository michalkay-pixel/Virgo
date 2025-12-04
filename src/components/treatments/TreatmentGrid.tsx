"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { treatments } from "@/lib/data/treatments";
import { Badge } from "@/components/ui/badge";
import { DiamondStar } from "@/components/ui/Logo";
import Link from "next/link";

// Define the column assignments for Editorial Masonry
// Left column (starts lower): Ageless, Radiance
// Right column (starts higher): Sculpt, Clarity, Restoration
const leftColumnIds = ["ageless", "radiance"];
const rightColumnIds = ["sculpt", "clarity", "restoration"];

const leftColumnTreatments = treatments.filter((t) =>
  leftColumnIds.includes(t.id)
);
const rightColumnTreatments = treatments.filter((t) =>
  rightColumnIds.includes(t.id)
);

interface EditorialCellProps {
  treatment: (typeof treatments)[0];
  number: string;
  isLast?: boolean;
}

function EditorialCell({ treatment, number, isLast = false }: EditorialCellProps) {
  const Icon = treatment.icon;

  return (
    <Link href={treatment.href} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className={`relative py-10 transition-colors duration-500 group-hover:bg-taupe/[0.05] ${
          !isLast ? "border-b border-copper/20" : ""
        }`}
      >
        {/* Number */}
        <span className="font-heading text-sm tracking-wider text-charcoal/40">
          {number}
        </span>

        {/* Title Row */}
        <div className="mt-4 flex items-start gap-4">
          {/* Icon */}
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-copper/20 transition-colors duration-300 group-hover:border-copper/40">
            <Icon className="h-5 w-5 text-copper" />
          </div>

          {/* Title & Tagline */}
          <div className="flex-1">
            <h3 className="font-heading text-xl tracking-wide text-charcoal transition-colors duration-300 group-hover:text-copper md:text-2xl">
              {treatment.name}
            </h3>
            <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-copper/80">
              {treatment.tagline}
            </p>
          </div>
        </div>

        {/* Description - fades in on hover */}
        <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100">
          <p className="font-body text-sm leading-relaxed text-taupe">
            {treatment.description}
          </p>

          {/* Discover link */}
          <span className="mt-4 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 group-hover:text-copper">
            <span>Discover</span>
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
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export function TreatmentGrid() {
  return (
    <section
      id="treatments"
      className="relative overflow-hidden bg-cream py-20 md:py-28"
    >
      {/* Decorative diamond */}
      <div className="absolute left-1/2 top-16 -translate-x-1/2 opacity-[0.03]">
        <DiamondStar className="h-48 w-48 text-copper" />
      </div>

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <Badge className="mb-4">Bespoke Curations</Badge>
          <h2 className="font-heading text-3xl tracking-wide text-charcoal md:text-4xl lg:text-5xl">
            Tailored Programs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-taupe">
            Every journey begins with understanding your unique concerns. Our
            signature programmes are designed for specific outcomes, curated by
            experts.
          </p>
        </motion.div>

        {/* Editorial Masonry Grid */}
        <div className="relative">
          {/* Vertical center divider line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-copper/10 lg:block" />

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left Column - Starts Lower (with top padding) */}
            <div className="lg:pt-24">
              {/* Column header line */}
              <div className="mb-6 hidden border-t border-copper/20 pt-6 lg:block">
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-taupe/60">
                  Restoration & Radiance
                </span>
              </div>

              {leftColumnTreatments.map((treatment, index) => (
                <EditorialCell
                  key={treatment.id}
                  treatment={treatment}
                  number={`0${index + 1}`}
                  isLast={index === leftColumnTreatments.length - 1}
                />
              ))}
            </div>

            {/* Right Column - Starts Higher */}
            <div>
              {/* Column header line */}
              <div className="mb-6 hidden border-t border-copper/20 pt-6 lg:block">
                <span className="font-body text-[10px] uppercase tracking-[0.3em] text-taupe/60">
                  Sculpting & Clarity
                </span>
              </div>

              {rightColumnTreatments.map((treatment, index) => (
                <EditorialCell
                  key={treatment.id}
                  treatment={treatment}
                  number={`0${index + 3}`}
                  isLast={index === rightColumnTreatments.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          {/* Decorative line */}
          <div className="mx-auto mb-8 h-px w-24 bg-copper/30" />

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
