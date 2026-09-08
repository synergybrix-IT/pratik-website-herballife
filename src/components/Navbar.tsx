"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteData } from "@/config/siteData";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenEnquiry: (goal?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Approach", href: "#approach" },
    { label: "Goals", href: "#goals" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Stories", href: "#stories" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F7F2]/95 backdrop-blur-md border-b border-neutral-stone py-3.5"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand */}
          <Link
            href="#top"
            className="group flex flex-col focus:outline-none"
            aria-label="Pratik Wellness Home"
          >
            <span className="font-serif-editorial text-2xl sm:text-2xl text-charcoal tracking-tight group-hover:text-primary-green transition-colors">
              {siteData.coach.name}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-charcoal/50 -mt-1 font-medium">
              Wellness Coach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium uppercase tracking-wider text-charcoal/70 hover:text-primary-green transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-green hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 bg-primary-green text-white text-xs font-medium tracking-wide uppercase px-5 py-2.5 transition-all duration-200 hover:bg-primary-green-hover group shadow-sm"
            >
              <span>Start Your Journey</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal/80 hover:text-charcoal focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[1.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[1.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#F7F7F2] pt-24 px-8 flex flex-col justify-between pb-10 md:hidden border-b border-neutral-stone">
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif-editorial text-3xl text-charcoal hover:text-primary-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-neutral-stone space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full inline-flex items-center justify-center gap-2 bg-primary-green text-white text-sm font-medium tracking-wide uppercase py-3.5 px-6"
            >
              <span>Start Your Journey</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <p className="text-[11px] text-charcoal/50 text-center">
              Independent Herbalife Wellness Coach
            </p>
          </div>
        </div>
      )}
    </>
  );
};
