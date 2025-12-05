import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import comboSystemImage from '../assets/combo-system.jpg';
import receiverImage from '../assets/receiver-gradiente.jpg';
import spectrumImage from '../assets/spectrum.jpg';

const products: Product[] = [
  {
    id: 1,
    title: "Combo System Vintage",
    description: "A harmonia perfeita. Toca-discos Gradiente, deck, amplificador e caixas Toshiba. Configuração pronta para tocar seus discos com a máxima fidelidade.",
    category: "combo",
    imageUrl: comboSystemImage
  },
  {
    id: 2,
    title: "Receiver Gradiente Pro 2000",
    description: "Um ícone do áudio nacional. Modelo MK II com acabamento lateral em madeira, painel escovado e aquela sonoridade quente inconfundível.",
    category: "amplifier",
    imageUrl: receiverImage
  },
  {
    id: 3,
    title: "Spectrum Analyzer & EQ",
    description: "Eleve o nível do seu setup. Analisador de espectro para monitoramento preciso de frequências e equalização fina do seu som.",
    category: "accessory",
    imageUrl: spectrumImage
  }
];

export const ProductShowcase: React.FC = () => {
  return (
    <section id="produtos" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-sans font-bold text-vintage-red tracking-widest uppercase text-sm mb-2 block">Acervo Selecionado</span>
            <h2 className="font-serif text-4xl md:text-5xl text-vintage-charcoal">
              Máquinas do Tempo
            </h2>
          </div>
          <div className="hidden md:block h-px flex-1 bg-vintage-charcoal/10 mx-8 mb-4"></div>
          <a 
            href="https://wa.me/556284344419" 
            className="hidden md:flex items-center gap-2 font-sans font-semibold text-vintage-charcoal hover:text-vintage-red transition-colors group whitespace-nowrap"
          >
            Consultar disponibilidade
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3] mb-6 bg-vintage-sand/20">
                <img 
                  src={product.imageUrl} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-vintage-charcoal shadow-sm">
                  {product.category === 'combo' ? 'Destaque' : 'Raridade'}
                </div>
              </div>
              
              <div className="flex-1 flex flex-col">
                <div className="flex items-baseline justify-between mb-2">
                   <h3 className="font-serif text-2xl font-bold text-vintage-charcoal group-hover:text-vintage-red transition-colors">
                    {product.title}
                  </h3>
                </div>
                
                <p className="font-sans text-vintage-charcoal/70 leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                
                <a 
                  href="https://wa.me/556284344419"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 border border-vintage-charcoal rounded-xl font-sans font-semibold text-vintage-charcoal text-center hover:bg-vintage-charcoal hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Tenho interesse
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a 
            href="https://wa.me/556284344419" 
            className="inline-flex items-center gap-2 font-sans font-semibold text-vintage-red bg-vintage-red/10 px-6 py-3 rounded-full"
          >
            Ver acervo completo no WhatsApp
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
