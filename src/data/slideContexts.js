export const SLIDE_CONTEXTS = [
  // Slide 1: Hero / The Awakening
  // Layout: Centered content with title, subtitle, and "Explore the vision" at bottom
  {
    slideId: 0,
    slideName: 'The Awakening',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'Welcome to Velocity Foundry',
        content: 'This is not just a proposal—it\'s a transformation blueprint. SSI Strategy stands at a crossroads: continue as a traditional consulting firm, or leverage Velocity Foundry to become the first velocity-native capability accelerator in life sciences. The stakes? Market leadership in an industry about to bifurcate into winners and legacy players.',
        position: 'bottom-right', // Near "Explore the vision" text
        connections: {
          velocityFramework: 'Introduction: The Choice That Changes Everything',
          visionDoc: 'Executive Summary - The Compelling One-Liner'
        }
      },
      {
        step: 1,
        type: 'theory',
        title: 'The Velocity Framework Foundation',
        content: 'The Velocity Framework reveals an uncomfortable truth: "Most organizational activity is waste. Not inefficient work—pure waste. Humans serving as middleware between systems." This proposal is about eliminating that waste through AI-enabled operations, allowing SSI to deliver outcomes instead of just recommendations.',
        quote: 'Most organizational activity is waste. Not inefficient work—pure waste.',
        position: 'bottom-left', // Opposite corner for variety
        connections: {
          velocityFramework: 'Chapter 1: The Truth About Your Organization',
        }
      },
      {
        step: 2,
        type: 'concept',
        title: 'What Makes This Different',
        content: 'Traditional consulting: Deliver PowerPoint blueprints, bill for hours, move on. Velocity Foundry: Build bespoke solutions in days through AI-assisted development, deliver working software, create reusable IP that compounds in value. The vision combines SSI\'s people and governance expertise with instant tech delivery.',
        position: 'bottom', // Center bottom, near the main message
        connections: {
          visionDoc: 'Strategic Vision - From recommending to delivering'
        }
      },
      {
        step: 3,
        type: 'insight',
        title: 'The Compound Effect',
        content: 'Here\'s the magic: every client solution doesn\'t disappear—it becomes a platform capability. Client 1 takes 100% effort. Client 5 reuses 80% of components. Client 20 reuses 95%. The delivery cost plummets while revenue multiplies. This is exponential growth, not linear.',
        position: 'bottom-left',
        connections: {
          visionDoc: 'Competitive Advantage - Compound Value Effect'
        }
      },
      {
        step: 4,
        type: 'navigation',
        title: 'Your Journey Ahead',
        content: 'Navigate through 8 slides that build the complete case: the market imperative, the strategic vision, competitive advantages, business model transformation, risk mitigation, investment roadmap, and why timing is critical. Each slide will deepen your understanding of how SSI Strategy can leverage Velocity Foundry to become a holistic capability enabler—delivering People, Process, and Tools.',
        position: 'bottom-right' // Back to right for final context
      }
    ]
  },

  // Slide 2: Market Imperative
  // Layout: Title at top, two-column comparison (Traditional vs Velocity-Native)
  {
    slideId: 1,
    slideName: 'Market Imperative',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'The 10-Year Window',
        content: 'Life sciences companies have a decade—maybe less—to transform before the gap becomes unbridgeable. AI and digital workflows are creating two species of organizations: velocity-native (50%+ efficiency) and legacy (5% efficiency). The divergence is accelerating exponentially, not linearly.',
        position: 'top-right', // Near the title "The 10-Year Window"
        connections: {
          visionDoc: 'Market Imperative - 10-year transformation window'
        }
      },
      {
        step: 1,
        type: 'theory',
        title: 'Two Species Are Emerging',
        content: 'Traditional pharma: Committee-based decisions, quarterly change batches, people-heavy processes, linear growth capped by headcount. Velocity-native: Algorithmic decision flows, continuous change cycles, AI-enabled operations, exponential scaling. These aren\'t variations—they\'re different operating systems.',
        position: 'bottom', // Center bottom, below both columns
        connections: {
          velocityFramework: 'The Velocity Operating System'
        }
      },
      {
        step: 2,
        type: 'example',
        title: 'AI Makes the Gap Exponential',
        content: 'Without AI, efficiency gaps are linear—maybe 2-3x. With AI, they become exponential—10x, 50x, 100x. A velocity-native organization completes drug design iterations in 3-6 weeks. Legacy pharma takes 9-12 months. That\'s not a competitive disadvantage—it\'s mathematical impossibility of catching up.',
        position: 'right', // Right side, near the Velocity-Native column
        connections: {
          visionDoc: 'Why Now - The 10x Threshold'
        }
      },
      {
        step: 3,
        type: 'insight',
        title: 'Talent Hemorrhaging',
        content: 'The best scientists, engineers, and operators are leaving legacy organizations for velocity-native ones. Why? Because doing meaningful work without bureaucratic friction is intoxicating. This creates a doom loop: legacy orgs lose talent → slow down further → lose more talent.',
        position: 'left', // Left side, near the Traditional Pharma column
        connections: {
          velocityFramework: 'The Talent Exodus'
        }
      },
      {
        step: 4,
        type: 'strategy',
        title: 'First-Mover Advantage for SSI',
        content: 'Most consulting firms are still operating traditional models: people-heavy engagements, PowerPoint deliverables, hourly billing. By becoming the first velocity-native consulting accelerator in life sciences, SSI can capture significant market share before competitors even understand the game has changed.',
        position: 'bottom-right', // Near "The Opportunity" box
        connections: {
          visionDoc: 'The Opportunity - First-mover in AI-enabled consulting'
        }
      },
      {
        step: 5,
        type: 'urgency',
        title: 'Why Consulting Models Are Dying',
        content: 'What if biotech companies received capability building instead of blueprints? What if solutions stayed with the organization instead of walking out the door as tribal knowledge? What if partners delivered working solutions in weeks, not consulting reports in months? Traditional consulting\'s value proposition is eroding, creating space for a fundamentally different model.',
        position: 'bottom-left',
        connections: {
          visionDoc: 'Market Context - Traditional consulting becoming obsolete'
        }
      }
    ]
  },

  // Slide 3: Velocity Foundry Vision
  // Layout: Title at top, From/To transformation flow, 3-column cards at bottom (Speed/Outcome/Platform)
  {
    slideId: 2,
    slideName: 'Velocity Foundry',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'From Time to Outcomes',
        content: 'The fundamental shift: stop selling time, start selling outcomes. Traditional consulting bills for hours and delivers recommendations. Velocity Foundry delivers working solutions through reusable, scalable digital assets. The client pays for the outcome, not the journey.',
        position: 'top-left', // Near the "From" card
        connections: {
          visionDoc: 'Strategic Vision - Shift from selling time to selling outcomes'
        }
      },
      {
        step: 1,
        type: 'concept',
        title: 'Digital Capability Accelerator',
        content: 'This isn\'t just about consultants who recommend digital transformation—it\'s about being the digital transformation. The platform enables consultants to build bespoke enterprise applications in days/weeks through AI-assisted development. Non-technical domain experts become citizen developers through the Velocity Forge platform.',
        position: 'top-right', // Near "To" card
        connections: {
          visionDoc: 'Strategic Vision - Digital capability accelerator'
        }
      },
      {
        step: 2,
        type: 'example',
        title: 'Speed Revolution: The Math',
        content: 'Traditional consulting engagement: 3-6 months for requirements, 6-12 months for vendor selection, 12-24 months for implementation. Total: 2-3 years. Velocity Foundry: 2 weeks for discovery, 4-6 weeks for MVP delivery, continuous iteration. Total: Working solution in under 2 months. That\'s 15-20x faster—and speed creates platform lock-in. Clients become dependent on the platform, generating recurring license revenue long after implementation. SSI earns while consultants sleep.',
        position: 'bottom-left' // Near Speed Revolution card
      },
      {
        step: 3,
        type: 'theory',
        title: 'Platform Power',
        content: 'The Velocity Forge platform enables consultants to build through conversation. No coding expertise required. The platform has Golden Paths (pre-configured best practices), compliance frameworks baked in, and AI assistance at every step. It\'s like having a world-class dev team in your pocket.',
        position: 'bottom', // Near Platform Power card
        connections: {
          visionDoc: 'Platform Power - Enable consultants to build enterprise applications'
        }
      },
      {
        step: 4,
        type: 'insight',
        title: 'Reusable Assets',
        content: 'Every component built for one client becomes a reusable asset. Need a GxP-compliant approval workflow? Built it for Client A, now it\'s a platform capability. Protocol deviation tracking? Built for Client B, available for everyone. The platform gets smarter and faster with each engagement.',
        position: 'bottom-right', // Near Outcome Focus card
        connections: {
          visionDoc: 'Business Model - Asset Appreciation'
        }
      },
      {
        step: 5,
        type: 'vision',
        title: 'The Core Promise',
        content: 'By leveraging Velocity Foundry, SSI Strategy transforms from a firm that recommends digital transformation to one that delivers it—instantly, repeatedly, and profitably. Instantly through AI-enabled development. Repeatedly through reusable IP. Profitably through exponential revenue growth with declining delivery costs.',
        quote: 'From a consulting firm that recommends digital transformation to one that delivers it—instantly, repeatedly, and profitably.',
        position: 'bottom', // Near the quote
        connections: {
          visionDoc: 'The Compelling One-Liner'
        }
      }
    ]
  },

  // Slide 4: Competitive Advantage
  {
    slideId: 3,
    slideName: 'Competitive Advantage',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'Three Defensible Moats',
        content: 'Building sustainable competitive advantage requires more than just being first. The strategy creates three compounding moats: the Velocity Forge Platform (technical moat), Compound Value Effect (network moat), and Industry-Specific IP (domain moat). Together, they become nearly impossible to replicate.',
        position: 'top-right',
        connections: {
          visionDoc: 'Competitive Advantage - Three Pillars'
        }
      },
      {
        step: 1,
        type: 'concept',
        title: 'Pillar 1: Velocity Forge Platform',
        content: 'The citizen developer revolution for consulting. Non-technical consultants build enterprise applications through conversation with AI. Golden Paths provide pre-configured excellence. Compliance frameworks (GxP, FDA, EMA) are baked in from day one. SSI starts with proven AI development tools plus deep GxP expertise already in-house—competitors starting from zero face years of catch-up building both technical platform AND domain knowledge.',
        position: 'left',
        connections: {
          visionDoc: 'Velocity Forge Platform'
        }
      },
      {
        step: 2,
        type: 'concept',
        title: 'Pillar 2: Compound Value Effect',
        content: 'Network effects in consulting. Each engagement strengthens the platform. Solutions become reusable assets across clients. The value multiplies exponentially, not linearly. Competitors starting from zero can\'t catch up—they\'re always 20, 50, 100 clients behind in accumulated capability.',
        position: 'top',
        connections: {
          visionDoc: 'Compound Value Effect'
        }
      },
      {
        step: 3,
        type: 'concept',
        title: 'Pillar 3: Industry-Specific IP',
        content: 'Deep life sciences patterns, workflows, and compliance frameworks become the domain moat. GxP compliance, FDA submission templates, clinical trial protocols, pharmacovigilance workflows—this specialized knowledge codified in the platform is extraordinarily valuable and hard to replicate.',
        position: 'right',
        connections: {
          visionDoc: 'Industry-Specific IP - Defensible moats through specialized knowledge'
        }
      },
      {
        step: 4,
        type: 'example',
        title: 'The 1→5→50 Progression',
        content: 'Client 1: Build everything from scratch, 100% effort → +1 solution in platform. Client 5: Reuse 80% of components, 20% effort → +5 new solutions. Client 20: Reuse 95% of components, 5% effort → +50 new solutions. Delivery cost drops 95% while capability multiplies 50x.',
        position: 'bottom-left',
        connections: {
          visionDoc: 'The Compounding Effect'
        }
      },
      {
        step: 5,
        type: 'theory',
        title: 'Platform Thinking at Scale',
        content: 'This is the Solve Forever Protocol in action. Every problem solved once becomes a platform capability forever. No reinventing wheels. No tribal knowledge. No starting from scratch. Just systematic accumulation of executable, reusable, valuable IP.',
        position: 'bottom',
        connections: {
          velocityFramework: 'Solve Forever Protocol'
        }
      },
      {
        step: 6,
        type: 'insight',
        title: 'Why This Is Defensible',
        content: 'Competitors face a triple challenge: (1) Build the technical platform (years), (2) Accumulate client engagements to create network effects (years), (3) Develop deep life sciences domain expertise (years). By the time they start, the first mover is already compounding. The moat widens with every client.',
        position: 'bottom-right'
      }
    ]
  },

  // Slide 5: Business Model Transformation
  {
    slideId: 4,
    slideName: 'Business Model',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'Linear vs Exponential Economics',
        content: 'Traditional consulting has a fundamental constraint: revenue is capped by headcount. You can only bill for the hours your people work. Velocity Foundry breaks this ceiling through platform economics: delivery costs decrease as revenue multiplies. This is exponential, not linear growth.',
        position: 'top-right',
        connections: {
          visionDoc: 'Business Model Transformation - From linear to exponential'
        }
      },
      {
        step: 1,
        type: 'concept',
        title: 'Four Revenue Streams',
        content: '(1) Services: Higher-margin consulting through AI-assisted delivery. (2) Platform Licenses: Recurring revenue from platform access. (3) IP Library: Asset value appreciation as components multiply. (4) Maintenance: Predictable recurring revenue from deployed solutions. Together, they create a diversified, scalable model.',
        position: 'bottom-left',
        connections: {
          visionDoc: 'Revenue Multiplication - Platform + Services'
        }
      },
      {
        step: 2,
        type: 'example',
        title: 'Margin Expansion Through AI',
        content: 'Traditional engagement: 5 consultants × 3 months × $15k/month = $225k revenue, 80% labor cost = $45k margin (20%). Velocity Foundry: 2 consultants × 3 weeks × AI platform = $150k revenue, 40% labor cost = $90k margin (60%). Lower price for client, 2x profit margin for SSI.',
        position: 'left',
        connections: {
          visionDoc: 'Higher Margins - Reduce delivery costs through AI'
        }
      },
      {
        step: 3,
        type: 'insight',
        title: 'Recurring Revenue',
        content: 'Platform licenses and maintenance create predictable, recurring streams. Instead of feast-or-famine project cycles, this builds annuity-style revenue. A $2M implementation becomes $200k/year in perpetual license + maintenance fees. Over 5 years, that\'s $3M total vs $2M one-time.',
        position: 'right',
        connections: {
          visionDoc: 'Recurring Revenue - Platform licenses and maintenance'
        }
      },
      {
        step: 4,
        type: 'theory',
        title: 'The IP Library as Appreciating Asset',
        content: 'Unlike traditional consulting where knowledge walks out the door, every solution adds to a permanent, appreciating IP library. The library\'s value compounds: Year 1 (50 components) → Year 3 (500 components) → Year 5 (5,000+ components). This becomes a sellable asset or licensing goldmine.',
        position: 'bottom-right',
        connections: {
          visionDoc: 'Asset Appreciation - Each client solution adds to reusable IP'
        }
      },
      {
        step: 5,
        type: 'strategy',
        title: 'Breaking the Headcount Ceiling',
        content: 'With traditional billing, doubling revenue means doubling headcount. With Velocity Foundry, doubling revenue might mean adding 20% headcount because the platform does the heavy lifting. The business becomes asset-based (platform IP) rather than labor-based (billable hours). Margins expand, not compress.',
        position: 'bottom'
      }
    ]
  },

  // Slide 6: Risk Mitigation & Governance
  {
    slideId: 5,
    slideName: 'Risk Mitigation',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'Built on Solid Foundation',
        content: 'Speed without governance is recklessness. Velocity Foundry is built on an enterprise-grade Master Service Platform with security, audit trails, and compliance baked into every layer. This isn\'t cowboy coding—it\'s systematic, governed, auditable acceleration.',
        position: 'top-right',
        connections: {
          visionDoc: 'Risk Mitigation - Enterprise-grade platform'
        }
      },
      {
        step: 1,
        type: 'concept',
        title: 'The Layered Architecture',
        content: 'Four layers create defense in depth: L1 (Security Foundation) - encryption, access control. L2 (Governance & Compliance) - audit trails, validation, regulatory frameworks. L3 (Platform Services) - Golden Paths, reusable components. L4 (Applications) - custom solutions. Each layer enforces standards on the layer above.',
        position: 'left',
        connections: {
          visionDoc: 'Master Service Platform Architecture'
        }
      },
      {
        step: 2,
        type: 'theory',
        title: 'Compliance Infrastructure Enables Speed',
        content: 'Counter-intuitive truth: strong compliance infrastructure accelerates delivery rather than slowing it down. When security, validation, and audit are automated at the platform level, developers don\'t fight compliance—they get it for free. Build fast, comply automatically.',
        position: 'right',
        connections: {
          visionDoc: 'Compliance infrastructure enables speed, not prevents it'
        }
      },
      {
        step: 3,
        type: 'insight',
        title: 'Consultant Oversight + AI Acceleration',
        content: 'The approach maintains expert human oversight while AI handles implementation. Consultants define requirements, validate outputs, ensure quality. AI generates code, runs tests, handles deployment. This preserves SSI\'s consulting excellence while eliminating implementation bottlenecks.',
        position: 'bottom-left',
        connections: {
          visionDoc: 'Maintains consultant oversight while accelerating delivery'
        }
      },
      {
        step: 4,
        type: 'strategy',
        title: 'Systems Over Heroic Individuals',
        content: 'Traditional consulting depends on heroic individuals with tribal knowledge. When they leave, capability walks out the door. Velocity Foundry codifies knowledge into systems. Consultants become more valuable (they build platforms, not projects) while the firm becomes less dependent on any individual.',
        position: 'bottom-right',
        connections: {
          visionDoc: 'Reduces key person dependencies through codified knowledge',
          velocityFramework: 'Systems Thinking'
        }
      }
    ]
  },

  // Slide 7: Investment Journey
  {
    slideId: 6,
    slideName: 'Investment Journey',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'Three Phases to Transformation',
        content: 'This isn\'t a big-bang approach. The plan systematically builds capability through three phases over 18 months: Foundation (6-9 months), Scale (9-15 months), Productize (15-18 months). Each phase delivers measurable value while setting up the next.',
        position: 'top-right',
        connections: {
          visionDoc: 'The Investment Ask - Three phases'
        }
      },
      {
        step: 1,
        type: 'concept',
        title: 'Phase 1: Foundation (6-9 months)',
        content: 'Build the platform core and prove the model with 2-3 lighthouse clients. Develop initial Golden Paths library. Begin team enablement. Deliverable: Working platform with proven client success stories, initial IP library, trained core team. Risk: Contained to pilot projects.',
        position: 'top-left',
        connections: {
          visionDoc: 'Phase 1 - Platform foundation and pilot'
        }
      },
      {
        step: 2,
        type: 'concept',
        title: 'Phase 2: Scale (9-15 months)',
        content: 'Full consulting team adoption. Expand client base to 10-15 engagements. Platform refinement based on real-world usage. IP library accelerates through compound effects. Deliverable: Platform at scale, significant IP library, full team capability, growing recurring revenue.',
        position: 'top',
        connections: {
          visionDoc: 'Phase 2 - Scale to full team enablement'
        }
      },
      {
        step: 3,
        type: 'concept',
        title: 'Phase 3: Productize (15-18 months)',
        content: 'License the platform directly to clients. Establish ecosystem partnerships. Achieve market leadership position. Recurring revenue becomes dominant. Deliverable: Platform-as-a-product, 30+ client success stories, industry recognition, predictable recurring revenue model.',
        position: 'top-right',
        connections: {
          visionDoc: 'Phase 3 - Productize and license platform'
        }
      },
      {
        step: 4,
        type: 'metrics',
        title: 'Success Metrics',
        content: 'Four key metrics track transformation progress (note: rough estimates requiring further research to validate): (1) Time-to-value reduction: 70%+ faster delivery. (2) Consultant productivity: 3-5x more deliverables per consultant. (3) Client satisfaction: NPS increase of 20+ points. (4) Financial: 40%+ margin improvement within 18 months.',
        position: 'bottom-left',
        connections: {
          visionDoc: 'Success Metrics'
        }
      },
      {
        step: 5,
        type: 'theory',
        title: '90-Day Transformation Cycles',
        content: 'Following the Velocity Framework methodology, the approach works in 90-day cycles. Each cycle delivers measurable capability improvement. Every 90 days: assess, adjust, accelerate. This prevents multi-year transformations that never deliver value. Progress compounds quarterly.',
        position: 'bottom',
        connections: {
          velocityFramework: '90-Day Transformation Cycles'
        }
      },
      {
        step: 6,
        type: 'insight',
        title: 'Exponential Returns',
        content: 'What if returns compound rather than accumulate linearly? The hypothesis: Phase 1 builds foundation capabilities. Phase 2 leverages that foundation to create multiplied value. Phase 3 compounds on both previous phases for potentially exponential returns. This pattern—if validated—transforms how investment value is calculated. Early investment wouldn\'t just deliver immediate returns, but create compounding infrastructure for accelerating value creation.',
        position: 'bottom-right',
        connections: {
          visionDoc: 'The returns aren\'t linear—they\'re exponential'
        }
      }
    ]
  },

  // Slide 8: Why Now
  {
    slideId: 7,
    slideName: 'Why Now',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'The Transformation Window Is Closing',
        content: 'This isn\'t about being early—this is the exact inflection point. AI technology has matured. Life sciences digitalization is accelerating. Competitors are still traditional. The gap between velocity-native and legacy is widening exponentially. It\'s a case of "Move now or be left behind."',
        position: 'top-right',
        connections: {
          visionDoc: 'Why Now - Transformation window closing'
        }
      },
      {
        step: 1,
        type: 'insight',
        title: 'AI Technology Maturity',
        content: 'The inflection point has arrived where AI is production-ready, proven, and accessible. Not experimental, not risky—battle-tested and scalable. Code generation, automated testing, intelligent workflows are commoditized. The window for early-mover advantage is open RIGHT NOW.',
        position: 'top-left',
        connections: {
          visionDoc: 'AI technology maturity has reached inflection point'
        }
      },
      {
        step: 2,
        type: 'context',
        title: 'Post-Pandemic Acceleration',
        content: 'The pandemic forced life sciences into digital workflows. That genie won\'t go back in the bottle. Remote trials, digital submissions, automated monitoring—these are table stakes now. Companies desperately need partners who can build capability, not just recommend it.',
        position: 'top-right',
        connections: {
          visionDoc: 'Life sciences digitalization accelerating post-pandemic'
        }
      },
      {
        step: 3,
        type: 'opportunity',
        title: 'Competitors Still Traditional',
        content: 'Most consulting firms are stuck in the old model: sell time, deliver PowerPoint, bill hours. They don\'t have platforms. They don\'t have AI-assisted development. They don\'t have reusable IP libraries. The first-mover advantage is available—but only for the next 12-24 months.',
        position: 'bottom-left',
        connections: {
          visionDoc: 'Competitors still operating traditional models'
        }
      },
      {
        step: 4,
        type: 'urgency',
        title: 'The 10x Threshold',
        content: 'When velocity-native organizations achieve 10x speed advantage, catching up becomes mathematically impossible. Drug design: 3-6 weeks vs 9-12 months. Protocol optimization: 5 days vs 6 months. Regulatory prep: 48 hours vs 8 weeks. The industry is approaching that threshold NOW.',
        position: 'bottom',
        connections: {
          visionDoc: 'At 10x differential, catching up becomes mathematically impossible'
        }
      },
      {
        step: 5,
        type: 'vision',
        title: 'The Transformation Isn\'t Optional',
        content: 'The choice isn\'t "transform or stay the same." It\'s "transform or become irrelevant." Clients will flock to velocity-native partners who deliver outcomes. Talent will leave for organizations doing meaningful work without friction. The market will consolidate around velocity leaders.',
        quote: 'The best time to achieve velocity was yesterday. The second best time is Monday morning.',
        position: 'bottom-right',
        connections: {
          visionDoc: 'The transformation isn\'t optional'
        }
      }
    ]
  },

  // Slide 9: The Choice - Final slide with no overlay
  {
    slideId: 8,
    slideName: 'The Choice',
    contexts: []
  }
];

// Helper function to get total contexts for a slide
export const getTotalContextsForSlide = (slideId) => {
  const slide = SLIDE_CONTEXTS.find(s => s.slideId === slideId);
  return slide ? slide.contexts.length : 0;
};

// Helper function to get specific context
export const getContext = (slideId, contextStep) => {
  const slide = SLIDE_CONTEXTS.find(s => s.slideId === slideId);
  if (!slide) return null;
  return slide.contexts[contextStep] || null;
};

// Helper function to get slide name
export const getSlideName = (slideId) => {
  const slide = SLIDE_CONTEXTS.find(s => s.slideId === slideId);
  return slide ? slide.slideName : '';
};
