<div align="center">

![The Hub](./public/thehubPurple.png)

# 🔮 Oráculo IA — The Hub

### *Plataforma Frontend para Assistente Inteligente com IA*

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.3-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)

[📦 Repositório](https://github.com/SHAN-ischad/TheHub.nextJs)

</div>

---

## 📋 Sobre o Projeto

**Oráculo IA (The Hub)** é uma plataforma frontend moderna construída com Next.js 16, projetada para ser a interface de interação com assistentes inteligentes alimentados por LLMs. O projeto oferece uma landing page com efeitos visuais 3D e está estruturado para futuras integrações com backends de IA.

---

## 🛠️ Stack Tecnológico

- **Next.js** 16.1.4 — Framework React com App Router
- **React** 19.2.3 — Biblioteca UI
- **TypeScript** — Tipagem estática
- **Tailwind CSS** v4 — Estilização
- **Prisma** — ORM (preparado para PostgreSQL)
- **Three.js** — Renderização 3D
- **@shadergradient/react** — Gradientes animados
- **Lucide React** — Ícones

---

## 🚀 Instalação Rápida

```bash
# Clone o repositório
git clone https://github.com/SHAN-ischad/TheHub.nextJs.git
cd TheHub.nextJs

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz:

```env
# Aplicação
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Oráculo IA - The Hub"

# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/oraculo_db"

# OpenAI (quando integrado)
OPENAI_API_KEY=sk-proj-xxxxx
OPENAI_MODEL=gpt-4o-mini
```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa ESLint |

---

## 📁 Estrutura do Projeto

```
TheHub.nextJs/
├── public/              # Assets estáticos
├── src/
│   ├── app/            # Next.js App Router
│   │   ├── page.tsx    # Página principal
│   │   └── layout.tsx  # Layout raiz
│   ├── components/     # Componentes React
│   └── lib/            # Utilitários
├── prisma/             # Schema do banco
├── next.config.ts      # Config Next.js
├── tailwind.config.ts  # Config Tailwind
└── package.json
```

---

## 🐳 Docker (Opcional)

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t thehub-nextjs .
docker run -p 3000:3000 thehub-nextjs
```

---

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório em [vercel.com](https://vercel.com)
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Opções

- **Netlify**
- **Railway**
- **AWS Amplify**

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie sua branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'feat: Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👥 Contato

**SHAN-ischad**

- GitHub: [@SHAN-ischad](https://github.com/SHAN-ischad)
- Repositório: [TheHub.nextJs](https://github.com/SHAN-ischad/TheHub.nextJs)

---

<div align="center">

**Feito com ❤️ usando Next.js**

[⬆ Voltar ao topo](#-oráculo-ia--the-hub)

</div>
