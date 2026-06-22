import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DetailPageShell from '@/components/DetailPageShell';
import { getProjectBySlug } from '@/data/projects';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <DetailPageShell
      tag={project.tag}
      title={project.title}
      meta={project.year}
      image={project.image}
      liveLink={project.link}
      backSection="Projects"
      backToSection="projects"
    >
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-10 md:space-y-14"
      >
        <div>
          <h2 className="font-['DM_Mono'] text-[11px] tracking-[3px] uppercase text-[var(--gold)] mb-4">
            Overview
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.8] text-[var(--warm-gray)]">
            {project.overview}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.outcomes.map((outcome) => (
            <div
              key={outcome.label}
              className="border border-[var(--line)] p-4 text-center"
              style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
            >
              <div className="font-['Bebas_Neue'] text-[28px] md:text-[32px] text-[var(--gold)] leading-none">
                {outcome.value}
              </div>
              <div className="font-['Outfit'] text-[9px] md:text-[10px] tracking-[1px] uppercase text-[var(--warm-gray)] mt-1">
                {outcome.label}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="font-['DM_Mono'] text-[11px] tracking-[3px] uppercase text-[var(--gold)] mb-4">
            Key Features
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((item, idx) => (
              <li
                key={idx}
                className="relative pl-5 text-[14px] md:text-[15px] text-[var(--warm-gray)] leading-[1.7]"
              >
                <span className="absolute left-0 text-[var(--gold)]">›</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-['DM_Mono'] text-[11px] tracking-[3px] uppercase text-[var(--gold)] mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-['DM_Mono'] text-[11px] py-1.5 px-3 border border-[rgba(201,168,76,0.25)] text-[var(--gold-light)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.section>
    </DetailPageShell>
  );
};

export default ProjectDetail;
