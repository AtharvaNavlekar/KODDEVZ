<div align="center">

<br/>

# Real Estate Mumbai

### A premium, full-stack real estate exploration & management platform  
### purpose-built for the Mumbai property market.

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-99.5%25-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-latest-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache_2.0-D22128?style=for-the-badge&logo=apache&logoColor=white)](LICENSE)

<br/>

> **Real Estate Mumbai** is a modern, feature-rich property platform that brings together intelligent search, real-time market analytics, immersive neighborhood guides, and dedicated portals for buyers, sellers, and agents — all wrapped in a best-in-class animated UI.

<br/>

---

</div>

## Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Feature Breakdown](#-feature-breakdown)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the App](#running-the-app)
  - [Building for Production](#building-for-production)
- [Application Pages & Usage Guide](#-application-pages--usage-guide)
- [Key Components](#-key-components)
- [Configuration Files](#-configuration-files)
- [Contributing](#-contributing)
- [Coding Standards](#-coding-standards)
- [Roadmap](#-roadmap)
- [License](#-license)
- [Credits & Acknowledgements](#-credits--acknowledgements)

---

## Overview

Mumbai's real estate market is one of the most dynamic and complex in the world — spanning everything from ultra-luxury sea-facing penthouses in South Mumbai, to high-demand commercial corridors in BKC, to affordable residential townships in Navi Mumbai.

**Real Estate Mumbai** was built to bring clarity, intelligence, and elegance to this market. Whether you're a first-time buyer exploring neighborhoods, an HNI investor tracking luxury inventory, or a registered agent managing a portfolio of active listings, this platform gives you the right tools at the right moment.

### What makes this project different?

| Aspect | Details |
|--------|---------|
| **Mumbai-first** | Data, neighborhoods, districts, and pricing benchmarks are all tailored specifically to the Mumbai Metropolitan Region (MMR) |
| **AI-assisted search** | Powered by the Gemini API, the Smart Search understands natural language queries like *"3 BHK in Bandra under ₹3.5 Cr with a sea view"* |
| **Role-based experience** | Distinct portals for Buyers, Property Owners, and Agents with purpose-built dashboards |
| **Production-grade UI** | Framer Motion animations, full mobile responsiveness, and a design system built on Tailwind CSS |
| **TypeScript-first** | 99.5% of the codebase is TypeScript, ensuring type safety, maintainability, and IDE confidence |

---

## Live Demo

> _Deployment coming soon. To run locally, follow the [Getting Started](#-getting-started) guide below._

---

## Implementation Status

> [!IMPORTANT]
> This project is a **premium UI template and starter kit**, not a production SaaS. The table below clearly distinguishes what is fully implemented in the current codebase vs. what requires backend integration.

| Feature | Status | Notes |
|---------|--------|-------|
| Multi-page SPA routing | Implemented | React Router DOM |
| Luxury animated UI | Implemented | Framer Motion, Tailwind |
| Property listing cards | Implemented | Dynamic indexing via `westernLineMarketData.json` |
| Neighborhood guides | Implemented | Hyper-local dynamic routing and Recharts analytics |
| Market analytics charts | Implemented | Interactive Recharts dashboard with tooltips |
| Smart Search (AI query parsing) | Implemented | Gemini API via server-side proxy |
| Global Favorites System | Implemented | Persistent LocalStorage Context with Portfolio Analytics |
| Completely Air-Gapped Admin Portal | Implemented | Sovereign Vite React app (`/admin-portal`) with Alpine White styling |
| User authentication (UI) | Implemented | Form + localStorage session |
| User auth (real backend) | **Roadmap** | Needs Supabase Auth / Clerk |
| Real property database | **Roadmap** | Replace local JSON with REST API |
| Enquiry inbox / messaging | **Roadmap** | UI only, no delivery system |
| PWA (offline support) | Implemented | Service worker + manifest.json |
| Error boundaries | Implemented | All routes protected |

See [`CUSTOMIZATION.md`](CUSTOMIZATION.md) for a complete guide on connecting a real backend.

---

## Feature Breakdown

### Smart Search & AI Advisory
- Natural language property search powered by the **Google Gemini API**
- Describe what you want in plain language — the assistant understands area names, BHK sizes, price ranges, amenities, and lifestyle preferences
- Receive curated property recommendations, market comparisons, and investment guidance in real time
- Conversational follow-up: ask clarifying questions and refine results dynamically

### Property Listings
- Richly detailed property cards featuring price, BHK configuration, area in sq. ft., floor, and amenities
- Listings span: **Residential Apartments, Luxury Penthouses, Sea-facing Villas, Independent Bungalows, New Launch Projects, and Commercial Spaces**
- Filter and sort by location, price band, property type, possession status, and developer
- Shortlist and save favourite properties to a personal wishlist

### Neighbourhood Insights
- Deep-dive guides for Mumbai's most sought-after micro-markets: South Mumbai, Bandra West, Juhu, Powai, BKC, Andheri, Thane, Navi Mumbai, and more
- Each guide covers: livability score, connectivity (road, rail, metro), social infrastructure (schools, hospitals, malls), typical price per sq. ft., and investment outlook
- Interactive maps showing points of interest, under-construction projects, and recent transactions

### Market Analytics & Rates
- Interactive charts (built with **Recharts**) visualizing property price trends across Mumbai districts
- Historical rate data presented as line charts and bar comparisons
- Metrics include: average price per sq. ft., YoY appreciation, inventory count, days-on-market average, and new supply pipeline
- Downloadable data snapshots for research and investment analysis

### Global Favorites & Portfolio Analytics
- **Persistent Shortlists:** One-click save functionality globally integrated via Context API and HTML5 LocalStorage.
- **Portfolio Analytics Dashboard:** The `/favorites` route automatically calculates the integer Total Value and Average Price of all saved real estate assets using a custom `parsePriceToCrores()` utility.
- **Dynamic Header Notifier:** Smart badge indicators tracking active portfolio items.

### Institutional Market Rates Dashboard
- **Immersive Dark Hero:** High-contrast `bg-v-black` hero section featuring structural grid-lines and screen-blended glowing orbs.
- **Interactive Recharts Tooltips:** Custom React tooltips rendering sharp, dark-glass pills with bright emerald mono-font price tags over 5-year growth charts.
- **Asymmetrical Demographics Grid:** Massive, typography-driven impact grids styling numbers aggressively alongside background watermarks.

### Air-Gapped Owner Admin Portal
- **Sovereign Application:** A completely separate React Vite application (`/admin-portal`) ensuring absolute security and encapsulation from customer crossovers.
- **Premium "Alpine White" Aesthetic:** A bright, luxurious light mode featuring frosty white glass panels (`backdrop-blur-2xl`), subtle gray background depths, and staggered Framer Motion spring physics.
- **Operational Command Center:** A massive central grid utilizing Recharts for an immersive dual-axis area chart matching Network Valuation against Lead Volume trajectories over 12 months.
- **Map-First Spacial Discovery:** The Master Inventory utilizes a 50/50 split-pane rendering dynamic property node maps directly beside granular 10-column data grids.
- **Tactical CRM War Room (`Leads.tsx`):** A neural engine analyzing high-net-worth individual acquisition flow, featuring AI Analysis Matrices for 'Conversion Probability' and 'Flight Risk Assessment', along with full-bleed target asset imagery.

### Settings Page
- Account preferences: name, contact info, profile photo, and pronouns
- Notification controls: email alerts, push notifications, price drop alerts
- Privacy & security settings: two-factor authentication toggle, session management
- Accessibility options and theme preferences

---

## Tech Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Framework** | [React 19](https://react.dev/) | Component-based UI architecture |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe development across the entire codebase |
| **Build Tool** | [Vite](https://vitejs.dev/) | Lightning-fast HMR development server and optimized production builds |
| **Styling** | [Tailwind CSS 4.x](https://tailwindcss.com/) | Utility-first CSS with a consistent design system |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) (`motion/react`) | Declarative page transitions, scroll animations, and micro-interactions |
| **Icons** | [Lucide React](https://lucide.dev/) | Consistent, accessible SVG icon system |
| **Charts** | [Recharts](https://recharts.org/) | Composable, responsive market analytics charts |
| **Routing** | [React Router DOM](https://reactrouter.com/) | Client-side SPA navigation |
| **AI** | [Google Gemini API](https://ai.google.dev/) | Natural language property search and conversational assistance |
| **Linting** | ESLint + TypeScript ESLint | Code quality enforcement |
| **Package Mgr** | npm | Dependency management |

---

## Project Architecture

```
Real-Estate-Mumbai/
│
├── public/                     # Static assets served as-is
│   └── ...                     # Favicons, OG images, robots.txt
│
├── src/
│   ├── components/             # Shared, reusable UI components
│   │   ├── common/             # Generic components (Button, Card, Modal, Badge...)
│   │   ├── layout/             # App shell: Navbar, Footer, Sidebar
│   │   ├── property/           # PropertyCard, PropertyGrid, PropertyFilters
│   │   ├── search/             # SmartSearch, SearchBar, SearchResults
│   │   ├── charts/             # Market rate charts (Recharts wrappers)
│   │   └── dashboard/          # Dashboard widgets, stats cards, tables
│   │
│   ├── pages/                  # Route-level page components
│   │   ├── Home.tsx            # Landing page with hero and featured listings
│   │   ├── Properties.tsx      # Full property listings browse page
│   │   ├── PropertyDetail.tsx  # Dynamic property detail view via Route IDs
│   │   ├── Neighborhoods.tsx   # Neighborhood explorer index
│   │   ├── NeighborhoodDetails.tsx # Hyper-local data-driven insights per region
│   │   ├── MarketRates.tsx     # Analytics and market trend Recharts dashboard
│   │   ├── Favorites.tsx       # Portfolio Analytics and persistent wishlist
│   │   ├── Profile.tsx         # User profile page
│   │   └── Settings.tsx        # Account and app settings
│   │
│   ├── admin-portal/           # AIR-GAPPED ADMIN PLATFORM (Independent Vite Instance)
│   │   ├── src/pages/          # Admin Routes: Dashboard, Leads CRM, Inventory Index
│   │   └── src/components/     # Admin-specific Layouts, Airlock Logins, and Command Palettes
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useSearch.ts        # Gemini-powered search logic
│   │   ├── useProperties.ts    # Property fetching and filtering
│   │   └── useMarketData.ts    # Market analytics data hooks
│   │
│   ├── types/                  # TypeScript interfaces and type definitions
│   │   ├── property.ts         # Property, Listing, Filter types
│   │   ├── user.ts             # User, Agent, Owner profile types
│   │   └── market.ts           # Market data and analytics types
│   │
│   ├── utils/                  # Pure utility/helper functions
│   │   ├── formatters.ts       # Currency, area, date formatters
│   │   ├── validators.ts       # Form input validators
│   │   └── constants.ts        # App-wide constant values (Mumbai districts, etc.)
│   │
│   ├── data/                   # Mock / seed data for development
│   │   ├── properties.ts       # Sample property listings
│   │   ├── neighborhoods.ts    # Neighborhood metadata and insights
│   │   └── marketRates.ts      # Historical price data for charts
│   │
│   ├── App.tsx                 # Root component with route definitions
│   ├── main.tsx                # React DOM entry point
│   └── index.css               # Tailwind base imports and global styles
│
├── .env.example                # Template showing required environment variables
├── .gitignore                  # Git ignore rules
├── index.html                  # Vite HTML entry point
├── package.json                # Dependencies, scripts, and project config
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite bundler configuration
└── README.md                   # You are here
```

---

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your system:

| Tool | Minimum Version | Check |
|------|----------------|-------|
| [Node.js](https://nodejs.org/) | v18.0.0 | `node --version` |
| npm | v9.0.0 (bundled with Node 18) | `npm --version` |
| Git | Any recent version | `git --version` |

---

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/AtharvaNavlekar/KODDEVZ.git
```

**2. Navigate into the project directory**

```bash
cd KODDEVZ
```

**3. Install all dependencies**

```bash
npm install
```

---

### Environment Variables

This project requires a Google Gemini API key to power the Smart Search feature.

**1. Copy the example environment file**

```bash
cp .env.example .env
```

**2. Open `.env` in your editor and fill in your credentials**

```env
# Google Gemini API — required for AI-powered Smart Search
GEMINI_API_KEY=your_actual_gemini_api_key_here
PORT=8001
VITE_API_URL=http://localhost:8001/api
```

---

### Running the App

```bash
npm run dev:all
```

---

### Building for Production

```bash
npm run build
```

---

## License

This project is distributed under the **Apache License 2.0**.

---

<div align="center">

<br/>

**If this project helped you, please consider giving it a ⭐ on GitHub!**

<br/>

Built by Atharva Deepak Navlekar

<br/>

[Report a Bug](https://github.com/AtharvaNavlekar/KODDEVZ/issues/new) · [Request a Feature](https://github.com/AtharvaNavlekar/KODDEVZ/issues/new) · [View the Code](https://github.com/AtharvaNavlekar/KODDEVZ)

</div>
