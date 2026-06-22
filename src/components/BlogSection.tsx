import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { getSectionNumber } from '@/lib/section-config';
import { BLOG_POSTS } from '@/data/blog';

interface BlogSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const BlogSection: React.FC<BlogSectionProps> = ({ onEarnPoints }) => {
  const navigate = useNavigate();

  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden bg-[var(--black)]">
      <div className="section-header-bar">
        <SectionHeader number={getSectionNumber('blog')} title="Writings" />
      </div>

      <div className="section-scroll-area">
        <div className="portfolio-inner pb-20 pt-6">
          <p className="text-[14px] text-[var(--warm-gray)] mb-8 leading-[1.7] max-w-xl">
            Essays on learning, building, and thinking — with code, video, and images woven in.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article
                key={post.slug}
                role="button"
                tabIndex={0}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => {
                  onEarnPoints?.(100, `Reading: ${post.title}`);
                  navigate(`/blog/${post.slug}`);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/blog/${post.slug}`);
                  }
                }}
                className="group border border-[var(--line)] overflow-hidden cursor-pointer hover:border-[rgba(201,168,76,0.5)] transition-all"
                style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)' }}
              >
                {post.coverImage && (
                  <div className="h-[160px] overflow-hidden bg-[rgba(255,255,255,0.02)]">
                    <img
                      src={post.coverImage}
                      alt=""
                      className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-['DM_Mono'] text-[9px] tracking-[2px] uppercase text-[var(--gold)] border border-[rgba(201,168,76,0.3)] py-0.5 px-2">
                      {post.tag}
                    </span>
                    <span className="flex items-center gap-1 font-['DM_Mono'] text-[10px] text-[var(--warm-gray)]">
                      <Clock size={10} /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-['DM_Serif_Display'] text-[20px] text-[var(--off-white)] mb-2 group-hover:text-[var(--gold-light)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-[13px] text-[var(--warm-gray)] leading-[1.7] mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-[var(--gold)] font-medium">
                    Read article
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
