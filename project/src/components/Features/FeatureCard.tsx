import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-[#0D1B28] p-8 backdrop-blur-sm border border-[#1a2c3f] transition-all duration-300 hover:scale-[1.02] hover:bg-[#0a1929]/60">
      <div className="flex flex-col gap-4">
        <div className="rounded-full bg-[#1a2c3f] p-4 w-fit">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}