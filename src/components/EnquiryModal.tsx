"use client";

import React, { useState, useEffect } from "react";
import { siteData } from "@/config/siteData";
import { createWhatsAppUrl } from "@/lib/utils";
import { X, ArrowRight, MessageSquare, CheckCircle2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGoal?: string;
}

const GOALS = [
  "Better Nutrition",
  "Active Lifestyle",
  "Weight Management",
  "Everyday Wellness"
];

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultGoal
}) => {
  const [name, setName] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [selectedGoal, setSelectedGoal] = useState(defaultGoal || "Better Nutrition");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultGoal) {
      setSelectedGoal(defaultGoal);
    }
  }, [defaultGoal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waUrl = createWhatsAppUrl(siteData.contact.whatsappRawNumber, {
      name: name || undefined,
      goal: selectedGoal,
      note: note || undefined
    });

    // Short timeout for seamless UX feedback before opening WhatsApp
    setTimeout(() => {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    }, 600);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/40 backdrop-blur-[2px] p-4 sm:p-6 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#F7F7F2] border border-neutral-stone rounded-none shadow-2xl p-6 sm:p-10 transition-transform duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-charcoal/60 hover:text-charcoal transition-colors rounded-full hover:bg-neutral-stone/50"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 stroke-[1.5]" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-8">
              <span className="text-[11px] font-medium tracking-widest text-primary-green uppercase block mb-2">
                1-on-1 Wellness Guidance
              </span>
              <h3
                id="modal-title"
                className="font-serif-editorial text-3xl sm:text-4xl text-charcoal font-normal leading-tight"
              >
                Start a Conversation
              </h3>
              <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                Tell us what you are working toward. We’ll connect on WhatsApp for a zero-pressure initial consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold tracking-wider uppercase text-charcoal/70 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-white border border-neutral-stone px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="userPhone"
                  className="block text-xs font-semibold tracking-wider uppercase text-charcoal/70 mb-2"
                >
                  WhatsApp / Phone Number
                </label>
                <input
                  type="tel"
                  id="userPhone"
                  value={whatsappNumber}
                  onChange={(e) => setWhatsappNumber(e.target.value)}
                  placeholder="e.g. +1 555 123 4567"
                  className="w-full bg-white border border-neutral-stone px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-wider uppercase text-charcoal/70 mb-2.5">
                  Primary Wellness Goal
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {GOALS.map((goal) => {
                    const isSelected = selectedGoal === goal;
                    return (
                      <button
                        key={goal}
                        type="button"
                        onClick={() => setSelectedGoal(goal)}
                        className={`text-left px-3.5 py-2.5 text-xs font-medium border transition-all ${
                          isSelected
                            ? "bg-primary-green text-white border-primary-green"
                            : "bg-white text-charcoal/80 border-neutral-stone hover:border-muted-sage"
                        }`}
                      >
                        {goal}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="userNote"
                  className="block text-xs font-semibold tracking-wider uppercase text-charcoal/70 mb-2"
                >
                  Optional Note <span className="font-normal text-charcoal/40">(What would you like support with?)</span>
                </label>
                <textarea
                  id="userNote"
                  rows={3}
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Share any routine hurdles, busy work hours, or specific targets..."
                  className="w-full bg-white border border-neutral-stone px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/30 focus:border-primary-green focus:ring-1 focus:ring-primary-green outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary-green hover:bg-primary-green-hover text-white text-sm font-medium tracking-wide py-3.5 px-6 transition-all duration-200 group shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="mt-3 text-[11px] text-center text-charcoal/50">
                  No automated sales spam. Just a real conversation about your lifestyle goals.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-sage-pale flex items-center justify-center mx-auto text-primary-green">
              <CheckCircle2 className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif-editorial text-3xl text-charcoal font-normal">
              Connecting with Pratik...
            </h3>
            <p className="text-sm text-charcoal/70 max-w-sm mx-auto leading-relaxed">
              We are opening WhatsApp with your personalized message. If WhatsApp did not open automatically, click below.
            </p>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={createWhatsAppUrl(siteData.contact.whatsappRawNumber, {
                  name: name || undefined,
                  goal: selectedGoal,
                  note: note || undefined
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary-green hover:bg-primary-green-hover text-white text-sm font-medium py-3 px-6 transition-all"
              >
                <span>Open WhatsApp Directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="text-xs text-charcoal/60 hover:text-charcoal underline"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
