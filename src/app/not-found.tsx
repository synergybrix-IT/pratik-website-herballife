import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-primary-green mb-4">
        404 • Page Not Found
      </span>
      <h1 className="font-serif-editorial text-4xl sm:text-6xl text-charcoal font-normal mb-4">
        The page you are looking for doesn&apos;t exist.
      </h1>
      <p className="text-sm text-charcoal/70 max-w-md mb-8 font-light leading-relaxed">
        Let&apos;s return to the homepage to explore personalized nutrition and wellness guidance.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary-green hover:bg-primary-green-hover text-white text-xs uppercase tracking-wider px-6 py-3 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return Home</span>
      </Link>
    </div>
  );
}
