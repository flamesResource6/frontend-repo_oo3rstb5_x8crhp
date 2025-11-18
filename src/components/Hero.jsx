import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Firma de construcții premium
            </div>
            <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-white tracking-tight">
              Construim cu grijă. Livrăm la timp. Fără compromisuri.
            </h1>
            <p className="mt-5 text-slate-300 max-w-xl">
              De la proiecte rezidențiale la dezvoltări industriale, echipa noastră oferă calitate
              impecabilă, management profesionist și execuție fără stres.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="pointer-events-auto rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-5 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20">
                Cere ofertă
              </a>
              <a href="#projects" className="pointer-events-auto rounded-lg border border-white/15 px-5 py-3 text-white/90 hover:text-white">
                Vezi proiecte
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-slate-300">
              <div className="text-3xl font-semibold text-white">15+</div>
              <div className="text-sm max-w-[14rem]">Ani de experiență în construcții civile și industriale</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
