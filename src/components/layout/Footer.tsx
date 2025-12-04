"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Car, ArrowUp } from "lucide-react";
import { Container } from "./Container";
import { DiamondStar } from "@/components/ui/Logo";
import { TrustBadge } from "@/components/ui/TrustBadge";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/virgolaserclinic/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/virgolaserclinic",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/447737721376",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const openingHours = [
  { day: "Monday", hours: "10:00 AM - 5:00 PM", dayNum: 1 },
  { day: "Tuesday", hours: "5:00 PM - 8:00 PM", dayNum: 2 },
  { day: "Wednesday", hours: "5:00 PM - 8:00 PM", dayNum: 3 },
  { day: "Thursday", hours: "10:00 AM - 5:00 PM", dayNum: 4 },
  { day: "Friday", hours: "10:00 AM - 5:00 PM", dayNum: 5 },
  { day: "Saturday", hours: "10:00 AM - 2:00 PM", dayNum: 6 },
  { day: "Sunday", hours: "Closed", dayNum: 0 },
];

function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="group flex flex-col items-center gap-2 transition-colors"
      aria-label="Back to top"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 bg-cream/5 transition-all duration-300 group-hover:border-copper/40 group-hover:bg-copper/10">
        <ArrowUp className="h-4 w-4 text-cream/60 transition-colors group-hover:text-copper" />
      </div>
      <span className="font-body text-[10px] uppercase tracking-[0.2em] text-cream/40 transition-colors group-hover:text-copper/70">
        Top
      </span>
    </motion.button>
  );
}

export function Footer() {
  // Get current day for highlighting
  const currentDay = new Date().getDay();

  return (
    <footer
      id="contact"
      className="relative bg-charcoal bg-cover bg-center"
      style={{ backgroundImage: "url('/images/textures/charcoal-paper.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-charcoal/90" />

      {/* Grain texture animation */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative">
        {/* Back to Top - Centered above main content */}
        <div className="flex justify-center pb-8 pt-12 md:pt-16">
          <BackToTop />
        </div>

        <Container className="pb-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6 flex items-center gap-2">
                <DiamondStar className="h-5 w-5 text-copper" />
                <div>
                  <span className="font-heading text-3xl tracking-[0.15em] text-cream">
                    VIRGO
                  </span>
                  <p className="font-body text-[10px] uppercase tracking-[0.3em] text-cream/60">
                    Laser Clinic
                  </p>
                </div>
              </div>
              <p className="mb-6 font-body text-sm leading-relaxed text-cream/70">
                Harrow&apos;s premier destination for laser &amp; aesthetic
                artistry. Where timeless results meet tailored care.
              </p>

              {/* Trust Badge */}
              <div className="mb-6">
                <TrustBadge
                  rating={5.0}
                  reviewCount={150}
                  platform="google"
                  variant="light"
                  size="sm"
                />
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-copper transition-all duration-300 hover:text-copper-light hover:drop-shadow-[0_0_8px_rgba(176,124,93,0.5)]"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="mb-6 font-heading text-lg tracking-wide text-cream">
                Concierge
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:02070500711"
                    className="flex items-start gap-3 font-body text-sm text-cream/70 transition-colors hover:text-copper"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    0207 0500 711
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/447737721376"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 font-body text-sm text-cream/70 transition-colors hover:text-copper"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-copper"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp: 07737 721376
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@virgolaserclinic.com"
                    className="flex items-start gap-3 font-body text-sm text-cream/70 transition-colors hover:text-copper"
                  >
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                    info@virgolaserclinic.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Location Column */}
            <div>
              <h3 className="mb-6 font-heading text-lg tracking-wide text-cream">
                Visit Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                  <p className="font-body text-sm text-cream/70">
                    129 Spencer Road
                    <br />
                    Harrow, HA3 7AW
                    <br />
                    United Kingdom
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded border border-copper/20 bg-copper/10 px-3 py-2">
                  <Car className="h-4 w-4 shrink-0 text-copper" />
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-copper">
                    Private Parking Available
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Column */}
            <div>
              <h3 className="mb-6 font-heading text-lg tracking-wide text-cream">
                Opening Hours
              </h3>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                <ul className="space-y-1.5">
                  {openingHours.map((item) => {
                    const isToday = item.dayNum === currentDay;
                    return (
                      <li
                        key={item.day}
                        className={`flex justify-between gap-4 font-body text-sm transition-colors ${
                          isToday
                            ? "rounded bg-copper/10 px-2 py-0.5 -ml-2"
                            : ""
                        }`}
                      >
                        <span
                          className={
                            isToday ? "text-copper" : "text-cream/50"
                          }
                        >
                          {item.day}
                          {isToday && (
                            <span className="ml-2 text-[10px] uppercase tracking-wider">
                              Today
                            </span>
                          )}
                        </span>
                        <span
                          className={
                            item.hours === "Closed"
                              ? "text-taupe"
                              : isToday
                              ? "text-cream"
                              : "text-cream/70"
                          }
                        >
                          {item.hours}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </Container>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10">
          <Container className="py-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="font-body text-xs text-cream/40">
                &copy; {new Date().getFullYear()} Virgo Laser Clinic. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link
                  href="/privacy"
                  className="font-body text-xs text-cream/40 transition-colors hover:text-copper"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="font-body text-xs text-cream/40 transition-colors hover:text-copper"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
