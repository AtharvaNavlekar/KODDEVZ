<div align="center">

<br/>

# KODDEVZ

### An elite, AI-powered software agency template & enterprise digital ecosystem.  
### Purpose-built for high-performance scale and cinematic UI/UX.

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-99.5%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge&logo=apache&logoColor=white)](LICENSE)

<br/>

> **KODDEVZ** is a state-of-the-art digital storefront designed for the next generation of software agencies. It combines a secure backend AI proxy, industrial-grade security headers, and an immersive Framer Motion frontend to deliver a 10x user experience out of the box.

<br/>

---

</div>

## Table of Contents

- [Overview](#-overview)
- [Project DNA](#-project-dna)
- [Implementation Status](#-implementation-status)
- [Feature Breakdown](#-feature-breakdown)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Stack](#running-the-stack)
- [Enterprise Quality Control](#-enterprise-quality-control)
- [Contributing](#-contributing)
- [License](#-license)

---

## Overview

In the modern web, aesthetics and security are not optional. **KODDEVZ** was engineered to solve the "Frontend Secret Leak" problem while providing a UI that rivals the world's top design studios (think Linear, Vercel, or Stripe).

Whether you are launching a new agency or upgrading an existing service, this platform provides the structural integrity and visual polish required to establish immediate market authority.

### What makes this project different?

| Aspect | Details |
|--------|---------|
| **AI-Safety First** | Implements a **Secure Node.js Proxy** to handle Gemini API requests, ensuring your keys never touch the client-side bundle. |
| **Cinematic UI/UX** | Powered by `motion/react` (Framer Motion) and Tailwind CSS 4 for lightweight, hardware-accelerated animations. |
| **Enterprise Standards** | Strict TypeScript mode, ESLint 9 (Flat Config), Prettier, and automated GitHub CI/CD. |
| **Modular Scalability** | A clean separation of concerns between Section components, Page views, and the Backend API layer. |

---

## Implementation Status

| Feature | Status | Notes |
|---------|--------|-------|
| Multi-page SPA routing | Implemented | React Router DOM 7 |
| Glassmorphic UI System | Implemented | Tailwind 4 + Backdrop Blur |
| Secure AI Proxy | Implemented | Express + Zod + Rate Limiting |
| Gemini AI Chat | Implemented | Context-aware prompting via Backend |
| Legal Framework | Implemented | Privacy, Terms, and Refund policies included |
| Automated CI/CD | Implemented | GitHub Actions with Build & Lint checks |
| Error Boundaries | Implemented | Global React Error Handling |
| Role-based Portals | **Roadmap** | Auth integration (Supabase/Clerk) pending |

---

## Feature Breakdown

### 🛡️ Secure AI Architecture
- **API Airlock**: Your Google Gemini API key is stored safely on the server.
- **Request Validation**: Strictly validates prompts using `zod` before sending them to the LLM.
- **Abuse Prevention**: Built-in rate limiting via `express-rate-limit` to prevent quota exhaustion.

### ✨ Premium Visual System
- **Hero & Bento Sections**: High-impact layouts designed to showcase services and portfolios with 10x clarity.
- **Dynamic Interactions**: Micro-animations on buttons, hover-states, and page transitions for a premium "app-like" feel.
- **Performance Optimized**: Built on Vite 6 for sub-second hot-reloading and highly optimized production builds.

### 📜 Automated Compliance
- **Legal Suite**: Professional boilerplate for Privacy Policy, Terms of Service, and Refund Policy.
- **SEO & Meta**: Pre-configured title tags and meta descriptions for search engine discoverability.

---

## Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Frontend** | [React 19](https://react.dev/) | Modern UI library |
| **Backend** | [Node.js / Express](https://expressjs.com/) | Secure API & AI Proxy layer |
| **Styling** | [Tailwind CSS 4](https://tailwindcss.com/) | Next-gen utility-first styling |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | Cinematic transitions & micro-interactions |
| **Validation** | [Zod](https://zod.dev/) | End-to-end schema validation |
| **Tools** | [Vite 6](https://vitejs.dev/) | Ultra-fast development environment |

---

## Project Architecture

```
KODDEVZ/
├── .github/          # CI/CD Workflows (GitHub Actions)
├── server/           # Secure Express Backend
│   └── index.ts      # API Entrypoint, Rate Limits, Gemini Proxy
├── src/              # React Frontend (Vite)
│   ├── components/   # Atomic UI (Layout, Sections, Common)
│   ├── pages/        # Route-level views (Home, About, Legal)
│   ├── lib/          # Utilities (cn, tailwind-merge)
│   └── App.tsx       # Routing Engine
├── package.json      # Dual-stack dependencies & scripts
└── eslint.config.mjs # ESLint 9 Flat Config
```

---

## Getting Started

### Prerequisites
- **Node.js**: >= 20.0.0 (Required for Vite 6/Tailwind 4)
- **npm**: >= 10.0.0

### Installation
1. **Clone the Repo**:
   ```bash
   git clone https://github.com/AtharvaNavlekar/KODDEVZ.git
   cd KODDEVZ
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory (refer to `.env.example`):
```env
# Backend API Key (Required)
GEMINI_API_KEY=your_key_here

# Configuration
PORT=8001
VITE_API_URL=http://localhost:8001/api
```

### Running the Stack
Launch both the **React Frontend** and **Express Backend** concurrently:
```bash
npm run dev:all
```
- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **API**: [http://localhost:8001](http://localhost:8001)

---

## Enterprise Quality Control
We maintain industrial-grade code quality via:
- **Linting**: `npm run lint` (ESLint 9 + Prettier)
- **Type Checking**: `npx tsc --noEmit`
- **CI Build**: Automatic verification on every push to `main`.

---

## License
This project is licensed under the **Apache License 2.0**.

---

<div align="center">

<br/>

**If this project elevates your workflow, give it a ⭐ on GitHub!**

<br/>

Built by **Atharva Deepak Navlekar**

<br/>

[Report a Bug](https://github.com/AtharvaNavlekar/KODDEVZ/issues/new) · [Request a Feature](https://github.com/AtharvaNavlekar/KODDEVZ/issues/new) · [View the Code](https://github.com/AtharvaNavlekar/KODDEVZ)

</div>
