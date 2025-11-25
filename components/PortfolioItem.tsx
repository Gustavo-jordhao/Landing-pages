import React from 'react';
import FadeInSection from './FadeInSection';

interface PortfolioItemProps {
  image: string;
  category: string;
  title: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, category, title }) => {
  return (
    <FadeInSection>
      <div className="relative group overflow-hidden rounded-xl h-64 cursor-pointer border border-white/5">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors"></div>

        <div className="absolute inset-4 border border-white/10 rounded flex items-center justify-center">
            <span className="text-white/20 text-4xl font-accent italic font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                Visualizar
            </span>
        </div>

        <div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black to-transparent">
          <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-1">{category}</p>
          <h3 className="text-white text-xl font-bold">{title}</h3>
        </div>
      </div>
    </FadeInSection>
  );
};

export default PortfolioItem;