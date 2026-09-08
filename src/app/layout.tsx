import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pratik • Independent Herbalife Wellness Coach | Personalized Nutrition & Habit Coaching",
  description:
    "Build a healthier routine. Feel the difference. Personalized nutrition guidance, lifestyle support, and human accountability to help you stay consistent.",
  keywords: [
    "Wellness Coach",
    "Independent Herbalife Coach",
    "Nutrition Guidance",
    "Personalized Wellness",
    "Healthy Habits",
    "Lifestyle Coaching",
    "Pratik Wellness",
  ],
  authors: [{ name: "Pratik" }],
  openGraph: {
    title: "Pratik • Independent Herbalife Wellness Coach",
    description:
      "Personalized nutrition guidance, wellness support and a community to help you stay consistent.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <body className="bg-background text-charcoal font-sans antialiased selection:bg-primary-green selection:text-white">
        {children}
      </body>
    </html>
  );
}
