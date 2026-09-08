"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { WellnessGoals } from "@/components/WellnessGoals";
import { AboutCoach } from "@/components/AboutCoach";
import { Programs } from "@/components/Programs";
import { HowItWorks } from "@/components/HowItWorks";
import { Stories } from "@/components/Stories";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { EnquiryModal } from "@/components/EnquiryModal";

export default function Home() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (goal?: string) => {
    setSelectedGoal(goal);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  return (
    <main className="min-h-screen bg-background text-charcoal">
      {/* Navigation */}
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      {/* 1. Hero Section */}
      <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 2. Editorial Introduction / Approach */}
      <Introduction />

      {/* 3. Wellness Goals Focus Areas */}
      <WellnessGoals onSelectGoal={handleOpenEnquiry} />

      {/* 4. Meet Your Wellness Coach / About */}
      <AboutCoach onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 5. Programs / Support Offerings */}
      <Programs onOpenEnquiry={handleOpenEnquiry} />

      {/* 6. How It Works / Editorial Timeline */}
      <HowItWorks />

      {/* 7. Stories / Testimonial Placeholders */}
      <Stories />

      {/* 8. Frequently Asked Questions */}
      <FAQSection />

      {/* 9. Lead Generation CTA */}
      <CTASection onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* 10. Minimal Compliant Footer */}
      <Footer />

      {/* Interactive WhatsApp Lead Generation Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        defaultGoal={selectedGoal}
      />
    </main>
  );
}
