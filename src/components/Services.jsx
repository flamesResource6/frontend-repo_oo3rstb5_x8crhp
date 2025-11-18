import { Hammer, Building2, Ruler, Home, ShieldCheck, Wrench } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Hammer,
    title: 'Construcții la cheie',
    desc: 'Proiecte complete, de la fundație la finisaje premium, gestionate cap-coadă.'
  },
  {
    icon: Building2,
    title: 'Structuri și consolidări',
    desc: 'Execuție sigură pentru clădiri noi și consolidarea celor existente.'
  },
  {
    icon: Ruler,
    title: 'Proiectare & Design',
    desc: 'Consultanță, proiectare și optimizare tehnică pentru soluții eficiente.'
  },
  {
    icon: Home,
    title: 'Renovări premium',
    desc: 'Transformări interioare și exterioare cu materiale și finisaje de top.'
  },
  {
    icon: ShieldCheck,
    title: 'Calitate & conformitate',
    desc: 'Respectăm standardele și normele, cu verificări și audit tehnic permanent.'
  },
  {
    icon: Wrench,
    title: 'Mentenanță & reparații',
    desc: 'Intervenții rapide pentru clădiri comerciale și rezidențiale.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,211,238,0.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(217,70,239,0.08),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Servicii</h2>
          <p className="mt-3 text-slate-300">Tot ce ai nevoie pentru un proiect reușit</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:-translate-y-1 transition will-change-transform"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-2xl" />
              <s.icon className="h-10 w-10 text-white/90" />
              <h3 className="mt-4 text-white text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
