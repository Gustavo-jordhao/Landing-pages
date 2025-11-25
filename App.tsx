import React, { useState, useEffect } from 'react';
import { 
  MessageCircle, 
  Check, 
  ArrowRight, 
  Smartphone, 
  Layout, 
  Zap, 
  Star, 
  Globe, 
  ShoppingBag,
  Image as ImageIcon
} from 'lucide-react';

import FadeInSection from './components/FadeInSection';
import ServiceCard from './components/ServiceCard';
import StepCard from './components/StepCard';
import PortfolioItem from './components/PortfolioItem';
import TestimonialCard from './components/TestimonialCard';

const WHATSAPP_LINK = "https://wa.me/5586994843759?text=Quero%20uma%20landing%20page%20profissional%20(Gustavo%20Carrias).%20Vim%20pelo%20seu%20site.";

// Componente para lidar com imagens que podem falhar
const ImageWithFallback = ({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-[#1E1E1E] border border-white/5 text-gray-600 ${className}`}>
        <div className="text-center p-4">
          <ImageIcon size={32} className="mx-auto mb-2 opacity-50" />
          <span className="text-xs">Imagem não encontrada</span>
          <span className="block text-[10px] mt-1 text-gray-500 break-all">{typeof src === 'string' ? src : ''}</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      onError={() => setError(true)}
      {...props} 
    />
  );
};

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-[#EAEAEA]">
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="blob bg-[#D4AF37] w-64 h-64 rounded-full top-[-10%] left-[-10%] opacity-20"></div>
        <div className="blob bg-purple-900 w-96 h-96 rounded-full bottom-[10%] right-[-10%] opacity-20"></div>
        <div className="blob bg-[#1E1E1E] w-80 h-80 rounded-full top-[40%] left-[30%] opacity-30"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0D0D0D]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter">
            GUSTAVO<span className="text-[#D4AF37]">CARRIAS</span>
          </div>
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-white/10 px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium group"
          >
            Falar no WhatsApp
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Esquerda */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20">
            <FadeInSection>
              <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase">
                Web Design Premium
              </div>
            </FadeInSection>

            <FadeInSection delay={200}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Landing pages <br />
                que transformam <br />
                <span className="font-accent italic font-normal text-[#D4AF37] pr-2">seguidores</span>
                em
                <span className="gold-gradient-text"> Clientes.</span>
              </h1>
            </FadeInSection>

            <FadeInSection delay={400}>
              <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                Sites rápidos, modernos e com visual premium — feitos para aumentar sua conversão e destacar seu negócio no digital.
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 items-center w-full lg:w-auto">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pulse inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-black text-lg font-bold px-8 py-4 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(212,175,55,0.3)] w-full sm:w-auto"
                >
                  <Smartphone size={24} />
                  Criar Landing Page
                </a>
              </div>
              <p className="mt-6 text-xs text-gray-500 flex flex-wrap items-center gap-3 opacity-80 justify-center lg:justify-start">
                <span className="flex items-center gap-1"><Check size={12} className="text-[#D4AF37]" /> Entrega rápida</span>
                <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-600"></span>
                <span className="flex items-center gap-1"><Check size={12} className="text-[#D4AF37]" /> Visual profissional</span>
              </p>
            </FadeInSection>
          </div>

          {/* Direita */}
          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end">
            <FadeInSection delay={400}>
              <div className="relative w-full max-w-[500px] lg:max-w-full">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-[#D4AF37] blur-[100px] opacity-20 rounded-full animate-pulse"></div>
                
                <div className="relative z-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60 z-20"></div>
                   
                   {/* HERO IMAGE: Certifique-se de que o arquivo na pasta se chama hero1.jpeg */}
                   <ImageWithFallback 
                     src="hero1.jpeg" 
                     alt="Gustavo Carrias - Web Designer Profissional" 
                     className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out hero-image-mask"
                   />
                </div>

                <div className="absolute -bottom-6 -left-6 z-30 glass-panel p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg" style={{ animationDuration: '3s' }}>
                  <div className="bg-green-500/20 p-2 rounded-full text-green-500">
                    <Zap size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Status</p>
                    <p className="text-sm font-bold text-white">Disponível para Projetos</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0D0D0D] to-transparent pointer-events-none z-20"></div>
      </section>

      {/* SERVIÇOS */}
      <section className="py-20 bg-[#0D0D0D] relative z-10">
        <div className="container mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Criação rápida e profissional</h2>
              <p className="text-gray-400 font-accent italic text-xl">Para qualquer tipo de negócio</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard icon={<Layout size={32} />} title="Landing Pages" desc="Páginas de alta conversão focadas em vendas." delay={0} />
            <ServiceCard icon={<ShoppingBag size={32} />} title="Catálogos Digitais" desc="Seus produtos com preços e botões de compra." delay={100} />
            <ServiceCard icon={<Globe size={32} />} title="Minisites Institucionais" desc="Apresente sua empresa com elegância." delay={200} />
            <ServiceCard icon={<MessageCircle size={32} />} title="Páginas de Agendamento" desc="Integração direta com seu WhatsApp." delay={300} />
            <ServiceCard icon={<Smartphone size={32} />} title="Cardápios Delivery" desc="Modernos, rápidos e fáceis de usar." delay={400} />
            <ServiceCard icon={<Zap size={32} />} title="Páginas de Lançamento" desc="Para ofertas relâmpago e infoprodutos." delay={500} />
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 bg-[#141414] relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/3">
              <FadeInSection>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Perfeito para profissionais que precisam de <span className="text-[#D4AF37]">mais clientes.</span>
                </h2>
                <p className="text-gray-400 mb-8">Se você vende um serviço ou produto, sua imagem na internet precisa transmitir confiança imediata.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:text-white font-medium flex items-center gap-2 transition-colors">
                  Solicitar orçamento <ArrowRight size={18} />
                </a>
              </FadeInSection>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Petshops", "Barbearias", "Salões de Beleza", "Hamburguerias", "Clínicas Estéticas", "Lojas de Roupas", "Delivery", "Estúdios Tattoo", "Nail Designers", "Personal Trainers", "Restaurantes", "Profissionais Liberais"].map((item, index) => (
                  <FadeInSection key={index} delay={index * 50}>
                    <div className="glass-panel p-4 rounded-lg flex items-center gap-3 hover:bg-[#D4AF37]/10 transition-colors cursor-default">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                      <span className="text-sm md:text-base font-medium text-gray-200">{item}</span>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="container mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-16">Simples, rápido e <span className="text-[#D4AF37] font-accent italic">sem complicação</span></h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent"></div>
            <StepCard number="01" title="A Ideia" desc="Você me conta sua ideia e objetivo através do WhatsApp." />
            <StepCard number="02" title="A Criação" desc="Eu desenvolvo o layout completo, moderno e otimizado." />
            <StepCard number="03" title="A Entrega" desc="Você recebe o link pronto para colocar na bio e divulgar." />
          </div>
        </div>
      </section>

      {/* PORTFÓLIO - Imagens locais */}
      <section className="py-24 bg-[#0D0D0D]">
        <div className="container mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Alguns modelos que posso criar</h2>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PortfolioItem 
              image="clinica.jpg" 
              category="Estética" title="Clínica Royal" 
            />
            <PortfolioItem 
              image="burger.jpg" 
              category="Gastronomia" title="Burger House" 
            />
            <PortfolioItem 
              image="barber.jpg" 
              category="Serviços" title="Barber Shop" 
            />
          </div>
          
          <div className="mt-12">
            <p className="text-gray-500 text-sm mb-4">E muito mais...</p>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-[#D4AF37] text-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all">
              Ver portfólio completo no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-20 bg-[#141414] border-t border-white/5">
        <div className="container mx-auto px-6">
          <FadeInSection>
             <h2 className="text-3xl font-bold mb-12 text-center">O que dizem sobre o trabalho</h2>
          </FadeInSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard quote="Recebi tudo pronto em menos de 24h. Muito profissional, superou minhas expectativas." author="Ricardo S." role="Barbearia" />
            <TestimonialCard quote="Minha clínica começou a receber agendamentos automaticamente pelo botão do WhatsApp." author="Dra. Camila" role="Estética" />
            <TestimonialCard quote="O cardápio ficou perfeito, simples e fácil de usar. Meus clientes adoraram." author="Marcos V." role="Delivery" />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/10 to-[#0D0D0D] z-0"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           <div className="w-[500px] h-[500px] bg-[#D4AF37] rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Pronto para ter uma <br />
              <span className="text-[#D4AF37]">landpage profissional?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Chama no WhatsApp e vamos criar algo incrível para o seu negócio ainda esta semana.
            </p>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pulse inline-flex items-center gap-3 bg-[#D4AF37] text-black text-xl font-bold px-10 py-5 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_40px_rgba(212,175,55,0.4)]"
            >
              <Smartphone size={28} />
              Falar com Gustavo
            </a>
          </FadeInSection>
        </div>
      </section>

      <footer className="py-8 bg-black border-t border-white/5 text-center text-gray-600 text-sm">
        <p>Gustavo Carrias — Criação de Landing Pages Profissionais &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;