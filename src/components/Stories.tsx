"use client";

import React from "react";
import { siteData } from "@/config/siteData";

export const Stories: React.FC = () => {
  return (
    <section id="stories" className="py-20 md:py-32 border-t border-neutral-stone bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-neutral-stone">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary-green uppercase block mb-3">
              Stories &amp; Experiences
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal tracking-tight">
              Real people. Real journeys.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-charcoal/65 max-w-sm font-light leading-relaxed">
            Honest reflections from everyday individuals establishing sustainable, healthy habits.
          </p>
        </div>

        {/* Testimonial Editorial Cards / Placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((item) => (
            <div
              key={item.id}
              className="border border-neutral-stone bg-white p-8 sm:p-10 flex flex-col justify-between relative"
            >
              {/* Focus Tag */}
              <div className="mb-6">
                <span className="inline-block text-[11px] font-medium tracking-wider uppercase text-primary-green bg-sage-pale px-2.5 py-1">
                  {item.focus}
                </span>
              </div>

              {/* Quote Body */}
              <div className="mb-8">
                <span className="font-serif-editorial text-3xl text-muted-sage leading-none block mb-2 select-none">
                  “
                </span>
                <p className="font-serif-editorial text-lg sm:text-xl text-charcoal/90 leading-relaxed italic">
                  {item.quote}
                </p>
              </div>

              {/* Author / Placeholder Information */}
              <div className="pt-6 border-t border-neutral-stone">
                <p className="text-xs font-semibold text-charcoal tracking-wide">
                  {item.author}
                </p>
                <p className="text-[11px] text-charcoal/50 mt-0.5">
                  {item.context}
                </p>

                {item.isPlaceholder && (
                  <span className="inline-block mt-3 text-[10px] text-charcoal/40 font-mono tracking-tight bg-neutral-stone/60 px-2 py-0.5">
                    * Production slot: Client story verified post-launch
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Community Note */}
        <div className="mt-12 p-6 border border-dashed border-neutral-stone bg-neutral-stone-light/40 text-center">
          <p className="text-xs text-charcoal/60 font-light max-w-xl mx-auto leading-relaxed">
            * Client privacy and authentic experiences are respected. Testimonials reflect individual experiences and do not guarantee specific outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};
