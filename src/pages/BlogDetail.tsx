import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import DetailPageShell from '@/components/DetailPageShell';
import BlogBlockRenderer from '@/components/blog/BlogBlockRenderer';
import { getBlogPostBySlug } from '@/data/blog';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/" replace />;
  }

  return (
    <DetailPageShell
      tag={post.tag}
      title={post.title}
      meta={`${post.date} · ${post.readTime}`}
      backSection="Writings"
      backToSection="blog"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        <p className="flex items-center gap-2 font-['DM_Mono'] text-[11px] text-[var(--warm-gray)] tracking-[1px] mb-8">
          <Clock size={12} /> {post.readTime} read
        </p>
        <p className="text-[16px] text-[var(--warm-gray)] leading-[1.8] mb-10 border-l-2 border-[var(--gold)] pl-5">
          {post.excerpt}
        </p>
        <BlogBlockRenderer blocks={post.blocks} />
      </motion.div>
    </DetailPageShell>
  );
};

export default BlogDetail;
