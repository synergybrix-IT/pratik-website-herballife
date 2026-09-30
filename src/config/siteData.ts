export interface SiteConfig {
  coach: {
    name: string;
    role: string;
    heroHeadline: string;
    heroSubheadline: string;
    credibilityLine: string;
    bioIntro: string;
    bioParagraphs: string[];
    pillars: {
      title: string;
      description: string;
    }[];
    stats: {
      label: string;
      value: string;
      helper?: string;
    }[];
  };
  contact: {
    whatsappNumber: string; // e.g. "+1 (555) 019-2834" or "[WHATSAPP NUMBER]"
    whatsappRawNumber: string; // digits only for wa.me link
    emailPlaceholder: string;
    location: string;
    instagramHandle: string;
    instagramUrl: string;
  };
  approach: {
    tagline: string;
    headline: string;
    paragraphs: string[];
    quote: string;
  };
  goals: {
    number: string;
    title: string;
    summary: string;
    details: string;
  }[];
  programs: {
    title: string;
    tagline: string;
    description: string;
    highlights: string[];
  }[];
  steps: {
    step: string;
    title: string;
    description: string;
    timeline: string;
  }[];
  testimonials: {
    id: string;
    quote: string;
    author: string;
    context: string;
    focus: string;
    isPlaceholder: boolean;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  images: {
    hero: {
      url: string;
      alt: string;
      caption?: string;
    };
    approach: {
      url: string;
      alt: string;
      caption?: string;
    };
    coach: {
      url: string;
      alt: string;
      caption?: string;
    };
    community: {
      url: string;
      alt: string;
      caption?: string;
    };
    ritual: {
      url: string;
      alt: string;
      caption?: string;
    };
  };
  disclaimer: string;
}

export const siteData: SiteConfig = {
  coach: {
    name: "Pratik",
    role: "Independent Herbalife Wellness Coach",
    heroHeadline: "Build a healthier routine.\nFeel the difference.",
    heroSubheadline:
      "Personalized nutrition guidance, wellness support and a community to help you stay consistent.",
    credibilityLine: "Personalized wellness guidance • Nutrition • Ongoing support",
    bioIntro: "Hi, I'm Pratik.",
    bioParagraphs: [
      "My goal is simple — to help people build healthier habits that actually fit into their everyday lives.",
      "Most wellness journeys stall not from lack of ambition, but from overly complex plans that clash with real schedules. We focus on sustainable, small daily adjustments that compound into genuine vitality.",
      "Together, we combine balanced nutrition, purposeful daily habits, and empathetic accountability so you never have to guess what comes next."
    ],
    pillars: [
      {
        title: "Personalized Guidance",
        description: "Tailored daily nutrition and wellness routines shaped around your work, lifestyle, and preferences."
      },
      {
        title: "Nutrition Support",
        description: "Structured meal plans, smart supplementation guidance, and practical hydration strategies."
      },
      {
        title: "Accountability & Consistency",
        description: "Regular check-ins, gentle adjustments, and continuous motivation to keep momentum high."
      },
      {
        title: "Community Connection",
        description: "A welcoming circle of individuals sharing encouragement, healthy recipes, and daily wins."
      }
    ],
    stats: [
      {
        label: "Experience",
        value: "[Years of Experience]",
        helper: "Dedicated wellness guidance"
      },
      {
        label: "Clients Guided",
        value: "[Number of Clients]",
        helper: "Individual routine plans"
      },
      {
        label: "Certification",
        value: "[Certification / Training]",
        helper: "Herbalife Wellness Coaching"
      }
    ]
  },
  contact: {
    whatsappNumber: "+91 77740 02596",
    whatsappRawNumber: "917774002596",
    emailPlaceholder: "hello@pratikwellness.com",
    location: "Available for Remote & 1-on-1 Coaching",
    instagramHandle: "@pratik_yadav_2596",
    instagramUrl: "https://www.instagram.com/pratik_yadav_2596?stkn=eG85Yml1ZHhsNG1t"
  },
  approach: {
    tagline: "THE APPROACH",
    headline: "It's not just about nutrition.\nIt's about building a lifestyle.",
    paragraphs: [
      "Lasting health isn't created through extreme restrictions or short-term sprints. It is built through small, thoughtful daily decisions that you actually enjoy sustaining.",
      "By harmonizing wholesome nutrition, mindful daily movement, and consistent personal guidance, we create an effortless rhythm that elevates your daily energy, focus, and overall well-being."
    ],
    quote: "True wellness is calm, consistent, and deeply personal."
  },
  goals: [
    {
      number: "01",
      title: "Better Nutrition",
      summary: "Build healthier everyday eating habits.",
      details:
        "Learn how to fuel your body with balanced macros, nourishing whole foods, and high-quality nutrient supplementation tailored to your daily schedule."
    },
    {
      number: "02",
      title: "Active Lifestyle",
      summary: "Create routines that support movement and energy.",
      details:
        "Cultivate sustainable movement habits that energize your mornings and revitalize your afternoons without demanding hours in a traditional gym."
    },
    {
      number: "03",
      title: "Weight Management",
      summary: "Develop sustainable habits around your personal goals.",
      details:
        "Approach your weight goals through mindful portioning, steady metabolic support, and consistent habits designed for long-term vitality."
    },
    {
      number: "04",
      title: "Everyday Wellness",
      summary: "Make wellness a consistent part of your lifestyle.",
      details:
        "Establish grounding morning rituals, restful evening wind-downs, and proactive stress-reduction techniques that keep you feeling balanced."
    }
  ],
  programs: [
    {
      title: "Personalized Nutrition",
      tagline: "Custom nourishment blueprints",
      description:
        "A comprehensive nutritional approach designed to meet your specific dietary needs, daily calorie rhythm, and lifestyle preferences.",
      highlights: [
        "Tailored meal suggestions & macro breakdowns",
        "Herbalife nutritional shake & supplement integration",
        "Hydration and nutrient timing strategies",
        "Practical grocery shopping & prep guides"
      ]
    },
    {
      title: "Wellness Guidance",
      tagline: "1-on-1 habit architecture",
      description:
        "One-on-one coaching focused on dismantling roadblocks, aligning habits, and crafting a joyful routine tailored to your unique calendar.",
      highlights: [
        "Initial deep-dive lifestyle evaluation",
        "Weekly progress check-ins & adjustments",
        "Energy level & digestion monitoring",
        "Direct chat support for daily questions"
      ]
    },
    {
      title: "Lifestyle Support",
      tagline: "Mindset & daily rhythm",
      description:
        "Holistic support covering sleep hygiene, mindful movement, mindful eating practices, and emotional balance during busy workweeks.",
      highlights: [
        "Sustainable habit tracking systems",
        "Managing social events & dining out",
        "Morning & evening vitality routines",
        "Stress management & recovery tips"
      ]
    },
    {
      title: "Community & Accountability",
      tagline: "Shared momentum",
      description:
        "Join a supportive community of like-minded individuals sharing healthy recipes, encouragement, and daily motivation.",
      highlights: [
        "Private community discussion group",
        "Shared healthy recipes & kitchen inspiration",
        "Monthly virtual wellness workshops",
        "Group encouragement & celebration of wins"
      ]
    }
  ],
  steps: [
    {
      step: "01",
      title: "Connect",
      description:
        "Tell us about your current daily habits, your schedule, and what you're working toward.",
      timeline: "Step 1 • Initial Conversation"
    },
    {
      step: "02",
      title: "Understand",
      description:
        "We take the time to understand what you're looking for, identifying what has or hasn't worked for you in the past.",
      timeline: "Step 2 • Lifestyle Review"
    },
    {
      step: "03",
      title: "Personalize",
      description:
        "Create a tailored wellness and nutrition approach that seamlessly fits your real routine.",
      timeline: "Step 3 • Custom Plan"
    },
    {
      step: "04",
      title: "Support",
      description:
        "Stay consistent with ongoing guidance, weekly feedback, and genuine day-to-day motivation.",
      timeline: "Step 4 • Ongoing Journey"
    }
  ],
  testimonials: [
    {
      id: "story-1",
      quote:
        "Working together completely changed how I approach my mornings. The personalized guidance made healthy eating feel second nature rather than a chore.",
      author: "[Client Story Placeholder]",
      context: "Busy Professional • 6 Months of Coaching",
      focus: "Better Nutrition & Energy",
      isPlaceholder: true
    },
    {
      id: "story-2",
      quote:
        "Having consistent check-ins and empathetic accountability made all the difference. I built routines that finally stuck after years of stopping and starting.",
      author: "[Client Story Placeholder]",
      context: "Working Parent • Lifestyle Routine",
      focus: "Habit Consistency",
      isPlaceholder: true
    },
    {
      id: "story-3",
      quote:
        "The community and guidance provided the exact clarity I needed. It's not about quick fixes—it's about feeling genuinely energized every single day.",
      author: "[Client Story Placeholder]",
      context: "Active Professional • Wellness Program",
      focus: "Everyday Wellness",
      isPlaceholder: true
    }
  ],
  faqs: [
    {
      question: "What does working with a personal wellness coach look like?",
      answer:
        "We start with a thorough conversation about your current schedule, nutrition habits, and wellness goals. From there, we design a customized daily nutrition and lifestyle routine. We stay connected through regular check-ins, adjustments, and direct message support so you always have guidance whenever questions arise."
    },
    {
      question: "How are Herbalife products incorporated into the coaching?",
      answer:
        "Herbalife products are utilized as premium nutritional tools—such as nutrient-dense shakes, targeted supplements, and herbal hydration—to complement a wholesome, balanced whole-food diet. They make hitting daily nutritional targets convenient and consistent."
    },
    {
      question: "I have a very demanding work schedule. Will this take too much time?",
      answer:
        "Not at all. The entire philosophy is built around realistic habits that fit into your existing calendar. We streamline meal planning, introduce quick nutrient solutions, and focus on 10-15 minute daily micro-habits rather than overwhelming lifestyle overhauls."
    },
    {
      question: "How do I get started?",
      answer:
        "Simply click 'Start Your Wellness Journey' or 'Start a Conversation'. Fill in your details and primary goal, and we will connect via WhatsApp to schedule an informal, zero-pressure introductory discussion."
    }
  ],
  images: {
    hero: {
      url: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1600&auto=format&fit=crop",
      alt: "Quiet morning wellness and mindful reflection in natural light",
      caption: "Daily routines built for calm, sustained energy."
    },
    approach: {
      url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1400&auto=format&fit=crop",
      alt: "Fresh, colorful, balanced whole foods and nourishing kitchen table",
      caption: "Nourishment rooted in simplicity and balance."
    },
    coach: {
      url: "/images/pratik.jpg",
      alt: "Pratik - Independent Herbalife Wellness Coach",
      caption: "Pratik • Independent Herbalife Wellness Coach"
    },
    community: {
      url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop",
      alt: "People enjoying outdoor mindful movement and shared wellness",
      caption: "A supportive environment where consistency flourishes."
    },
    ritual: {
      url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
      alt: "Peaceful morning stretching and wellness routine",
      caption: "Sustainable habits designed for longevity."
    }
  },
  disclaimer:
    "Independent Herbalife Wellness Coach. This is a personal wellness coaching and brand website. This site is not owned or operated by Herbalife International. Herbalife products are intended to support general wellness and nutrition; they are not intended to diagnose, treat, cure, or prevent any disease. Results may vary depending on individual lifestyle, dietary habits, and physical activity."
};
