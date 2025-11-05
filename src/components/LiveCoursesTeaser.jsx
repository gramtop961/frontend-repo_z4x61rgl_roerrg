import React from 'react';
import { motion } from 'framer-motion';
import { Video, Users, Signal } from 'lucide-react';

export default function LiveCoursesTeaser() {
  return (
    <section id="live" className="mt-12">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 md:p-8 backdrop-blur-xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Signal className="h-4 w-4 text-cyan-300" />
              En direct cette semaine
            </div>
            <h3 className="mt-3 text-xl md:text-2xl font-bold text-white">Live Courses — révisions et Q&A interactifs</h3>
            <p className="mt-1 text-white/70 text-sm">
              Sessions WebRTC/MediaSoup à faible latence, annotations en temps réel et partage d'écran.
            </p>
            <div className="mt-4 flex gap-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-slate-900 font-medium px-4 py-2 shadow-lg shadow-cyan-500/25"
              >
                <Video className="h-4 w-4" />
                Rejoindre un live
              </motion.button>
              <button className="rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 border border-white/10">Planifier</button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 w-full md:w-auto">
            {[{
              label: 'Étudiants', value: '2.1k', Icon: Users
            }, {
              label: 'Lives', value: '37', Icon: Video
            }, {
              label: 'Taux de présence', value: '92%', Icon: Signal
            }].map(({ label, value, Icon }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-white/80"
              >
                <Icon className="h-4 w-4 mx-auto text-cyan-300" />
                <div className="mt-1 text-lg font-bold text-white">{value}</div>
                <div className="text-xs">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
