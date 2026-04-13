import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react'

// Oscilloscope-style waveform SVG — combines a square pulse with a sine section
function WaveformTrace() {
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 1400 500"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00c896" stopOpacity="0" />
          <stop offset="15%" stopColor="#00c896" stopOpacity="0.15" />
          <stop offset="50%" stopColor="#00c896" stopOpacity="0.12" />
          <stop offset="85%" stopColor="#00c896" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#00c896" stopOpacity="0" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Primary trace */}
      <path
        d="M-50,250 L80,250 L80,120 L160,120 L160,250
           L240,250 L240,380 L320,380 L320,250
           L400,250
           C440,250 440,130 480,130
           C520,130 520,370 560,370
           C600,370 600,130 640,130
           C680,130 680,370 720,370
           C760,370 760,130 800,130
           C840,130 840,250 880,250
           L960,250 L960,150 L1040,150 L1040,250
           L1120,250 L1120,340 L1200,340 L1200,250
           L1280,250 L1280,180 L1360,180 L1360,250 L1450,250"
        stroke="url(#waveGrad)"
        strokeWidth="1.5"
        fill="none"
        filter="url(#glow)"
      />

      {/* Trigger marker */}
      <line x1="400" y1="220" x2="400" y2="280" stroke="#00c896" strokeWidth="0.5" strokeOpacity="0.25" strokeDasharray="3,3" />
      <polygon points="395,250 400,240 405,250" fill="#00c896" fillOpacity="0.2" />

      {/* Measurement annotation */}
      <line x1="480" y1="100" x2="800" y2="100" stroke="#00c896" strokeWidth="0.4" strokeOpacity="0.15" strokeDasharray="4,4" />
      <text x="630" y="92" fill="#00c896" fillOpacity="0.2" fontSize="9" fontFamily="IBM Plex Mono" textAnchor="middle" letterSpacing="1">
        f = 2.4 kHz
      </text>

      {/* Voltage level markers */}
      <line x1="50" y1="130" x2="1380" y2="130" stroke="#00c896" strokeWidth="0.3" strokeOpacity="0.06" strokeDasharray="6,6" />
      <line x1="50" y1="250" x2="1380" y2="250" stroke="#00c896" strokeWidth="0.3" strokeOpacity="0.08" />
      <line x1="50" y1="370" x2="1380" y2="370" stroke="#00c896" strokeWidth="0.3" strokeOpacity="0.06" strokeDasharray="6,6" />
      <text x="42" y="134" fill="#00c896" fillOpacity="0.2" fontSize="8" fontFamily="IBM Plex Mono" textAnchor="end">+5V</text>
      <text x="42" y="254" fill="#00c896" fillOpacity="0.2" fontSize="8" fontFamily="IBM Plex Mono" textAnchor="end">0V</text>
      <text x="42" y="374" fill="#00c896" fillOpacity="0.2" fontSize="8" fontFamily="IBM Plex Mono" textAnchor="end">-5V</text>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-14 overflow-hidden graph-paper">
      {/* Radial vignette to focus center */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_40%,#050810_100%)]" />

      {/* Waveform */}
      <WaveformTrace />

      {/* Top-right corner decoration */}
      <div className="absolute top-20 right-8 md:right-16 opacity-20 font-mono text-xs text-signal leading-6 text-right hidden sm:block">
        <div>CH1 ▶ DC</div>
        <div>2.0V/div</div>
        <div>500µs/div</div>
        <div className="mt-2 text-signal/60">TRIG: CH1</div>
        <div className="text-signal/60">EDGE ↑ 0.0V</div>
      </div>

      {/* Main content */}
      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="signal-dot font-mono text-xs text-signal tracking-widest uppercase">
              Available for 2025 internships
            </span>
          </div>

          {/* Name */}
          <div className="font-mono text-sm text-muted mb-3 tracking-widest uppercase">
            Joe — Arizona State University
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.0] tracking-tight text-prose mb-6">
            Electrical
            <br />
            Engineering
            <br />
            <span className="text-signal-gradient">Student</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-muted max-w-lg mb-3 leading-relaxed font-light">
            Building practical software and engineering tools.
          </p>
          <p className="text-sm text-muted/70 max-w-md mb-10 leading-relaxed font-mono">
            Seeking roles in embedded software · test automation · engineering software
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/Bigpapa6969"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-border-bright text-prose px-4 py-2.5 rounded text-sm font-medium transition-all hover:bg-surface-2"
            >
              <Github size={14} strokeWidth={1.5} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/joe-cooksey-35a7b4206/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-border-bright text-prose px-4 py-2.5 rounded text-sm font-medium transition-all hover:bg-surface-2"
            >
              <Linkedin size={14} strokeWidth={1.5} />
              LinkedIn
            </a>
            <a
              href="mailto:joe.43427@gmail.com"
              className="inline-flex items-center gap-2 bg-surface border border-border hover:border-border-bright text-prose px-4 py-2.5 rounded text-sm font-medium transition-all hover:bg-surface-2"
            >
              <Mail size={14} strokeWidth={1.5} />
              Email
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-signal text-ink px-4 py-2.5 rounded text-sm font-semibold transition-all hover:opacity-90"
              style={{ boxShadow: '0 0 20px rgba(0,200,150,0.25)' }}
            >
              <Download size={14} strokeWidth={2} />
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted/50 hover:text-signal transition-colors group"
        aria-label="Scroll down"
      >
        <span className="font-mono text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
      </a>
    </section>
  )
}
