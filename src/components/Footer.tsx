"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/config/siteData";
import { ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-charcoal text-[#F7F7F2] pt-20 pb-12 border-t border-charcoal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand & Coach Role */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-serif-editorial text-3xl sm:text-4xl text-white tracking-tight block">
                {siteData.coach.name}
              </span>
              <p className="text-xs uppercase tracking-widest text-white/50 mt-1 font-medium">
                {siteData.coach.role}
              </p>
              <p className="mt-4 text-xs text-white/60 font-light leading-relaxed max-w-sm">
                Personalized nutrition, lifestyle routine architecture, and empathetic accountability for lasting health.
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-white/60 hover:text-white transition-colors"
                aria-label="Back to top of page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Explore
            </p>
            <ul className="space-y-2.5 text-xs text-white/70">
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  The Approach
                </a>
              </li>
              <li>
                <a href="#goals" className="hover:text-white transition-colors">
                  Wellness Goals
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Coach
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition-colors">
                  Programs &amp; Offerings
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-white transition-colors">
                  Stories &amp; Journeys
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Social Placeholders */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Direct Contact
            </p>
            <div className="space-y-3 text-xs text-white/70">
              <div>
                <span className="text-white/40 block text-[10px] uppercase tracking-wider">WhatsApp</span>
                <a
                  href={`https://wa.me/${siteData.contact.whatsappRawNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-block mt-0.5"
                >
                  {siteData.contact.whatsappNumber}
                </a>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase tracking-wider">Instagram</span>
                <a
                  href={siteData.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-block mt-0.5"
                >
                  {siteData.contact.instagramHandle}
                </a>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase tracking-wider">Availability</span>
                <span className="inline-block mt-0.5">{siteData.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Herbalife Compliance Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="bg-white/5 p-4 border border-white/10 text-[11px] text-white/50 leading-relaxed font-light">
            <span className="font-semibold text-white/70 block mb-1">
              Independent Distributor / Coach Notice:
            </span>
            {siteData.disclaimer}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-white/40 pt-4">
            <p>© {new Date().getFullYear()} {siteData.coach.name} • Independent Herbalife Wellness Coach. All rights reserved.</p>
            <p>Crafted with bespoke editorial design.</p>
          </div>
        </div>
      </div>
      {/* Synergy Brix Branding Strip */}
      <div
        style={{ backgroundColor: "#0b2d3e" }}
        className="mt-0 py-5 border-t border-white/5"
      >
        <p className="text-center text-[13px] tracking-wide font-light text-white/40">
          Synergy Brix 2026. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
