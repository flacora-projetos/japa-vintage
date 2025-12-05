import React, { useState } from 'react';
import { Section } from './components/Section';
import { AudioConsultant } from './components/AudioConsultant';
import { Disc, Music, Wrench, TrendingUp, Phone, MapPin, Menu, X, Instagram, Sparkles } from 'lucide-react';

const assetPath = (file: string) => {
  const base = (import.meta.env.BASE_URL ?? '/').replace(/\/$/, '');
  const sanitized = file.replace(/^\//, '');
  return `${base}/${sanitized}`;
};

const assets = {
  logo: assetPath('logo-japa.png'),
  founder: assetPath('founder-hero.jpg'),
  setup: assetPath('setup-gradiente.jpg'),
  spectrum: assetPath('spectrum-gradiente.jpg'),
  receiver: assetPath('receiver-pro2000.jpg'),
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-vintage-cream selection:bg-vintage-gold selection:text-white">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-vintage-cream/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center gap-3">
              {/* Logo Image */}
              <img 
                src={assets.logo} 
                alt="Japa Vintage Logo" 
                className="h-16 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback text if image not found */}
              <div className="hidden flex items-center gap-2">
                <div className="bg-vintage-red p-2 rounded-full">
                  <Disc className="w-6 h-6 text-white" />
                </div>
                <span className="font-serif font-bold text-2xl text-vintage-charcoal">Japa Vintage</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#inicio" className="text-vintage-charcoal hover:text-vintage-red transition-colors font-medium">Início</a>
              <a href="#sobre" className="text-vintage-charcoal hover:text-vintage-red transition-colors font-medium">Sobre</a>
              <a href="#motivos" className="text-vintage-charcoal hover:text-vintage-red transition-colors font-medium">Por que Vintage?</a>
              <a href="#consultor" className="text-vintage-charcoal hover:text-vintage-red transition-colors font-medium">Consultor IA</a>
              <a href="#contato" className="bg-vintage-charcoal text-white px-5 py-2 rounded-full hover:bg-stone-700 transition-colors font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Fale Conosco</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-vintage-charcoal p-2">
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-vintage-cream border-t border-stone-200 absolute w-full shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-stone-800 hover:bg-stone-200">Início</a>
              <a href="#sobre" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-stone-800 hover:bg-stone-200">Sobre</a>
              <a href="#motivos" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-stone-800 hover:bg-stone-200">Por que Vintage?</a>
              <a href="#consultor" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-stone-800 hover:bg-stone-200">Consultor IA</a>
              <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-white bg-vintage-red font-bold text-center mt-4">Fale Conosco</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 lg:pt-40 pb-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-center md:text-left">
              <span className="inline-block py-2 px-4 rounded-full bg-vintage-red/10 text-vintage-red font-bold text-sm tracking-widest uppercase border border-vintage-red/20">
                Goiânia - GO
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-vintage-charcoal leading-[1.1]">
                Áudio Analógico <br/>
                <span className="text-vintage-red">Com Alma</span>
              </h1>
              <p className="text-xl text-stone-600 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
                Redescubra o calor do som autêntico. Equipamentos clássicos revisados por quem entende de nostalgia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <a href="#contato" className="px-8 py-4 bg-vintage-red text-white rounded-lg font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-vintage-red/30 transform hover:-translate-y-1">
                  Ver Disponíveis
                </a>
                <a href="#sobre" className="px-8 py-4 bg-transparent border-2 border-vintage-charcoal text-vintage-charcoal rounded-lg font-bold text-lg hover:bg-vintage-charcoal hover:text-white transition-colors">
                  Conhecer a Japa
                </a>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              {/* Founder Image (Torii Gate) */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white rotate-2 hover:rotate-0 transition-transform duration-500 max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img 
                  src={assets.founder} 
                  alt="Fundador Japa Vintage com Portal Torii" 
                  className="w-full h-auto object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20 text-center">
                  <p className="text-white font-serif italic text-2xl drop-shadow-lg">"Apreciem sem moderação"</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-vintage-red/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-vintage-gold/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Inspection Section */}
      <Section id="sobre" className="bg-white border-y border-stone-200">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             {/* System Setup Image */}
             <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-stone-100">
                <img 
                  src={assets.setup} 
                  alt="Sistema de Som Completo Gradiente e Toshiba" 
                  className="w-full h-auto object-cover" 
                />
             </div>
             {/* Spectrum Overlay */}
             <div className="absolute -bottom-10 -right-10 w-2/3 rounded-lg overflow-hidden shadow-xl border-4 border-white hidden md:block">
                <img 
                  src={assets.spectrum} 
                  alt="Spectrum Analyzer Gradiente" 
                  className="w-full h-auto"
                />
             </div>
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-4xl font-serif font-bold text-vintage-charcoal mb-4">
                Manutenção Profissional & <br/>Inspeção Cuidadosa
              </h2>
              <div className="w-20 h-1.5 bg-vintage-gold"></div>
            </div>
            <p className="text-lg text-stone-600 leading-relaxed">
              A Japa Vintage não apenas vende equipamentos; nós vendemos experiências sonoras garantidas. Especializados em aparelhos clássicos, cada item que entra em nosso acervo passa por um rigoroso processo.
            </p>
            
            <div className="grid gap-6">
              <div className="flex gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-vintage-gold/50 transition-colors">
                <div className="bg-vintage-charcoal p-3 h-fit rounded-lg shadow-md">
                  <Wrench className="w-6 h-6 text-vintage-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-vintage-charcoal text-lg">Revisão Completa</h4>
                  <p className="text-stone-600">Amplificadores, receivers e tape decks desmontados e revisados eletronicamente.</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-stone-50 border border-stone-100 hover:border-vintage-gold/50 transition-colors">
                <div className="bg-vintage-red p-3 h-fit rounded-lg shadow-md">
                  <Disc className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-vintage-charcoal text-lg">Calibragem de Toca-Discos</h4>
                  <p className="text-stone-600">Ajuste fino de peso, antiskating e rotação para garantir a melhor fidelidade do seu vinil.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why Choose Vintage Section */}
      <Section id="motivos" className="bg-vintage-cream">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-vintage-charcoal mb-4">Por que escolher o áudio vintage?</h2>
          <div className="w-24 h-1 bg-vintage-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-b-4 border-vintage-wood hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-vintage-wood/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-vintage-wood transition-colors">
              <Music className="w-8 h-8 text-vintage-wood group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-vintage-charcoal">Qualidade de Som</h3>
            <p className="text-stone-600 text-center leading-relaxed">
              Muitos audiófilos preferem o som único, quente e encorpado dos equipamentos analógicos vintage, impossível de replicar digitalmente.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-b-4 border-vintage-charcoal hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-vintage-charcoal/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-vintage-charcoal transition-colors">
              <Disc className="w-8 h-8 text-vintage-charcoal group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-vintage-charcoal">Mídia Física</h3>
            <p className="text-stone-600 text-center leading-relaxed">
              Impulsione o ressurgimento do vinil, fitas cassete e CDs. Sinta a música em suas mãos e aprecie a arte das capas.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-xl shadow-md border-b-4 border-vintage-gold hover:-translate-y-2 transition-transform duration-300 group">
            <div className="w-16 h-16 bg-vintage-gold/10 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-vintage-gold transition-colors">
              <TrendingUp className="w-8 h-8 text-vintage-gold group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-center mb-3 text-vintage-charcoal">Investimento</h3>
            <p className="text-stone-600 text-center leading-relaxed">
              Equipamentos vintage de alta qualidade não são gastos, são ativos. Eles mantêm ou aumentam seu valor ao longo do tempo.
            </p>
          </div>
        </div>
      </Section>

      {/* Equipment Showcase / Gallery */}
      <section className="py-20 bg-vintage-charcoal text-white relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Acervo em Destaque</h2>
            <p className="text-stone-400">Alguns dos clássicos que passam por aqui</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Featured Large Item */}
            <div className="lg:col-span-2 row-span-1 md:row-span-2 relative group overflow-hidden rounded-xl border border-stone-700 shadow-2xl">
               <img 
                src={assets.receiver} 
                alt="Receiver Gradiente Pro 2000 MK II" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
               />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-8 left-8 max-w-lg">
                <span className="text-vintage-gold text-sm font-bold tracking-widest uppercase mb-2 block">Amplificação</span>
                <h3 className="text-3xl font-bold font-serif mb-2">Gradiente Pro 2000 MK II</h3>
                <p className="text-stone-300">A lenda do áudio nacional. Potência, fidelidade e aquele visual que impõe respeito em qualquer sala.</p>
              </div>
            </div>
            
            {/* Secondary Item 1 */}
            <div className="relative group overflow-hidden rounded-xl border border-stone-700">
              <img 
                src={assets.spectrum} 
                alt="Spectrum Analyzer" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold">Periféricos & Equalizadores</h3>
                <p className="text-xs text-stone-300">Visualização de espectro sonora</p>
              </div>
            </div>

            {/* Secondary Item 2 */}
            <div className="relative group overflow-hidden rounded-xl border border-stone-700 bg-stone-800">
               {/* Reusing setup image cropped or similar vibe */}
              <img 
                src={assets.setup} 
                alt="Toca Discos" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
                style={{ objectPosition: 'top' }}
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
              <div className="absolute bottom-4 left-4">
                <h3 className="text-lg font-bold">Toca-Discos & Decks</h3>
                <p className="text-xs text-stone-300">Mecânica de precisão</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Consultant Section */}
      <Section id="consultor" className="bg-vintage-cream bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <span className="text-vintage-red font-bold tracking-wider uppercase text-sm bg-vintage-red/10 px-3 py-1 rounded-full">Inteligência Artificial</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-vintage-charcoal mt-4 mb-6 leading-tight">
              Não sabe por onde começar?
            </h2>
            <p className="text-stone-600 text-lg mb-8 leading-relaxed">
              Converse agora com nosso <strong>Especialista Virtual</strong>. Ele foi treinado com o conhecimento técnico da Japa Vintage para te ajudar a montar o setup dos sonhos.
            </p>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4">
              <h3 className="font-bold text-vintage-charcoal flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-vintage-gold" />
                O que você pode perguntar:
              </h3>
              <ul className="space-y-3 text-stone-600">
                <li className="flex gap-2 text-sm">
                  <span className="text-vintage-gold">•</span>
                  "Qual a diferença entre receiver e amplificador?"
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-vintage-gold">•</span>
                  "Quero um som para tocar Jazz em vinil, o que recomenda?"
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-vintage-gold">•</span>
                  "O Gradiente Pro 2000 é bom para rock?"
                </li>
              </ul>
            </div>
          </div>
          <div>
            <AudioConsultant />
          </div>
        </div>
      </Section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t-4 border-vintage-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-stone-800 pb-12">
            
            {/* Brand */}
            <div className="lg:col-span-1">
              <img src={assets.logo} alt="Japa Vintage" className="h-16 w-auto mb-6 bg-vintage-cream/10 rounded-lg p-2" />
              <p className="mb-6 leading-relaxed text-stone-400 text-sm">
                Curadoria especializada em áudio analógico. Restauramos a história da música através de equipamentos clássicos.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/japa_discos_lps_de_vinil/" target="_blank" rel="noreferrer" className="p-2 bg-stone-800 rounded-lg hover:bg-vintage-red transition-colors text-white">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-serif font-bold text-lg mb-6">Navegação</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#inicio" className="hover:text-vintage-gold transition-colors">Início</a></li>
                <li><a href="#sobre" className="hover:text-vintage-gold transition-colors">Sobre Nós</a></li>
                <li><a href="#motivos" className="hover:text-vintage-gold transition-colors">Por que Vintage?</a></li>
                <li><a href="#consultor" className="hover:text-vintage-gold transition-colors">Consultor Virtual</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-serif font-bold text-lg mb-6">Contato</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-vintage-red mt-0.5" />
                  <div>
                    <span className="block text-white font-medium">WhatsApp / Telefone</span>
                    <a href="https://wa.me/556284344419" className="hover:text-vintage-gold transition-colors">
                      (62) 8434-4419
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-vintage-red mt-0.5" />
                  <div>
                    <span className="block text-white font-medium">Localização</span>
                    <span>Goiânia - Goiás</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-stone-800 to-stone-900 p-6 rounded-xl border border-stone-700 shadow-inner">
                <h3 className="text-white font-bold text-lg mb-2">Visite nosso acervo</h3>
                <p className="text-xs mb-4 text-stone-400">Agende uma visita ou peça fotos detalhadas dos equipamentos.</p>
                <a href="https://wa.me/556284344419" className="flex items-center justify-center gap-2 w-full text-center bg-vintage-red hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg shadow-red-900/20">
                  <Phone className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 text-center text-sm text-stone-600 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Japa Vintage.</p>
            <p className="mt-2 md:mt-0 font-serif italic text-stone-500">"Apreciem sem moderação"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
