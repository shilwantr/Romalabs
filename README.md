# Romalabs — Independent Technology Studio

> *Technology that disappears into the experience.*

Romalabs is an independent technology studio dedicated to building thoughtful, high-craft digital products across privacy, intelligence, and everyday utility.

---

## ✦ Overview

- **Studio Portfolio**: Showcase of current and exploratory products, including **SpyCam Pro** — a privacy-first recording utility focused on on-device processing and user data ownership.
- **The Lab**: An interactive playground featuring 4 responsive, browser-native experiments:
  1. **Tile Shift** (`2048`): Grid-based numeric tile merger with touch swipe and keyboard controls.
  2. **Lab Runner**: Canvas 2D physics runner with high-DPR scaling and procedural obstacles.
  3. **Signal Match**: Memory node discovery and pair matching.
  4. **Reflex Core**: Precision reaction speed test measuring sub-second human reflexes in milliseconds.
- **Connected Ecosystem**: Interactive SVG constellation showing domain intersections (Privacy, AI, Camera, Language, Wellness, Productivity).
- **Interactive Visuals**: GPU-accelerated interactive particle fields, fluid motion waveforms, 3D CSS perspective card tilt, and smooth scroll interactions.
- **Privacy & Transparency**: Dedicated, human-readable Privacy Policy index and per-product transparency reports.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) & [React Router v7](https://reactrouter.com/) (SSR + streaming HTML)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with bespoke typography (`Instrument Serif` & `Manrope`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & HTML5 Canvas 2D
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Monorepo**: npm workspaces architecture (`apps/web`)

---

## 📁 Repository Structure

```
.
├── apps/
│   └── web/
│       ├── public/               # Static assets (favicons, manifest)
│       ├── src/
│       │   ├── components/       # UI components & sections
│       │   │   ├── home/         # Homepage sections (Hero, Lab, Products, Ecosystem, etc.)
│       │   │   ├── lab/          # Interactive Lab games (2048, Runner, Memory, Reflex)
│       │   │   ├── privacy-policy/# Policy views & dynamic sections
│       │   │   └── ui/           # Accessible UI primitives
│       │   ├── data/             # Products & privacy policy datasets
│       │   ├── hooks/            # Custom React hooks
│       │   ├── lib/              # Utilities (SEO, rate limiting, logging, cookie consent)
│       │   ├── routes/           # React Router route definitions & loaders
│       │   ├── index.css         # Design system tokens and styles
│       │   ├── root.tsx          # Root layout and document shell
│       │   └── routes.ts         # Route manifests
│       ├── plugins/              # Vite development & build plugins
│       ├── package.json          # Web app dependencies & scripts
│       ├── vite.config.ts        # Vite configuration
│       └── react-router.config.ts# SSR & build configuration
├── package.json                  # Root monorepo workspace configuration
├── .gitignore                    # Git ignore rules
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 20.0.0`
- **npm** `>= 9.0.0`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/shilwantr/Romalabs.git
cd Romalabs
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be running at [http://localhost:3000](http://localhost:3000).

### Production Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Quality & Type Checking

Run type checking and linting:

```bash
npm run typecheck
npm run lint
```

---

## ✦ Contact

For inquiries, partnerships, or questions:
- **Email**: [hello@romalabs.com](mailto:hello@romalabs.com)
- **Website**: [romalabs.com](https://romalabs.com)

---

© 2026 Romalabs. All rights reserved.
