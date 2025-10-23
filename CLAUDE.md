# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**VF Vision** is a one-page web application designed to communicate SSI Strategy's transformation into a tech-first life science accelerator through the **Velocity Foundry** platform.

### Strategic Context

This application explains the vision of transforming SSI Strategy from traditional consulting to a digital capability accelerator for life sciences companies. Key concepts:

- **Velocity Foundry**: The platform enabling consultants to build bespoke solutions rapidly through AI-assisted development
- **Velocity Framework**: Operating principles for achieving breakthrough speed in biotech organizations
- **Market positioning**: First-mover advantage in AI-enabled consulting for life sciences
- **Business model shift**: From linear (hourly billing) to exponential (platform + services) growth

### Reference Materials

The `/reference` directory contains strategic documents that inform the application content:

- `vision.md`: Executive summary talking points covering market imperative, strategic vision, competitive advantage, business model transformation, and investment phases
- `The_Velocity_Framework.md`: Full book manuscript (300+ KB) detailing the Velocity Framework philosophy, operating system, and transformation playbook for biotech organizations

## Application Architecture

This is a **single-page application (SPA)** focused on clear, compelling communication of the transformation vision.

### Design Principles

1. **Single narrative flow**: The page should guide viewers through the transformation story logically
2. **Visual hierarchy**: Use the executive summary structure from `vision.md` as content framework
3. **Professional presentation**: Reflect the gravitas of life sciences consulting while demonstrating tech-forward capability
4. **Compelling storytelling**: Balance business metrics with vision and market opportunity

### Content Structure (from reference/vision.md)

The application should communicate these key sections:
1. The Market Imperative (10-year transformation window)
2. The Strategic Vision: Velocity Foundry
3. The Competitive Advantage (Velocity Forge Platform)
4. The Business Model Transformation
5. Risk Mitigation & Governance
6. The Investment Ask (3 phases)
7. Success Metrics
8. Why Now?

Core message: *"We're transforming SSI Strategy from a consulting firm that recommends digital transformation to one that delivers it - instantly, repeatedly, and profitably."*

## Technology Stack

- **Framework**: React 18 with Vite build tool
- **Styling**: Tailwind CSS with SSI Strategy color palette
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **Charts**: Recharts for data visualizations
- **Deployment**: GitHub Pages (gh-pages branch)

### Key Files
- `src/App.jsx` - Main app with authentication gate
- `src/components/layout/HorizontalScroller.jsx` - Horizontal scroll container
- `src/slides/Slide[1-8].jsx` - Individual slide components
- `src/utils/constants.js` - Password and animation configurations
- `tailwind.config.js` - SSI color palette

## Development Workflow

### Development
```bash
npm run dev      # Start dev server at http://localhost:5174/vf_vision/
npm run build    # Build production bundle
npm run preview  # Preview production build locally
```

### Deployment
```bash
npm run deploy   # Deploy to GitHub Pages (gh-pages branch)
```

### Git Repository
Project is initialized with git. Main branch contains source code.
The `gh-pages` branch (created by deployment) contains the built site.

## Key Considerations

- **Audience**: Executive stakeholders, investors, SSI Strategy leadership
- **Tone**: Professional, forward-thinking, grounded in business outcomes
- **Accuracy**: All content aligns with reference materials in `/reference`
- **Demonstrable tech capability**: The application exemplifies the "tech-first" transformation being proposed

## Password & Access

**Access Code**: `VelocityFoundry2025!` (stored in `src/utils/constants.js`)

Client-side password protection provides basic access control. For production use with sensitive content, consider server-side authentication.

## Common Maintenance Tasks

### Update Content
Edit slide components in `src/slides/` and the changes will hot-reload in development.

### Change Password
Edit `SITE_ACCESS_CODE` in `src/utils/constants.js`

### Modify Colors
Update the `colors.ssi` object in `tailwind.config.js`

### Adjust Animations
Edit animation variants in `src/utils/constants.js`

## Navigation System

- **Horizontal scroll**: Snap-scroll with momentum physics
- **Arrow keys**: Left/right navigation
- **Progress dots**: Right side with tooltips showing slide titles
- **Navigation arrows**: Left side with prev/next controls
- **Mobile**: Converts to vertical scroll on screens < 768px

## Performance Optimizations

- Lazy loading of slide content
- CSS transforms for animations (GPU-accelerated)
- Debounced scroll events
- Framer Motion viewport detection for animation triggers
- Production bundle is code-split and optimized
