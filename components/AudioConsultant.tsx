import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Disc, Loader2 } from 'lucide-react';
import { getVintageAudioAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AudioConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: 'Olá! Sou o especialista virtual da Japa Vintage. Quer montar um sistema de som clássico ou procura uma peça específica? Posso te ajudar a redescobrir o som analógico.',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const advice = await getVintageAudioAdvice(input);
    
    const aiMsg: ChatMessage = { role: 'model', text: advice, timestamp: new Date() };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-stone-200 flex flex-col h-[600px] w-full max-w-4xl mx-auto">
      <div className="bg-vintage-charcoal p-4 flex items-center gap-3">
        <div className="bg-vintage-gold p-2 rounded-full">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-serif font-bold text-lg">Consultor Japa Vintage</h3>
          <p className="text-stone-400 text-xs">Inteligência Artificial Especializada em Áudio</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 bg-stone-50 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl ${
              msg.role === 'user' 
                ? 'bg-vintage-charcoal text-white rounded-br-none' 
                : 'bg-vintage-cream border border-stone-200 text-stone-800 rounded-bl-none shadow-sm'
            }`}>
              <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-vintage-cream p-4 rounded-2xl rounded-bl-none border border-stone-200 flex items-center gap-2">
              <Disc className="w-5 h-5 animate-spin text-vintage-wood" />
              <span className="text-sm text-stone-500">Consultando o acervo...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 bg-white border-t border-stone-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ex: Qual o melhor receiver para tocar rock clássico?"
            className="flex-1 px-4 py-3 bg-stone-100 rounded-lg border-transparent focus:border-vintage-wood focus:bg-white focus:ring-0 transition-colors outline-none text-stone-800"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-vintage-wood hover:bg-amber-800 text-white p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </div>
  );
};