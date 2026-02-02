<div align="center">

![The Hub](./public/thehubPurple.png)

# 🔮 Oráculo IA — The Hub

### *Plataforma Inteligente de Assistência com IA de Última Geração*

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/SHAN-ischad/TheHub.nextJs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)

[🚀 Demo](https://thehub-nextjs.vercel.app) • [📖 Documentação](https://github.com/SHAN-ischad/TheHub.nextJs/wiki) • [🐛 Report Bug](https://github.com/SHAN-ischad/TheHub.nextJs/issues) • [✨ Request Feature](https://github.com/SHAN-ischad/TheHub.nextJs/issues)

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Pré-requisitos](#-pré-requisitos)
- [Instalação](#-instalação)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Deploy](#-deploy)
- [Docker](#-docker)
- [Integração com Backend](#-integração-com-backend)
- [Contribuindo](#-contribuindo)
- [Segurança](#-segurança)
- [Licença](#-licença)
- [Contato](#-contato)

---

## 🎯 Sobre o Projeto

**Oráculo IA (The Hub)** é uma plataforma frontend moderna e escalável construída com Next.js, projetada para ser o hub central de interação com assistentes inteligentes alimentados por Large Language Models (LLMs). 

O projeto oferece uma experiência visual imersiva com efeitos 3D, gradientes animados e uma arquitetura robusta preparada para integração com diversos provedores de IA (OpenAI, Azure, Anthropic, etc.).

### ✨ Destaques

- 🎨 **Interface Moderna**: Design responsivo com Tailwind CSS v4 e efeitos visuais 3D
- ⚡ **Performance Otimizada**: Built com Next.js 16 e React 19 para máxima velocidade
- 🔒 **Type-Safe**: TypeScript em toda a aplicação
- 🗄️ **Database Ready**: Integração com Prisma + PostgreSQL
- 🎭 **Experiência Visual**: Three.js e shader gradients para efeitos imersivos
- 🔌 **API Ready**: Estrutura preparada para integração com LLMs

---

## 🛠️ Tecnologias

### Core Stack

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![Next.js](https://img.shields.io/badge/Next.js-16.1.4-000000?logo=next.js) | 16.1.4 | Framework React com SSR e SSG |
| ![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react) | 19.2.3 | Biblioteca UI declarativa |
| ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript) | 5.x | Superset JavaScript com tipos |
| ![Tailwind](https://img.shields.io/badge/Tailwind-4.0-38B2AC?logo=tailwind-css) | 4.0 | Framework CSS utility-first |

### Database & ORM

- **Prisma**: ORM moderno para Node.js e TypeScript
- **PostgreSQL**: Banco de dados relacional robusto e escalável

### Bibliotecas Visuais

- **Three.js**: Renderização 3D no browser
- **@shadergradient/react**: Gradientes animados com shaders
- **embla-carousel-react**: Carrosséis fluidos e responsivos
- **lucide-react**: Ícones SVG modernos e consistentes

### Ferramentas de Desenvolvimento

- **ESLint**: Linting e formatação de código
- **PostCSS**: Transformações CSS
- **Turbopack**: Bundler ultra-rápido (experimental)

---

## 🎁 Funcionalidades

- ✅ **Landing Page Imersiva**: Interface visual atrativa com efeitos 3D
- ✅ **Arquitetura App Router**: Organização moderna com Next.js 14+
- ✅ **Componentes Reutilizáveis**: Biblioteca de componentes com Shadcn/UI
- ✅ **Sistema de Temas**: Suporte a dark/light mode
- ✅ **Responsivo**: Design mobile-first
- ✅ **SEO Otimizado**: Meta tags e estrutura semântica
- 🔄 **Integração LLM**: (Em desenvolvimento) APIs para OpenAI, Azure, Anthropic
- 🔄 **Sistema de Chat**: (Em desenvolvimento) Interface de conversação em tempo real
- 🔄 **Histórico de Conversas**: (Em desenvolvimento) Persistência com Prisma
- 🔄 **RAG (Retrieval-Augmented Generation)**: (Em desenvolvimento) Busca vetorial

---

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** ≥ 18.x ([Download](https://nodejs.org/))
- **npm** ≥ 9.x, **yarn** ≥ 1.22.x, ou **pnpm** ≥ 8.x
- **PostgreSQL** ≥ 14.x ([Download](https://www.postgresql.org/download/)) — opcional, apenas se usar persistência
- **Git** ([Download](https://git-scm.com/))

### Verificar instalação:

```bash
node --version   # v18.0.0 ou superior
npm --version    # 9.0.0 ou superior
psql --version   # PostgreSQL 14.x ou superior
```

---

## 🚀 Instalação

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/SHAN-ischad/TheHub.nextJs.git
cd TheHub.nextJs
```

### 2️⃣ Instale as Dependências

Escolha seu gerenciador de pacotes preferido:

<details>
<summary><b>npm</b></summary>

```bash
npm install
```
</details>

<details>
<summary><b>yarn</b></summary>

```bash
yarn install
```
</details>

<details>
<summary><b>pnpm</b> (recomendado para performance)</summary>

```bash
pnpm install
```
</details>

### 3️⃣ Configure as Variáveis de Ambiente

Copie o arquivo de exemplo e edite com suas credenciais:

```bash
cp .env.example .env.local
```

> ⚠️ **Importante**: Nunca commite o arquivo `.env.local`!

### 4️⃣ Configure o Banco de Dados (Opcional)

Se for usar persistência com Prisma:

```bash
# Gerar cliente Prisma
npx prisma generate

# Criar migração inicial
npx prisma migrate dev --name init

# Abrir Prisma Studio (GUI do banco)
npx prisma studio
```

### 5️⃣ Inicie o Servidor de Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador 🎉

---

## ⚙️ Configuração

### Variáveis de Ambiente

Crie o arquivo `.env.local` na raiz do projeto:

```env
# =============================================================================
# APLICAÇÃO
# =============================================================================
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Oráculo IA - The Hub"
NEXT_PUBLIC_APP_DESCRIPTION="Plataforma inteligente de assistência com IA"

# =============================================================================
# DATABASE (PostgreSQL)
# =============================================================================
DATABASE_URL="postgresql://user:password@localhost:5432/oraculo_db?schema=public"
PRISMA_SCHEMA=prisma/schema.prisma

# =============================================================================
# PROVEDORES DE IA (OpenAI)
# =============================================================================
OPENAI_API_KEY=sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
OPENAI_MODEL=gpt-4o-mini
OPENAI_MAX_TOKENS=4096
OPENAI_TEMPERATURE=0.7

# =============================================================================
# PROVEDORES DE IA (Azure OpenAI) - Opcional
# =============================================================================
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_KEY=your-azure-key-here
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4o-mini
AZURE_OPENAI_API_VERSION=2024-02-15-preview

# =============================================================================
# PROVEDORES DE IA (Anthropic Claude) - Opcional
# =============================================================================
ANTHROPIC_API_KEY=sk-ant-xxxxxxxxxxxxxxxxxxxxx
ANTHROPIC_MODEL=claude-sonnet-4-5-20250929

# =============================================================================
# VETORIZAÇÃO (Pinecone/Weaviate) - Opcional
# =============================================================================
PINECONE_API_KEY=your-pinecone-key
PINECONE_ENVIRONMENT=us-east-1-aws
PINECONE_INDEX_NAME=oraculo-embeddings

# =============================================================================
# AUTENTICAÇÃO (NextAuth.js) - Futuro
# =============================================================================
NEXTAUTH_SECRET=your-super-secret-key-here
NEXTAUTH_URL=http://localhost:3000

# =============================================================================
# ANALYTICS & MONITORING - Opcional
# =============================================================================
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
SENTRY_DSN=https://xxxxx@sentry.io/xxxxx

# =============================================================================
# LOGS & DEBUG
# =============================================================================
LOG_LEVEL=info
DEBUG_MODE=false
```

### Configuração do Banco de Dados

Edite `prisma/schema.prisma` conforme necessário:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

## 💻 Uso

### Desenvolvimento Local

```bash
# Iniciar em modo desenvolvimento
npm run dev

# Com Turbopack (experimental, mais rápido)
npm run dev -- --turbo
```

### Build de Produção

```bash
# Criar build otimizado
npm run build

# Iniciar servidor de produção
npm run start
```

### Análise de Bundle

```bash
# Analisar tamanho dos pacotes
npm run analyze
```

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `dev` | `npm run dev` | Inicia servidor de desenvolvimento |
| `build` | `npm run build` | Cria build de produção |
| `start` | `npm run start` | Inicia servidor de produção |
| `lint` | `npm run lint` | Executa ESLint |
| `lint:fix` | `npm run lint -- --fix` | Corrige problemas de lint automaticamente |
| `type-check` | `tsc --noEmit` | Verifica tipos TypeScript |
| `format` | `prettier --write .` | Formata código com Prettier |
| `prisma:generate` | `npx prisma generate` | Gera Prisma Client |
| `prisma:migrate` | `npx prisma migrate dev` | Cria nova migração |
| `prisma:studio` | `npx prisma studio` | Abre Prisma Studio |
| `test` | `npm test` | Executa testes (quando configurados) |

---

## 📁 Estrutura do Projeto

```
TheHub.nextJs/
├── 📁 public/                  # Assets estáticos
│   ├── thehubPurple.png
│   └── ...
├── 📁 src/
│   ├── 📁 app/                 # Next.js App Router
│   │   ├── 📄 layout.tsx       # Layout raiz
│   │   ├── 📄 page.tsx         # Página principal
│   │   ├── 📄 globals.css      # Estilos globais
│   │   └── 📁 api/             # API Routes
│   │       └── 📁 chat/
│   │           └── route.ts
│   ├── 📁 components/          # Componentes React
│   │   ├── 📁 ui/              # Componentes de UI
│   │   ├── 📁 layout/          # Layouts
│   │   └── 📁 features/        # Features específicas
│   ├── 📁 lib/                 # Utilitários e configurações
│   │   ├── 📄 prisma.ts        # Cliente Prisma
│   │   ├── 📄 openai.ts        # Config OpenAI
│   │   └── 📄 utils.ts         # Funções utilitárias
│   ├── 📁 hooks/               # Custom React Hooks
│   ├── 📁 types/               # TypeScript types
│   └── 📁 styles/              # Estilos adicionais
├── 📁 prisma/
│   ├── 📄 schema.prisma        # Schema do banco
│   └── 📁 migrations/          # Migrações
├── 📄 next.config.ts           # Configuração Next.js
├── 📄 tailwind.config.ts       # Configuração Tailwind
├── 📄 tsconfig.json            # Configuração TypeScript
├── 📄 postcss.config.mjs       # Configuração PostCSS
├── 📄 prisma.config.ts         # Configuração Prisma
├── 📄 package.json             # Dependências
├── 📄 .env.local               # Variáveis de ambiente (não commitar!)
├── 📄 .gitignore
├── 📄 README.md
└── 📄 LICENSE
```

---

## 🚢 Deploy

### Deploy na Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SHAN-ischad/TheHub.nextJs)

#### Passo a Passo:

1. **Conecte seu repositório** no dashboard da Vercel
2. **Configure as variáveis de ambiente** em Settings → Environment Variables
3. **Configure o banco de dados**:
   - Use [Vercel Postgres](https://vercel.com/storage/postgres), ou
   - [Supabase](https://supabase.com/), ou
   - [PlanetScale](https://planetscale.com/), ou
   - [Neon](https://neon.tech/)
4. **Deploy automático** a cada push na branch `main`

### Deploy em Outros Provedores

<details>
<summary><b>Netlify</b></summary>

```bash
# Instale o Netlify CLI
npm install -g netlify-cli

# Build e deploy
npm run build
netlify deploy --prod
```
</details>

<details>
<summary><b>Railway</b></summary>

1. Conecte seu repositório no [Railway](https://railway.app/)
2. Configure variáveis de ambiente
3. Railway detectará Next.js automaticamente
</details>

<details>
<summary><b>AWS Amplify</b></summary>

1. Conecte no [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. Escolha seu repositório
3. Configure build settings:
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```
</details>

---

## 🐳 Docker

### Dockerfile

Crie um `Dockerfile` na raiz do projeto:

```dockerfile
# =============================================================================
# Stage 1: Dependencies
# =============================================================================
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --production=false

# =============================================================================
# Stage 2: Builder
# =============================================================================
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# =============================================================================
# Stage 3: Runner
# =============================================================================
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/oraculo
    depends_on:
      - db
    networks:
      - app-network

  db:
    image: postgres:16-alpine
    restart: always
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=oraculo
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
    networks:
      - app-network

volumes:
  postgres-data:

networks:
  app-network:
    driver: bridge
```

### Comandos Docker

```bash
# Build da imagem
docker build -t thehub-nextjs .

# Executar container
docker run -p 3000:3000 thehub-nextjs

# Usar docker-compose
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar containers
docker-compose down
```

---

## 🔌 Integração com Backend

### Arquitetura Sugerida

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend (Next.js)                   │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  UI Layer   │  │  API Routes │  │  Server Components  │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                     Backend Services                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────────────┐ │
│  │   LLM    │  │   RAG    │  │  Cache   │  │  Database  │ │
│  │ Provider │  │ (Vectors)│  │  (Redis) │  │ (Postgres) │ │
│  └──────────┘  └──────────┘  └──────────┘  └────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### Exemplo de API Route para Chat

Crie `src/app/api/chat/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    // Validação
    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Mensagem inválida' },
        { status: 400 }
      );
    }

    // Chamar OpenAI
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'Você é um assistente útil e amigável.',
        },
        ...conversationHistory,
        {
          role: 'user',
          content: message,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const response = completion.choices[0].message.content;

    return NextResponse.json({ response });
  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json(
      { error: 'Erro ao processar requisição' },
      { status: 500 }
    );
  }
}
```

### Implementar RAG (Retrieval-Augmented Generation)

```typescript
// src/lib/rag.ts
import { OpenAIEmbeddings } from '@langchain/openai';
import { PineconeStore } from '@langchain/pinecone';
import { Pinecone } from '@pinecone-database/pinecone';

export async function searchSimilarDocuments(query: string) {
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY!,
  });

  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!);
  
  const embeddings = new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
  });

  const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
    pineconeIndex: index,
  });

  const results = await vectorStore.similaritySearch(query, 3);
  return results;
}
```

### Rate Limiting e Segurança

```typescript
// src/lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, '10 s'), // 10 requisições por 10 segundos
  analytics: true,
});
```

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! 🎉

### Como Contribuir

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'feat: Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Convenção de Commits

Seguimos o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: adiciona nova funcionalidade
fix: corrige um bug
docs: atualiza documentação
style: mudanças de formatação
refactor: refatoração de código
test: adiciona ou corrige testes
chore: mudanças em ferramentas/config
```

### Template de Pull Request

```markdown
## Descrição
Descreva brevemente as mudanças propostas.

## Tipo de Mudança
- [ ] Bug fix
- [ ] Nova feature
- [ ] Breaking change
- [ ] Documentação

## Como Testar
1. Passo 1
2. Passo 2
3. ...

## Checklist
- [ ] Código segue o style guide do projeto
- [ ] Testes adicionados/atualizados
- [ ] Documentação atualizada
- [ ] Sem credenciais expostas
- [ ] Build passa sem erros
- [ ] Lint passa sem warnings
```

### Código de Conduta

Este projeto adere ao [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). Ao participar, você concorda em manter este código.

---

## 🔒 Segurança

### Melhores Práticas

✅ **FAÇA:**
- Use variáveis de ambiente para secrets
- Implemente rate limiting em APIs públicas
- Valide e sanitize todas as entradas do usuário
- Use HTTPS em produção
- Mantenha dependências atualizadas
- Implemente logging e monitoring
- Use headers de segurança (CORS, CSP, etc.)

❌ **NÃO FAÇA:**
- Commitar credenciais ou API keys
- Expor informações sensíveis em logs
- Ignorar avisos de segurança do npm
- Usar pacotes desatualizados

### Reportar Vulnerabilidades

Se você descobrir uma vulnerabilidade de segurança, por favor **NÃO** abra uma issue pública.

Envie um email para: **security@thehub.example.com**

### Auditoria de Segurança

```bash
# Verificar vulnerabilidades
npm audit

# Corrigir automaticamente
npm audit fix

# Atualizar dependências
npm update

# Verificar pacotes desatualizados
npm outdated
```

---

## 📊 Monitoramento e Analytics

### Integração com Sentry

```typescript
// src/lib/sentry.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

### Google Analytics

```typescript
// src/lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID!, {
    page_path: url,
  });
};
```

---

## 🧪 Testes

### Configurar Jest (Futuro)

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
```

### Exemplo de Teste

```typescript
// src/components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

---

## 📚 Recursos Adicionais

### Documentação Oficial

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [OpenAI API Documentation](https://platform.openai.com/docs)

### Tutoriais e Guias

- [Next.js Learn Course](https://nextjs.org/learn)
- [Prisma Getting Started](https://www.prisma.io/docs/getting-started)
- [Building a Chat App with OpenAI](https://platform.openai.com/docs/guides/chat)

### Comunidade

- [Next.js Discord](https://discord.gg/nextjs)
- [Prisma Discord](https://discord.gg/prisma)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## 📈 Roadmap

- [x] Setup inicial do projeto
- [x] Interface de landing page
- [x] Configuração Tailwind CSS v4
- [x] Integração Prisma + PostgreSQL
- [ ] Sistema de autenticação (NextAuth.js)
- [ ] Interface de chat em tempo real
- [ ] Integração completa com OpenAI
- [ ] Sistema de RAG com Pinecone
- [ ] Dashboard de usuário
- [ ] Histórico de conversas
- [ ] Suporte a múltiplos modelos LLM
- [ ] API pública documentada
- [ ] Testes E2E com Playwright
- [ ] CI/CD com GitHub Actions
- [ ] Documentação técnica completa

---

## 📝 Changelog

### [1.0.0] - 2024-02-02

#### Adicionado
- Setup inicial do projeto com Next.js 16
- Configuração Tailwind CSS v4
- Integração Prisma
- Landing page com efeitos 3D
- Estrutura de componentes base

#### Em Progresso
- Sistema de chat
- Integração LLM
- Sistema de autenticação

---

## 📄 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para detalhes.

```
MIT License

Copyright (c) 2024 SHAN-ischad

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 👥 Contato

### Maintainer

**SHAN-ischad**
- GitHub: [@SHAN-ischad](https://github.com/SHAN-ischad)
- Email: shan@thehub.example.com

### Links do Projeto

- 🌐 **Website**: [https://thehub-nextjs.vercel.app](https://thehub-nextjs.vercel.app)
- 📦 **Repository**: [https://github.com/SHAN-ischad/TheHub.nextJs](https://github.com/SHAN-ischad/TheHub.nextJs)
- 🐛 **Issues**: [https://github.com/SHAN-ischad/TheHub.nextJs/issues](https://github.com/SHAN-ischad/TheHub.nextJs/issues)
- 📖 **Documentation**: [https://github.com/SHAN-ischad/TheHub.nextJs/wiki](https://github.com/SHAN-ischad/TheHub.nextJs/wiki)

---

## 🙏 Agradecimentos

Agradecimentos especiais a:

- [Vercel](https://vercel.com/) - Hospedagem e deploy
- [Next.js Team](https://nextjs.org/) - Framework incrível
- [Tailwind Labs](https://tailwindcss.com/) - CSS framework
- [Prisma Team](https://www.prisma.io/) - ORM moderno
- [OpenAI](https://openai.com/) - APIs de IA
- Toda a comunidade open source 💜

---

<div align="center">

### ⭐ Se este projeto foi útil, considere dar uma estrela!

**Feito com ❤️ por [SHAN-ischad](https://github.com/SHAN-ischad)**

[⬆ Voltar ao topo](#-oráculo-ia--the-hub)

</div>
