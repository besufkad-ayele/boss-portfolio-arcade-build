import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BookOpen, Film, Youtube } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { getSectionNumber } from '@/lib/section-config';
import { PERSPECTIVES, type MediaItem } from '@/data/perspectives';

interface MindSectionProps {
  onEarnPoints?: (points: number, message: string) => void;
}

const mediaIcon = (type: MediaItem['type']) => {
  if (type === 'book') return BookOpen;
  if (type === 'movie') return Film;
  return Youtube;
};

const MindSection: React.FC<MindSectionProps> = ({ onEarnPoints }) => {
  const [activeTab, setActiveTab] = useState<'perspectives' | 'shelf'>('perspectives');
  const [activePerspective, setActivePerspective] = useState(PERSPECTIVES[0].id);

  const current = PERSPECTIVES.find((p) => p.id === activePerspective)!;
  const allMedia = PERSPECTIVES.flatMap((p) => p.media);

  return (
    <section className="relative w-full h-full flex flex-col overflow-hidden bg-[rgba(255,255,255,0.01)] border-t border-b border-[var(--line)]">
      <div className="section-header-bar bg-[rgba(10,10,8,0.98)] backdrop-blur-sm">
        <SectionHeader number={getSectionNumber('mind')} title="Mind" />
      </div>

      <div className="section-scroll-area">
        <div className="portfolio-inner pb-20 pt-6">
          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            {(['perspectives', 'shelf'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-['DM_Mono'] text-[10px] tracking-[2px] uppercase py-2 px-4 border transition-all ${
                  activeTab === tab
                    ? 'bg-[var(--gold)] text-[var(--black)] border-[var(--gold)]'
                    : 'border-[var(--line)] text-[var(--warm-gray)] hover:border-[var(--gold)]'
                }`}
              >
                {tab === 'perspectives' ? 'Perspectives' : 'Books & Media'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'perspectives' ? (
              <motion.div
                key="perspectives"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="flex flex-wrap gap-2 mb-8">
                  {PERSPECTIVES.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActivePerspective(p.id);
                        onEarnPoints?.(75, `Exploring ${p.title} perspective!`);
                      }}
                      className={`font-['Outfit'] text-[12px] tracking-[1px] uppercase py-2 px-4 border transition-all ${
                        activePerspective === p.id
                          ? 'border-[var(--gold)] text-[var(--gold)] bg-[rgba(201,168,76,0.08)]'
                          : 'border-[var(--line)] text-[var(--warm-gray)] hover:text-[var(--off-white)]'
                      }`}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>

                <p className="font-['DM_Serif_Display'] text-[18px] text-[var(--gold)] mb-6">{current.subtitle}</p>

                <div className="space-y-5 mb-10">
                  {current.beliefs.map((b, idx) => (
                    <motion.div
                      key={b.title}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08 }}
                      className="border-l-2 border-[var(--gold)] pl-5 py-1"
                    >
                      <div className="font-['Outfit'] text-[14px] font-medium text-[var(--off-white)] mb-1">{b.title}</div>
                      <p className="text-[13px] text-[var(--warm-gray)] leading-[1.7]">{b.body}</p>
                    </motion.div>
                  ))}
                </div>

                <h4 className="font-['DM_Mono'] text-[10px] tracking-[3px] uppercase text-[var(--gold)] mb-4">
                  Influences
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {current.media.map((item) => (
                    <MediaCard key={item.url} item={item} onEarnPoints={onEarnPoints} />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="shelf"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <p className="text-[14px] text-[var(--warm-gray)] mb-8 leading-[1.7]">
                  Books, films, and channels that shape how I think about code, work, and life.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allMedia.map((item) => (
                    <MediaCard key={item.url + item.title} item={item} onEarnPoints={onEarnPoints} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const MediaCard: React.FC<{ item: MediaItem; onEarnPoints?: (n: number, m: string) => void }> = ({
  item,
  onEarnPoints,
}) => {
  const Icon = mediaIcon(item.type);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onEarnPoints?.(50, `Opened ${item.title}!`)}
      className="group flex gap-4 p-4 border border-[var(--line)] hover:border-[var(--gold)] transition-all"
      style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
    >
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-24 object-cover border border-[var(--line)] shrink-0 grayscale group-hover:grayscale-0 transition-all"
        />
      ) : (
        <div className="w-16 h-24 border border-[var(--line)] flex items-center justify-center shrink-0 bg-[rgba(201,168,76,0.05)]">
          <Icon size={24} className="text-[var(--gold)]" />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icon size={12} className="text-[var(--gold)] shrink-0" />
          <span className="font-['DM_Mono'] text-[8px] tracking-[2px] uppercase text-[var(--warm-gray)]">
            {item.type}
          </span>
        </div>
        <div className="font-['Outfit'] text-[13px] font-medium text-[var(--off-white)] group-hover:text-[var(--gold-light)] line-clamp-2">
          {item.title}
        </div>
        {item.creator && (
          <div className="text-[11px] text-[var(--gold)] mt-0.5">{item.creator}</div>
        )}
        {item.note && (
          <p className="text-[11px] text-[var(--warm-gray)] mt-2 line-clamp-2 leading-[1.5]">{item.note}</p>
        )}
        <ExternalLink size={12} className="text-[var(--gold)] mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </a>
  );
};

export default MindSection;
