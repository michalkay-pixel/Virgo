"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DiamondStar } from "@/components/ui/Logo";

// Custom Icon: Archway/Keystone - represents "Access" and "Entry"
function ArchwayIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Keystone arch */}
      <path d="M4 20V10c0-4.418 3.582-8 8-8s8 3.582 8 8v10" />
      {/* Inner arch */}
      <path d="M8 20v-6a4 4 0 0 1 8 0v6" />
      {/* Keystone at top */}
      <path d="M10 6h4l1 3h-6l1-3z" />
      {/* Base line */}
      <line x1="3" y1="20" x2="21" y2="20" />
    </svg>
  );
}

// Custom Icon: Constellation/Connected Stars - represents "Connection" and "Community"
function ConstellationIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Connection lines */}
      <line x1="5" y1="5" x2="12" y2="8" />
      <line x1="12" y1="8" x2="19" y2="5" />
      <line x1="12" y1="8" x2="12" y2="16" />
      <line x1="12" y1="16" x2="6" y2="19" />
      <line x1="12" y1="16" x2="18" y2="19" />
      {/* Stars (circles) */}
      <circle cx="5" cy="5" r="2" fill="currentColor" />
      <circle cx="19" cy="5" r="2" fill="currentColor" />
      <circle cx="12" cy="8" r="2" fill="currentColor" />
      <circle cx="12" cy="16" r="2" fill="currentColor" />
      <circle cx="6" cy="19" r="1.5" fill="currentColor" />
      <circle cx="18" cy="19" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function LeadMagnet() {
  return (
    <section id="offer" className="relative overflow-hidden bg-cream py-20 md:py-28">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C2A29' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
          <Badge className="mb-4">Private Access</Badge>
          <h2 className="font-heading text-3xl tracking-wide text-charcoal md:text-4xl lg:text-5xl">
            The Invitation Suite
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-body text-lg text-taupe">
            We do not sell—we invite. Select your path to experience the Virgo difference.
          </p>
        </motion.div>

        {/* The Invitation Suite - Magazine Spread Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-5xl"
        >
          <div className="flex flex-col overflow-hidden lg:flex-row">
            {/* LEFT CARD: The Inner Circle (Referral) - Dark */}
            <div className="group relative flex-1 bg-charcoal p-8 md:p-12 lg:aspect-[4/3]">
              {/* Paper grain texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "url('/images/textures/charcoal-paper.png')",
                  backgroundSize: "cover",
                }}
              />

              {/* Subtle vignette */}
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 0%, rgba(44, 42, 41, 0.5) 100%)",
                }}
              />

              {/* Decorative corner diamond */}
              <div className="absolute right-6 top-6 opacity-20 transition-opacity duration-500 group-hover:opacity-40">
                <DiamondStar className="h-8 w-8 text-copper-light" />
              </div>

              <div className="relative flex h-full flex-col">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-copper/30 bg-copper/10 transition-all duration-500 group-hover:border-copper/50 group-hover:bg-copper/20">
                  <ConstellationIcon className="h-7 w-7 text-copper-light" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-heading text-2xl tracking-wide text-cream md:text-3xl">
                    The Inner Circle
                  </h3>
                  <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-copper-light">
                    Curated Connections
                  </p>
                </div>

                {/* Body */}
                <p className="mb-8 flex-1 font-body leading-relaxed text-cream/70">
                  Beauty is best shared. Extend a complimentary course of treatment 
                  to a confidante, and receive our gratitude in kind.
                </p>

                {/* The Deal - subtle */}
                <div className="mb-8 border-t border-cream/10 pt-6">
                  <p className="font-body text-sm italic text-cream/50">
                    Three complimentary sessions for your guest;
                    <br />
                    three for you.
                  </p>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  className="w-full border-cream/30 bg-transparent text-cream transition-all duration-300 hover:border-cream hover:bg-cream hover:text-charcoal"
                  size="lg"
                >
                  Gift an Invitation
                </Button>
              </div>
            </div>

            {/* CENTER DIVIDER - Copper Line */}
            <div className="hidden w-px bg-copper/60 lg:block" />
            <div className="h-px bg-copper/60 lg:hidden" />

            {/* RIGHT CARD: Introductory Access (New Client) - Light */}
            <div className="group relative flex-1 bg-cream p-8 md:p-12 lg:aspect-[4/3]">
              {/* Inset copper border - mimics high-end stationery */}
              <div className="absolute inset-3 border border-copper/20 transition-colors duration-500 group-hover:border-copper/40" />

              {/* Decorative corner diamond */}
              <div className="absolute bottom-6 left-6 opacity-10 transition-opacity duration-500 group-hover:opacity-20">
                <DiamondStar className="h-8 w-8 text-copper" />
              </div>

              <div className="relative flex h-full flex-col">
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-copper/30 bg-copper/5 transition-all duration-500 group-hover:border-copper/50 group-hover:bg-copper/10">
                  <ArchwayIcon className="h-7 w-7 text-copper" />
                </div>

                {/* Header */}
                <div className="mb-6">
                  <h3 className="font-heading text-2xl tracking-wide text-charcoal md:text-3xl">
                    Introductory Access
                  </h3>
                  <p className="mt-1 font-body text-xs uppercase tracking-[0.2em] text-copper">
                    The Signature Laser Trial
                  </p>
                </div>

                {/* Body */}
                <p className="mb-8 flex-1 font-body leading-relaxed text-taupe">
                  Experience the precision of Soprano Ice Platinum technology. 
                  A curated session for new guests to ensure compatibility and comfort.
                </p>

                {/* The Price - subtle, italicized */}
                <div className="mb-8 border-t border-taupe/20 pt-6">
                  <p className="font-body text-sm text-taupe/80">
                    <span className="italic">Honorarium:</span>{" "}
                    <span className="text-charcoal">£69 for 3 sessions</span>
                  </p>
                  <p className="mt-1 font-body text-xs text-taupe/60">
                    Choose any small area • Consultation included
                  </p>
                </div>

                {/* CTA */}
                <Button
                  className="w-full"
                  size="lg"
                >
                  Inquire for Availability
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />
        </motion.div>

        {/* Trust note - subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="font-body text-xs uppercase tracking-[0.2em] text-taupe/60">
            NMC Registered • Fully Insured • 20+ Years of Excellence
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
