export type BlogBlock =
  | { type: 'text'; content: string }
  | { type: 'heading'; level: 2 | 3; content: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; youtubeId: string; title?: string }
  | { type: 'code'; language: string; content: string; caption?: string }
  | { type: 'quote'; content: string; author?: string }
  | { type: 'link'; url: string; label: string; description?: string };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  readTime: string;
  coverImage?: string;
  blocks: BlogBlock[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-i-learn-flutter',
    title: 'How I Learn Flutter by Building',
    date: '2026-03-15',
    tag: 'Learning',
    excerpt: 'My path from internships to production apps — and why I stopped tutorial-hopping.',
    readTime: '6 min',
    coverImage: '/assets/master-builder.png',
    blocks: [
      { type: 'text', content: 'Most tutorials teach syntax. Production teaches judgment. Here is the loop I use when picking up something new in Flutter.' },
      { type: 'heading', level: 2, content: 'The build loop' },
      { type: 'text', content: 'I start with a thin vertical slice: one screen, one API call, one state flow. Once that works end-to-end, I expand outward — never the other way around.' },
      { type: 'code', language: 'dart', caption: 'Riverpod pattern I reach for first', content: `@riverpod
Future<User> user(UserRef ref, String id) async {
  final response = await ref.read(apiProvider).getUser(id);
  return User.fromJson(response.data);
}` },
      { type: 'heading', level: 3, content: 'Watch this' },
      { type: 'video', youtubeId: 'x0uinJvhNxI', title: 'Flutter state management overview' },
      { type: 'quote', content: 'The best way to learn a framework is to ship something imperfect and fix it in public.', author: 'Personal note' },
      { type: 'link', url: 'https://docs.flutter.dev', label: 'Flutter Docs', description: 'Still the first place I go for official patterns.' },
    ],
  },
  {
    slug: 'product-thinking-for-engineers',
    title: 'Product Thinking for Engineers',
    date: '2026-02-20',
    tag: 'Perspective',
    excerpt: 'Why the best engineers I know ask "who is this for?" before "how do we build it?"',
    readTime: '5 min',
    blocks: [
      { type: 'text', content: 'Engineering excellence without product sense builds fast in the wrong direction. These questions sit on my desk before every sprint.' },
      { type: 'heading', level: 2, content: 'Three questions' },
      { type: 'text', content: '1. What decision is the user trying to make?\n2. What does success look like for them in 30 seconds?\n3. What can we remove?' },
      { type: 'image', src: '/assets/strategize.png', alt: 'Strategy platform UI', caption: 'Cascading objectives — clarity at every level matters.' },
      { type: 'heading', level: 2, content: 'Further reading' },
      { type: 'link', url: 'https://www.amazon.com/Inspired-Create-Tech-Products-Customers/dp/1119387507', label: 'Inspired — Marty Cagan', description: 'Product discovery for tech teams.' },
    ],
  },
  {
    slug: 'deep-work-developer-routine',
    title: 'A Developer Routine That Actually Sticks',
    date: '2026-01-10',
    tag: 'Productivity',
    excerpt: 'Blocks, boundaries, and why I treat focus like infrastructure.',
    readTime: '4 min',
    blocks: [
      { type: 'text', content: 'Productivity is not about doing more — it is about protecting the hours where hard thinking happens.' },
      { type: 'video', youtubeId: 'hSGt_rhu49U', title: 'Ali Abdaal on deep work' },
      { type: 'code', language: 'markdown', caption: 'My daily template', content: `## Morning (deep)
- 1 hard engineering task
- No Slack until block ends

## Afternoon (collab)
- PRs, sync, documentation

## Evening (light)
- Reading, notes, blog drafts` },
      { type: 'quote', content: 'Clarity about priorities is the real productivity hack.', author: 'Cal Newport — paraphrased' },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
