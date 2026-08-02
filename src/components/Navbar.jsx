import { useEffect, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? 'glass border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm text-ink-100">
          <Terminal size={16} className="text-signal-teal" />
          <span className="text-signal-teal">Aswin</span>
          <span className="text-ink-500">@</span>
          <span>devops</span>
          <span className="text-ink-500">:~$</span>
        </a>

        <ul className="hidden items-center gap-8 font-mono text-sm text-ink-300 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-signal-teal">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-md border border-signal-teal/40 px-4 py-2 font-mono text-xs text-signal-teal transition-all hover:bg-signal-teal/10 hover:shadow-glow md:inline-block"
        >
          hire_me()
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="text-ink-100 md:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul className="glass flex flex-col gap-1 border-t border-white/5 px-6 py-4 font-mono text-sm text-ink-300 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-signal-teal"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
