"use client";

import React from "react";
import { siteData } from "@/config/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProgramsProps {
  onOpenEnquiry: (goal?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="programs" className="py-20 md:py-32 border-t border-neutral-stone bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-neutral-stone">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary-green uppercase block mb-3">
              Offerings &amp; Support
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal tracking-tight">
              Support designed around you.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-charcoal/65 max-w-sm font-light leading-relaxed">
            Thoughtfully structured guidance that bridges nutrition, practical routines, and ongoing human support.
          </p>
        </div>

        {/* 4 Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {siteData.programs.map((prog, index) => (
            <div
              key={prog.title}
              className="border border-neutral-stone bg-[#F7F7F2] p-8 sm:p-10 flex flex-col justify-between hover:border-muted-sage transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-charcoal/40">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-medium tracking-wider text-primary-green uppercase">
                    {prog.tagline}
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-charcoal mb-4">
                  {prog.title}
                </h3>

                <p className="text-sm text-charcoal/70 leading-relaxed font-light mb-8">
                  {prog.description}
                </p>

                <div className="space-y-3 pt-6 border-t border-neutral-stone/80">
                  <p className="text-[11px] font-semibold tracking-widest uppercase text-charcoal/50 mb-3">
                    What&apos;s Included
                  </p>
                  {prog.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-charcoal/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-green stroke-[2] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-neutral-stone">
                <button
                  onClick={() => onOpenEnquiry(prog.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-charcoal hover:text-primary-green transition-colors group"
                >
                  <span>Inquire about this support</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
