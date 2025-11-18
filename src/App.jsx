import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <CTA />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Constructa. Toate drepturile rezervate.</p>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-white">Servicii</a>
            <a href="#projects" className="hover:text-white">Proiecte</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
