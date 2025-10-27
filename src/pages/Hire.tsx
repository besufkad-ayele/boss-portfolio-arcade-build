import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hire: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-green-900 text-gray-100 p-6">
      <motion.div
        className="max-w-3xl w-full bg-gradient-to-br from-black/40 to-white/5 border border-emerald-700/20 rounded-2xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
      >
        <h1 className="text-4xl font-bold text-emerald-300 mb-4">Hire Shinobi Developer</h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          Thanks for your interest — this is the contract page where we begin the journey.
          You can use this page to provide project details, estimate timelines, or contact directly.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-emerald-900/20 rounded">
            <h3 className="font-semibold text-emerald-200">Quick Proposal</h3>
            <p className="text-sm text-gray-300 mt-2">Tell us the scope, timeline and budget and we'll get back with a battle plan.</p>
          </div>

          <div className="p-4 bg-teal-900/20 rounded">
            <h3 className="font-semibold text-teal-200">Contact</h3>
            <p className="text-sm text-gray-300 mt-2">Email: <a className="text-emerald-300 underline" href="mailto:ayebesufkad@gmail.com">ayebesufkad@gmail.com</a></p>
            <p className="text-sm text-gray-300 mt-1">Or join the dojo on Discord for quick chat.</p>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 rounded-lg bg-gray-800 text-gray-200 hover:bg-gray-700 transition"
          >
            Back Home
          </button>

          <a
            href="mailto:ayebesufkad@gmail.com?subject=Hiring%20Shinobi%20Developer"
            className="px-4 py-2 rounded-lg bg-emerald-400 text-black font-bold hover:opacity-90 transition"
          >
            Email to Hire
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hire;
