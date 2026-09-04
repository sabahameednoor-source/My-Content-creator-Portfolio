import { Project, SkillCategory, ExperienceItem, Testimonial, Service } from '../types';

export const PERSONAL_INFO = {
  name: 'Saba Hameed',
  title: 'AI Product Designer & Content Creator',
  roles: [
    'AI Product Designer',
    'Content Creator & Strategist',
    'Prompt Engineer & UX Architect',
    'Design Systems Lead',
    'Generative Media Specialist'
  ],
  status: 'Available for AI Design & Content Projects',
  location: 'Remote / Worldwide (GMT+5)',
  bio: 'AI Product Designer & Content Creator with 4+ years of hands-on experience designing generative AI user experiences, multi-modal prompt architectures, brand content strategies, and scalable design systems. Merging human-centric empathy with modern AI workflows to craft remarkable digital experiences.',
  email: 'sabahameednoor@gmail.com',
  github: 'https://github.com/sabahameed',
  linkedin: 'https://linkedin.com/in/sabahameed',
  upwork: 'https://upwork.com/freelancers/~sabahameed',
  fiverr: 'https://fiverr.com/sabahameed',
  stats: [
    { label: 'AI Products Designed', value: '35+' },
    { label: 'Years Experience', value: '4+' },
    { label: 'Client Satisfaction', value: '99%' },
    { label: 'Content Reach', value: '1M+' }
  ],
  avatar: '/src/assets/images/saba_podcast_cover_1784659368801.jpg'
};

