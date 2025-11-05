import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';

export default function SpotlightSearch() {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);

  return (
    <section id="search" className="relative mt-12">
      <div className="mx-auto max-w-3xl">
        <div className="relative">
          {/* Glow */}
          <AnimatePresence>
            {focused && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-fuchsia-500/30 blur"
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-xl shadow-xl">
            <Search className="h-5 w-5 text-white/70" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder="Rechercher un module, une filière, un examen…"
              className="w-full bg-transparent placeholder-white/40 text-white focus:outline-none"
            />
            <button
              onClick={() => console.log('Search:', query)}
              className="rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm px-3 py-2 border border-white/10 transition-colors"
            >
              Rechercher
            </button>
          </div>

          {/* Smart suggestions */}
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {['FST MIP S2', 'ENSA Algo', 'Probabilités', 'Examens Corrigés', 'BCG Analyse'] .map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
