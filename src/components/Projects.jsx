import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Ansamblu rezidențial – 48 unități',
    img: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Clădire de birouri – 7 niveluri',
    img: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Hală logistică – 12.000 m²',
    img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Proiecte recente</h2>
          <p className="mt-3 text-slate-300">Un portofoliu selectiv de lucrări reprezentative</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-medium">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
