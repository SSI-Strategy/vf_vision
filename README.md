# Velocity Foundry Vision

An immersive, horizontal-scrolling web experience showcasing SSI Strategy's transformation into a tech-first life science accelerator through the Velocity Foundry platform.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔐 Access

The site is password-protected. Use the following access code:

**Access Code:** `VelocityFoundry2025!`

> You can change this in `src/utils/constants.js` (SITE_ACCESS_CODE)

## 🎨 Features

- **Horizontal Scrolling**: Smooth, full-page horizontal navigation
- **8 Interactive Slides**: Each communicating a key aspect of the transformation
- **SSI Strategy Branding**: Official color palette and design system
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Animated Interactions**: Framer Motion animations throughout
- **Password Protection**: Client-side authentication gate

## 📐 Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling with SSI color palette
- **Framer Motion** - Animation library
- **Lucide React** - Icon system
- **Recharts** - Data visualizations

## 🎨 SSI Strategy Color Palette

- **Midnight Sky Blue** - `#003C71` - Primary brand color
- **Ocean Blue** - `#009CCF` - Interactive elements
- **Northern Lights Turquoise** - `#6EBCB0` - Accents
- **Sunrise Sky Yellow** - `#F2A900` - Emphasis
- **Stone Grey** - `#717B87` - Text
- **Sand Beige** - `#D6D2C4` - Backgrounds
- **Pitch Black** - `#000000` - Deep sections

## 📄 Slides Overview

1. **The Awakening** - The 10-year transformation window
2. **Market Imperative** - Velocity-native vs. legacy organizations
3. **Velocity Foundry** - Strategic vision and core proposition
4. **Competitive Advantage** - Three pillars of differentiation
5. **Business Model** - Linear to exponential revenue transformation
6. **Risk Mitigation** - Enterprise platform foundation
7. **Investment Journey** - Three-phase transformation roadmap
8. **Why Now** - Urgency and the closing window

## ⌨️ Navigation

- **Arrow Keys** (← →) - Navigate between slides
- **Mouse Wheel** - Horizontal scroll
- **Touch/Swipe** - On mobile devices
- **Progress Dots** (right side) - Click to jump to slide
- **Nav Arrows** (left side) - Previous/Next buttons

## 🚢 Deployment to GitHub Pages

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

This will:
1. Build the production bundle
2. Deploy to the `gh-pages` branch
3. Make the site available at your GitHub Pages URL

### First-time Setup

1. Ensure repository is pushed to GitHub
2. Enable GitHub Pages in repository settings (Source: gh-pages branch)
3. Run `npm run deploy`
4. Access site at: `https://[username].github.io/vf_vision/`

## 📁 Project Structure

```
src/
├── components/
│   ├── auth/          # Password gate
│   ├── layout/        # Scroller, navigation, progress
│   ├── animations/    # Reusable animation components
│   └── ui/            # Button, Card, Counter components
├── slides/            # 8 slide components
├── utils/             # Constants and utilities
├── styles/            # Global CSS
├── App.jsx            # Main app component
└── main.jsx           # Entry point
```

## 🔧 Customization

### Change Password
Edit `src/utils/constants.js`:
```javascript
export const SITE_ACCESS_CODE = "YourNewPassword";
```

### Adjust Colors
Edit `tailwind.config.js` to modify the SSI color palette.

### Add/Edit Slides
Slide components are in `src/slides/`. Each is a self-contained React component.

## 📝 Content Source

All content is based on:
- `reference/vision.md` - Executive summary and talking points
- `reference/The_Velocity_Framework.md` - Full framework documentation

## 🤝 Development Notes

- Password protection is client-side only (basic protection)
- For production with sensitive content, consider server-side auth
- Animations optimized for 60fps performance
- Responsive breakpoints: mobile (<768px), tablet (768-1024px), desktop (>1024px)

## 📜 License

Private project for SSI Strategy. All rights reserved.

---

*"The best time to achieve velocity was yesterday. The second best time is Monday morning."*
