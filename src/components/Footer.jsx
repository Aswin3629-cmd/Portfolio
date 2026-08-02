export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-8 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-xs text-ink-700 sm:flex-row">
        <p>© {new Date().getFullYear()} M P Aswin — built and deployed like a production system.</p>
        <p className="text-ink-700">
          <span className="text-signal-green">●</span> status: online
        </p>
      </div>
    </footer>
  )
}
