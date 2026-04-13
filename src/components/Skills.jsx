const skillGroups = [
  {
    id: 'lang',
    category: 'Languages',
    icon: '{ }',
    items: ['Python', 'Java', 'MATLAB', 'JavaScript', 'C++'],
    accent: true,
  },
  {
    id: 'eng',
    category: 'Engineering',
    icon: '~',
    items: ['Circuit Analysis', 'Digital Logic', 'Test Automation', 'Signal Analysis'],
    accent: false,
  },
  {
    id: 'tools',
    category: 'Tools',
    icon: '#',
    items: ['Git', 'LTspice', 'VS Code', 'Linux'],
    accent: false,
  },
  {
    id: 'course',
    category: 'Coursework',
    icon: '∑',
    items: ['Digital Design', 'Circuits', 'Physics', 'Differential Equations'],
    accent: false,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-divider mb-24" />
      <div className="max-w-6xl mx-auto px-6">
        <div className="label-tag mb-3">03 / Expertise</div>
        <h2 className="font-display text-3xl font-700 text-prose tracking-tight mb-12">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {skillGroups.map(({ id, category, icon, items, accent }) => (
            <div
              key={id}
              className={`bg-surface border rounded-lg p-5 card-hover ${
                accent ? 'border-signal/20' : 'border-border'
              }`}
            >
              {/* Category header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span
                  className="font-mono text-base leading-none"
                  style={{ color: accent ? '#00c896' : '#5a6a7e' }}
                >
                  {icon}
                </span>
                <span className="font-mono text-xs text-muted/70 uppercase tracking-widest">
                  {category}
                </span>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-1.5">
                {items.map(item => (
                  <span
                    key={item}
                    className={`font-mono text-xs px-2.5 py-1 rounded border transition-colors ${
                      accent
                        ? 'bg-signal-dim border-signal/15 text-signal/80'
                        : 'bg-surface-3 border-dim text-muted'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency indicator */}
        <div className="mt-8 bg-surface border border-border rounded-lg p-5">
          <div className="font-mono text-xs text-muted/50 uppercase tracking-widest mb-4">
            Proficiency / Primary languages
          </div>
          <div className="space-y-3">
            {[
              { lang: 'Python', pct: 85 },
              { lang: 'MATLAB', pct: 70 },
              { lang: 'C++', pct: 55 },
              { lang: 'JavaScript', pct: 60 },
              { lang: 'Java', pct: 50 },
            ].map(({ lang, pct }) => (
              <div key={lang} className="flex items-center gap-4">
                <span className="font-mono text-xs text-muted w-24 flex-shrink-0">{lang}</span>
                <div className="flex-1 h-1 bg-surface-3 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-signal/80 to-signal/40"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-muted/40 w-8 text-right">{pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
