import React from 'react';
import Hero3D from './components/Hero3D';
import SpotlightSearch from './components/SpotlightSearch';
import LiveCoursesTeaser from './components/LiveCoursesTeaser';
import DocumentCardGrid from './components/DocumentCardGrid';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(56,189,248,0.15),transparent),radial-gradient(800px_400px_at_100%_10%,rgba(232,121,249,0.12),transparent)] bg-slate-950 text-white selection:bg-cyan-400/30">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-6 md:py-8">
        {/* Hero with Spline 3D */}
        <Hero3D />

        {/* Spotlight search */}
        <SpotlightSearch />

        {/* Live Courses teaser */}
        <LiveCoursesTeaser />

        {/* Featured resources with 3D tilt cards */}
        <DocumentCardGrid />

        {/* Footer */}
        <footer className="mt-16 border-t border-white/10 pt-6 text-center text-white/50">
          <p>
            Conçu pour une expérience néo-brutaliste et glassmorphism — ExoUMP Modern UI
          </p>
        </footer>
      </div>
    </div>
  );
}
