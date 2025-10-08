
import React, { useState, useEffect, useRef } from 'react';
import { Globe, Database, Palette, Trophy } from 'lucide-react';

interface SkillsSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ onEarnPoints }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [mastered, setMastered] = useState<Set<string>>(new Set());
  const visitedRef = useRef(false);

  useEffect(() => {
    if (!visitedRef.current) {
      visitedRef.current = true;
      if (!sessionStorage.getItem('skills_visit')) {
        onEarnPoints(50, 'Visited Skills — +50 XP');
        sessionStorage.setItem('skills_visit', '1');
      }
    }
  }, [onEarnPoints]);

  const categories = [
    {
      title: 'Frontend',
      icon: <Globe size={18} className="text-emerald-400" />,
      skills: [
        { id: 'react', name: 'React', level: 95, xp: 30 },
        { id: 'ts', name: 'TypeScript', level: 90, xp: 25 },
        { id: 'tailwind', name: 'Tailwind', level: 85, xp: 20 }
      ]
    },
    {
      title: 'Backend',
      icon: <Database size={18} className="text-emerald-400" />,
      skills: [
        { id: 'node', name: 'Node.js', level: 85, xp: 25 },
        { id: 'api', name: 'APIs', level: 90, xp: 20 },
        { id: 'laravel', name: 'Laravel', level: 75, xp: 15 },
        { id: 'graphql', name: 'GraphQL', level: 80, xp: 20 },
      ]
    },
    {
      title: 'Design',
      icon: <Palette size={18} className="text-emerald-400" />,
      skills: [
        { id: 'figma', name: 'Figma', level: 80, xp: 15 },
        { id: 'uiux', name: 'UI/UX', level: 75, xp: 15 }
      ]
    },
    {
      title: 'MOBILE ',
      icon: <Trophy size={18} className="text-emerald-400" />,
      skills: [
        { id: 'flutter', name: 'Flutter', level: 80, xp: 20 },
        { id: 'dart', name: 'Dart', level: 75, xp: 15 }
      ]
    }
  ];

  const handleMaster = (id: string, name: string, xp: number) => {
    if (mastered.has(id)) return;
    setMastered(prev => new Set(prev).add(id));
    onEarnPoints(xp, `Mastered ${name} — +${xp} XP`);
  };

  return (
    <section ref={ref} className="section-padding bg-black/30 backdrop-blur-sm text-black rounded-lg border border-emerald-800/20">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-emerald-300">Skills</h2>
          <p className="text-sm text-black-400">Core technologies and tools I use regularly.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div key={cat.title} className="bg-transparent rounded-lg p-4 border border-red-800/10">
              <div className="flex items-center gap-3 mb-3">
                {cat.icon}
                <h3 className="font-semibold text-white">{cat.title}</h3>
              </div>

              <div className="space-y-3">
                {cat.skills.map(s => (
                  <div key={s.id} className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-200">{s.name}  </span>
                        <span></span>
                        <span className="text-xs text-red-400"> {s.level} %</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded mt-2 overflow-hidden">
                        <div style={{ width: `${s.level}%` }} className="h-full bg-emerald-500" />
                      </div>
                    </div>
                    <button onClick={() => handleMaster(s.id, s.name, s.xp)} className="ml-3 px-2 py-1 text-xs rounded bg-emerald-600/20 hover:bg-emerald-600/30">+{s.xp} XP</button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-gray-400">
          <Trophy className="inline text-yellow-400 mr-2" /> Click a skill to earn points. Clean, simple, and consistent.
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
