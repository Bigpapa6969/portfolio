/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        ink: '#050810',
        surface: '#0c1018',
        'surface-2': '#131820',
        'surface-3': '#1a2030',
        border: '#1e2736',
        'border-bright': '#2a3548',
        signal: '#00c896',
        'signal-dim': 'rgba(0,200,150,0.12)',
        'signal-glow': 'rgba(0,200,150,0.06)',
        prose: '#c8d4e0',
        muted: '#5a6a7e',
        dim: '#2e3d50',
      },
      boxShadow: {
        signal: '0 0 20px rgba(0,200,150,0.15)',
        'signal-sm': '0 0 8px rgba(0,200,150,0.2)',
      },
    },
  },
  plugins: [],
}
