import React from 'react';
import { Settings, Truck, Disc, ShieldCheck } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "Curadoria Especializada",
    description: "Equipamentos garimpados e selecionados a dedo. Apenas peças que atendem nossos rigorosos critérios de conservação.",
    icon: Disc,
  },
  {
    title: "Revisão Técnica",
    description: "Todos os itens são testados e revisados. Garantimos o funcionamento pleno das funções mecânicas e eletrônicas.",
    icon: Settings,
  },
  {
    title: "Envio Blindado",
    description: "Sua relíquia chega intacta. Utilizamos embalagens profissionais reforçadas para envios seguros a todo o Brasil.",
    icon: Truck,
  },
  {
    title: "Procedência Garantida",
    description: "Transparência total sobre o estado de cada item. Compre com a segurança de quem entende do assunto.",
    icon: ShieldCheck,
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 bg-vintage-sand/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-vintage-red font-bold tracking-widest uppercase text-xs mb-3 block">Diferenciais</span>
          <h2 className="font-serif text-4xl md:text-5xl text-vintage-charcoal mb-6">Por que Japa Vintage?</h2>
          <p className="font-sans text-xl text-vintage-charcoal/70">
            Compromisso sério com o seu hobby e paixão pela música.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-vintage-sand"
            >
              <div className="w-12 h-12 bg-vintage-red/10 rounded-xl flex items-center justify-center text-vintage-red mb-6">
                <feature.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-vintage-charcoal mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-vintage-charcoal/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};