
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDiscord,
} from 'react-icons/fa';
import { SiNintendogamecube } from 'react-icons/si';
import { GiNinjaHead, GiShuriken } from 'react-icons/gi';

const navLinks = [
  { name: 'Missions', href: '#projects', icon: <SiNintendogamecube className="inline-block mr-2" /> },
  { name: 'Skills', href: '#skills', icon: <GiNinjaHead className="inline-block mr-2" /> },
  { name: 'Achievements', href: '#awards', icon: <GiShuriken className="inline-block mr-2" /> },
  { name: 'Dojo', href: '#blog', icon: <GiNinjaHead className="inline-block mr-2" /> },
  { name: 'Contact', href: '#contact', icon: <FaLinkedin className="inline-block mr-2" /> },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: 'https://twitter.com/', label: 'Twitter' },
  { icon: <FaDiscord />, href: 'https://discord.com/', label: 'Discord' },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [xp, setXp] = useState({ level: 45, percent: 72 });
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-gray-950 text-gray-200 border-t border-gray-800 shadow-2xl overflow-hidden">
      {/* Ninja Glow Outline */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 rounded-t-3xl border-4 border-red-600/40 blur-[2px] animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-gray-950/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-10 md:py-14 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 items-start">
        {/* Brand Section */}
        <div className="flex flex-col items-start gap-3 md:col-span-1">
          <motion.div
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px 4px #f43f5e' }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-red-600 shadow-lg group-hover:shadow-red-500/60 transition-all">
              <GiNinjaHead className="text-3xl text-red-500 group-hover:animate-pulse" />
            </span>
            <span className="font-extrabold text-xl md:text-2xl tracking-widest text-white drop-shadow-[0_0_8px_#f43f5e] group-hover:text-red-400 transition">Shinobi Developer</span>
          </motion.div>
          <span className="text-xs text-gray-400 pl-1 italic group-hover:text-red-400 transition">Code. Stealth. Victory.</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2 md:col-span-1">
          <span className="uppercase text-xs text-gray-500 mb-1 tracking-widest">Menu</span>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex items-center px-3 py-2 rounded-lg bg-gray-900/60 hover:bg-black/80 text-gray-200 hover:text-neon-green transition-all duration-200 border border-gray-800 hover:border-red-500 shadow-md hover:shadow-red-500/40 group"
            >
              <span className="text-red-400 group-hover:animate-spin-slow">{link.icon}</span>
              <span className="font-semibold tracking-wide">{link.name}</span>
            </a>
          ))}
        </nav>

        {/* XP & Progress Section */}
        <div className="flex flex-col gap-3 md:col-span-1">
          <span className="uppercase text-xs text-gray-500 mb-1 tracking-widest">XP Progress</span>
          <div className="flex items-center gap-2">
            <span className="font-bold text-neon-green text-lg">Level {xp.level}</span>
            <span className="text-xs text-gray-400">— {xp.percent}% to next rank</span>
          </div>
          <div className="w-full h-4 bg-gray-800 rounded-full overflow-hidden border-2 border-neon-green shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-green via-purple-500 to-red-500 shadow-[0_0_16px_2px_#22d3ee]"
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
                className="relative w-11 h-11 flex items-center justify-center rounded-full bg-black/80 border-2 border-gray-800 hover:border-neon-green shadow-lg hover:shadow-neon-green/40 transition-all group"
                whileHover={{ rotate: 360, scale: 1.18, boxShadow: '0 0 24px 4px #22d3ee' }}
                whileTap={{ scale: 0.95 }}
                style={{ boxShadow: '0 2px 12px 0 #0008' }}
              >
                <GiShuriken className="absolute text-neon-green opacity-30 animate-spin-slow pointer-events-none" size={38} />
                <span className="z-10 text-2xl text-gray-200 group-hover:text-neon-green transition-all">
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
          <span className="uppercase text-xs text-gray-500 mb-1 tracking-widest">Join the Clan</span>
          <div className="flex rounded-lg overflow-hidden border-2 border-gray-800 focus-within:border-neon-green bg-black/60 shadow-md">
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your scroll (email)"
              className="flex-1 px-4 py-2 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-neon-green text-black font-bold uppercase tracking-wider hover:bg-red-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neon-green animate-glow"
            >
              Join the Clan
            </button>
          </div>
        </form>
      </div>

      {/* Easter Egg Link */}
      <div className="absolute left-1/2 -translate-x-1/2 top-2 md:top-3 z-20">
        <a
          href="/secret-dojo"
          className="hidden md:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 border border-gray-800 text-xs text-gray-400 hover:text-neon-green hover:border-neon-green transition-all animate-pulse shadow-lg cursor-pointer group"
        >
          Enter the Dojo <span className="text-lg">⚔️</span>
        </a>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-20 mt-10 border-t border-gray-800/80 bg-black/80 py-3 flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>© {year} Shinobi Developer. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-2">
          <GiShuriken className="text-neon-green animate-spin-slow" size={18} />
        </div>
      </div>

      {/* Custom Neon/Glow/Utility Styles */}
  <style>{`
        .text-neon-green { color: #22d3ee; }
        .bg-neon-green { background: #22d3ee; }
        .border-neon-green { border-color: #22d3ee; }
        .shadow-neon-green\/40 { box-shadow: 0 0 24px 4px #22d3ee66; }
        .animate-glow {
          animation: glow 1.5s infinite alternate;
        }
        @keyframes glow {
          from { box-shadow: 0 0 8px #22d3ee, 0 0 16px #f43f5e33; }
          to { box-shadow: 0 0 24px #f43f5e, 0 0 32px #22d3ee99; }
        }
        .animate-spin-slow {
          animation: spin 3.5s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
