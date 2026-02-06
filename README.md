# Portal DACC

Portal oficial do **DACC** (Diretório Acadêmico de Ciência da Computação) do Unifeso.

## Stack

- React (componentes funcionais + Hooks)
- Tailwind CSS v4
- Lucide React
- Vite

## Estrutura

```
src/
├── config/           # Dados e constantes (BRAND, SURVIVAL_GUIDE, PROJECTS, PRODUCTS, MEMBERS, NAV_ITEMS)
├── components/
│   ├── views/        # HomeView, WikiView, ProjectsView, ShopView, MembersView
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Badge.jsx
│   ├── SectionHeader.jsx
│   ├── InteractiveTerminal.jsx
│   └── index.js
├── App.jsx
├── main.jsx
└── index.css
```

## Como rodar

```bash
npm install
npm run dev
```

Build: `npm run build` · Preview: `npm run preview`

## Identidade visual

- Fundo `#050507`, roxo `#3d004c`, dourado `#d4af37`
- Gradientes, glows e animações de entrada (fade-in, slide-in, zoom-in)
- Conteúdo em português
