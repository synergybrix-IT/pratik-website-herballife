"use client";

import React from "react";
import { siteData } from "@/config/siteData";

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 border-t border-neutral-stone bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-24">
          <span className="text-xs font-semibold tracking-widest text-primary-green uppercase block mb-3">
            How It Works
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal tracking-tight mb-4">
            A simple, collaborative path.
          </h2>
          <p className="text-sm sm:text-base text-charcoal/70 font-light leading-relaxed">
            No rigid regimens or overwhelming overhauls. We build your wellness rhythm step by step.
          </p>
        </div>

        {/* Editorial Timeline / Step-by-Step Rows */}
        <div className="relative border-t border-neutral-stone">
          {siteData.steps.map((item, index) => (
            <div
              key={item.step}
              className="py-10 sm:py-12 border-b border-neutral-stone grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-baseline group hover:bg-neutral-stone/30 transition-colors px-4 sm:px-6"
            >
              {/* Step Number */}
              <div className="md:col-span-2 flex items-baseline gap-4">
                <span className="font-mono text-2xl sm:text-3xl text-primary-green font-light">
                  {item.step}
                </span>
                <span className="text-[11px] font-mono tracking-wider text-charcoal/40 md:hidden">
                  {item.timeline}
                </span>
              </div>

              {/* Step Title & Timeline Tag */}
              <div className="md:col-span-4">
                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-charcoal group-hover:text-primary-green transition-colors">
                  {item.title}
                </h3>
                <span className="hidden md:inline-block text-[11px] uppercase tracking-wider text-charcoal/50 mt-1 font-medium">
                  {item.timeline}
                </span>
              </div>

              {/* Step Description */}
              <div className="md:col-span-6">
                <p className="text-sm sm:text-base text-charcoal/75 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
