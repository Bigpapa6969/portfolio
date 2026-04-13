export default function About() {
  const facts = [
    { label: 'Degree', value: 'B.S. Electrical Engineering' },
    { label: 'University', value: 'Arizona State University' },
    { label: 'Focus', value: 'Software & Embedded Systems' },
    { label: 'Status', value: 'Seeking 2025 Internships' },
  ]

  return (
    <section id="about" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">

          {/* Left: label + quick stats */}
          <div>
            <div className="label-tag mb-3">01 / About</div>
            <h2 className="font-display text-3xl font-700 text-prose tracking-tight mb-8">
              Background
            </h2>

            {/* Stat cards */}
            <div className="space-y-2">
              {facts.map(({ label, value }) => (
                <div
                  key={label}
                  className="bg-surface border border-border rounded px-4 py-3 flex flex-col gap-0.5"
                >
                  <span className="font-mono text-xs text-muted/70 uppercase tracking-widest">{label}</span>
                  <span className="text-sm text-prose font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <div className="space-y-5">
            {/* Terminal-style block */}
            <div className="bg-surface border border-border rounded-lg overflow-hidden">
              {/* Terminal titlebar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-surface-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <span className="w-2.5 h-2.5 rounded-full bg-signal/50" />
                <span className="font-mono text-xs text-muted/50 ml-2">about.md</span>
              </div>
              {/* Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <p className="text-prose/80 leading-relaxed text-sm sm:text-base font-light">
                  I am an electrical engineering student at ASU with a strong interest in software, digital design, and engineering tools. I enjoy building practical projects that solve real technical problems, especially in data analysis, automation, and hardware-related workflows.
                </p>
                <p className="text-prose/80 leading-relaxed text-sm sm:text-base font-light">
                  My background includes programming, circuit-related coursework, and technical problem-solving. I am currently looking for opportunities where I can contribute to engineering software, embedded systems, or test development.
                </p>

                {/* Inline highlights */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Python', 'Embedded C++', 'Signal Analysis', 'Test Automation', 'Circuit Design'].map(tag => (
                    <span
                      key={tag}
                      className="font-mono text-xs bg-signal-dim border border-signal/15 text-signal px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
