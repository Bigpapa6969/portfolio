import { Github, ExternalLink, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: '01',
    title: 'Waveform Analysis & Test Report Generator',
    tagline: 'Automated lab measurement pipeline with PDF reporting',
    description:
      'Software tool for importing lab measurement data, extracting signal metrics, and generating automated engineering reports. Designed to replace manual data processing workflows in electronics testing.',
    bullets: [
      'Built Python-based analysis pipeline for waveform CSV files',
      'Calculated RMS, frequency, ripple, duty cycle, and rise/fall time',
      'Created interactive plots for signal inspection',
      'Exported pass/fail summaries and PDF reports',
    ],
    tech: ['Python', 'FastAPI', 'NumPy', 'pandas', 'Plotly', 'PyQt', 'ReportLab'],
    github: 'https://github.com/JoeCooksey/lab-measurement-platform',
    demo: 'https://lab-measurement-platform.vercel.app',
    featured: true,
    domain: 'Test Automation',
  },
  {
    id: '02',
    title: 'Circuit Simulator & Bode Plot Generator',
    tagline: 'Frequency-domain analysis for RC and RLC circuits',
    description:
      'Interactive simulation tool for analyzing RC and RLC filter circuits. Generates Bode magnitude and phase plots for frequency-domain inspection and transient response waveforms.',
    bullets: [
      'Simulated RC low-pass, RC high-pass, and RLC bandpass topologies',
      'Generated Bode magnitude and phase plots via SciPy signal processing',
      'Produced transient response waveforms for time-domain analysis',
      'Rendered exportable circuit schematics and diagrams',
    ],
    tech: ['Python', 'NumPy', 'SciPy', 'matplotlib'],
    github: 'https://github.com/JoeCooksey/circuit-simulator',
    demo: 'https://circuit-simulator-gilt.vercel.app',
    featured: false,
    domain: 'Circuit Analysis',
  },
  {
    id: '03',
    title: 'ML Journey: MOSFET Rds(on) Predictor',
    tagline: 'Learning machine learning from first principles in NumPy',
    description:
      'A from-scratch path into machine learning — no scikit-learn, just NumPy and the math. Builds from manual grid search up to a complete model-selection workflow that predicts a power MOSFET’s on-resistance from its operating conditions.',
    bullets: [
      'Implemented linear regression, gradient descent, and L2 regularization by hand',
      'Built a train/validation/test pipeline with leakage-safe feature scaling',
      'Tuned lambda on validation RMSE and chose the simpler model that performed as well',
      'Used signed residuals and residual plots to catch under-prediction and bias',
    ],
    tech: ['Python', 'NumPy', 'matplotlib'],
    github: 'https://github.com/JoeCooksey/ml-journey',
    featured: false,
    domain: 'Machine Learning',
  },
]

function ProjectCard({ project }) {
  return (
    <article className={`relative bg-surface border rounded-lg overflow-hidden card-hover ${
      project.featured ? 'border-signal/20' : 'border-border'
    }`}>
      {/* Top accent bar */}
      {project.featured && (
        <div className="h-px bg-gradient-to-r from-transparent via-signal/50 to-transparent" />
      )}

      <div className="p-6 sm:p-8">
        {/* Header row */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-muted/50">#{project.id}</span>
              <span className="font-mono text-xs bg-signal-dim border border-signal/15 text-signal px-2 py-0.5 rounded tracking-wider uppercase">
                {project.domain}
              </span>
              {project.featured && (
                <span className="font-mono text-xs text-signal/60 tracking-wider uppercase">
                  Featured
                </span>
              )}
            </div>
            <h3 className="font-display text-lg sm:text-xl font-700 text-prose leading-snug tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs text-muted mt-1 font-mono">{project.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-5 font-light">
          {project.description}
        </p>

        {/* Bullet list */}
        <ul className="space-y-2 mb-6">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-prose/70">
              <ChevronRight size={12} className="mt-1 flex-shrink-0 text-signal/60" strokeWidth={2.5} />
              <span className="leading-snug">{b}</span>
            </li>
          ))}
        </ul>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono text-xs bg-surface-3 border border-dim text-muted px-2.5 py-1 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-prose transition-colors uppercase tracking-widest"
          >
            <Github size={13} strokeWidth={1.5} />
            Source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-signal hover:text-signal/80 transition-colors uppercase tracking-widest"
            >
              <ExternalLink size={13} strokeWidth={1.5} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between gap-6 mb-12">
          <div>
            <div className="label-tag mb-3">02 / Work</div>
            <h2 className="font-display text-3xl font-700 text-prose tracking-tight">
              Projects
            </h2>
            <p className="text-sm text-muted mt-2 max-w-sm font-light">
              Engineering tools built from scratch to solve real lab and analysis problems.
            </p>
          </div>
          <a
            href="https://github.com/JoeCooksey"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-signal transition-colors tracking-widest uppercase whitespace-nowrap"
          >
            View all on GitHub
            <ExternalLink size={11} />
          </a>
        </div>

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 gap-5">
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
