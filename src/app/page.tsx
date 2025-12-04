import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroVideo } from "@/components/hero/HeroVideo";
import { OfferBadge } from "@/components/hero/OfferBadge";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { ExpertProfile } from "@/components/sections/ExpertProfile";
import { TreatmentGrid } from "@/components/treatments/TreatmentGrid";
import { PartnerStrip } from "@/components/sections/PartnerStrip";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { JournalPreview } from "@/components/sections/JournalPreview";
import { PageReveal } from "@/components/motion/PageReveal";

export default function Home() {
  return (
    <PageReveal>
      <Navbar />
      <main>
        {/* 1. Hero Section - Full-screen video with headline */}
        <HeroVideo />

        {/* 2. Lead Magnet - Soprano Ice £69 Offer + Referral */}
        <LeadMagnet />

        {/* 3. Expert Profile - Jolanta Kay bio */}
        <ExpertProfile />

        {/* 4. Treatment Grid - 5 Bespoke Curations */}
        <TreatmentGrid />

        {/* 5. Partner Strip - Obagi/ZO logos (placeholders for now) */}
        <PartnerStrip />

        {/* 6. Product Showcase - Simon Ourian M.D. Beyond Beauty */}
        <ProductShowcase />

        {/* 7. Journal Preview - 3 blog articles */}
        <JournalPreview />
      </main>
      
      {/* 8. Concierge Footer */}
      <Footer />

      {/* Sticky mobile offer badge */}
      <OfferBadge />

      {/* WhatsApp floating button */}
      <WhatsAppButton />
    </PageReveal>
  );
}
