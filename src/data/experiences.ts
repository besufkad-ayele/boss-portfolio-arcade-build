export interface Experience {
  slug: string;
  period: string;
  type: string;
  role: string;
  company: string;
  location: string;
  overview: string;
  bullets: string[];
  technologies: string[];
  achievements: { label: string; value: string }[];
}

export const EXPERIENCES: Experience[] = [
  {
    slug: 'i-capital-africa',
    period: 'Oct 2025 — Present',
    type: 'Full-time · Onsite',
    role: 'Full-Stack Developer',
    company: 'i-Capital Africa Institute',
    location: 'Addis Ababa, Ethiopia',
    overview:
      'Leading full-stack development across multiple production platforms at i-Capital Africa Institute — an innovation hub training fellows and building products for African organizations. Responsible for architecture, delivery, and cross-platform integration.',
    bullets: [
      'Led development of MasterBuilderLab LMS — a production platform serving 200+ active fellows across 3+ organizations using Next.js, NestJS, and Flutter.',
      'Architected GraphQL APIs for efficient data fetching across web and mobile clients, reducing data-retrieval latency significantly.',
      'Contributed to a driver\'s platform, Tele-birr mini-app, and Investify investment platform with full-stack Flutter/Next.js/NestJS architecture.',
      'Designed microservices-based backend systems in NestJS, improving modularity and scalability across multiple products.',
    ],
    technologies: ['Next.js', 'NestJS', 'Flutter', 'GraphQL', 'PostgreSQL', 'Firebase', 'AWS'],
    achievements: [
      { label: 'Active Fellows', value: '200+' },
      { label: 'Organizations', value: '4+' },
      { label: 'Products Shipped', value: '5+' },
      { label: 'Stack', value: 'Full-Stack' },
    ],
  },
  {
    slug: 'church-management-system',
    period: 'Feb 2025 — Present',
    type: 'Freelance · Remote',
    role: 'Full-Stack Laravel Developer',
    company: 'Church Management System',
    location: 'Remote',
    overview:
      'Designed and delivered a modular Church Management System for organizational workflows — covering membership, events, finances, and role-based administration through a polished Filament admin panel.',
    bullets: [
      'Designed and built a full-stack Church Management System using Laravel and Filament with modular architecture.',
      'Implemented role-based access control, relational database design (MySQL/PostgreSQL), and dynamic admin dashboards.',
      'Ensured data integrity and security across sensitive organizational workflows.',
    ],
    technologies: ['Laravel', 'Filament', 'MySQL', 'PostgreSQL', 'PHP', 'Livewire'],
    achievements: [
      { label: 'Architecture', value: 'Modular' },
      { label: 'Admin Panel', value: 'Filament' },
      { label: 'Security', value: 'RBAC' },
      { label: 'Status', value: 'Active' },
    ],
  },
  {
    slug: 'quadrant-innovations',
    period: 'Mar 2024 — Sep 2024',
    type: 'Internship · Onsite',
    role: 'Flutter Developer Intern',
    company: 'Quadrant Innovations',
    location: 'Addis Ababa, Ethiopia',
    overview:
      'Flutter development internship focused on building and maintaining production mobile applications. Gained hands-on experience with state management, debugging, and collaborative Git workflows in an agile team.',
    bullets: [
      'Developed and maintained Flutter mobile applications using Provider state management and Git version control.',
      'Built core features, resolved complex bugs, improving app stability and reducing crash rates during testing.',
    ],
    technologies: ['Flutter', 'Dart', 'Provider', 'Git', 'Firebase', 'REST APIs'],
    achievements: [
      { label: 'Focus', value: 'Mobile' },
      { label: 'State Mgmt', value: 'Provider' },
      { label: 'Impact', value: 'Stability' },
      { label: 'Duration', value: '6 months' },
    ],
  },
  {
    slug: 'quantum-technologies',
    period: 'Jul 2023 — Aug 2023',
    type: 'Internship · Onsite',
    role: 'Flutter Developer Intern',
    company: 'Quantum Technologies',
    location: 'Addis Ababa, Ethiopia',
    overview:
      'Early-career Flutter internship emphasizing clean architecture, reusable widget libraries, and testable code organization using Provider pattern and separation of concerns.',
    bullets: [
      'Applied clean code principles and modular architecture to build reusable Flutter widgets with Dart.',
      'Organized app logic with Provider and clear separation of concerns, enabling scalable and testable codebase.',
    ],
    technologies: ['Flutter', 'Dart', 'Provider', 'Git'],
    achievements: [
      { label: 'Focus', value: 'Architecture' },
      { label: 'Pattern', value: 'Provider' },
      { label: 'Widgets', value: 'Reusable' },
      { label: 'Duration', value: '2 months' },
    ],
  },
];

export function getExperienceBySlug(slug: string): Experience | undefined {
  return EXPERIENCES.find((e) => e.slug === slug);
}
