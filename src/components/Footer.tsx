
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa';
import { GiNinjaHead, GiShuriken, GiSwordman } from 'react-icons/gi';
import { Code } from 'lucide-react';

const navLinks = [
  { name: 'Missions', href: '#projects', icon: <GiSwordman className="inline-block mr-2" /> },
  { name: 'Skills', href: '#skills', icon: <GiNinjaHead className="inline-block mr-2" /> },
  { name: 'Achievements', href: '#awards', icon: <GiShuriken className="inline-block mr-2" /> },
  { name: 'Dojo', href: '#blog', icon: <GiNinjaHead className="inline-block mr-2" /> },
  { name: 'Contact', href: '#contact', icon: <FaLinkedin className="inline-block mr-2" /> },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/besufkad-ayele', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/in/besufkad-ayele', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: 'https://twitter.com/ayele_besufkad', label: 'Twitter' },
  { icon: <FaDiscord />, href: 'https://discord.com/', label: 'Discord' },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [xp, setXp] = useState({ level: 45, percent: 72 });
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-gray-200 border-t border-slate-700/50 shadow-2xl overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 items-start">
        {/* Brand Section */}
        <div className="flex flex-col items-start gap-3 md:col-span-1">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 border-2 border-blue-500 shadow-lg transition-all">
              <Code className="text-2xl text-white" />
            </span>
            <span className="font-extrabold text-xl md:text-2xl tracking-wide text-white group-hover:text-blue-400 transition">Besufkad Ayele</span>
          </motion.div>
          <span className="text-xs text-gray-400 pl-1">Product Designer · Mobile UI/UX · Design-to-Code</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 md:col-span-1">
          <span className="uppercase text-xs text-gray-500 mb-1 tracking-widest">Menu</span>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center px-3 py-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 text-gray-200 hover:text-blue-400 transition-all duration-200 border border-slate-700 hover:border-blue-500/50 group"
            >
              <span className="text-blue-400">{link.icon}</span>
              <span className="font-semibold tracking-wide">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* XP & Progress Section */}
        <div className="flex flex-col gap-3 md:col-span-1">
          <span className="uppercase text-xs text-gray-500 mb-1 tracking-widest">XP Progress</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-400 text-lg">Level {xp.level}</span>
            <span className="text-xs text-gray-400">— {xp.percent}% to next</span>
          </div>
          <div className="w-full h-4 bg-slate-700 rounded-full overflow-hidden border border-slate-600">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
              initial={{ width: 0 }}
              animate={{ width: `${xp.percent}%` }}
              transition={{ duration: 1.2, type: 'spring' }}
            />
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col gap-3 md:col-span-1">
          <span className="uppercase text-xs text-gray-500 mb-1 tracking-widest">Connect</span>
          <div className="flex gap-4 mt-1">
            {socialLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 border-2 border-slate-600 hover:border-blue-500 hover:bg-blue-600 shadow-lg transition-all group"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="z-10 text-2xl text-gray-200 group-hover:text-white transition-all">
                  {item.icon}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Newsletter / Call to Action */}
        <form
          className="flex flex-col gap-3 md:col-span-1"
          onSubmit={e => { e.preventDefault(); setEmail(''); }}
        >
          <span className="uppercase text-xs text-gray-500 mb-1 tracking-widest">Stay Updated</span>
          <div className="flex rounded-lg overflow-hidden border border-slate-700 focus-within:border-blue-500 bg-slate-800/60">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all duration-200 focus:outline-none"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-20 mt-10 border-t border-slate-700/50 bg-slate-900/90 py-4 flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>© {year} Besufkad Ayele. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>Built with passion</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
