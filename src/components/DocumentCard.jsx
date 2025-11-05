import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function DocumentCard({ title, meta, tag = 'PDF', thumbnail }) {
  const ref = useRef(null);
  const [shine, setShine] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;

    const ry = ((x - rect.width / 2) / rect.width) * 14; // rotateY
    const rx = -((y - rect.height / 2) / rect.height) * 12; // rotateX

    setShine({ x: px, y: py });
    setTilt({ rx, ry });
  };

  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transformStyle: 'preserve-3d' }}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.5 }}
      className="group relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
    >
      {/* Shine */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(300px circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.22), transparent 40%)`,
        }}
      />

      {/* Thumbnail / Fallback */}
      {thumbnail ? (
        <img
          src={thumbnail}
          alt="thumbnail"
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          style={{ transform: 'translateZ(20px)' }}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-slate-800 to-slate-900">
          <BookOpen className="h-10 w-10 text-white/60" style={{ transform: 'translateZ(20px)' }} />
        </div>
      )}

      {/* Bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 p-3 md:p-4"
        style={{ transform: 'translateZ(35px)' }}
      >
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-cyan-500/90 text-slate-900 text-xs font-semibold px-2 py-0.5 shadow">{tag}</span>
          <p className="truncate text-white/90 text-sm md:text-base font-medium">{title}</p>
        </div>
        <p className="mt-1 text-xs text-white/60 truncate">{meta}</p>
      </div>

      {/* Border glow on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 group-hover:ring-white/20 transition" />
    </motion.div>
  );
}
