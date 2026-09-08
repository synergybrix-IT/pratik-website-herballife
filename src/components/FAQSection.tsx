"use client";

import React, { useState } from "react";
import { siteData } from "@/config/siteData";
import { Plus, Minus } from "lucide-react";

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 border-t border-neutral-stone bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-primary-green uppercase block mb-3">
            Common Inquiries
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-charcoal font-normal tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm text-charcoal/65 font-light">
            Everything you need to know about working with an Independent Wellness Coach.
          </p>
        </div>

        {/* Accordion list */}
        <div className="divide-y divide-neutral-stone border-y border-neutral-stone">
          {siteData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left group focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-editorial text-xl sm:text-2xl text-charcoal group-hover:text-primary-green transition-colors pr-6">
                    {faq.question}
                  </span>
                  <span className="p-1 rounded-full border border-neutral-stone group-hover:border-primary-green text-charcoal/70 group-hover:text-primary-green transition-colors flex-shrink-0">
                    {isOpen ? (
                      <Minus className="w-4 h-4 stroke-[1.5]" />
                    ) : (
                      <Plus className="w-4 h-4 stroke-[1.5]" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10">
                    <p className="text-sm sm:text-base text-charcoal/75 leading-relaxed font-light">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
