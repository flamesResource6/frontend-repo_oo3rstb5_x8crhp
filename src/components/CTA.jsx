import { motion } from 'framer-motion'
import { PhoneCall } from 'lucide-react'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-semibold text-white"
          >
            Pregătit să începem construcția?
          </motion.h3>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Oferim consultanță gratuită și o estimare inițială în 24h. Scrie-ne detaliile proiectului tău și te contactăm rapid.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+40123456789" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-white font-medium shadow-lg shadow-fuchsia-500/20">
              <PhoneCall size={18} /> Sună acum
            </a>
            <a href="mailto:contact@constructa.ro" className="rounded-lg border border-white/15 px-6 py-3 text-white/90 hover:text-white">
              Trimite email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
