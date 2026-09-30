"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/config/siteData";
import { ArrowRight, Check } from "lucide-react";

interface AboutCoachProps {
  onOpenEnquiry: () => void;
}

export const AboutCoach: React.FC<AboutCoachProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="about" className="py-20 md:py-32 border-t border-neutral-stone relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Large Portrait Photo & Structured Metadata Placeholders */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-stone">
              <Image
                src={siteData.images.coach.url}
                alt={siteData.images.coach.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top contrast-[1.02]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/60 to-transparent text-white">
                <p className="text-xs font-medium tracking-wide">
                  {siteData.coach.name}
                </p>
                <p className="text-[10px] text-white/80">
                  {siteData.coach.role}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Personal Bio & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-widest text-primary-green uppercase">
                  Meet Your Wellness Coach
                </span>
              </div>

              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl text-charcoal font-normal tracking-tight mb-6">
                {siteData.coach.bioIntro}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-charcoal/80 font-light leading-relaxed mb-10">
                {siteData.coach.bioParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Approach Pillars */}
              <div className="space-y-6 pt-6 border-t border-neutral-stone">
                <h3 className="text-xs font-semibold tracking-widest uppercase text-charcoal/70">
                  Core Coaching Principles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {siteData.coach.pillars.map((pillar) => (
                    <div key={pillar.title} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-sage-pale flex items-center justify-center flex-shrink-0 mt-0.5 text-primary-green">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-charcoal">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-charcoal/65 mt-1 leading-relaxed">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-neutral-stone flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-3 bg-primary-green hover:bg-primary-green-hover text-white text-xs sm:text-sm font-medium tracking-wide uppercase px-8 py-4 transition-all duration-200 group shadow-sm"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="text-xs text-charcoal/55 font-light">
                {siteData.contact.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
