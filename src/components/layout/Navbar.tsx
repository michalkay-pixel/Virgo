"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui/button";
import { Logo, DiamondStar } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#treatments", label: "Treatments" },
  { href: "#about", label: "About" },
  { href: "#journal", label: "Journal" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-700 ease-out",
          isScrolled
            ? "bg-cream/90 shadow-[0_1px_0_rgba(138,134,131,0.1)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <nav className="flex h-20 items-center justify-between md:h-24">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Logo
                variant={isScrolled || isMobileMenuOpen ? "dark" : "light"}
                showStar={true}
                size="md"
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-10 lg:flex">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "group relative font-body text-sm uppercase tracking-[0.15em] transition-colors duration-300",
                      isScrolled
                        ? "text-charcoal hover:text-copper"
                        : "text-cream hover:text-copper-light"
                    )}
                  >
                    {link.label}
                    {/* Animated underline */}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 ease-out group-hover:w-full",
                        isScrolled ? "bg-copper" : "bg-copper-light"
                      )}
                    />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Button
                  variant={isScrolled ? "default" : "outline"}
                  size="sm"
                  className={cn(
                    "press-effect",
                    !isScrolled &&
                      "border-cream/80 text-cream hover:bg-cream hover:text-charcoal"
                  )}
                >
                  Request Consultation
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-10 p-2 lg:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-charcoal" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu
                      className={cn(
                        "h-6 w-6",
                        isScrolled ? "text-charcoal" : "text-cream"
                      )}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Background with texture */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-cream"
            >
              {/* Subtle texture overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "url('/images/textures/silk-fabric.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute inset-0 bg-cream/95" />
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-10 right-10"
            >
              <DiamondStar className="h-32 w-32 text-copper" />
            </motion.div>

            <Container className="relative flex h-full flex-col justify-center">
              <nav className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-heading text-3xl tracking-wide text-charcoal transition-colors duration-300 hover:text-copper"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    delay: 0.1 + navLinks.length * 0.08,
                    duration: 0.4,
                  }}
                  className="mt-8"
                >
                  <Button size="lg" className="press-effect">
                    Request Consultation
                  </Button>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 flex flex-col items-center gap-4 text-center"
                >
                  <a
                    href="tel:02070500711"
                    className="flex items-center gap-2 font-body text-sm text-taupe transition-colors hover:text-copper"
                  >
                    <Phone className="h-4 w-4" />
                    0207 0500 711
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-taupe/30" />
                    <p className="font-body text-xs uppercase tracking-[0.2em] text-taupe/70">
                      Private Parking Available
                    </p>
                    <span className="h-px w-8 bg-taupe/30" />
                  </div>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
