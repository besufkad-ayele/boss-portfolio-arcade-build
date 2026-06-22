export interface Project {
  slug: string;
  tag: string;
  year: string;
  title: string;
  desc: string;
  overview: string;
  highlights: string[];
  outcomes: { label: string; value: string }[];
  tech: string[];
  link: string;
  featured?: boolean;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    slug: 'ada-ai-hospitality',
    tag: 'Hackathon Winner',
    year: 'Apr 2026',
    title: 'Ada — AI Hospitality Revenue Platform',
    desc: 'AI-driven hospitality platform designed to increase revenue by up to 45% using predictive pricing models, event-based forecasting, and Groq-powered conversational AI with WhatsApp bot workflows.',
    overview:
      'Ada is an AI hospitality revenue platform built during a hackathon to help Ethiopian hotels maximize occupancy and pricing. The system combines predictive ML models, local event data, and conversational AI to recommend dynamic rates and packages in real time.',
    highlights: [
      'Groq-powered conversational AI for guest inquiries via WhatsApp bot workflows',
      'Dynamic pricing engine using event-based forecasting and demand signals',
      'Guest segmentation across 8 distinct traveler profiles for targeted offers',
      'Package recommender that increased acceptance rates to 60%',
      'Real-time dashboard for revenue managers with actionable insights',
    ],
    outcomes: [
      { label: 'Revenue Increase', value: '+25%' },
      { label: 'Package Acceptance', value: '60%' },
      { label: 'Guest Segments', value: '8' },
      { label: 'Event Tracking', value: '24/7' },
    ],
    tech: ['Next.js', 'FastAPI', 'Groq API', 'WhatsApp Bot', 'ML', 'Python', 'Vercel'],
    link: 'https://ada-22xq-eosin.vercel.app/landing',
    featured: true,
    image: '/assets/ada.png',
  },
  {
    slug: 'masterbuilder-lab',
    tag: 'Production',
    year: '2026',
    title: 'MasterBuilder Lab LMS',
    desc: 'Scalable Learning Management System supporting structured training programs used by 200+ fellows and 3+ organizations.',
    overview:
      'MasterBuilder Lab is a production Learning Management System powering structured fellowship programs across Africa. It supports multi-organization cohorts, progress tracking, and cross-platform access via web and mobile.',
    highlights: [
      'Multi-tenant architecture supporting 3+ organizations on a single platform',
      'Structured curriculum paths with modules, assessments, and certificates',
      'GraphQL APIs for efficient data sync between Next.js web and Flutter mobile',
      'Real-time progress dashboards for program administrators',
      'Firebase-backed auth and notifications for fellow engagement',
    ],
    outcomes: [
      { label: 'Active Fellows', value: '200+' },
      { label: 'Organizations', value: '3+' },
      { label: 'Platforms', value: 'Web + Mobile' },
      { label: 'Status', value: 'Live' },
    ],
    tech: ['Next.js', 'NestJS', 'Flutter', 'Firebase', 'GraphQL', 'PostgreSQL'],
    link: 'https://masterbuilderlab.com/',
    image: '/assets/master-builder.png',
  },
  {
    slug: 'strategize',
    tag: 'Enterprise',
    year: 'Oct 2025 – Jul 2026',
    title: 'Strategize — Strategy Execution Platform',
    desc: 'Enterprise strategy platform enabling cascading objectives from organizational to individual levels with real-time progress tracking and notifications.',
    overview:
      'Strategize is an enterprise strategy execution platform that aligns organizational goals with team and individual objectives. Leaders define OKRs at every level while employees track progress in real time.',
    highlights: [
      'Cascading objective trees from company → department → individual',
      'Real-time progress tracking with automated status updates',
      'GraphQL-powered data layer for performant nested queries',
      'Notification system for deadline reminders and milestone achievements',
      'Role-based dashboards for executives, managers, and contributors',
    ],
    outcomes: [
      { label: 'Objective Levels', value: '3-tier' },
      { label: 'Updates', value: 'Real-time' },
      { label: 'Architecture', value: 'Microservices' },
      { label: 'Status', value: 'Production' },
    ],
    tech: ['Next.js', 'NestJS', 'GraphQL', 'Real-time', 'PostgreSQL', 'Redis'],
    link: 'https://strategize.frontiertech.org',
    image: '/assets/strategize.png',
  },
  {
    slug: 'majeat',
    tag: 'Mobile App',
    year: 'Jun – Jul 2024',
    title: 'Majeat Food Delivery',
    desc: 'Production-ready food delivery app supporting 10K+ users with real-time order management, group ordering, and dynamic coordination.',
    overview:
      'Majeat is a production food delivery application built with Flutter and Firebase, designed for the Ethiopian market. It handles real-time order flows, group ordering for offices, and dynamic rider coordination.',
    highlights: [
      'Real-time order tracking with Firebase Cloud Messaging notifications',
      'Group ordering feature for shared meals and split payments',
      'Dynamic rider assignment and route coordination',
      'Restaurant menu management with availability toggles',
      'Scalable architecture supporting 10K+ registered users',
    ],
    outcomes: [
      { label: 'Users', value: '10K+' },
      { label: 'Platform', value: 'iOS + Android' },
      { label: 'Stack', value: 'Flutter' },
      { label: 'Status', value: 'Production' },
    ],
    tech: ['Flutter', 'Firebase', 'Node.js', 'Dart', 'Cloud Functions'],
    link: 'https://github.com/besufkad-ayele/majeat_Flutter',
    image: '/placeholder.svg',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
