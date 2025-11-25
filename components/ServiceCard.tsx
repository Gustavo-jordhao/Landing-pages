import React from 'react';
import FadeInSection from './FadeInSection';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, delay }) => {
  return (
    <FadeInSection delay={delay}>
      <div className="group bg-[#1E1E1E] p-8 rounded-xl border border-transparent hover:border-[#D4AF37]/50 hover:-translate-y-2 transition-all duration-300 h-full">
        <div className="w-14 h-14 bg-[#0D0D0D] rounded-lg flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-3 font-poppins">{title}</h3>
        <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
      </div>
    </FadeInSection>
  );
};

export default ServiceCard;