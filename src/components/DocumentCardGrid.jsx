import React from 'react';
import DocumentCard from './DocumentCard';

const sample = [
  {
    title: 'Analyse 2 — Séries et Intégrales',
    meta: 'FST MIP • S2 • Examen 2023',
    tag: 'PDF',
  },
  {
    title: 'Probabilités — Feuille de TD 4',
    meta: 'FSO • Informatique • TD',
    tag: 'TD',
  },
  {
    title: 'Algorithmes — Sujet + Corrigé',
    meta: 'ENSA • S1 • Examen',
    tag: 'EXAM',
  },
];

export default function DocumentCardGrid() {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between">
        <h2 className="text-xl md:text-2xl font-bold text-white">Ressources en vedette</h2>
        <a href="#" className="text-xs md:text-sm text-cyan-300 hover:text-cyan-200">Tout voir</a>
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {sample.map((item) => (
          <DocumentCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
