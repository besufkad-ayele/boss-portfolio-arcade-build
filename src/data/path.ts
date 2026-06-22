export interface PathMilestone {
  period: string;
  title: string;
  description: string;
  focus: string[];
}

export interface BuildPrinciple {
  title: string;
  description: string;
  icon: string;
}

export const LEARN_PATH: PathMilestone[] = [
  {
    period: '2023',
    title: 'Foundations',
    description: 'Started with Flutter internships — learning by shipping features, fixing bugs, and reading code written by seniors.',
    focus: ['Dart', 'Provider', 'Git', 'Mobile UI'],
  },
  {
    period: '2024',
    title: 'Full-Stack Expansion',
    description: 'Moved into NestJS, Next.js, and system design. Built production apps serving thousands of users.',
    focus: ['Next.js', 'NestJS', 'GraphQL', 'AWS'],
  },
  {
    period: '2025 — Now',
    title: 'Product & AI',
    description: 'Combining engineering with product design and AI integration — shipping platforms, not just features.',
    focus: ['Flutter', 'AI/ML', 'Product Design', 'Microservices'],
  },
];

export const LEARN_HABITS = [
  { title: 'Build first', detail: 'I learn fastest when I have a real problem to solve — tutorials follow projects, not the other way around.' },
  { title: 'Read the source', detail: 'When stuck, I read framework source, docs, and production codebases before asking for help.' },
  { title: 'Ship & iterate', detail: 'Small releases beat perfect plans. Feedback from real users teaches more than speculation.' },
  { title: 'Teach to solidify', detail: 'Writing notes, mentoring fellows, and explaining architecture locks in understanding.' },
];

export const BUILD_PRINCIPLES: BuildPrinciple[] = [
  { title: 'Clarity over cleverness', description: 'Readable code and clear APIs outlast clever abstractions.', icon: '◈' },
  { title: 'Design the data flow', description: 'I map state, boundaries, and failure modes before writing UI.', icon: '◎' },
  { title: 'Measure in production', description: 'Logs, metrics, and user behavior beat assumptions.', icon: '△' },
  { title: 'Polish the edges', description: 'Loading states, errors, and empty screens separate good from great.', icon: '◇' },
];
