"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/config/siteData";
import { ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="top" className="relative pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Coach Role Tag */}
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-green" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-charcoal/70">
                Independent Herbalife Wellness Coach
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl text-charcoal font-normal tracking-tight leading-[1.08] sm:leading-[1.05] whitespace-pre-line mb-6 sm:mb-8">
              {siteData.coach.heroHeadline}
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal/75 leading-relaxed max-w-xl mb-8 sm:mb-10 font-light">
              {siteData.coach.heroSubheadline}
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-3 bg-primary-green hover:bg-primary-green-hover text-white text-xs sm:text-sm font-medium tracking-wide uppercase px-8 py-4 transition-all duration-200 group shadow-sm"
              >
                <span>Start Your Wellness Journey</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-neutral-stone/60 border border-neutral-stone text-charcoal text-xs sm:text-sm font-medium tracking-wide uppercase px-7 py-4 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 text-primary-green stroke-[1.75]" />
                <span>Talk to a Wellness Coach</span>
              </button>
            </div>

            {/* Credibility Line */}
            <div className="pt-6 border-t border-neutral-stone max-w-lg">
              <p className="text-xs text-charcoal/60 font-medium tracking-wide">
                {siteData.coach.credibilityLine}
              </p>
            </div>
          </div>

          {/* Right Lifestyle Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] w-full overflow-hidden bg-neutral-stone">
              <Image
                src={siteData.images.hero.url}
                alt={siteData.images.hero.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 40vw"
                className="object-cover object-center grayscale-[15%] contrast-[1.03] hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-primary-green/5 mix-blend-multiply pointer-events-none" />
            </div>

            {/* Delicate caption pill */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-charcoal/50">
              <span>{siteData.images.hero.caption}</span>
              <span className="font-mono text-[10px]">01 / 05</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
