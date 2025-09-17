# Moramo Brasil - Website Institucional

Um website elegante e sofisticado para a marca Moramo Brasil, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🎨 Sobre o Projeto

Este website institucional serve como portal para duas linhas de produtos:
- **Linha de Móveis**: Móveis elegantes e funcionais
- **Linha de Travesseiros**: Travesseiros premium para conforto ideal

### Características Principais

- ✨ Design minimalista e elegante
- 🎯 Tipografia sofisticada (Playfair Display + Inter)
- 🌈 Paleta de cores neutras com acentos de marca
- 📱 Design responsivo para mobile e desktop
- ⚡ Animações suaves com Framer Motion
- 🔗 Integração com WhatsApp para vendas
- 🛒 Link para e-commerce existente

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css          # Estilos globais e variáveis CSS
│   ├── layout.tsx           # Layout raiz da aplicação
│   ├── page.tsx             # Página inicial (gateway)
│   ├── mobiliario/
│   │   └── page.tsx         # Página da linha de móveis
│   └── travesseiros/
│       └── page.tsx         # Página da linha de travesseiros
└── components/
    ├── Navigation.tsx       # Componente de navegação
    └── ProductCard.tsx      # Card de produto reutilizável
```

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
   ```bash
   git clone [url-do-repositorio]
   cd moramo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse o projeto**
   ```
   http://localhost:3000
   ```

## 📱 Páginas e Funcionalidades

### 🏠 Página Inicial (Gateway)
- Layout fullscreen com fundo limpo
- Seletor central com duas opções principais
- Efeitos hover sutis e elegantes
- Tipografia serif para títulos

### 🪑 Página de Móveis (`/mobiliario`)
- Introdução à linha de produtos
- Grid com produtos em destaque
- Botão CTA: "Acessar o E-commerce"
- Design focado em produtos

### 🛏️ Página de Travesseiros (`/travesseiros`)
- Texto introdutório sobre a nova linha
- Grid com previews de produtos
- Botão CTA: "Contatar Equipe de Vendas" (WhatsApp)

## 🎨 Guia de Estilo

### Cores
- **Off-white**: `#fafafa`
- **Sand**: `#f5f5dc`
- **Light gray**: `#f8f8f8`
- **Lavender**: `#e6e6fa`
- **Mint green**: `#f0f8f0`
- **Text primary**: `#2c2c2c`
- **Text secondary**: `#6b7280`
- **Accent (Furniture)**: `#8b5cf6`
- **Accent (Pillows)**: `#10b981`

### Tipografia
- **Títulos**: Playfair Display (serif)
- **Corpo**: Inter (sans-serif)

### Animações
- Transições suaves com `cubic-bezier(0.4, 0, 0.2, 1)`
- Efeitos hover: scale-up, lift, shadow
- Animações de entrada com Framer Motion

## ⚙️ Configurações Personalizáveis

### WhatsApp Integration
Edite o número de telefone em `src/app/travesseiros/page.tsx`:
```typescript
const phoneNumber = '5511999999999' // Substitua pelo número real
```

### E-commerce Link
Edite o link do e-commerce em `src/app/mobiliario/page.tsx`:
```typescript
href="https://moramo.com.br" // Substitua pela URL real
```

### Produtos
Substitua os dados mockados pelos produtos reais em:
- `src/app/mobiliario/page.tsx` (array `featuredProducts`)
- `src/app/travesseiros/page.tsx` (array `pillowProducts`)

## 📦 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build de produção
npm run start        # Servidor de produção
npm run lint         # Verificação de linting
```

## 🌐 Deploy

O projeto está configurado para deploy em:
- **Vercel** (recomendado)
- **Netlify**
- **AWS Amplify**

### Deploy na Vercel

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push

## 📄 Licença

Este projeto é propriedade da Moramo Brasil.

## 🤝 Contribuição

Para contribuições, entre em contato com a equipe de desenvolvimento da Moramo Brasil.

---

**Desenvolvido com ❤️ para Moramo Brasil**
