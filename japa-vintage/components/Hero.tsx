import React from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import heroBanner from '../assets/banner-alternativa.jpg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-[#f4f1e8]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-[#ece6d9] skew-x-12 transform origin-top translate-x-1/3 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up order-2 md:order-1">
          <div className="inline-flex items-center gap-2 border-b border-vintage-red pb-1">
            <span className="w-2 h-2 rounded-full bg-vintage-red"></span>
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-vintage-wood uppercase">
              Goiânia · Brasil
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl text-vintage-charcoal leading-[1.1]">
            A lenda do <br />
            <span className="text-vintage-red italic">Áudio Analógico</span>
            <br />renasce aqui.
          </h1>

          <p className="font-sans text-lg text-vintage-charcoal/80 max-w-md leading-relaxed border-l-4 border-vintage-red/20 pl-6">
            Não é apenas som, é história. Equipamentos Gradiente, Polyvox e importados, restaurados com precisão técnica para quem exige excelência.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://wa.me/556284344419"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-vintage-red text-white px-8 py-4 rounded-full font-sans font-semibold hover:bg-vintage-red-dark transition-all hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-vintage-red/20 group"
            >
              <MessageCircle size={20} />
              Quero meu equipamento
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#produtos"
              className="flex items-center gap-3 px-8 py-4 rounded-full font-sans font-semibold text-vintage-charcoal hover:bg-vintage-charcoal/5 transition-all"
            >
              Ver Catálogo
            </a>
          </div>
        </div>

        {/* Visual Content - Using the Banner Alternativa Image */}
        <div className="relative order-1 md:order-2">
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform hover:rotate-1 transition-transform duration-700">
            <img 
              src={heroBanner} 
              alt="Japa Vintage - Banner Especial" 
              className="w-full h-auto object-cover scale-105"
            />
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-full h-full border-2 border-vintage-red rounded-[2rem] -z-10 translate-y-4 translate-x-4 opacity-30"></div>
          <div className="absolute -bottom-12 -left-8 bg-vintage-charcoal text-vintage-cream p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
             <p className="font-serif text-2xl font-bold mb-1">Vintage</p>
             <p className="font-sans text-xs opacity-70 uppercase tracking-wider">Restauro Premium</p>
          </div>
        </div>
      </div>
    </section>
  );
};
