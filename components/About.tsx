import React from 'react';
import { CheckCircle, Music2, ArrowRight } from 'lucide-react';
import spectrumImage from '../assets/spectrum.jpg';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-vintage-charcoal text-vintage-cream relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side */}
          <div className="relative order-2 lg:order-1">
             <div className="absolute -inset-4 bg-gradient-to-tr from-vintage-red to-orange-600 rounded-3xl -rotate-2 opacity-20 blur-xl"></div>
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
               <img 
                 src={spectrumImage} 
                 alt="Analisador de espectro de áudio vintage funcionando" 
                 className="w-full object-cover hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
               <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <Music2 className="text-vintage-red" />
                    <span className="font-script text-2xl text-white">Alta Fidelidade</span>
                  </div>
                  <p className="font-sans text-sm text-gray-300 max-w-xs">
                    Cada detalhe importa. Do agudo cristalino ao grave profundo.
                  </p>
               </div>
             </div>
          </div>

          {/* Text Side */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Trazendo a era de ouro do áudio <span className="text-vintage-red">de volta à vida</span>.
            </h2>
            
            <div className="space-y-6 font-sans text-lg text-vintage-cream/80 leading-relaxed border-l border-vintage-red/30 pl-6">
              <p>
                Na Japa Vintage, não comercializamos apenas aparelhos usados. Nós curamos equipamentos que marcaram época.
              </p>
              <p>
                Cada Receiver, Toca-discos ou Deck passa por uma inspeção rigorosa. Entendemos que quem busca o som analógico não quer apenas ouvir música, quer sentir a textura, o calor e a presença que só o vintage proporciona.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 font-sans pt-4">
              {[
                "Revisão Técnica Completa",
                "Acervo Selecionado",
                "Envio Seguro para todo Brasil",
                "Suporte Especializado"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5 hover:border-vintage-red/50 transition-colors">
                  <CheckCircle className="text-vintage-red flex-shrink-0" size={20} />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
               <a 
                 href="https://wa.me/556284344419" 
                 className="inline-flex items-center gap-2 text-vintage-red font-bold hover:text-white transition-colors border-b-2 border-vintage-red pb-1"
               >
                 Falar com um especialista
                 <ArrowRight size={16} />
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
