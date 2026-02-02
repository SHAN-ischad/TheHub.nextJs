# Oráculo IA — The Hub

<div align="center">
   
![The Hub](./public/thehubPurple.png)
</div>

Badges:  
[build status] [license: MIT]

Resumo
Oráculo IA (The Hub) é a camada frontend baseada em Next.js para um produto de Oráculo/Assistente inteligente. Este repositório contém a UI/landing page e estruturas para integrar um backend com LLMs e persistência via Prisma/Postgres.

Stack detectado
- Next.js 16.1.4
- React 19.2.3
- TypeScript (configurado como devDependency)
- Tailwind CSS v4 + PostCSS
- Prisma (prisma.config.ts) + pg (Postgres)
- Bibliotecas visuais: three.js, @shadergradient/react, embla-carousel-react
- Ícones: lucide-react

Arquivos relevantes
- package.json: https://github.com/SHAN-ischad/TheHub.nextJs/blob/main/package.json
- Página principal: src/app/page.tsx — https://github.com/SHAN-ischad/TheHub.nextJs/blob/main/src/app/page.tsx
- next.config.ts: https://github.com/SHAN-ischad/TheHub.nextJs/blob/main/next.config.ts
- tailwind.config.ts: https://github.com/SHAN-ischad/TheHub.nextJs/blob/main/tailwind.config.ts
- prisma.config.ts: https://github.com/SHAN-ischad/TheHub.nextJs/blob/main/prisma.config.ts

Requisitos
- Node.js 18+ (recomendado)
- npm / yarn / pnpm
- Postgres (se usar persistência)
- Chave de provedor LLM (OpenAI / Azure / etc.) se integrar funcionalidades de IA

Instalação rápida
1. Clone:
   git clone https://github.com/SHAN-ischad/TheHub.nextJs.git
2. Entre na pasta:
   cd TheHub.nextJs
3. Instale dependências:
   npm install
   (ou yarn / pnpm install)
4. Crie .env.local com as variáveis abaixo (exemplos)
5. Rode em dev:
   npm run dev
6. Abra: http://localhost:3000

Scripts úteis (conforme package.json)
- npm run dev — ambiente de desenvolvimento (next dev)
- npm run build — build de produção (next build)
- npm run start — rodar build (next start)
- npm run lint — ESLint

Variáveis de ambiente sugeridas
Crie .env.local (NUNCA commite este arquivo)

- NODE_ENV=development
- NEXT_PUBLIC_BASE_URL=http://localhost:3000
- NEXT_PUBLIC_APP_NAME="Oráculo IA"
- DATABASE_URL=postgresql://user:password@host:5432/dbname
- PRISMA_SCHEMA=prisma/schema.prisma

Se integrar um provedor LLM:
- OPENAI_API_KEY=sk-...
- OPENAI_MODEL=gpt-4o-mini
- AZURE_OPENAI_ENDPOINT=https://...
- AZURE_OPENAI_KEY=...

Prisma / Banco de dados
O repositório contém prisma.config.ts. Para usar:
1. Configure DATABASE_URL em .env.local
2. Gere o cliente:
   npx prisma generate
3. Crie migração inicial (desenvolvimento):
   npx prisma migrate dev --name init

Observações sobre front-end
- O projeto usa App Router (src/app/) — ponto de entrada: src/app/page.tsx
- Estilos com Tailwind v4; há configurações em tailwind.config.ts e postcss.config.mjs
- Componentes visuais usam three.js e @shadergradient/react para background/shaders

Boas práticas e segurança
- Nunca commite secrets / chaves de API.
- Adicione validação e rate limiting em rotas que chamam provedores LLM.
- Monitore custos de API (logs, alertas).
- Use variáveis de ambiente no provedor de deploy (Vercel, etc.).

Docker (exemplo)
Crie Dockerfile na raiz:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]
```

Deploy recomendado
- Vercel (nativo para Next.js) — configure variables no dashboard.
- Se usar banco, garanta DATABASE_URL apontando para um serviço gerenciado.

Sugestões de integração com Oráculo IA (backend)
- Criar rotas API (Next.js API Routes ou servidor separado) para orquestrar chamadas ao provedor LLM.
- Implementar cache / RAG (vetores + Pinecone/Weaviate/pgvector) para melhorar respostas contextuais.
- Implementar moderação automática (filtros) nas respostas.

Como contribuir
1. Abra uma issue descrevendo o bug/proposta.
2. Crie branch: feature/<descrição> ou fix/<descrição>.
3. Faça PR com descrição clara e checklist (testes, docs).
4. Mantenha commits pequenos e atômicos.

Template rápido de PR
- Título: [feature|fix] Breve descrição
- Descrição: O que foi feito, por quê, como testar
- Checklist:
  - [ ] Testes adicionados/atualizados
  - [ ] Documentação atualizada
  - [ ] Nenhuma credencial exposta

Licença
- MIT (substitua se necessário)

Contato
- Mantainer: SHAN-ischad — https://github.com/SHAN-ischad
- Repositório: https://github.com/SHAN-ischad/TheHub.nextJs

Notas finais
Este README foi adaptado automaticamente com base nos arquivos detectados no repositório (package.json, next.config.ts, tailwind.config.ts, prisma.config.ts e src/app/page.tsx). Se quiser, eu:
- crio um branch e faço o commit do README automaticamente, ou
- ajusto o tom e adiciono badges reais (Vercel/Coverage) e links para pipelines, ou
- extraio variáveis de ambiente exatas lendo arquivos do backend para preencher a seção .env local.
