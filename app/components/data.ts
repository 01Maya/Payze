import {
  BarChart3,
  CircleDollarSign,
  CreditCard,
  Headphones,
  LockKeyhole,
  Sparkles,
  ThumbsUp,
  Users,
  Zap,
} from "lucide-react";

export const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["How It Works", "how-it-works"],
  ["Contact", "contact"],
] as const;
export const features = [
  [
    "Trusted Partner",
    "Your money is protected by modern security standards.",
    Users,
  ],
  ["Fastpace Platform", "Move money around the world in a few easy taps.", Zap],
  [
    "Tested Reliability",
    "Built to be dependable when it matters most.",
    BarChart3,
  ],
] as const;
export const services = [
  [
    "Secure Payments",
    "Lock every transaction with bank-grade protection. Your money stays safe with advanced security and real-time fraud monitoring.",
    LockKeyhole,
    [
      "Bank-grade encryption",
      "Real-time fraud monitoring",
      "Instant security alerts",
    ],
  ],
  [
    "Investing Features",
    "Make every dollar work harder with simple tools. Get smart insights and flexible options to grow and manage your investments with confidence.",
    CircleDollarSign,
    [
      "Smart portfolio insights",
      "Flexible investment tools",
      "Clear market updates",
    ],
  ],
  [
    "No Hidden Fees",
    "Clear pricing, always. Know exactly what you’re paying with transparent costs and simple payment tracking, with no surprise charges.",
    ThumbsUp,
    ["Transparent pricing", "No surprise charges", "Simple payment tracking"],
  ],
  [
    "Explore More Services",
    "A smarter financial toolkit for modern life. Access everything you need to manage your money easily from one connected dashboard.",
    Sparkles,
    [
      "Personal finance tools",
      "One connected dashboard",
      "Built for everyday life",
    ],
  ],
  [
    "World Class Support",
    "Real people, ready whenever you need a hand. Get friendly, reliable support and fast answers whenever you need help.",
    Headphones,
    [
      "Friendly human support",
      "Fast answers when needed",
      "Help across every channel",
    ],
  ],
  [
    "Merchant Account",
    "EEverything your business needs to get paid. Simplify your payments with flexible checkout tools, clear reporting, and solutions that grow with your business.",
    CreditCard,
    [
      "Flexible checkout tools",
      "Clear business reporting",
      "Payments that scale with you",
    ],
  ],
] as const;
export const steps = [
  [
    "01",
    "Create Your Account",
    "Sign up in seconds and make your money work smarter.",
  ],
  [
    "02",
    "Connect Your Payment Method",
    "Link your preferred bank or card with total confidence.",
  ],
  ["03", "Send or Receive Money", "Move funds instantly to anyone, anywhere."],
  [
    "04",
    "Track Your Transactions",
    "See every payment clearly from one beautiful dashboard.",
  ],
] as const;
export const stats = [
  [25, "Years Of Experience"],
  [3452, "Total Transaction"],
  [751, "Active User"],
  [592, "Positive Reviews"],
] as const;
export type GoTo = (id: string) => void;
export type IconType = typeof Users;
