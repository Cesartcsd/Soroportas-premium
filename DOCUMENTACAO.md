# 📖 Documentação do Projeto - Soroportas

> **Última atualização:** 20 de Janeiro de 2026

---

## 📋 Sumário

- [Visão Geral](#-visão-geral)
- [Stack Tecnológica](#️-stack-tecnológica)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Componentes](#-componentes)
- [Design System](#-design-system)
- [Conteúdo e Constantes](#-conteúdo-e-constantes)
- [Como Executar](#-como-executar)
- [Arquitetura e Fluxo](#-arquitetura-e-fluxo)
- [Integrações](#-integrações)
- [Considerações Técnicas](#-considerações-técnicas)

---

## 🎯 Visão Geral

### O que é o projeto?

O **Soroportas** é um **site institucional/landing page** desenvolvido para uma empresa especializada em **portas de alto padrão**. O objetivo principal do site é:

- Apresentar os produtos e coleções de portas
- Destacar os diferenciais e qualidade da marca
- Capturar leads e converter visitantes em contatos via **WhatsApp**

### Público-Alvo

- Arquitetos e designers de interiores
- Construtoras e incorporadoras
- Proprietários de imóveis de alto padrão
- Pessoas buscando portas premium para reforma ou construção

### Proposta de Valor

*"A porta certa muda o ambiente inteiro."*

Portas de alto padrão com acabamento preciso e atendimento que ajuda o cliente a escolher sem erro.

---

## 🛠️ Stack Tecnológica

### Dependências Principais

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **React** | ^19.2.3 | Biblioteca de UI para construção de interfaces |
| **React DOM** | ^19.2.3 | Renderização do React no browser |
| **TypeScript** | ~5.8.2 | Tipagem estática para JavaScript |
| **Vite** | ^6.2.0 | Build tool e servidor de desenvolvimento |
| **Framer Motion** | 11.16.0 | Biblioteca de animações declarativas |
| **Lucide React** | ^0.562.0 | Biblioteca de ícones SVG |

### DevDependencies

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **@vitejs/plugin-react** | ^5.0.0 | Plugin do Vite para suporte ao React |
| **@types/node** | ^22.14.0 | Types do Node.js para TypeScript |

### CDN/Externos

| Recurso | URL | Finalidade |
|---------|-----|------------|
| **TailwindCSS** | cdn.tailwindcss.com | Framework CSS utilitário |
| **Google Fonts** | fonts.googleapis.com | Fontes Playfair Display e Inter |
| **ESM.sh** | esm.sh | CDN para módulos ES (React, Framer Motion, Lucide) |

---

## 📁 Estrutura de Arquivos

```
soroportas---portas-de-alto-padrão/
│
├── 📄 index.html              # HTML principal - ponto de entrada
├── 📄 index.tsx               # Entry point do React
├── 📄 App.tsx                 # Componente raiz da aplicação
├── 📄 constants.ts            # Constantes de conteúdo (textos, URLs, dados)
├── 📄 types.ts                # Interfaces TypeScript
├── 📄 vite.config.ts          # Configuração do Vite
├── 📄 tsconfig.json           # Configuração do TypeScript
├── 📄 package.json            # Dependências e scripts
├── 📄 package-lock.json       # Lock file das dependências
├── 📄 .env.local              # Variáveis de ambiente (API Key Gemini)
├── 📄 .gitignore              # Arquivos ignorados pelo Git
├── 📄 README.md               # Instruções básicas do projeto
│
├── 📂 components/             # Componentes React
│   ├── 📄 Navbar.tsx          # Barra de navegação
│   ├── 📄 Hero.tsx            # Seção hero principal
│   ├── 📄 Collections.tsx     # Seção de coleções de portas
│   ├── 📄 Features.tsx        # Seção de diferenciais
│   ├── 📄 Gallery.tsx         # Galeria de projetos
│   ├── 📄 Footer.tsx          # Rodapé
│   └── 📄 WhatsAppButton.tsx  # Botão flutuante do WhatsApp
│
└── 📂 node_modules/           # Dependências instaladas
```

---

## 🧩 Componentes

### 1. **Navbar** (`components/Navbar.tsx`)

**Descrição:** Barra de navegação fixa no topo com comportamento responsivo.

**Funcionalidades:**
- Muda de transparente para branco com blur ao rolar a página
- Menu hambúrguer para dispositivos móveis
- Links âncora para seções do site
- Botão "Fale Conosco" que direciona para WhatsApp

**Estados:**
- `isScrolled`: Controla a aparência baseada na posição do scroll
- `isMobileMenuOpen`: Controla exibição do menu mobile

**Links de Navegação:**
- Modelos → `#collections`
- Qualidade → `#features`
- Ambientes → `#gallery`

---

### 2. **Hero** (`components/Hero.tsx`)

**Descrição:** Seção principal (above the fold) com imagem de fundo e call-to-action.

**Funcionalidades:**
- Imagem de fundo com efeito de zoom suave na entrada
- Overlay escuro para legibilidade
- Headline e subheadline animados
- Botão CTA principal para WhatsApp

**Animações (Framer Motion):**
- Imagem: scale de 1.1 para 1 (2s)
- Textos: fade-in + slide-up com delays escalonados

**Conteúdo:**
- Headline: "A porta certa muda o ambiente inteiro."
- CTA: "Falar com um especialista"

---

### 3. **Collections** (`components/Collections.tsx`)

**Descrição:** Apresenta as 3 linhas de produtos da empresa.

**Coleções:**

| ID | Título | Categoria | Descrição |
|----|--------|-----------|-----------|
| `entrance` | Entrada Principal | Primeira Impressão | Portas pivotantes e maciças |
| `interior` | Interiores & Privacidade | Conforto | Isolamento acústico |
| `social` | Integração de Ambientes | Amplitude | Sistemas de correr e vidro |

**Funcionalidades:**
- Grid responsivo (1 coluna mobile, 3 colunas desktop)
- Efeito de zoom hover nas imagens
- Link para consultar disponibilidade via WhatsApp
- Animação de entrada escalonada

---

### 4. **Features** (`components/Features.tsx`)

**Descrição:** Destaca os 4 diferenciais da marca.

**Diferenciais:**

| ID | Título | Ícone | Descrição |
|----|--------|-------|-----------|
| `material` | Madeira Nobre Selecionada | TreeDeciduous | Lotes certificados e secos em estufa |
| `finish` | Acabamento de Precisão | Gem | Vernizes de alta performance |
| `installation` | Vedação e Silêncio | VolumeX | Borrachas amortecedoras |
| `consultancy` | Curadoria Técnica | ClipboardCheck | Análise técnica de projetos |

**Funcionalidades:**
- Grid responsivo (1-2-4 colunas)
- Ícones em círculos com fundo verde claro
- Efeito hover com sombra suave

---

### 5. **Gallery** (`components/Gallery.tsx`)

**Descrição:** Galeria de fotos de projetos reais.

**Funcionalidades:**
- Grid assimétrico (imagens maiores alternadas)
- 4 imagens do Unsplash
- Efeito de zoom hover nas imagens
- Overlay escuro que clareia no hover
- Link CTA: "Quero um resultado assim"

**Layout do Grid:**
- Imagens 1 e 4: `col-span-2` (largura dupla, aspect 21:9)
- Imagens 2 e 3: largura normal (aspect 4:3)

---

### 6. **Footer** (`components/Footer.tsx`)

**Descrição:** Rodapé com informações de contato e navegação.

**Seções:**
1. **Brand** - Logo, nome e descrição da empresa
2. **Navegação** - Links para seções do site
3. **Atendimento** - Horários e informações do showroom
4. **Botão WhatsApp** - CTA para iniciar conversa

**Informações de Horário:**
- Segunda a Sexta: 09h às 18h
- Sábado: 09h às 13h

---

### 7. **WhatsAppButton** (`components/WhatsAppButton.tsx`)

**Descrição:** Botão flutuante fixo no canto inferior direito.

**Funcionalidades:**
- Sempre visível durante navegação
- Texto oculto em mobile, visível em desktop
- Indicador de notificação pulsante (bolinha vermelha)
- Efeito de scale no hover
- Abre WhatsApp em nova aba

---

## 🎨 Design System

### Paleta de Cores

```css
/* Cores da Marca */
--brand-dark: #064E3B;     /* Emerald 900 - Verde escuro principal */
--brand-primary: #059669;  /* Emerald 600 - Verde primário */
--brand-light: #ECFDF5;    /* Emerald 50 - Verde claro (backgrounds) */

/* Escala de Cinzas (Tailwind defaults) */
--gray-50 a --gray-900
```

### Tipografia

| Uso | Fonte | Pesos |
|-----|-------|-------|
| **Títulos e Destaques** | Playfair Display (serif) | 400, 600, 400i |
| **Corpo e UI** | Inter (sans-serif) | 300, 400, 500, 600 |

**Configuração no Tailwind:**
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif'],
  serif: ['Playfair Display', 'serif'],
}
```

### Estilos de Botões

| Tipo | Classe Base | Uso |
|------|-------------|-----|
| **Primário (Light)** | `bg-white text-brand-dark` | CTAs em backgrounds escuros |
| **Primário (Dark)** | `bg-brand-dark text-white` | CTAs em backgrounds claros |
| **Link** | `text-brand-dark border-b` | Links inline com sublinhado |

### Animações

**Biblioteca:** Framer Motion

| Efeito | Propriedades | Duração |
|--------|--------------|---------|
| **Fade In + Slide Up** | opacity: 0→1, y: 20→0 | 0.6-0.8s |
| **Zoom In** | scale: 1.1→1 | 2s |
| **Hover Scale** | scale: 1→1.05 | 1s |

---

## 📝 Conteúdo e Constantes

### Arquivo: `constants.ts`

```typescript
// Configurações da Marca
BRAND_NAME = "Soroportas"
WHATSAPP_NUMBER = "5511999999999"
WHATSAPP_LINK = "https://wa.me/..."

// Conteúdo do Hero
HERO_CONTENT = {
  headline: "A porta certa muda o ambiente inteiro.",
  subheadline: "Portas de alto padrão com acabamento preciso...",
  cta: "Falar com um especialista"
}

// Arrays de dados
COLLECTIONS: CollectionItem[]  // 3 itens
FEATURES: FeatureItem[]        // 4 itens
GALLERY_IMAGES: string[]       // 4 URLs
```

### Arquivo: `types.ts`

```typescript
interface CollectionItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

interface Testimonial {
  id: string;
  text: string;
  author: string;
  location: string;
}
```

---

## ▶️ Como Executar

### Pré-requisitos

- Node.js instalado (versão recomendada: 18+)
- npm ou yarn

### Instalação

```bash
# 1. Navegar até a pasta do projeto
cd soroportas---portas-de-alto-padrão

# 2. Instalar dependências
npm install

# 3. Configurar variáveis de ambiente (se necessário)
# Editar arquivo .env.local com sua GEMINI_API_KEY

# 4. Iniciar servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento (Vite) |
| `npm run build` | Gera build de produção |
| `npm run preview` | Preview do build de produção |

### Acessar o Site

Após executar `npm run dev`, acesse:
```
http://localhost:5173
```

---

## 🏗️ Arquitetura e Fluxo

### Fluxo de Renderização

```
index.html
    └── <div id="root">
            └── index.tsx (ReactDOM.createRoot)
                    └── App.tsx
                            ├── Navbar
                            ├── <main>
                            │     ├── Hero
                            │     ├── Collections
                            │     ├── Features
                            │     └── Gallery
                            ├── Footer
                            └── WhatsAppButton
```

### Padrão de Componentes

- **Functional Components** com TypeScript
- **React.FC** como tipo de componente
- **Props tipadas** via interfaces em `types.ts`
- **Constantes centralizadas** em `constants.ts`

### Gerenciamento de Estado

- **useState** para estados locais (scroll, menu mobile)
- **useEffect** para side effects (scroll listener)
- Sem gerenciamento de estado global (não necessário)

---

## 🔗 Integrações

### WhatsApp Business

**Implementação:** Deep link com mensagem pré-definida

```typescript
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá,%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20as%20portas.`;
```

**Pontos de contato:**
1. Navbar - botão "Fale Conosco"
2. Hero - CTA principal
3. Collections - link em cada coleção
4. Gallery - link "Quero um resultado assim"
5. Footer - botão grande
6. WhatsAppButton - botão flutuante

### Imagens (Unsplash)

Todas as imagens são carregadas via CDN do Unsplash:

| Uso | URL Base |
|-----|----------|
| Hero | images.unsplash.com/photo-1600585154340... |
| Coleções | images.unsplash.com/photo-1517646331032... |
| Galeria | images.unsplash.com/photo-1620626012053... |

**Parâmetros de otimização:**
- `q=80` - Qualidade 80%
- `w=2070` - Largura máxima
- `auto=format` - Formato automático
- `fit=crop` - Recorte adaptativo

### Google Fonts

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
```

---

## ⚙️ Considerações Técnicas

### SEO

- ✅ Meta tag `description` configurada
- ✅ Tag `<title>` descritiva
- ✅ Atributo `lang="pt-BR"` no HTML
- ✅ Alt text nas imagens
- ✅ Estrutura semântica (header, main, footer, section)

### Performance

- ⚠️ Imagens carregadas de CDN externo (Unsplash)
- ⚠️ TailwindCSS via CDN (considerar build local para produção)
- ✅ Lazy loading implícito via viewport animations
- ✅ Fonts com display=swap

### Acessibilidade

- ✅ `aria-label` no botão do WhatsApp
- ✅ Contraste adequado nas cores
- ✅ Navegação por teclado funcional
- ⚠️ Pode melhorar: adicionar mais aria-labels e roles

### Responsividade

- ✅ Mobile-first approach
- ✅ Breakpoints: `sm`, `md`, `lg`
- ✅ Menu hamburger para mobile
- ✅ Grids adaptativos

### Possíveis Melhorias Futuras

1. **Lazy loading de imagens** - Implementar loading="lazy"
2. **Build do Tailwind** - Remover CDN e fazer build local
3. **Imagens locais ou otimizadas** - Usar serviço de otimização
4. **Formulário de contato** - Alternativa ao WhatsApp
5. **Analytics** - Integrar Google Analytics ou similar
6. **Página de Produto** - Detalhes individuais de cada porta
7. **Blog/Conteúdo** - SEO orgânico com artigos

---

## 📞 Contato e Suporte

Para dúvidas sobre o projeto ou suporte técnico, entre em contato através do WhatsApp configurado no sistema.

---

*Documento gerado automaticamente com base na análise do código-fonte.*
