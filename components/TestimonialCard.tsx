import React from 'react';
import { Star } from 'lucide-react';
import FadeInSection from './FadeInSection';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role }) => {
  return (
    <FadeInSection>
      <div className="glass-panel p-8 rounded-xl h-full flex flex-col justify-between">
        <div className="mb-6">
          <div className="flex gap-1 mb-4 text-[#D4AF37]">
            <Star size={14} fill="#D4AF37" />
            <Star size={14} fill="#D4AF37" />
            <Star size={14} fill="#D4AF37" />
            <Star size={14} fill="#D4AF37" />
            <Star size={14} fill="#D4AF37" />
          </div>
          <p className="text-gray-300 italic font-accent text-lg leading-relaxed">"{quote}"</p>
        </div>
        <div>
          <p className="text-white font-bold">{author}</p>
          <p className="text-[#D4AF37] text-xs">{role}</p>
        </div>
      </div>
    </FadeInSection>
  );
};

export default TestimonialCard;