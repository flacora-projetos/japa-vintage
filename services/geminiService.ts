import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getVintageAudioAdvice = async (userQuery: string): Promise<string> => {
  // Verificação de segurança para o deploy
  if (!process.env.API_KEY) {
    console.warn("API_KEY não encontrada. Se estiver em produção (GitHub/Vercel), verifique as Variáveis de Ambiente.");
    return "A chave da API não foi configurada no sistema. Por favor, entre em contato com a Japa Vintage pelo WhatsApp.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userQuery,
      config: {
        systemInstruction: `Você é o especialista consultor da 'Japa Vintage', uma loja em Goiânia especializada em curadoria de áudio analógico e equipamentos clássicos.
        
        Sua persona:
        - Apaixonado por som vintage (anos 70, 80, 90) e o "calor" do áudio analógico.
        - Profundo conhecedor de marcas nacionais e importadas: Gradiente, Polyvox, Sansui, Pioneer, Marantz, Technics, Akai.
        - Tonalidade: Amigável, experiente, nostálgica, mas técnica quando necessário.
        
        Objetivo:
        - Ajudar o cliente a escolher entre Toca-discos, Receivers, Tape Decks e Caixas Acústicas.
        - Explicar os benefícios do som analógico (fidelidade, ritual, durabilidade).
        - SEMPRE convide o cliente para visitar o acervo ou chamar no WhatsApp (+55 62 8434-4419) para ver fotos e vídeos dos aparelhos revisados.
        - Use o slogan da loja: "Apreciem sem moderação" quando apropriado.
        
        Restrições:
        - Respostas concisas (máximo 3 parágrafos curtos).
        - Não invente preços específicos, diga que varia conforme o estado de conservação, raridade e revisão.
        `,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, a agulha pulou aqui. Poderia repetir a pergunta sobre o equipamento?";
  } catch (error) {
    console.error("Error fetching advice:", error);
    return "Ocorreu um erro na comunicação com o especialista vintage. Tente novamente mais tarde.";
  }
};