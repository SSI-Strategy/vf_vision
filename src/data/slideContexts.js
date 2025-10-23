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
        content: 'Without AI, efficiency gaps are linear—maybe 2-3x. With AI, they become exponential—10x, 50x, 100x. Example: Safety Signal Assessment. Legacy process: 2 weeks manual review, 40 hours per signal. Velocity-native: 48-hour automated triage, 4 hours per signal. That\'s 10x faster. A velocity-native organization completes drug design iterations in 3-6 weeks vs. 9-12 months for legacy pharma. That\'s not a competitive disadvantage—it\'s mathematical impossibility of catching up.',
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
        content: 'Most consulting firms are still operating traditional models: people-heavy engagements, PowerPoint deliverables, hourly billing. By becoming the first velocity-native consulting accelerator in life sciences, SSI can capture significant market share before competitors even understand the game has changed. What if biotech companies received capability building instead of blueprints? What if solutions stayed with the organization instead of walking out the door as tribal knowledge? Traditional consulting\'s value proposition is eroding, creating space for a fundamentally different model.',
        position: 'bottom-right', // Near "The Opportunity" box
        connections: {
          visionDoc: 'The Opportunity - First-mover in AI-enabled consulting'
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
        title: 'Real Deliverable: Regulatory Submission Dashboard',
        content: 'Concrete example: FDA/EMA submission tracking system with automated document assembly, audit trails, and stakeholder notifications. Traditional approach: 6-9 months for vendor selection and implementation. Velocity Foundry: 4-6 weeks from discovery to deployment. Built once for Client A, then reused and customized for Clients B-Z. That\'s 15-20x faster delivery—and speed creates platform value. Clients become dependent on the platform, generating recurring license revenue long after implementation.',
        position: 'bottom-left' // Near Speed Revolution card
      },
      {
        step: 3,
        type: 'theory',
        title: 'Platform Power + Reusable Assets',
        content: 'The Velocity Forge platform enables consultants to build through conversation. No coding expertise required. Golden Paths provide pre-configured best practices, compliance frameworks are baked in, and AI assists at every step. Every component built for one client becomes a reusable asset: GxP-compliant approval workflows, protocol deviation tracking, regulatory submission templates. The platform gets smarter and faster with each engagement—like having a world-class dev team that learns and compounds knowledge.',
        position: 'bottom', // Near Platform Power card
        connections: {
          visionDoc: 'Platform Power - Enable consultants to build enterprise applications'
        }
      },
      {
        step: 4,
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
        content: 'Building sustainable competitive advantage requires more than just being first. The strategy creates three compounding moats: the Velocity Forge Platform (technical moat), Compound Value Effect (network moat), and Industry-Specific IP (domain moat). Together, they become nearly impossible to replicate. Competitors face a triple challenge: Build the technical platform (years), accumulate client engagements for network effects (years), and develop deep life sciences domain expertise (years). By the time they start, the first mover is already compounding.',
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
        content: 'Network effects in consulting. Each engagement strengthens the platform. Solutions become reusable assets across clients. The value multiplies exponentially, not linearly. Competitors starting from zero can\'t catch up—they\'re always 20, 50, 100 clients behind in accumulated capability. This is the Solve Forever Protocol in action: every problem solved once becomes a platform capability forever.',
        position: 'top',
        connections: {
          visionDoc: 'Compound Value Effect'
        }
      },
      {
        step: 3,
        type: 'concept',
        title: 'Pillar 3: Industry-Specific IP',
        content: 'Deep life sciences patterns, workflows, and compliance frameworks become the domain moat. Example: Quality Event Listening Post for manufacturing. A real-time quality monitoring system that captures deviations, routes to owners, tracks resolution, and generates reports—all GxP-compliant by default. First client: full build (8 weeks). Subsequent clients: configure and customize (1-2 weeks). The reuse compounds. This specialized knowledge codified in the platform is extraordinarily valuable and hard to replicate.',
        position: 'right',
        connections: {
          visionDoc: 'Industry-Specific IP - Defensible moats through specialized knowledge'
        }
      },
      {
        step: 4,
        type: 'example',
        title: 'The 1→5→50 Progression',
        content: 'Client 1: Build everything from scratch, 100% effort → +1 solution in platform. Client 5: Reuse 80% of components, 20% effort → +5 new solutions. Client 20: Reuse 95% of components, 5% effort → +50 new solutions. Delivery cost drops 95% while capability multiplies 50x. No reinventing wheels. No tribal knowledge. No starting from scratch. Just systematic accumulation of executable, reusable, valuable IP.',
        position: 'bottom',
        connections: {
          visionDoc: 'The Compounding Effect'
        }
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
        title: 'Margin Expansion: Real Numbers',
        content: 'Traditional engagement: 100 units of effort, 80% labor cost = 20% margin. Velocity Foundry: 30 units of effort (AI assistance), 40% labor cost = 60% margin. Same value delivered to client, 3x profit margin for SSI. As reuse increases, the 30 units drops to 10 units (90% reuse), pushing margins even higher. Lower delivery costs with maintained or increased pricing creates exponential margin expansion.',
        position: 'left',
        connections: {
          visionDoc: 'Higher Margins - Reduce delivery costs through AI'
        }
      },
      {
        step: 3,
        type: 'insight',
        title: 'Recurring Revenue + IP Library Value',
        content: 'Platform licenses and maintenance create predictable, recurring streams—annuity-style revenue vs. feast-or-famine project cycles. Unlike traditional consulting where knowledge walks out the door, every solution adds to a permanent, appreciating IP library. Implementation engagement generates license + maintenance fees that compound over time. The library\'s value grows: Year 1 (50 components) → Year 3 (500 components) → Year 5 (5,000+ components). This becomes a sellable asset or licensing goldmine.',
        position: 'right',
        connections: {
          visionDoc: 'Recurring Revenue - Platform licenses and maintenance'
        }
      },
      {
        step: 4,
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
        title: 'Consultant Oversight + Systems Over Individuals',
        content: 'The approach maintains expert human oversight while AI handles implementation. Consultants define requirements, validate outputs, ensure quality. AI generates code, runs tests, handles deployment. This preserves SSI\'s consulting excellence while eliminating implementation bottlenecks. Traditional consulting depends on heroic individuals with tribal knowledge—when they leave, capability walks out the door. Velocity Foundry codifies knowledge into systems. Consultants become more valuable (they build platforms, not projects) while the firm becomes less dependent on any individual.',
        position: 'bottom',
        connections: {
          visionDoc: 'Maintains consultant oversight while accelerating delivery',
          velocityFramework: 'Systems Thinking'
        }
      }
    ]
  },

  // Slide 7: Making It Real - The Execution Roadmap
  {
    slideId: 6,
    slideName: 'Making It Real',
    contexts: [
      {
        step: 0,
        type: 'intro',
        title: 'Three Parallel Tracks to Q4 Readiness',
        content: 'This isn\'t a big-bang approach. Three work streams run in parallel and sequentially from Q1-Q4 2026: Track 1 (Platform) is sequential—evaluate, select, build. Track 2 (Training) runs parallel from Q1—because mindset transformation takes time. Track 3 (Validation) starts Q2—lighthouse clients prove the model. By Q4 2026, we\'re client-ready with trained Velocity Architects, a production Forge, and proven success stories.',
        position: 'top-right',
        connections: {
          visionDoc: 'The Investment Ask - Three phases'
        }
      },
      {
        step: 1,
        type: 'concept',
        title: 'Track 1: Platform Selection & Build (Sequential)',
        content: 'Q1 2026: Evaluate Master platform vendors (8 weeks) against criteria—GxP compliance framework, AI-assisted development, rapid deployment capability, enterprise security, regulatory audit trails, extensibility. Select vendor and establish partnership (2 weeks). Q2 2026: Configure the Forge environment (8-10 weeks). Establish Golden Paths architecture. Create first 5 solution templates: Protocol Deviation Tracking, Regulatory Submission Management, Safety Signal Assessment, Quality Event Listening Post, Audit Management System. Q3-Q4: Expand template library through lighthouse client engagements.',
        position: 'top-left',
        connections: {
          visionDoc: 'Phase 1 - Platform foundation and pilot'
        }
      },
      {
        step: 2,
        type: 'concept',
        title: 'Track 2: Developing Velocity Architects (Parallel from Q1)',
        content: 'This runs parallel to platform work because mindset transformation takes time. Q1-Q2: Design curriculum covering three dimensions: (1) Mindset - From recommendations to delivery, from projects to systems, from linear to exponential thinking. (2) Methods - Solve Forever Protocol, capability assessment, platform thinking, People/Process/Tools framework. (3) Tools - Forge platform mastery, AI-assisted development, Golden Paths application. Q2-Q3: Deliver training program through workshop series plus hands-on platform work. Q3-Q4: Certification process—each Velocity Architect delivers a lighthouse project demonstrating capability thinking and platform delivery.',
        position: 'top',
        connections: {
          visionDoc: 'Developing Velocity Architects'
        }
      },
      {
        step: 3,
        type: 'example',
        title: 'Track 3: Lighthouse Client Validation (From Q2)',
        content: 'Lighthouse clients prove speed, reusability, and compounding value. Client 1 (Q2): Protocol Deviation Tracker—proves we can deliver GxP-compliant solutions in <8 weeks. Client 2 (Q3): Regulatory Dashboard—proves reusability (60-70% component reuse from foundation templates). Client 3 (Q3): Safety Signal Assessment—proves compounding (80%+ reuse, 1-2 week delivery). Success criteria per engagement: <8 week delivery, high client satisfaction, platform capability capture and documentation.',
        position: 'bottom-left',
        connections: {
          visionDoc: 'Lighthouse client strategy'
        }
      },
      {
        step: 4,
        type: 'concept',
        title: 'Example Foundational Templates',
        content: 'The specific templates will be selected based on client input and needs, but example candidates include: (1) Protocol Deviation Tracking - Clinical trial compliance workflow. (2) Regulatory Submission Management - FDA/EMA document pipeline. (3) Safety Signal Assessment - Adverse event monitoring and triage. (4) Quality Event Listening Post - Manufacturing quality monitoring. (5) Audit Management System - Inspection readiness and tracking. Each lighthouse client engagement will define and build 2-3 templates based on their specific challenges. By Q4, we aim for 8-10 proven, reusable solution patterns informed by real client needs.',
        position: 'bottom',
        connections: {
          visionDoc: 'Foundational solution templates'
        }
      },
      {
        step: 5,
        type: 'metrics',
        title: 'Q4 2026 Readiness: What We\'ve Built',
        content: 'Platform: Production Forge with 8-10 proven templates, validated Golden Paths, full GxP compliance framework. People: 5-8 certified Velocity Architects trained in mindset, methods, and tools. Proof: 3 lighthouse success stories demonstrating speed (<8 weeks), quality, and client satisfaction. Process: Established delivery methodology—discovery → build → deploy in 6-8 weeks avg. Economics: 3x margin improvement demonstrated through lighthouse projects, recurring revenue model validated. Pipeline: Commercial engagements starting Q4 2026, sales process refined through lighthouse learnings.',
        position: 'bottom-right',
        connections: {
          visionDoc: 'Success Metrics'
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
        title: 'The 10x Threshold & The Choice',
        content: 'When velocity-native organizations achieve 10x speed advantage, catching up becomes mathematically impossible. Drug design: 3-6 weeks vs 9-12 months. Protocol optimization: 5 days vs 6 months. Regulatory prep: 48 hours vs 8 weeks. The industry is approaching that threshold NOW. The choice isn\'t "transform or stay the same." It\'s "transform or become irrelevant." Clients will flock to velocity-native partners who deliver outcomes. Talent will leave for organizations doing meaningful work without friction. The market will consolidate around velocity leaders. The best time to achieve velocity was yesterday. The second best time is Monday morning.',
        quote: 'The best time to achieve velocity was yesterday. The second best time is Monday morning.',
        position: 'bottom',
        connections: {
          visionDoc: 'At 10x differential, catching up becomes mathematically impossible'
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
