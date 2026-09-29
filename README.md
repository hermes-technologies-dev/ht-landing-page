# Hermes Technologies — Landing Page

Landing page institucional da **HT — Hermes Technologies**, desenvolvida com **Next.js**, com foco em apresentar a empresa, seu posicionamento, áreas de atuação, projetos e formas de contato.

> **Ideias que ganham forma.**

A HT — Hermes Technologies atua na criação e desenvolvimento de soluções digitais, combinando **tecnologia, inteligência, criatividade e execução** para transformar ideias, necessidades e problemas em soluções reais.

---

## 🚀 Sobre o projeto

Esta aplicação é a landing page institucional da **Hermes Technologies**.

O projeto foi desenvolvido utilizando o ecossistema **React + Next.js**, com uma arquitetura baseada em componentes reutilizáveis, estilização com **Tailwind CSS** e componentes auxiliares do ecossistema **shadcn/ui**.

A landing page tem como objetivos:

- Apresentar a Hermes Technologies;
- Comunicar o posicionamento da empresa;
- Apresentar suas principais áreas de atuação;
- Demonstrar projetos e experimentos desenvolvidos pela HT;
- Apresentar o processo de trabalho;
- Facilitar o contato com potenciais clientes e parceiros;
- Estabelecer uma presença institucional para a marca.

A HT trabalha com criação, desenvolvimento e inteligência de software, podendo atuar em sistemas, aplicativos, plataformas, automações, integrações, inteligência artificial, produtos digitais e pesquisa e inovação.

---

## 🧩 Tecnologias

### Core

- **Next.js 16.3.6**
- **React 19.2.8**
- **JavaScript**
- **HTML5**
- **CSS3**

### Estilização

- **Tailwind CSS 4.3.3**
- **PostCSS**
- **tw-animate-css**
- **CSS Modules**

### Componentes e UI

- **shadcn**
- **Base UI**
- **class-variance-authority**
- **cn**

### Interações

- **Lucide React**
- **Embla Carousel React**

### Qualidade de código

- **ESLint 9**
- **eslint-config-next**

---

## 📦 Dependências principais

As principais dependências utilizadas atualmente no projeto são:

| Tecnologia | Versão |
|---|---:|
| Next.js | `16.3.6` |
| React | `19.2.8` |
| React DOM | `19.2.8` |
| Tailwind CSS | `4.3.3` |
| @tailwindcss/postcss | `4.3.3` |
| shadcn | `4.21.0` |
| Base UI | `1.8.0` |
| Lucide React | `1.47.0` |
| Embla Carousel React | `8.6.0` |
| ESLint | `9` |

As versões podem ser atualizadas conforme a evolução do projeto.

---

## 📁 Estrutura do projeto

A aplicação utiliza uma organização baseada em **App Router** e componentes separados por responsabilidade.

```text
.
├── public/
│   ├── images/
│   ├── icons/
│   └── ...
│
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── ...
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── header/
│   │   │   ├── footer/
│   │   │   └── ...
│   │   │
│   │   ├── sections/
│   │   │   ├── hero/
│   │   │   ├── solutions/
│   │   │   ├── projects/
│   │   │   ├── process/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   └── ...
│   │   │
│   │   └── ui/
│   │
│   ├── data/
│   │   └── landing-page.json
│   │
│   └── styles/
│       └── ...
│
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.mjs
└── README.md