export const SECTION_NAV = [
  { id: 'hero', label: 'Home', number: '01' },
  { id: 'about', label: 'About', number: '02' },
  { id: 'skills', label: 'Skills', number: '03' },
  { id: 'projects', label: 'Projects', number: '04' },
  { id: 'experience', label: 'Experience', number: '05' },
  { id: 'path', label: 'Path', number: '06' },
  { id: 'mind', label: 'Mind', number: '07' },
  { id: 'blog', label: 'Writings', number: '08' },
  { id: 'contact', label: 'Contact', number: '09' },
] as const;

export function getSectionNumber(id: string): string {
  return SECTION_NAV.find((s) => s.id === id)?.number ?? '';
}
