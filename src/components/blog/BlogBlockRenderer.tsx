import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { BlogBlock } from '@/data/blog';

interface BlogBlockRendererProps {
  blocks: BlogBlock[];
}

const BlogBlockRenderer: React.FC<BlogBlockRendererProps> = ({ blocks }) => {
  return (
    <div className="space-y-8">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'text':
            return (
              <p key={idx} className="text-[15px] md:text-[16px] leading-[1.85] text-[var(--warm-gray)] whitespace-pre-line">
                {block.content}
              </p>
            );

          case 'heading':
            return block.level === 2 ? (
              <h2 key={idx} className="font-['Bebas_Neue'] text-[28px] md:text-[36px] tracking-[1px] text-[var(--off-white)] pt-4">
                {block.content}
              </h2>
            ) : (
              <h3 key={idx} className="font-['DM_Serif_Display'] text-[20px] md:text-[22px] text-[var(--off-white)] pt-2">
                {block.content}
              </h3>
            );

          case 'image':
            return (
              <figure key={idx} className="border border-[var(--line)] overflow-hidden">
                <img src={block.src} alt={block.alt} className="w-full max-h-[400px] object-contain bg-[rgba(255,255,255,0.02)]" />
                {block.caption && (
                  <figcaption className="px-4 py-3 font-['DM_Mono'] text-[10px] tracking-[1px] text-[var(--warm-gray)] border-t border-[var(--line)]">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case 'video':
            return (
              <div key={idx} className="space-y-3">
                {block.title && (
                  <p className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-[var(--gold)]">{block.title}</p>
                )}
                <div className="relative aspect-video border border-[var(--line)] overflow-hidden bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${block.youtubeId}`}
                    title={block.title ?? 'Video'}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            );

          case 'code':
            return (
              <div key={idx} className="space-y-2">
                {block.caption && (
                  <p className="font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-[var(--gold)]">{block.caption}</p>
                )}
                <pre className="overflow-x-auto border border-[var(--line)] bg-[rgba(255,255,255,0.03)] p-4 md:p-5">
                  <code className="font-['DM_Mono'] text-[12px] md:text-[13px] leading-[1.7] text-[var(--off-white)]">
                    {block.content}
                  </code>
                </pre>
                <p className="font-['DM_Mono'] text-[9px] text-[var(--warm-gray)] uppercase tracking-[1px]">{block.language}</p>
              </div>
            );

          case 'quote':
            return (
              <blockquote
                key={idx}
                className="border-l-2 border-[var(--gold)] pl-5 py-2 italic text-[16px] md:text-[17px] text-[var(--off-white)] leading-[1.7]"
              >
                "{block.content}"
                {block.author && (
                  <cite className="block mt-3 not-italic font-['DM_Mono'] text-[10px] tracking-[2px] uppercase text-[var(--warm-gray)]">
                    — {block.author}
                  </cite>
                )}
              </blockquote>
            );

          case 'link':
            return (
              <a
                key={idx}
                href={block.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-4 border border-[var(--line)] hover:border-[var(--gold)] transition-colors"
                style={{ clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)' }}
              >
                <ExternalLink size={18} className="text-[var(--gold)] mt-0.5 shrink-0" />
                <div>
                  <div className="font-['Outfit'] text-[14px] font-medium text-[var(--off-white)] group-hover:text-[var(--gold-light)]">
                    {block.label}
                  </div>
                  {block.description && (
                    <p className="text-[13px] text-[var(--warm-gray)] mt-1">{block.description}</p>
                  )}
                </div>
              </a>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogBlockRenderer;
