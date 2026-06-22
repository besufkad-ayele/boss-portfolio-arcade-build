export type MediaType = 'book' | 'movie' | 'youtube';

export interface MediaItem {
  type: MediaType;
  title: string;
  creator?: string;
  url: string;
  image?: string;
  note?: string;
}

export interface Perspective {
  id: 'code' | 'productivity' | 'philosophy';
  title: string;
  subtitle: string;
  beliefs: { title: string; body: string }[];
  media: MediaItem[];
}

export const PERSPECTIVES: Perspective[] = [
  {
    id: 'code',
    title: 'Programming',
    subtitle: 'How I think about software',
    beliefs: [
      { title: 'Systems over snippets', body: 'I care about architecture, boundaries, and how code evolves — not just making it work once.' },
      { title: 'Types are documentation', body: 'Strong typing and clear interfaces reduce cognitive load for future me and my team.' },
      { title: 'Mobile + web + API as one product', body: 'The best experiences feel seamless whether the user is on Flutter, Next.js, or an API consumer.' },
    ],
    media: [
      {
        type: 'book',
        title: 'Clean Code',
        creator: 'Robert C. Martin',
        url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
        image: 'https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL.jpg',
        note: 'Naming, structure, and craftsmanship fundamentals.',
      },
      {
        type: 'youtube',
        title: 'Fireship',
        creator: 'Fireship',
        url: 'https://www.youtube.com/@Fireship',
        note: 'Quick, opinionated tech breakdowns — great for scanning new tools.',
      },
    ],
  },
  {
    id: 'productivity',
    title: 'Productivity',
    subtitle: 'How I work and focus',
    beliefs: [
      { title: 'Deep work blocks', body: '2–3 hour focused sessions for hard problems; shallow tasks batched separately.' },
      { title: 'One inbox, many outputs', body: 'Capture ideas fast, process deliberately — notes feed blog posts and project decisions.' },
      { title: 'Energy management', body: 'Hardest engineering work in peak hours; meetings and admin when focus is lower.' },
    ],
    media: [
      {
        type: 'book',
        title: 'Deep Work',
        creator: 'Cal Newport',
        url: 'https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692',
        image: 'https://m.media-amazon.com/images/I/41aLX4X3l2L._SY445_SX342_FMwebp_.jpg',
        note: 'Focus as a competitive advantage.',
      },
      {
        type: 'youtube',
        title: 'Ali Abdaal',
        creator: 'Ali Abdaal',
        url: 'https://www.youtube.com/@aliabdaal',
        note: 'Systems thinking applied to learning and productivity.',
      },
    ],
  },
  {
    id: 'philosophy',
    title: 'Philosophy',
    subtitle: 'Principles behind the work',
    beliefs: [
      { title: 'Build for people', body: 'Technology is a means — impact on users, fellows, and communities is the measure.' },
      { title: 'Long-term craft', body: 'Reputation compounds. I optimize for trust, reliability, and continuous improvement.' },
      { title: 'Stay curious', body: 'The field changes fast; humility and curiosity keep the work meaningful.' },
    ],
    media: [
      {
        type: 'movie',
        title: 'The Social Network',
        creator: 'David Fincher',
        url: 'https://www.imdb.com/title/tt1285016/',
        image: 'https://m.media-amazon.com/images/M/MV5BNjY2NjI2NDUtNGIyZC00ZmZkLTk5MmMtYzM5NjM1ZjIyN2Q5XkEyXkFqcGc@._V1_.jpg',
        note: 'Ambition, speed, and the cost of building — a cautionary builder story.',
      },
      {
        type: 'movie',
        title: 'Interstellar',
        creator: 'Christopher Nolan',
        url: 'https://www.imdb.com/title/tt0816692/',
        image: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWI5NTZiXkEyXkFqcGc@._V1_.jpg',
        note: 'Persistence, love, and solving impossible problems — resonates with engineering.',
      },
    ],
  },
];

export const FAVORITE_MOVIES: MediaItem[] = PERSPECTIVES.find((p) => p.id === 'philosophy')!.media.filter((m) => m.type === 'movie');
