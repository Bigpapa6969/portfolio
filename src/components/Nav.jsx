import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/85 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-signal group-hover:shadow-signal-sm transition-shadow" style={{ boxShadow: '0 0 8px rgba(0,200,150,0.5)' }} />
          <span className="font-display font-700 text-sm text-prose tracking-wide">Joe</span>
          <span className="font-mono text-xs text-muted">/ EE Student</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs text-muted hover:text-signal transition-colors tracking-widest uppercase"
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:joe.43427@gmail.com"
            className="font-mono text-xs bg-signal-dim border border-signal/20 text-signal hover:bg-signal/15 hover:border-signal/40 px-3 py-1.5 rounded transition-all tracking-widest uppercase"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-muted hover:text-prose transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-surface border-b border-border px-6 py-5 flex flex-col gap-5">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xs text-muted hover:text-signal transition-colors tracking-widest uppercase"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="mailto:joe.43427@gmail.com"
            className="font-mono text-xs text-signal tracking-widest uppercase"
            onClick={() => setOpen(false)}
          >
            Hire Me →
          </a>
        </div>
      )}
    </header>
  )
}
