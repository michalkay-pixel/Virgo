"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/lib/data/articles";

export function JournalPreview() {
  // First article is featured
  const [featuredArticle, ...restArticles] = articles;

  return (
    <section id="journal" className="relative bg-cream py-20 md:py-28">
      {/* Subtle texture background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('/images/textures/stone.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Container className="relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col items-center justify-between gap-6 md:flex-row"
        >
          <div>
            <Badge className="mb-4">The Virgo Journal</Badge>
            <h2 className="font-heading text-3xl tracking-wide text-charcoal md:text-4xl">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.2em] text-charcoal transition-colors duration-300 hover:text-copper"
          >
            <span>View All Articles</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Featured + Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Article */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="group"
          >
            <Link href={featuredArticle.href} className="block">
              {/* Image */}
              <div className="relative mb-6 aspect-[4/3] overflow-hidden lg:aspect-[16/10]">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Copper overlay on hover */}
                <div className="absolute inset-0 bg-copper/0 transition-colors duration-500 group-hover:bg-copper/10" />
                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />

                {/* Featured badge */}
                <div className="absolute left-4 top-4">
                  <Badge className="bg-cream/90 backdrop-blur-sm">
                    Featured
                  </Badge>
                </div>

                {/* Corner accents */}
                <div className="absolute bottom-4 right-4 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 right-0 h-full w-px bg-copper/60" />
                  <div className="absolute bottom-0 right-0 h-px w-full bg-copper/60" />
                </div>
              </div>

              {/* Meta */}
              <div className="mb-3 flex items-center gap-3">
                <span className="font-body text-xs uppercase tracking-[0.15em] text-copper">
                  {featuredArticle.category}
                </span>
                <span className="h-1 w-1 rounded-full bg-taupe/40" />
                <span className="flex items-center gap-1.5 font-body text-xs text-taupe">
                  <Clock className="h-3 w-3" />
                  {featuredArticle.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-heading text-2xl tracking-wide text-charcoal transition-colors duration-300 group-hover:text-copper md:text-3xl">
                {featuredArticle.title}
              </h3>

              {/* Excerpt */}
              <p className="mt-3 font-body text-base leading-relaxed text-taupe line-clamp-3">
                {featuredArticle.excerpt}
              </p>

              {/* Read more */}
              <div className="mt-5 inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-charcoal transition-colors duration-300 group-hover:text-copper">
                <span>Read Article</span>
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </motion.article>

          {/* Rest of Articles - Stacked */}
          <div className="flex flex-col gap-6">
            {restArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <Link
                  href={article.href}
                  className="flex gap-5 border-b border-taupe/10 pb-6 transition-colors duration-300 hover:border-copper/30"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-square w-24 shrink-0 overflow-hidden sm:w-32">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="128px"
                    />
                    {/* Copper overlay on hover */}
                    <div className="absolute inset-0 bg-copper/0 transition-colors duration-300 group-hover:bg-copper/10" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col justify-center">
                    {/* Meta */}
                    <div className="mb-2 flex items-center gap-2">
                      <span className="font-body text-[10px] uppercase tracking-[0.15em] text-copper">
                        {article.category}
                      </span>
                      <span className="h-0.5 w-0.5 rounded-full bg-taupe/40" />
                      <span className="font-body text-[10px] text-taupe">
                        {article.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading text-lg tracking-wide text-charcoal transition-colors duration-300 group-hover:text-copper line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Read more indicator */}
                    <div className="mt-2 flex items-center gap-1.5 font-body text-[10px] uppercase tracking-[0.15em] text-taupe/70 transition-colors duration-300 group-hover:text-copper">
                      <span>Read</span>
                      <ArrowRight className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA for mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center lg:hidden"
        >
          <Link
            href="/journal"
            className="group inline-flex items-center gap-2 rounded-none border-b border-charcoal/20 pb-1 font-body text-sm uppercase tracking-[0.15em] text-charcoal transition-all duration-300 hover:border-copper hover:text-copper"
          >
            <span>Browse All Articles</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
