import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createWhatsAppUrl(
  phoneNumber: string,
  params?: { name?: string; goal?: string; note?: string }
): string {
  // If phone number is a placeholder or not provided, we can fallback to standard link
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, "");
  
  let text = "Hello Pratik, I came across your wellness coaching website and would love to connect.";
  if (params?.name) {
    text = `Hello Pratik, my name is ${params.name}. I'm interested in starting a wellness conversation.`;
  }
  if (params?.goal) {
    text += `\n\nPrimary Focus: ${params.goal}`;
  }
  if (params?.note) {
    text += `\nGoal Details: ${params.note}`;
  }

  const encodedText = encodeURIComponent(text);
  
  if (!cleanPhone) {
    // If no valid phone number is set yet, open standard WhatsApp web / app with prefilled text
    return `https://wa.me/?text=${encodedText}`;
  }
  
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}
