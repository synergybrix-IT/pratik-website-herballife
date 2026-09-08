"use client";

import React from "react";
import Image from "next/image";
import { siteData } from "@/config/siteData";

export const Introduction: React.FC = () => {
  return (
    <section id="approach" className="py-20 md:py-32 border-t border-neutral-stone relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Tag */}
        <div className="mb-8">
          <span className="text-xs font-semibold tracking-widest text-primary-green uppercase">
            {siteData.approach.tagline}
          </span>
        </div>

        {/* Large Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl text-charcoal font-normal leading-[1.12] whitespace-pre-line tracking-tight mb-8">
              {siteData.approach.headline}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {siteData.approach.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-light"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Editorial Quote */}
            <div className="mt-10 pt-8 border-t border-neutral-stone flex items-baseline gap-4">
              <span className="font-serif-editorial text-4xl text-muted-sage leading-none select-none">“</span>
              <p className="font-serif-editorial text-xl sm:text-2xl text-charcoal/90 italic">
                {siteData.approach.quote}
              </p>
            </div>
          </div>

          {/* Right Complementary Visual */}
          <div className="lg:col-span-4 self-center">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-stone">
              <Image
                src={siteData.images.approach.url}
                alt={siteData.images.approach.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center filter grayscale-[10%] contrast-[1.02]"
              />
            </div>
            <p className="mt-2.5 text-[11px] text-charcoal/50 tracking-wide text-right">
              {siteData.images.approach.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
