## Guia definitivo de deploy — Japa Vintage

Este passo a passo coloca o site fora do ambiente de preview e garante um deploy estável usando Vite + GitHub Pages, com as imagens oficiais e a chave da API protegida.

### 1. Por que abandonar o preview
- Segurança: a chave do Google Gemini não pode ficar exposta em arquivos `.tsx`; ela precisa vir de uma variável de ambiente injetada no build.
- Performance: o Vite gera assets minificados dentro de `dist/`, reduzindo o tempo de carregamento e evitando dependência de CDN de desenvolvimento.
- Compatibilidade: navegadores não entendem JSX/TSX puro; o bundler converte tudo para JavaScript e cuida dos polyfills.

### 2. Estrutura do projeto
- `public/`: fica com imagens finais e demais assets estáticos.
- `src/`: concentra `index.tsx`, `App.tsx`, `components/`, `services/` e `types.ts`.
- `services/geminiService.ts`: deve buscar a chave via `process.env.API_KEY`.
- Configurações principais: `package.json`, `vite.config.ts`, `tsconfig.json`.

#### 2.1 Banco de imagens oficial
O arquivo `DOCUMENTAÇÃO/IMAGENS.md` mapeia os nomes finais. Copie-os para `public/` e mantenha os nomes para evitar ajustes no JSX:

| Conteúdo | Nome final esperado | Origem neste repositório | Observações |
| --- | --- | --- | --- |
| Logo e mascote | `logo-japa.png` | `DOCUMENTAÇÃO/imagens/logo-japa.png` | Usa no cabeçalho, rodapé e favicon. |
| Fundador com Torii | `founder-hero.jpg` | `DOCUMENTAÇÃO/imagens/founder-hero.png` | O arquivo fornecido está em PNG; renomeie ou converta. |
| Sistema completo | `setup-gradiente.jpg` | `DOCUMENTAÇÃO/imagens/setup-gradiente.jpg` | Foto principal do herói das décadas 70/80. |
| Receiver frontal | `receiver-pro2000.jpg` | `DOCUMENTAÇÃO/imagens/receiver-pro2000.jpg` | Close do Gradiente Pro 2000 para seções técnicas. |
| Spectrum analyzer | `spectrum-gradiente.jpg` | `DOCUMENTAÇÃO/imagens/spectrum-gradiente.jpg` | Usado em destaques sobre equalização. |

Pré-visualização direto da pasta `DOCUMENTAÇÃO/imagens` (útil para validar antes de mover para `public/`):

![Logo oficial](./imagens/logo-japa.png)

![Fundador com Torii](./imagens/founder-hero.png)

![Setup Gradiente completo](./imagens/setup-gradiente.jpg)

![Receiver Gradiente PRO-2000](./imagens/receiver-pro2000.jpg)

![Spectrum Analyzer](./imagens/spectrum-gradiente.jpg)

> Dica: manter o mesmo slug evita ter que editar cada `<img />` ou `background-image` no React.

### 3. Arquivos obrigatórios

#### `package.json`
```json
{
  "name": "japa-vintage",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.1",
    "react-dom": "^19.2.1",
    "@google/genai": "^1.31.0",
    "lucide-react": "^0.556.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

#### `vite.config.ts`
```ts
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: { port: 3000, host: '0.0.0.0' },
    plugins: [react()],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },
    resolve: { alias: { '@': path.resolve(__dirname, '.') } }
  };
});
```

#### `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "types": ["node"],
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": { "@/*": ["./*"] },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
```

### 4. Preparar ambiente local
1. Instale Node.js 20+.
2. Clone ou extraia este repositório para `japa-vintage`.
3. Copie as imagens listadas para `public/`.
4. Crie `.env` com a variável segura:
   ```
   GEMINI_API_KEY="sua_chave_do_google_aqui"
   ```
   (Opcional: adicione também `VITE_API_KEY` se quiser compatibilidade com outros scripts.)
5. Instale dependências e teste:
   ```bash
   npm install
   npm run dev
   ```
   O site deve abrir em `http://localhost:3000` com todas as seções carregadas e sem avisos no console.

### 5. Checklist pré-build
- `npm run build` precisa gerar `dist/` sem warnings críticos.
- `.env` está listado no `.gitignore` (não vaze a chave).
- `services/geminiService.ts` não deve conter strings com a chave.
- As imagens existem em `public/` com os nomes corretos.

### 6. Publicar no GitHub
1. Crie/limpe a pasta local:
   ```bash
   git init
   git add .
   git commit -m "Deploy do site Japa Vintage"
   git branch -M main
   git remote add origin https://github.com/flacora-projetos/japa-vintage.git
   git push -u origin main
   ```
2. `.gitignore` mínimo:
   ```
   node_modules
   dist
   .env
   ```

### 7. Workflow GitHub Actions + Pages
1. No GitHub, vá em *Settings → Secrets and variables → Actions* e crie `GEMINI_API_KEY` com a mesma chave do `.env`.
2. Adicione `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### 8. Checklist pós-deploy
- GitHub Action finalizou em verde.
- *Settings → Pages* mostra o link ativo.
- O site carrega todas as imagens (logo, fundador, setup, receiver, spectrum).
- O consultor IA responde sem alertas de “API_KEY não configurada”.
- CTAs (WhatsApp, links de contato) funcionam em desktop e mobile.

Seguindo este roteiro você garante o repositório `flacora-projetos/japa-vintage` limpo, pronto para receber deploy automático e usando todo o pacote visual oficial.
