"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DiamondStar } from "@/components/ui/Logo";

// Product data for Simon Ourian M.D. Beyond Beauty line
const products = [
  {
    id: "retinol-serum",
    name: "Retinol Renewal Serum",
    description: "Advanced vitamin A complex for cellular regeneration",
    price: "£185",
    image: "/images/products/retinol-serum.jpg",
  },
  {
    id: "hyaluronic-elixir",
    name: "Hyaluronic Elixir",
    description: "Deep hydration with multi-weight molecular technology",
    price: "£165",
    image: "/images/products/hyaluronic-elixir.jpg",
  },
  {
    id: "vitamin-c-brightening",
    name: "Vitamin C Brightening",
    description: "Stabilised L-ascorbic acid for luminous, even tone",
    price: "£175",
    image: "/images/products/vitamin-c.jpg",
  },
  {
    id: "peptide-complex",
    name: "Peptide Complex",
    description: "Bio-active peptides for firmness and elasticity",
    price: "£195",
    image: "/images/products/peptide-complex.jpg",
  },
];

interface ProductCardProps {
  product: (typeof products)[0];
  index: number;
}

function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group text-center"
    >
      {/* Product Image - Floating on background */}
      <div className="relative mx-auto mb-6 aspect-[3/4] w-full max-w-[200px] overflow-hidden">
        {/* Placeholder for product image */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-taupe/5 to-taupe/10">
          {/* Elegant placeholder with product silhouette */}
          <div className="relative flex h-full w-full items-end justify-center pb-8">
            {/* Bottle silhouette placeholder */}
            <div className="relative">
              <div className="h-32 w-12 rounded-t-full bg-gradient-to-b from-charcoal/20 to-charcoal/30" />
              <div className="h-4 w-16 -translate-x-2 rounded-sm bg-charcoal/25" />
              <div className="mx-auto h-24 w-14 bg-gradient-to-b from-charcoal/30 to-charcoal/40" />
            </div>
            {/* Decorative diamond */}
            <div className="absolute bottom-2 right-2 opacity-20">
              <DiamondStar className="h-4 w-4 text-copper" />
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-copper/0 transition-colors duration-500 group-hover:bg-copper/5" />
      </div>

      {/* Product Details */}
      <div className="space-y-2">
        <h4 className="font-heading text-lg tracking-wide text-charcoal transition-colors duration-300 group-hover:text-copper">
          {product.name}
        </h4>
        <p className="font-body text-sm leading-relaxed text-taupe">
          {product.description}
        </p>
        <p className="font-body text-sm italic text-charcoal/70">
          {product.price}
        </p>
      </div>

      {/* CTA - Consult button */}
      <button className="mt-4 font-body text-xs uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:text-copper">
        <span className="relative">
          Consult
          <span className="absolute -bottom-0.5 left-0 h-px w-full bg-copper/40 transition-all duration-300 group-hover:bg-copper" />
        </span>
      </button>
    </motion.div>
  );
}

export function ProductShowcase() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='none' stroke='%232C2A29' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Hero Split Section */}
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Eyebrow label */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-xs uppercase tracking-[0.3em] text-copper"
            >
              Exclusive Partner
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 font-heading text-3xl tracking-wide text-charcoal md:text-4xl lg:text-5xl"
            >
              The Science of
              <br />
              <span className="text-copper">Sculpting</span>
            </motion.h2>

            {/* Divider Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 h-px w-12 origin-left bg-copper"
            />

            {/* Body Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 space-y-4"
            >
              <p className="font-body text-lg leading-relaxed text-charcoal/80">
                World-renowned for defining the faces of the global elite, 
                Simon Ourian M.D. Beyond Beauty represents the pinnacle of 
                home-care aesthetics.
              </p>
              <p className="font-body leading-relaxed text-taupe">
                Each formulation bridges the gap between clinical treatment 
                and daily ritual—pharmaceutical-grade actives delivered with 
                the sensorial elegance expected by the discerning few. 
                Available exclusively for our clients.
              </p>
            </motion.div>

            {/* CTA Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <a
                href="/products"
                className="group inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:text-copper"
              >
                <span className="relative">
                  View Formulations
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-copper/40 transition-all duration-300 group-hover:bg-copper" />
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
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Product display area - like an art object on a plinth */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {/* Background gradient - creates depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-taupe/5 via-taupe/10 to-taupe/20" />

                {/* The "plinth" base */}
                <div className="absolute bottom-0 left-1/2 h-4 w-3/4 -translate-x-1/2 bg-gradient-to-t from-charcoal/10 to-transparent" />

                {/* Hero product placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Large bottle silhouette */}
                    <div className="relative">
                      {/* Bottle cap */}
                      <div className="mx-auto h-8 w-16 rounded-t-lg bg-gradient-to-b from-charcoal/25 to-charcoal/35" />
                      {/* Bottle neck */}
                      <div className="mx-auto h-4 w-20 bg-charcoal/30" />
                      {/* Bottle body */}
                      <div className="mx-auto h-48 w-28 rounded-b-lg bg-gradient-to-b from-charcoal/30 via-charcoal/35 to-charcoal/40 shadow-2xl md:h-64 md:w-36">
                        {/* Label area */}
                        <div className="absolute left-1/2 top-1/2 h-20 w-16 -translate-x-1/2 -translate-y-1/2 border border-copper/20 bg-cream/80 md:h-28 md:w-20">
                          <div className="flex h-full flex-col items-center justify-center p-2">
                            <DiamondStar className="h-6 w-6 text-copper/60" />
                            <div className="mt-2 h-px w-8 bg-copper/40" />
                            <p className="mt-2 font-heading text-[8px] uppercase tracking-wider text-charcoal/60 md:text-[10px]">
                              Beyond
                            </p>
                            <p className="font-heading text-[10px] uppercase tracking-wider text-charcoal md:text-xs">
                              Beauty
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reflection effect */}
                    <div className="absolute -bottom-12 left-1/2 h-16 w-28 -translate-x-1/2 bg-gradient-to-b from-charcoal/10 to-transparent blur-sm md:w-36" />
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute left-4 top-4 h-12 w-12">
                  <div className="absolute left-0 top-0 h-full w-px bg-copper/30" />
                  <div className="absolute left-0 top-0 h-px w-full bg-copper/30" />
                </div>
                <div className="absolute bottom-4 right-4 h-12 w-12">
                  <div className="absolute bottom-0 right-0 h-full w-px bg-copper/30" />
                  <div className="absolute bottom-0 right-0 h-px w-full bg-copper/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Row Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          {/* Section divider */}
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-copper/30" />
            <DiamondStar className="h-4 w-4 text-copper/40" />
            <div className="h-px w-16 bg-copper/30" />
          </div>

          {/* Products label */}
          <p className="mb-10 text-center font-body text-xs uppercase tracking-[0.3em] text-taupe">
            The Collection
          </p>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <a
              href="/consultation"
              className="inline-flex items-center gap-2 border border-copper/30 bg-transparent px-8 py-4 font-body text-xs uppercase tracking-[0.2em] text-charcoal transition-all duration-300 hover:border-copper hover:bg-copper hover:text-cream"
            >
              Book a Product Consultation
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

