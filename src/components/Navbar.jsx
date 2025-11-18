import { Menu, X, Phone } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Acasă', href: '#home' },
    { label: 'Servicii', href: '#services' },
    { label: 'Proiecte', href: '#projects' },
    { label: 'Despre', href: '#about' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-500/20" />
              <span className="text-white text-lg font-semibold tracking-wide">Constructa</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((i) => (
                <a key={i.label} href={i.href} className="text-slate-300 hover:text-white transition-colors">
                  {i.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-white font-medium shadow-lg shadow-fuchsia-500/20">
                <Phone size={18} /> Consultanță
              </a>
            </nav>

            <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="grid gap-2">
                {navItems.map((i) => (
                  <a key={i.label} href={i.href} className="rounded-lg px-4 py-2 text-slate-200 hover:bg-white/5">
                    {i.label}
                  </a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-4 py-2 text-white font-medium mt-2">
                  <Phone size={18} /> Consultanță
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
