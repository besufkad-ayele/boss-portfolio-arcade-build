
import React, { useRef, useEffect } from 'react';
import { Footer } from 'react-day-picker';

interface ExperienceSectionProps {
  onEarnPoints: (points: number, message: string) => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ onEarnPoints }) => {
  const ref = useRef<HTMLElement | null>(null);
  const awardedRef = useRef(false);

const experiences = [
  {
    id: 1,
    title: 'Flutter Intern',
    company: 'Quadrant Innovations',
    period: 'Jun 2024 - Jul 2024',
    location: 'Addis Ababa, Ethiopia',
    type: 'Internship',
    description: 'Engaged in real-world projects providing practical experience in app development, focusing on building mobile applications using Flutter.',
    achievements: [
      'Built e-commerce food delivery application with features like group ordering',
      'Integrated Firebase and Node.js for backend functionality',
      'Designed user-centric platform enhancing collaborative dining experiences'
    ],
    skills: ['Flutter', 'Firebase', 'Node.js'],
    xpGained: '1,200 XP',
    level: 'Intermediate',
    icon: '🍲'
  },
  {
    id: 2,
    title: 'Flutter Intern',
    company: 'Quantum Technologies',
    period: 'Jul 2023 - Aug 2023',
    location: 'Addis Ababa, Ethiopia',
    type: 'Internship',
    description: 'Built and maintained mobile applications using Flutter, with a focus on state management and applying critical thinking to solve complex coding challenges.',
    achievements: [
      'Implemented state management using Provider for responsive app development',
      'Gained solid understanding of Flutter and mobile development best practices',
      'Contributed to scalable app solutions in a collaborative team environment'
    ],
    skills: ['Flutter', 'Dart', 'Provider'],
    xpGained: '900 XP',
    level: 'Beginner',
    icon: '🔧'
  },
  {
    id: 3,
    title: 'Software Engineering Graduate Student',
    company: 'Haramaya University & ALX Africa',
    period: 'Sep 2021 - Present',
    location: 'Haramaya, Ethiopia (Online for ALX)',
    type: 'Education',
    description: 'B.Sc. in Software Engineering with hands-on projects in mobile and web development, achieving high academic performance.',
    achievements: [
      'Developed projects like Tutor Link app connecting tutors and parents using Flutter and Node.js',
      'Created volunteer platform for Code for Africa addressing social issues like childcare and health',
      'Maintained 3.77 GPA at Haramaya and 97% at ALX Africa'
    ],
    skills: ['Flutter', 'JavaScript', 'Next.js', 'Git', 'Figma'],
    xpGained: '2,500 XP',
    level: 'Advanced',
    icon: '🎓'
  }
];

  useEffect(() => {
    if (!awardedRef.current) {
      awardedRef.current = true;
      onEarnPoints(25, 'Viewed Experience — +25 XP');
    }
  }, [onEarnPoints]);

  return (
    <section ref={ref} className="section-padding bg-slate-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-emerald-300">Experience</h2>
          <p className="text-sm text-gray-300">A concise summary of roles and achievements.</p>
        </div>

        <div className="space-y-6">
          {experiences.map(exp => (
            <div key={exp.id} className="p-4 rounded-lg border border-emerald-800/10 bg-slate-800/20">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-lg font-semibold text-white">{exp.title}</div>
                  <div className="text-sm text-emerald-200">{exp.company} • {exp.period} • {exp.location}</div>
                </div>
                <div className="text-sm text-emerald-300">{exp.level}</div>
              </div>

              <p className="mt-3 text-gray-200 text-sm">{exp.description}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {exp.skills.map(skill => (
                  <span key={skill} className="px-2 py-1 text-xs rounded bg-emerald-700/10 text-emerald-200">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>  
             <Footer />

    </section>
 
  );
};

export default ExperienceSection;