Sobre o Consultor (IA)
O Consultor Virtual que implementei utiliza a tecnologia Gemini 2.5 Flash do Google. Ele foi programado no arquivo geminiService.ts com instruções específicas ("System Instructions") para agir como um especialista da Japa Vintage. Ele sabe sobre marcas clássicas (Gradiente, Polyvox), entende a tonalidade "calorosa" do vinil e sempre tentará direcionar o cliente para o WhatsApp da loja.
Ele vai funcionar no GitHub?
Atenção: Para que o consultor funcione online (no GitHub Pages, Vercel ou Netlify), você precisará configurar a Chave da API (API Key) no servidor.
Segurança: O código usa process.env.API_KEY. Isso é uma medida de segurança para não deixar sua senha exposta no código público.
Deploy (Publicação):
Se você usar Vercel ou Netlify (recomendado para React), basta ir nas configurações do projeto lá e adicionar uma "Environment Variable" chamada API_KEY com o valor da sua chave do Google AI Studio.
Se usar GitHub Pages, você precisará configurar "Secrets" no repositório e usar um "GitHub Action" para construir o site, pois o GitHub Pages sozinho serve apenas arquivos estáticos e não lê variáveis de ambiente secretas nativamente sem um processo de build.
Melhorias realizadas agora
Para preparar seu site para o lançamento ("subir pro GitHub"), fiz as seguintes melhorias no código:
SEO (Otimização para Google): Adicionei "Meta Tags" no index.html. Agora, quando alguém compartilhar seu link no WhatsApp ou buscar no Google, aparecerá uma descrição bonita da Japa Vintage e a imagem do fundador, em vez de um link vazio.
Refinamento do Consultor: Atualizei o "cérebro" do consultor no geminiService.ts para usar o número completo do WhatsApp (formato internacional) e incluir o slogan "Apreciem sem moderação" nas conversas, reforçando a marca.
Tratamento de Erro: Adicionei um aviso no console caso a API Key esteja faltando, para te ajudar a identificar se a configuração no GitHub deu certo ou não.