import React from 'react';
import FadeInSection from './FadeInSection';

interface StepCardProps {
  number: string;
  title: string;
  desc: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, desc }) => {
  return (
    <FadeInSection delay={parseInt(number) * 100}>
      <div className="relative flex flex-col items-center z-10">
        <div className="w-16 h-16 rounded-full bg-[#1E1E1E] border-2 border-[#D4AF37] flex items-center justify-center text-xl font-bold text-[#D4AF37] mb-6 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
          {number}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 max-w-xs mx-auto text-sm">{desc}</p>
      </div>
    </FadeInSection>
  );
};

export default StepCard;