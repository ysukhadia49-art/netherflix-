# NetherFlix 🎬

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF.svg)](https://vitejs.dev/)
[![Android APK](https://img.shields.io/badge/Android-APK-3DDC84.svg)](public/netherflix.apk)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A pixel-perfect, production-ready streaming & discovery platform matching the APK experience with edge-to-edge dark theme, multi-server video player, Three.js 3D theater mode, PWA capabilities, and an Android APK release.

---

## ✨ Features

- **Iconic Branding & Aesthetics**:
  - Full-screen edge-to-edge dark layout (`#070709` / `#111212`)
  - Custom NetherFlix "N" ribbon monogram logo
  - Curated typography: `Cormorant Garamond` & `DM Sans`
  - Subtle crimson/gold accents, silver gradients, and glassmorphic card surfaces
  - Intro overlay splash screen with brand SVG and tagline: *"SEARCH LESS • DISCOVER MORE"*
- **Content Discovery**:
  - **Movies & TV Series**: TMDB API integration with high-resolution backdrops, poster carousels, genre filters, and metadata
  - **Anime Discovery**: AniList GraphQL integration for trending and popular anime
  - **Hero Showcase**: Dynamic hero with backdrop zoom, metadata, trailer preview, and quick play
- **Streaming Servers & Player**:
  - Multi-server player with instant fallbacks:
    - **VidStuck** (Fast)
    - **ZXC** (Fast)
    - **Bingr** (4K)
    - **Nxsha** (HD + Subs)
    - **VidLink** (Multi-stream)
    - **VidNest** (Alternative)
  - Full theater modal with episode picker, season selector, audio selector (sub/dub), and server switcher
  - 3D Cinema / Theater mode powered by Three.js
- **Search & Filter**:
  - Instant debounced search for movies, series, and anime
  - Live filtering by category (All, Movies, Series, Anime) and genres
- **Android APK & PWA**:
  - Signed Android APK (`netherflix.apk`) ready for direct install
  - Web App Manifest (`manifest.json`) and Service Worker (`sw.js`) for installable PWA experience

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/netherflix.git

# Navigate to the project directory
cd netherflix

# Install dependencies
npm install
```

### Running Locally

```bash
# Start Vite development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Building for Production

```bash
# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📱 Android APK

The signed Android application is included in this repository:

- Direct download: [`public/netherflix.apk`](public/netherflix.apk)
- In the web app: Clicking **"Install APK"** triggers direct download of the APK.

---

## ☁️ Deploying to Vercel

This repository includes a configured `vercel.json` for 1-click SPA routing:

```bash
npx vercel
```

Or import the repository directly in [Vercel](https://vercel.com/new).

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
