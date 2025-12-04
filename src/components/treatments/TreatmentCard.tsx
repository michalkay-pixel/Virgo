"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Treatment } from "@/lib/data/treatments";
import { cn } from "@/lib/utils";

interface TreatmentCardProps {
  treatment: Treatment;
  index: number;
  featured?: boolean;
}

export function TreatmentCard({
  treatment,
  index,
  featured = false,
}: TreatmentCardProps) {
  const Icon = treatment.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(featured && "md:col-span-2 lg:col-span-1")}
    >
      <Link
        href={treatment.href}
        className={cn(
          "group relative block h-full overflow-hidden bg-cream transition-all duration-500",
          "border border-taupe/20 hover:border-copper/40",
          "hover:-translate-y-1 hover:shadow-[0_20px_60px_-15px_rgba(44,42,41,0.15)]",
          featured ? "p-8 md:p-10" : "p-6 md:p-8"
        )}
      >
        {/* Background texture on hover */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
          style={{
            backgroundImage: "url('/images/textures/silk-fabric.png')",
            backgroundSize: "cover",
          }}
        />

        {/* Decorative corner accent */}
        <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rotate-45 bg-copper/5 transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6 group-hover:bg-copper/10" />

        {/* Corner lines */}
        <div className="absolute left-0 top-0 h-8 w-px bg-copper/0 transition-all duration-500 group-hover:h-12 group-hover:bg-copper/30" />
        <div className="absolute left-0 top-0 h-px w-8 bg-copper/0 transition-all duration-500 group-hover:w-12 group-hover:bg-copper/30" />

        {/* Icon with pulse effect */}
        <div className="relative mb-6">
          <div
            className={cn(
              "relative flex items-center justify-center rounded-full border transition-all duration-500",
              "border-copper/20 bg-copper/5 group-hover:border-copper/40 group-hover:bg-copper/10",
              featured ? "h-16 w-16" : "h-14 w-14"
            )}
          >
            {/* Pulse ring on hover */}
            <div className="absolute inset-0 rounded-full bg-copper/20 opacity-0 transition-all duration-500 group-hover:animate-ping group-hover:opacity-100" />
            <Icon
              className={cn(
                "relative text-copper transition-transform duration-300 group-hover:scale-110",
                featured ? "h-7 w-7" : "h-6 w-6"
              )}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3
            className={cn(
              "font-heading tracking-wide text-charcoal transition-colors duration-300 group-hover:text-copper",
              featured ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
            )}
          >
            {treatment.name}
          </h3>
          <p className="mt-1 font-body text-xs uppercase tracking-[0.15em] text-copper">
            {treatment.tagline}
          </p>
          <p
            className={cn(
              "mt-4 font-body leading-relaxed text-taupe",
              featured ? "text-base" : "text-sm"
            )}
          >
            {treatment.description}
          </p>
        </div>

        {/* Arrow indicator */}
        <div className="mt-6 flex items-center gap-2 font-body text-xs uppercase tracking-[0.2em] text-charcoal transition-all duration-300 group-hover:text-copper">
          <span>Discover</span>
          <div className="relative overflow-hidden">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Bottom copper line animation */}
        <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-copper/80 via-copper to-copper/80 transition-all duration-500 group-hover:w-full" />

        {/* Right edge copper line */}
        <div className="absolute bottom-0 right-0 h-0 w-0.5 bg-gradient-to-t from-copper/80 to-transparent transition-all duration-500 delay-100 group-hover:h-1/3" />
      </Link>
    </motion.div>
  );
}

/**
 * Featured treatment card with larger display
 */
export function TreatmentCardFeatured({
  treatment,
  index,
}: TreatmentCardProps) {
  return <TreatmentCard treatment={treatment} index={index} featured />;
}