export const PROJECTS: Project[] = [
  {
    id: 'high-impact-workout-plan',
    title: 'High-Impact Workout Plan App — Vibe Coded Suite',
    subtitle: 'Interactive fitness routine platform built with AI Vibe Coding',
    description: 'A dynamic, high-impact workout plan design web application created using AI Vibe Coding methodologies. Features customized exercise routines, visual progress trackers, and fluid responsive layouts.',
    category: 'AI Product Design',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    tags: ['Vibe Coding', 'AI Product Design', 'Interactive App', 'Generative UI', 'Fitness UX'],
    featured: true,
    liveUrl: 'https://sabahameednoor-source.github.io/high-Impact-Workout-Plan-Design/',
    completionYear: '2026',
    client: 'Vibe Coding Showcase',
    duration: '1 Week',
    keyFeatures: [
      'Built entirely using AI Vibe Coding rapid generation methodologies',
      'Interactive workout schedule, calorie targets & intensity breakdown',
      'Dynamic exercise routine cards with visual muscle group indicators',
      'Mobile-first responsive design deployed directly to GitHub Pages'
    ],
    architecture: [
      'Creation Method: AI Vibe Coding Prompt Orchestration',
      'Frontend Stack: HTML5, Modern CSS Grid/Flexbox, JavaScript',
      'Deployment: GitHub Pages automated CI/CD pipeline'
    ],
    metrics: [
      { label: 'Vibe Code Velocity', value: 'Instant' },
      { label: 'User Rating', value: '5.0/5' },
      { label: 'Deployment', value: 'Live' }
    ]
  },
  {
    id: 'omni-ai-design-system',
    title: 'OmniAI Design Suite - AI Generative UI & Content Suite',
    subtitle: 'Multi-modal tokens, prompt patterns & adaptive component framework',
    description: 'A comprehensive AI-driven product interface and content creation workbench built for next-generation applications. Features adaptive UI components, real-time prompt engineering presets, and multi-modal canvas layouts.',
    category: 'AI Product Design',
    image: '/src/assets/images/project_ai_workspace_1784657232067.jpg',
    tags: ['AI Product Design', 'Generative UI', 'Prompt Engineering', 'Gemini API', 'AI Workflows'],
    featured: true,
    liveUrl: 'https://omniai-design.demo',
    githubUrl: 'https://github.com/sabahameed/omni-ai-design-system',
    completionYear: '2026',
    client: 'AI Creator Labs',
    duration: '3 Months',
    keyFeatures: [
      'Multi-modal prompt UI pattern library with 40+ pre-designed AI interface states',
      'Adaptive component architecture for streaming text, voice, and generated imagery',
      'Comprehensive tokens for light and dark luxury editorial themes',
      'Drag-and-drop prompt node graph interface for content workflow automation',
      'Accessible WCAG AA compliant layout and contrast patterns'
    ],
    architecture: [
      'AI System: Component Tokens, Variables, & Micro-Interaction Patterns',
      'Frontend: React 19 SPA with Motion animation framework',
      'AI Integration: Server-proxied Gemini API for live multi-modal content previews'
    ],
    metrics: [
      { label: 'System Adoption', value: '100%' },
      { label: 'User Efficiency Gain', value: '+45%' },
      { label: 'Satisfaction Score', value: '4.9/5' }
    ]
  },
  {
    id: 'aura-creative-studio',
    title: 'Aura Vision AI - Creative Suite for AI Content Creators',
    subtitle: 'Visual content studio, multi-modal asset generator & brand story canvas',
    description: 'A sleek, high-converting digital platform enabling content creators and brand teams to generate visual storylines, high-res social media graphics, and structured video scripts powered by multi-modal AI.',
    category: 'Content Creation',
    image: '/src/assets/images/project_saas_dashboard_1784657193425.jpg',
    tags: ['Content Strategy', 'Visual Storytelling', 'AI Video Ads', 'React', 'Motion', 'Gemini API'],
    featured: true,
    liveUrl: 'https://auravision-ai.demo',
    githubUrl: 'https://github.com/sabahameed/aura-vision-studio',
    completionYear: '2025',
    client: 'Aura Media Group',
    duration: '2.5 Months',
    keyFeatures: [
      'Interactive visual storyboarding canvas with live AI visual previews',
      'Custom brand voice & content style guide generator',
      'Multi-platform export engine for Instagram, LinkedIn, YouTube, and Web',
      'Real-time content performance analytics dashboard with reach insights',
      'Editorial typography and high-contrast editorial theme'
    ],
    architecture: [
      'Product UX: Complete Storyboards, Wireframes, & Visual Design',
      'Frontend: Next.js App Router with responsive layout',
      'Asset Engine: Imagen and Gemini API multi-modal prompt pipeline'
    ],
    metrics: [
      { label: 'Content Creation Speed', value: '3x Faster' },
      { label: 'Monthly Active Creators', value: '18,000+' },
      { label: 'App Store Rating', value: '4.9/5' }
    ]
  },
  {
    id: 'promptcraft-platform',
    title: 'PromptCraft - Interactive Prompt Engineering Studio',
    subtitle: 'Prompt testing playground, version control & visual UI workflow builder',
    description: 'An intuitive workspace designed for prompt engineers and product creators to build, test, and refine multi-turn conversational flows, system instructions, and dynamic UI cards.',
    category: 'Prompt UX & Tools',
    image: '/src/assets/images/project_ecommerce_app_1784657211763.jpg',
    tags: ['Prompt UX', 'Product Design', 'TypeScript', 'AI Studio', 'Gemini API'],
    featured: true,
    liveUrl: 'https://promptcraft-studio.demo',
    githubUrl: 'https://github.com/sabahameed/promptcraft-studio',
    completionYear: '2025',
    client: 'PromptCraft Technologies',
    duration: '2 Months',
    keyFeatures: [
      'Visual prompt builder with syntax highlighting and variable substitution',
      'Side-by-side prompt output evaluation tool with qualitative metrics',
      'Template library with 60+ curated prompt patterns for marketing & product UX',
      'One-click export to TypeScript SDK, JSON schemas, and AI component specs'
    ],
    architecture: [
      'Product UX: End-to-end design, usability testing, and interactive workflows',
      'Tech Stack: React 19, TypeScript, Node.js Express server with Gemini API proxy'
    ],
    metrics: [
      { label: 'Evaluations Run', value: '350,000+' },
      { label: 'Design Satisfaction', value: '98%' }
    ]
  },
  {
    id: 'luxe-brand-engine',
    title: 'Luxe Visual Brand Engine - Automated Brand Identity & Content System',
    subtitle: 'High-end luxury brand asset suite and automated marketing collateral generator',
    description: 'A bespoke brand design platform crafting high-end visual identities, editorial typography hierarchies, color palettes, and marketing campaign creative assets.',
    category: 'Brand & Content',
    image: 'https://picsum.photos/seed/luxebrand/1200/675',
    tags: ['Brand Strategy', 'Content Creation', 'AI Visuals', 'Brand Kit'],
    featured: false,
    liveUrl: 'https://luxebrand-engine.demo',
    githubUrl: 'https://github.com/sabahameed/luxe-brand-engine',
    completionYear: '2024',
    client: 'Luxe Global Agencies',
    duration: '1.5 Months',
    keyFeatures: [
      'Automated brand guide generator with high-resolution typography specimens',
      'Social media banner and ad campaign batch designer',
      'Interactive color contrast inspector and accessibility validator'
    ],
    architecture: [
      'Design: Master Tokens & Visual Brand Guidelines',
      'Implementation: React 19 web application with Custom Styling'
    ],
    metrics: [
      { label: 'Brand Collateral Generated', value: '50,000+' },
      { label: 'Client Net Promoter Score', value: '96%' }
    ]
  },
  {
    id: 'healthsync-care-design',
    title: 'HealthSync - Telehealth & AI Patient Experience Design',
    subtitle: 'Human-centered medical care portal, booking UX & AI symptom assistant',
    description: 'Accessible WCAG AA compliant patient care application featuring intuitive appointment scheduling, telehealth consultation UX, and empathetic AI chat UI.',
    category: 'AI Product Design',
    image: 'https://picsum.photos/seed/healthsync/1200/675',
    tags: ['AI Care Experience', 'Accessibility', 'Visual Design', 'React', 'Human-Centered Design'],
    featured: false,
    liveUrl: 'https://healthsync-design.demo',
    githubUrl: 'https://github.com/sabahameed/healthsync-patient-ux',
    completionYear: '2024',
    client: 'HealthSync Global',
    duration: '1.5 Months',
    keyFeatures: [
      'High-legibility editorial typography paired with warm accessible palette',
      'Intuitive 3-step appointment scheduling flow',
      'Empathetic conversational AI chat interface design'
    ],
    architecture: [
      'Design Research: User Interviews, Journey Maps, Interactive Flow Maps',
      'Frontend: React SPA implementation with Modular CSS'
    ],
    metrics: [
      { label: 'Accessibility Score', value: '100%' },
      { label: 'User Testing Score', value: '4.9/5' }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI Product Design & Systems',
    description: 'Designing human-centered AI products, generative UI interfaces, multi-modal interactions, and visual component systems.',
    skills: [
      { name: 'Generative Interface Design', level: 96, experience: '4 Yrs', iconName: 'Sparkles', tag: 'Core Discipline', featured: true },
      { name: 'AI Product Tokens & Systems', level: 98, experience: '4 Yrs', iconName: 'Component', tag: 'Design System', featured: true },
      { name: 'Prompt Engineering & UX', level: 94, experience: '3 Yrs', iconName: 'Bot', tag: 'AI Design', featured: true },
      { name: 'Wireframing & Interface Flows', level: 95, experience: '4 Yrs', iconName: 'Layout', tag: 'UI Process', featured: true },
      { name: 'User Research & Journey Mapping', level: 90, experience: '4 Yrs', iconName: 'Globe', tag: 'Research' },
      { name: 'Accessibility (WCAG AA)', level: 92, experience: '3.5 Yrs', iconName: 'Check', tag: 'Standards' }
    ]
  },
  {
    title: 'Content Creation & Strategy',
    description: 'Crafting compelling visual stories, brand copy, video assets, social media campaigns, and AI prompts.',
    skills: [
      { name: 'Content Strategy & Copywriting', level: 95, experience: '4 Yrs', iconName: 'PenTool', tag: 'Content', featured: true },
      { name: 'Visual Storytelling & Branding', level: 96, experience: '4 Yrs', iconName: 'Palette', tag: 'Branding', featured: true },
      { name: 'Multi-Modal Prompts (Text/Image)', level: 92, experience: '3 Yrs', iconName: 'Zap', tag: 'Generative', featured: true },
      { name: 'Video & Motion Content Design', level: 88, experience: '3 Yrs', iconName: 'Video', tag: 'Motion' },
      { name: 'Social Media Campaign Strategy', level: 90, experience: '4 Yrs', iconName: 'Share2', tag: 'Marketing' }
    ]
  },
  {
    title: 'Design Technologies & AI Tools',
    description: 'Leveraging modern creative platforms, visual AI tools, and generative AI engines.',
    skills: [
      { name: 'Design Tokens & Variables', level: 98, experience: '4 Yrs', iconName: 'Component', tag: 'Design Systems', featured: true },
      { name: 'Gemini API & AI Pipelines', level: 90, experience: '2.5 Yrs', iconName: 'Bot', tag: 'AI Integration', featured: true },
      { name: 'Midjourney & Imagen Workflows', level: 94, experience: '3 Yrs', iconName: 'Sparkles', tag: 'Visual AI' },
      { name: 'React 19 & Custom Layouts', level: 90, experience: '3.5 Yrs', iconName: 'Code2', tag: 'Frontend' },
      { name: 'Framer & Webflow', level: 88, experience: '3 Yrs', iconName: 'Layers', tag: 'Web Builder' }
    ]
  },
  {
    title: 'Strategy & Brand Growth',
    description: 'Aligning product goals with user behavior, content distribution, and measurable business growth.',
    skills: [
      { name: 'Brand Strategy & Positioning', level: 92, experience: '4 Yrs', iconName: 'Award', tag: 'Strategy', featured: true },
      { name: 'Product Analytics & Usability', level: 88, experience: '3 Yrs', iconName: 'Network', tag: 'Analytics' },
      { name: 'Design Thinking Workshops', level: 90, experience: '3.5 Yrs', iconName: 'Layers', tag: 'Facilitation' }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Lead AI Product Designer & Content Strategist',
    company: 'Saba Hameed Studio / Freelance',
    location: 'Remote',
    type: 'Studio / Contract',
    period: '2023 - Present',
    description: 'Designing end-to-end AI product user experiences, multi-modal prompt design systems, and visual content strategies for international startups and creative agencies.',
    achievements: [
      'Designed and launched 25+ AI-driven product interfaces and design systems with 100% on-time delivery',
      'Crafted content creation workflows and prompt design libraries reaching over 1,000,000 global impressions',
      'Collaborated with engineering teams to integrate Gemini AI models smoothly into responsive web apps',
      'Established comprehensive design token systems that reduced handoff times by 50%'
    ],
    techStack: ['AI Product Design', 'Prompt Engineering', 'Gemini API', 'React', 'Content Strategy']
  },
  {
    id: 'exp-2',
    role: 'Senior Product Designer',
    company: 'Apex Creative Labs',
    location: 'Hybrid',
    type: 'Full-time',
    period: '2022 - 2023',
    description: 'Spearheaded product design, user research, and UI component systems for high-growth SaaS web platforms.',
    achievements: [
      'Redesigned core SaaS user dashboard, boosting task completion rate by 40%',
      'Created a unified multi-brand design system with over 200 reusable UI components',
      'Mentored junior designers and established team design review guidelines and creative workflows'
    ],
    techStack: ['Product Design', 'Design Systems', 'User Research', 'Interface Flows', 'React']
  },
  {
    id: 'exp-3',
    role: 'Visual Content Creator & Designer',
    company: 'Creative Byte Agency',
    location: 'On-site',
    type: 'Full-time',
    period: '2021 - 2022',
    description: 'Produced visual marketing collateral, editorial web designs, and brand storytelling campaigns for retail and digital clients.',
    achievements: [
      'Designed 30+ brand identity packages and responsive marketing landing pages',
      'Developed content calendars and social media visual assets driving a 65% boost in client engagement',
      'Maintained 100% WCAG AA accessibility compliance across all digital web designs'
    ],
    techStack: ['Content Creation', 'Adobe Creative Cloud', 'HTML/CSS', 'Brand Strategy']
  }
];

export const SERVICES: Service[] = [
  {
    id: 'srv-aidesign',
    title: 'AI Product Design',
    description: 'End-to-end AI product design, generative user interface layouts, component design systems, and interactive experience flows.',
    iconName: 'Sparkles',
    startingPrice: '$800',
    popular: true,
    features: [
      'Custom Generative Interface Design System',
      'Master Component Tokens & Styles',
      'Interactive Micro-Interaction Flows',
      'Multi-Modal AI Interface Design Patterns',
      'User Flow & Wireframe Documentation',
      'Hand-off Specifications for Developers'
    ]
  },
  {
    id: 'srv-content',
    title: 'Content Creation & Brand Strategy',
    description: 'High-impact visual stories, AI-driven content creation workflows, copywriting, social media campaigns, and brand identity systems.',
    iconName: 'PenTool',
    startingPrice: '$550',
    popular: false,
    features: [
      'Visual Storytelling & Brand Identity Package',
      'Multi-Platform Content Strategy & Copy',
      'AI-Generated Visual Assets & Imagery',
      'Social Media & Marketing Graphics Kit',
      'Editorial Style Guide & Brand Book'
    ]
  },
  {
    id: 'srv-prompt',
    title: 'Prompt Design & AI Workflow Setup',
    description: 'Designing structured multi-turn prompt templates, custom AI concierge personas, and automated content generation workflows.',
    iconName: 'Bot',
    startingPrice: '$450',
    popular: false,
    features: [
      'Custom Gemini AI System Instruction Prompting',
      'Multi-Turn Conversational UX Design',
      'Content Generation Automation Templates',
      'Rate Limit & AI Guardrail Strategy',
      'Integration Guidelines for Engineering'
    ]
  },
  {
    id: 'srv-refine',
    title: 'Design System & UI Refinement',
    description: 'Elevating existing digital products with modern editorial typography, sleek contrast ratios, fluid layout spacing, and accessibility polish.',
    iconName: 'LayoutGrid',
    startingPrice: '$350',
    popular: false,
    features: [
      'UI/UX Heuristic Audit & Performance Polish',
      'Tailwind CSS Styling & Theme Tokens',
      'Lighthouse Accessibility (WCAG AA) Audit',
      'Responsive Mobile & Desktop Optimization'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Alexander Wright',
    role: 'Product Director',
    company: 'AI Creator Labs',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    content: 'Saba is an outstanding AI Product Designer. She designed our AI creative studio interface with incredible attention to detail, clear prompt UX, and gorgeous typography. Our user retention skyrocketed!',
    rating: 5,
    projectType: 'AI Product Design'
  },
  {
    id: 't-2',
    name: 'Sophia Martinez',
    role: 'Head of Brand',
    company: 'Aura Luxury Global',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    content: 'Saba transformed our entire brand content strategy and product interface. Her ability to translate complex AI workflows into seamless, elegant user experiences is truly world class.',
    rating: 5,
    projectType: 'Content & Brand Strategy'
  },
  {
    id: 't-3',
    name: 'David Chen',
    role: 'Founder & CEO',
    company: 'PromptCraft Tech',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    content: 'Working with Saba was a seamless experience. She designed our prompt engineering playground with extreme precision and craft. Highly recommended for any team building next-gen AI products.',
    rating: 5,
    projectType: 'AI Tool Design'
  }
];
