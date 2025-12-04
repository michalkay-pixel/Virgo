"use client";

import { motion } from "framer-motion";
import { Sparkles, Gift, Users, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrustBadgeInline, TrustIndicators } from "@/components/ui/TrustBadge";
import { DiamondStar } from "@/components/ui/Logo";

export function LeadMagnet() {
  return (
    <section id="offer" className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url('/images/textures/silk-fabric.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-cream/95" />

      {/* Decorative corner elements */}
      <div className="absolute left-8 top-8 hidden opacity-10 lg:block">
        <DiamondStar className="h-24 w-24 text-copper" />
      </div>
      <div className="absolute bottom-8 right-8 hidden opacity-10 lg:block">
        <DiamondStar className="h-24 w-24 text-copper" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-12 text-center"
          >
            <Badge className="mb-4">
              <Sparkles className="mr-2 h-3 w-3" />
              The Invitation
            </Badge>
            <h2 className="font-heading text-3xl tracking-wide text-charcoal md:text-4xl lg:text-5xl">
              The Soprano Ice Platinum Experience
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-taupe">
              The world&apos;s most advanced, virtually pain-free laser technology.
              Safe for all skin tones, all year round.
            </p>
          </motion.div>

          {/* Offer Cards */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Main Offer Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative overflow-hidden border border-copper/30 bg-white p-8 shadow-lg transition-all duration-500 hover:border-copper/50 hover:shadow-xl md:p-10 hover-glow"
            >
              {/* Decorative corner */}
              <div className="absolute -right-12 -top-12 h-24 w-24 rotate-45 bg-copper/10 transition-all duration-500 group-hover:bg-copper/15" />

              {/* Limited time badge */}
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-copper/10 px-3 py-1">
                <Clock className="h-3 w-3 text-copper" />
                <span className="font-body text-[10px] uppercase tracking-wider text-copper">
                  Limited Offer
                </span>
              </div>

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/10 transition-all duration-300 group-hover:bg-copper/15">
                    <Gift className="h-6 w-6 text-copper" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-taupe">
                      Introductory Access
                    </p>
                    <h3 className="font-heading text-xl text-charcoal">
                      New Client Privilege
                    </h3>
                  </div>
                </div>

                {/* Price Display with shine effect */}
                <div className="mb-6 border-y border-taupe/20 py-6">
                  <div className="relative inline-flex items-baseline gap-2">
                    <span className="relative font-heading text-5xl text-copper">
                      £69
                      {/* Animated shine */}
                      <span className="absolute inset-0 overflow-hidden">
                        <span className="absolute inset-0 -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                      </span>
                    </span>
                    <span className="font-body text-taupe">for 3 sessions</span>
                  </div>
                  <p className="mt-2 font-body text-sm text-taupe/80">
                    Choose any small area • No commitment required
                  </p>
                </div>

                <ul className="mb-8 space-y-3">
                  {[
                    "Award-winning Soprano ICE Platinum technology",
                    "Suitable for all skin types & tones",
                    "Virtually painless treatment",
                    "Complimentary consultation included",
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 font-body text-sm text-charcoal"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-copper"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <Button className="w-full press-effect group/btn" size="lg">
                  <span className="relative">
                    Claim Exclusive Offer
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                  </span>
                </Button>

                {/* Trust badge near CTA */}
                <div className="mt-4 flex justify-center">
                  <TrustBadgeInline rating={5.0} platform="google" />
                </div>
              </div>
            </motion.div>

            {/* Referral Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative overflow-hidden border border-charcoal/10 bg-charcoal p-8 shadow-lg transition-all duration-500 hover:shadow-xl md:p-10"
            >
              {/* Background texture */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "url('/images/textures/charcoal-paper.png')",
                  backgroundSize: "cover",
                }}
              />

              {/* Subtle vignette */}
              <div
                className="absolute inset-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 0%, rgba(44, 42, 41, 0.4) 100%)",
                }}
              />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/20 transition-all duration-300 group-hover:bg-copper/30">
                    <Users className="h-6 w-6 text-copper" />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-cream/60">
                      The Inner Circle
                    </p>
                    <h3 className="font-heading text-xl text-cream">
                      Referral Reward
                    </h3>
                  </div>
                </div>

                <div className="mb-6 border-y border-cream/10 py-6">
                  <p className="font-heading text-2xl text-cream md:text-3xl">
                    Give 3. <span className="text-copper-light">Get 3.</span>
                  </p>
                  <p className="mt-2 font-body text-sm text-cream/70">
                    Invite a guest to experience Virgo
                  </p>
                </div>

                <div className="mb-8 space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="rounded border border-cream/10 bg-cream/5 p-4 transition-all duration-300 hover:border-copper/30 hover:bg-cream/10"
                  >
                    <p className="font-body text-sm text-cream/90">
                      <span className="text-copper-light">Your guest receives:</span>
                      <br />3 complimentary sessions when they join
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="rounded border border-cream/10 bg-cream/5 p-4 transition-all duration-300 hover:border-copper/30 hover:bg-cream/10"
                  >
                    <p className="font-body text-sm text-cream/90">
                      <span className="text-copper-light">You receive:</span>
                      <br />3 complimentary sessions as our thank you
                    </p>
                  </motion.div>
                </div>

                <p className="mb-6 font-body text-xs italic text-cream/50">
                  &ldquo;One for you, one for your most stylish friend.&rdquo;
                </p>

                <Button
                  variant="outline"
                  className="w-full border-cream text-cream hover:bg-cream hover:text-charcoal press-effect"
                  size="lg"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <div className="mt-10">
            <TrustIndicators variant="dark" />
          </div>
        </div>
      </Container>
    </section>
  );
}
