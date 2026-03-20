# 🚀 KODDEVZ - Your AI-Powered Software Agency

<div align="center">
<img width="1200" height="auto" alt="KODDEVZ Banner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## ✨ The Vision

KODDEVZ is an elite enterprise web development solution designed for modern businesses. We bridge the gap between abstract ideas and production-ready applications by leveraging cutting-edge AI-driven architecture and premium design principles.

---

## 🛡️ Enterprise Security & Architecture

This project has undergone a comprehensive security audit to ensure industrial-grade protection:

### 1. Secure Gemini Proxy

To prevent API key leakage (a common vulnerability in frontend-only apps), all AI interactions are routed through a **Secure Express Backend Proxy**.

- **Backend Isolation**: Sensitive keys never touch the client-side bundle.
- **Rate Limiting**: Implemented `express-rate-limit` to prevent quota abuse.
- **Input Validation**: Uses `zod` to strictly validate and sanitize prompts before processing.

### 2. High-Performance Tech Stack

- **Frontend**: React 19 + Vite + Tailwind CSS 4 (Modern Dark Mode / Glassmorphism).
- **Backend**: Node.js + Express (Strictly typed).
- **Animations**: Framer Motion for cinematic transitions.
- **Validation**: Zod (End-to-end type safety).
- **Quality**: ESLint + Prettier (Professional code standards).

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0

### Local Development

1. **Clone & Install**:

   ```bash
   npm install
   ```
2. **Environment Setup**:
   Create a `.env` file in the `server/` directory and add your key:

   ```env
   GEMINI_API_KEY=your_key_here
   VITE_API_URL=http://localhost:8001/api
   PORT=8001
   ```
3. **Run the Full Stack**:
   Use our custom concurrent script to boot the frontend and backend together:

   ```bash
   npm run dev:all
   ```

   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend Proxy**: [http://localhost:8001](http://localhost:8001)

---

## 🧪 CI/CD & Quality Control

We maintain a 10x development standard with automated pipelines:

- **GitHub Actions**: Every push to `main` is automatically built and linted via `.github/workflows/ci.yml`.
- **Linting**: Run `npm run lint` to perform strict TypeScript checks.
- **Formatting**: Run `npm run format` to auto-align code styles with Prettier.

---

## 📂 Project Structure

```text
├── .github/          # CI/CD Workflows
├── server/           # Secure Express Backend
│   └── src/          # API Handlers & AI logic
├── src/              # React Frontend
│   ├── components/   # Atomic & Section UI
│   ├── pages/        # Route-level views
│   └── lib/          # Global utils (cn, etc.)
├── package.json      # Dependencies & Scripts
└── tsconfig.json     # Strict Mode configuration
```

---

## 🚀 Deployment

This project is configured for seamless deployment to platforms like Vercel (Frontend) and Render/Railway (Backend). Ensure your `VITE_API_URL` environment variable points to your production backend URL.
