"use client";

import React from "react";
import { siteData } from "@/config/siteData";
import { ArrowRight } from "lucide-react";

interface WellnessGoalsProps {
  onSelectGoal: (goal: string) => void;
}

export const WellnessGoals: React.FC<WellnessGoalsProps> = ({ onSelectGoal }) => {
  return (
    <section id="goals" className="py-20 md:py-32 border-t border-neutral-stone bg-[#F7F7F2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-neutral-stone">
          <div>
            <span className="text-xs font-semibold tracking-widest text-primary-green uppercase block mb-3">
              Focus Areas
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal tracking-tight">
              Find what you&apos;re working toward.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm text-charcoal/65 max-w-sm font-light leading-relaxed">
            Every journey begins with clarity. Choose the path that resonates with your immediate lifestyle ambitions.
          </p>
        </div>

        {/* Editorial Grid / Asymmetrical Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-stone border-b border-neutral-stone">
          {siteData.goals.map((goal, index) => {
            const isTopRow = index < 2;
            return (
              <div
                key={goal.number}
                onClick={() => onSelectGoal(goal.title)}
                className={`group cursor-pointer p-8 sm:p-12 lg:p-14 transition-colors duration-300 hover:bg-neutral-stone-light/50 flex flex-col justify-between ${
                  !isTopRow ? "md:border-t md:border-neutral-stone" : ""
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between mb-8">
                    <span className="font-mono text-xs text-charcoal/40 tracking-wider">
                      {goal.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider text-primary-green opacity-0 group-hover:opacity-100 transition-opacity">
                      Select Goal
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl sm:text-3xl text-charcoal group-hover:text-primary-green transition-colors mb-3">
                    {goal.title}
                  </h3>

                  <p className="text-base text-charcoal/80 font-normal mb-4">
                    {goal.summary}
                  </p>

                  <p className="text-xs sm:text-sm text-charcoal/60 leading-relaxed font-light">
                    {goal.details}
                  </p>
                </div>

                <div className="mt-10 pt-6 flex items-center justify-between border-t border-neutral-stone/60">
                  <span className="text-xs font-medium text-charcoal/70 group-hover:text-primary-green transition-colors">
                    Explore this path
                  </span>
                  <div className="w-8 h-8 rounded-full border border-neutral-stone flex items-center justify-center group-hover:bg-primary-green group-hover:border-primary-green group-hover:text-white transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
