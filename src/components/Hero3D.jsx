import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Book, Video } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[68vh] md:h-[76vh] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 shadow-2xl">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlays (non-blocking) */}
      <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80 backdrop-blur-md shadow-sm">
          <Rocket className="h-4 w-4 text-cyan-300" />
          ExoUMP — Ressources académiques, modernisées
        </span>

        <h1 className="mt-5 text-3xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-sm">
          Étudiez plus vite avec une interface futuriste
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-white/70">
          Cours, TD, examens, corrigés et lives — le tout organisé par année, filière et module.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#search" className="group inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/10 backdrop-blur-md transition-colors">
            <Book className="h-4 w-4 text-white/90" />
            <span>Lancer une recherche</span>
          </a>
          <a href="#live" className="group inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-medium px-4 py-2 shadow-lg shadow-cyan-500/25">
            <Video className="h-4 w-4" />
            <span>Voir les Live Courses</span>
          </a>
        </div>
      </div>
    </section>
  );
}
