"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { DiamondStar } from "@/components/ui/Logo";

// Heritage Icon: Column - represents "Experience" and "Foundation"
function ColumnIcon({ className }: { className?: string }) {
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
      {/* Column capital */}
      <path d="M6 4h12M5 4v2h14V4" />
      {/* Column shaft with fluting */}
      <path d="M7 6v12M12 6v12M17 6v12" />
      {/* Column base */}
      <path d="M5 18v2h14v-2M6 20h12" />
    </svg>
  );
}

// Heritage Icon: Keystone/Shield - represents "Insurance" and "Protection"
function KeystoneIcon({ className }: { className?: string }) {
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
      {/* Shield/Keystone shape */}
      <path d="M12 3L4 7v6c0 5.25 3.4 9.74 8 11 4.6-1.26 8-5.75 8-11V7l-8-4z" />
      {/* Inner checkmark */}
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

// Heritage Icon: Scroll/Certificate - represents "Registration" and "Credentials"
function ScrollIcon({ className }: { className?: string }) {
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
      {/* Scroll body */}
      <path d="M8 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-2" />
      {/* Scroll top curl */}
      <path d="M8 3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1H8V3z" />
      {/* Lines on scroll */}
      <line x1="8" y1="9" x2="16" y2="9" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  );
}

// Handwritten Signature SVG
function JolantaSignature({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* "J" */}
      <path d="M15 15 Q18 10, 20 15 L20 35 Q20 45, 12 48 Q8 50, 5 45" />
      {/* "olanta" - flowing script */}
      <path d="M25 30 Q30 20, 35 30 Q40 40, 45 30 Q48 25, 50 30 L52 35 Q55 40, 58 35 L60 25 Q62 20, 68 25 Q72 28, 75 25 Q80 20, 85 28" />
      {/* Space and "K" */}
      <path d="M100 15 L100 45 M100 28 L115 15 M105 32 L118 48" />
      {/* "ay" */}
      <path d="M125 30 Q130 20, 135 30 Q140 40, 145 30 L148 25 Q152 20, 155 35 Q158 50, 150 55" />
      {/* Decorative underline flourish */}
      <path d="M10 55 Q60 50, 120 52 Q160 54, 190 48" />
    </svg>
  );
}

const credentials = [
  {
    icon: ScrollIcon,
    label: "NMC Registered",
  },
  {
    icon: KeystoneIcon,
    label: "Fully Insured",
  },
  {
    icon: ColumnIcon,
    label: "20+ Years",
  },
];

export function ExpertProfile() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 md:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232C2A29' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Column with Framed Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Framed Portrait Structure */}
            <div className="relative">
              {/* Outer shadow frame */}
              <div className="absolute -inset-1 bg-charcoal/10 blur-xl" />
              
              {/* The Frame - Limestone Cream border like a photograph */}
              <div className="relative bg-cream p-2.5 shadow-2xl md:p-3">
                {/* Inner copper accent line */}
                <div className="absolute inset-2 border border-copper/20 md:inset-2.5" />
                
                {/* Portrait Image Container - 3:4 aspect ratio */}
                <div className="relative aspect-[3/4] w-64 overflow-hidden md:w-80 lg:w-96">
                  {/* Main Image */}
                  <Image
                    src="/images/jolanta-kay.jpg"
                    alt="Jolanta Kay - Head Practitioner at Virgo Laser Clinic"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                    priority
                  />

                  {/* Subtle warm overlay for brand cohesion */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute -left-3 -top-3">
                <DiamondStar className="h-6 w-6 text-copper" />
              </div>
              <div className="absolute -bottom-3 -right-3">
                <DiamondStar className="h-6 w-6 text-copper" />
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="secondary" className="mb-6">
              Meet The Expert
            </Badge>

            <h2 className="font-heading text-3xl tracking-wide text-charcoal md:text-4xl lg:text-5xl">
              Curated by
              <br />
              <span className="text-copper">Jolanta Kay</span>
            </h2>

            <p className="mt-2 font-body text-sm uppercase tracking-[0.2em] text-taupe">
              NMC Registered Nurse &amp; Head Practitioner
            </p>

            <div className="mt-8 space-y-6">
              <p className="font-body text-lg leading-relaxed text-charcoal/80">
                With over 20 years of experience in aesthetic medicine, Jolanta
                brings a rare combination of clinical expertise and artistic
                vision to every treatment.
              </p>

              <p className="font-body leading-relaxed text-taupe">
                Her philosophy is simple: &ldquo;less is more.&rdquo; At Virgo, we
                believe in enhancing your natural beauty through subtle,
                restorative treatments—never dramatic transformations. Every
                client receives a bespoke treatment plan, because no two faces
                are the same.
              </p>
            </div>

            {/* Credentials - Horizontal with Heritage Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 border-t border-taupe/20 pt-8"
            >
              <div className="flex flex-wrap items-center gap-8 md:gap-12">
                {credentials.map((credential, index) => {
                  const Icon = credential.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-copper/20 bg-copper/5">
                        <Icon className="h-5 w-5 text-copper" />
                      </div>
                      <span className="font-body text-xs uppercase tracking-[0.15em] text-charcoal">
                        {credential.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quote with Signature */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative mt-10"
            >
              {/* Quote marks */}
              <div className="absolute -left-2 -top-4 font-heading text-6xl text-copper/20">
                &ldquo;
              </div>

              <div className="border-l-2 border-copper pl-6">
                <p className="font-heading text-xl italic leading-relaxed text-charcoal/80 md:text-2xl">
                  True beauty is timeless. My role is simply to reveal what
                  was always there.
                </p>

                {/* Handwritten Signature */}
                <div className="mt-6">
                  <JolantaSignature className="h-12 w-40 text-copper/70" />
                </div>
              </div>
            </motion.blockquote>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
