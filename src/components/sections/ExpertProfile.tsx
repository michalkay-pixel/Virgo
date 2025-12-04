"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { DiamondStar } from "@/components/ui/Logo";

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
          {/* Image Column with Circular Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            {/* Circular frame structure */}
            <div className="relative">
              {/* Outer decorative rings */}
              <div className="absolute -inset-4 rounded-full border border-copper/20" />
              <div className="absolute -inset-8 rounded-full border border-copper/10" />
              
              {/* Decorative corner diamonds */}
              <div className="absolute -right-2 -top-2 z-10">
                <DiamondStar className="h-5 w-5 text-copper" />
              </div>
              <div className="absolute -bottom-2 -left-2 z-10">
                <DiamondStar className="h-5 w-5 text-copper" />
              </div>

              {/* Main Circular Image Container */}
              <div className="relative h-72 w-72 overflow-hidden rounded-full ring-4 ring-copper/30 ring-offset-4 ring-offset-cream md:h-96 md:w-96 lg:h-[420px] lg:w-[420px]">
                {/* Main Image - Full Color */}
                <Image
                  src="/images/jolanta-kay.jpg"
                  alt="Jolanta Kay - Head Practitioner at Virgo Laser Clinic"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 384px, 420px"
                  priority
                />

                {/* Subtle warm overlay for brand cohesion */}
                <div className="absolute inset-0 bg-gradient-to-b from-copper/5 via-transparent to-copper/10" />
              </div>

              {/* Experience badge below circle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2"
              >
                <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-copper/30 bg-cream px-5 py-2.5 shadow-lg">
                  <DiamondStar className="h-4 w-4 text-copper" />
                  <span className="font-body text-xs uppercase tracking-[0.15em] text-charcoal">
                    20+ Years of Excellence
                  </span>
                </div>
              </motion.div>
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
              GDC Registered Nurse &amp; Head Practitioner
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

              <p className="font-body leading-relaxed text-taupe">
                Clients travel from across London specifically for her expertise
                and discerning eye. At Virgo, you&apos;re not a number—you see
                Jolanta or a dedicated senior practitioner at every visit.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 border-t border-taupe/20 pt-8">
              <p className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-taupe">
                Credentials &amp; Accreditations
              </p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 },
                  },
                }}
                className="flex flex-wrap gap-3"
              >
                {["NMC Registered", "Fully Insured", "20+ Years Experience"].map(
                  (credential, index) => (
                    <motion.div
                      key={index}
                      variants={{
                        hidden: { opacity: 0, scale: 0.9 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                    >
                      <Badge variant="trust">{credential}</Badge>
                    </motion.div>
                  )
                )}
              </motion.div>
            </div>

            {/* Quote with signature */}
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

                {/* Signature */}
                <div className="mt-4 flex items-center gap-4">
                  <cite className="font-body text-sm not-italic text-copper">
                    — Jolanta Kay
                  </cite>
                  {/* Stylized signature line */}
                  <svg
                    viewBox="0 0 120 30"
                    className="h-6 w-24 text-copper/40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      d="M5 20 Q15 5, 30 15 T60 12 Q75 10, 85 18 T115 15"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </motion.blockquote>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
