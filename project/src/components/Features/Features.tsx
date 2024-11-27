import { DollarSign, Shield, Scissors, Settings2 } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: DollarSign,
    title: "Cheapest TXs",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
  {
    icon: Shield,
    title: "CerTIK",
    description:
      "We are Audited by Certik. Certik is the leading security-focused ranking platform to",
  },
  {
    icon: Scissors,
    title: "No Contract Sells",
    description: "No contract sells to fund the marketing wallets",
  },
  {
    icon: Settings2,
    title: "CrossDex Support",
    description:
      "Exchange popular digital currencies at the cheapest possible transaction price",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen to-[#0f1d30] px-12 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-center text-5xl font-bold text-white">
          Our <span className="text-[#ffc107]">Features</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              Icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}