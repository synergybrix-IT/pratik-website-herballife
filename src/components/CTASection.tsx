"use client";

import React from "react";
import { siteData } from "@/config/siteData";
import { createWhatsAppUrl } from "@/lib/utils";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

interface CTASectionProps {
  onOpenEnquiry: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenEnquiry }) => {
  const directWaUrl = createWhatsAppUrl(siteData.contact.whatsappRawNumber);

  return (
    <section className="py-24 md:py-36 bg-[#F7F7F2] border-t border-neutral-stone relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        {/* Subtle decorative badge */}
        <div className="inline-flex items-center gap-2 border border-neutral-stone bg-white px-3.5 py-1.5 mb-8">
          <Sparkles className="w-3.5 h-3.5 text-primary-green" />
          <span className="text-[11px] font-medium tracking-widest text-charcoal/70 uppercase">
            Personalized Coaching Openings
          </span>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl text-charcoal font-normal tracking-tight leading-[1.08] mb-6">
          Ready to start your wellness journey?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-charcoal/70 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us what you&apos;re working toward. Let&apos;s start with a relaxed, personalized conversation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-primary-green hover:bg-primary-green-hover text-white text-xs sm:text-sm font-medium tracking-wide uppercase px-8 py-4 transition-all duration-200 group shadow-sm"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={directWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white hover:bg-neutral-stone/50 border border-neutral-stone text-charcoal text-xs sm:text-sm font-medium tracking-wide uppercase px-7 py-4 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4 text-primary-green stroke-[1.75]" />
            <span>Message on WhatsApp</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-charcoal/60">
          <a
            href={directWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors underline-offset-4 hover:underline"
          >
            WhatsApp: {siteData.contact.whatsappNumber}
          </a>
          <span>•</span>
          <a
            href={siteData.contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-charcoal transition-colors underline-offset-4 hover:underline"
          >
            Instagram: {siteData.contact.instagramHandle}
          </a>
          <span>•</span>
          <span>{siteData.contact.location}</span>
        </div>
      </div>
    </section>
  );
};
