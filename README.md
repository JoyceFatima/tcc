# Meu Negócio - Dashboard de Análise de Localização

Uma aplicação Next.js para análise inteligente de localização de negócios.

## 🚀 Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📦 Instalação

\`\`\`bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
\`\`\`

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa linting
- `npm run lint:fix` - Corrige problemas de linting
- `npm run type-check` - Verifica tipos TypeScript
- `npm run format` - Formata código com Prettier
- `npm run clean` - Limpa arquivos de build

## 📁 Estrutura do Projeto

\`\`\`
├── app/                    # App Router (Next.js 15)
├── components/
│   ├── atoms/             # Componentes básicos
│   ├── molecules/         # Componentes compostos
│   ├── organisms/         # Componentes complexos
│   ├── templates/         # Templates de layout
│   ├── pages/            # Páginas completas
│   └── ui/               # Componentes shadcn/ui
├── lib/                   # Utilitários
└── public/               # Arquivos estáticos
\`\`\`

## 🎯 Funcionalidades

- ✅ Login e autenticação
- ✅ Cadastro de dados do negócio
- ✅ Dashboard com análise de localização
- ✅ Gestão de conta e perfil
- ✅ Sistema de upgrade de planos
- ✅ Gerenciamento de cobrança
- ✅ Design responsivo

## 🔧 Configuração

O projeto está configurado com:

- **ESLint** para linting
- **Prettier** para formatação
- **TypeScript** para tipagem
- **Tailwind CSS** para estilização
- **shadcn/ui** para componentes

## 📱 Páginas

- `/login` - Página de login
- `/business-setup` - Cadastro do negócio
- `/dashboard` - Dashboard principal
- `/account` - Gerenciamento de conta
- `/upgrade` - Upgrade de planos
- `/billing` - Cobrança e faturas

## 🎨 Design System

Baseado no shadcn/ui com:
- Atomic Design (atoms, molecules, organisms)
- Componentes reutilizáveis
- Tema consistente
- Responsividade mobile-first
