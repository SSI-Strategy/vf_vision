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

## Technology Recommendations

Since this is a greenfield project with no existing tech stack:

- **Framework**: Modern SPA framework (React, Vue, or vanilla HTML/CSS/JS for simplicity)
- **Styling**: Clean, professional design system suitable for executive presentation
- **Deployment**: Static hosting (Vercel, Netlify, GitHub Pages)
- **Assets**: Consider data visualizations for metrics and transformation timeline

## Development Workflow

As this is a new project, establish:
1. Package management and build tooling
2. Development server setup
3. Deployment pipeline
4. Version control (currently not a git repository)

## Key Considerations

- **Audience**: Executive stakeholders, investors, SSI Strategy leadership
- **Tone**: Professional, forward-thinking, grounded in business outcomes
- **Accuracy**: All content should align with reference materials in `/reference`
- **Demonstrable tech capability**: The application itself should exemplify the "tech-first" transformation being proposed
