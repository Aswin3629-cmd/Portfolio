import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

const links = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mpaswin76@gmail.com',
    href: 'mailto:mpaswin76@gmail.com'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Aswin3629-cmd',
    href: 'https://github.com/Aswin3629-cmd'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/m-p-aswin-5908a922a',
    href: 'https://www.linkedin.com/in/m-p-aswin-5908a922a'
  }
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28 lg:px-16">
      <p className="mb-2 font-mono text-sm text-signal-teal">// Contact</p>
      <h2 className="mb-4 font-display text-3xl font-bold text-ink-100 sm:text-4xl">
        Let's build something
      </h2>
      <p className="mb-12 max-w-xl text-ink-300">
        Open to DevOps and Cloud Engineer roles. Reach out directly, or find the
        work on GitHub and LinkedIn.
      </p>

      <div className="grid gap-5 sm:grid-cols-3">
        {links.map((l, i) => (
          <motion.a
            key={l.label}
            href={l.href}
            target={l.label === 'Email' ? undefined : '_blank'}
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover flex flex-col items-start gap-3 rounded-xl p-6"
          >
            <l.icon className="text-signal-teal" size={20} />
            <div>
              <p className="font-mono text-xs text-ink-700">{l.label}</p>
              <p className="mt-0.5 font-mono text-sm text-ink-100">{l.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
