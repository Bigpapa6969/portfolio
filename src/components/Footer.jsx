import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const contacts = [
  {
    label: 'Email',
    value: 'joe.43427@gmail.com',
    href: 'mailto:joe.43427@gmail.com',
    icon: Mail,
    primary: true,
  },
  {
    label: 'GitHub',
    value: 'Bigpapa6969',
    href: 'https://github.com/Bigpapa6969',
    icon: Github,
    primary: false,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourprofile',
    href: 'https://linkedin.com/in/yourprofile',
    icon: Linkedin,
    primary: false,
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        {/* CTA block */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start mb-16">
          <div>
            <div className="label-tag mb-3">04 / Contact</div>
            <h2 className="font-display text-4xl sm:text-5xl font-800 text-prose tracking-tight leading-tight mb-4">
              Let's work<br />
              <span className="text-signal-gradient">together.</span>
            </h2>
            <p className="text-muted text-sm max-w-sm leading-relaxed font-light">
              Open to internships, co-ops, and entry-level engineering roles. I respond promptly — don't hesitate to reach out.
            </p>
          </div>

          {/* Contact cards */}
          <div className="space-y-3 min-w-[260px]">
            {contacts.map(({ label, value, href, icon: Icon, primary }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`group flex items-center gap-4 p-4 rounded-lg border transition-all ${
                  primary
                    ? 'bg-signal-dim border-signal/20 hover:bg-signal/15 hover:border-signal/40'
                    : 'bg-surface border-border hover:border-border-bright hover:bg-surface-2'
                }`}
              >
                <Icon
                  size={16}
                  strokeWidth={1.5}
                  className={primary ? 'text-signal' : 'text-muted'}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-xs text-muted/60 uppercase tracking-widest mb-0.5">
                    {label}
                  </div>
                  <div className={`text-sm font-medium truncate ${primary ? 'text-signal' : 'text-prose'}`}>
                    {value}
                  </div>
                </div>
                <ArrowUpRight
                  size={13}
                  className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${
                    primary ? 'text-signal' : 'text-muted'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal/60" style={{ boxShadow: '0 0 6px rgba(0,200,150,0.4)' }} />
            <span className="font-mono text-xs text-muted/50">
              Joe · Electrical Engineering · Arizona State University
            </span>
          </div>
          <span className="font-mono text-xs text-muted/30">
            © {new Date().getFullYear()} · Built with React & Tailwind
          </span>
        </div>
      </div>
    </footer>
  )
}
