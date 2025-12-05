import React from 'react';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#111] text-vintage-cream/60 pt-20 pb-10 border-t border-vintage-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-script text-4xl text-white">Japa Vintage</h3>
            <p className="font-sans text-sm leading-relaxed max-w-xs">
              Especialistas em reviver a era dourada do áudio. Toca-discos, receivers e caixas acústicas com alma e história.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/japa_discos_lps_de_vinil/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-vintage-charcoal rounded-full flex items-center justify-center text-white hover:bg-vintage-red transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://wa.me/556284344419" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 bg-vintage-charcoal rounded-full flex items-center justify-center text-white hover:bg-vintage-red transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Navegação</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li><a href="#hero" className="hover:text-vintage-red transition-colors">Início</a></li>
              <li><a href="#produtos" className="hover:text-vintage-red transition-colors">Equipamentos</a></li>
              <li><a href="#sobre" className="hover:text-vintage-red transition-colors">Manifesto</a></li>
              <li><a href="https://wa.me/556284344419" className="hover:text-vintage-red transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-white text-lg mb-6">Contato</h4>
            <ul className="space-y-4 font-sans text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-vintage-red mt-1" />
                <span>Goiânia, GO<br/>Atendimento com hora marcada</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-vintage-red" />
                <a href="https://wa.me/556284344419" className="hover:text-white transition-colors">
                  (62) 8434-4419
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-vintage-red" />
                <span>contato@japavintage.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-vintage-charcoal pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p>&copy; {new Date().getFullYear()} Japa Vintage. Todos os direitos reservados.</p>
          <p>Design recriado com tecnologia React.</p>
        </div>
      </div>
    </footer>
  );
};