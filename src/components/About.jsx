import { motion } from 'framer-motion'
import { Cpu, GitBranch, Cloud } from 'lucide-react'

const pillars = [
  {
    icon: Cpu,
    title: 'Electronics Background',
    text: 'B.Tech in Electronics & Communication Engineering — a foundation in systems thinking and hardware-level understanding.'
  },
  {
    icon: GitBranch,
    title: 'RFQ Engineer → DevOps',
    text: 'Worked as an RFQ Engineer/Analyst at SFO Technologies, then made a deliberate transition toward cloud infrastructure and automation.'
  },
  {
    icon: Cloud,
    title: 'Where I\'m headed',
    text: 'Becoming a DevOps/Cloud Engineer who builds scalable, automated systems — CI/CD pipelines, containers, and infrastructure as code.'
  }
]

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 lg:px-16">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-2 font-mono text-sm text-signal-teal"
      >
        // About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 font-display text-3xl font-bold text-ink-100 sm:text-4xl"
      >
        From electronics to infrastructure
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="max-w-2xl text-ink-300"
      >
        M P Aswin is an aspiring DevOps Engineer with an ECE background and prior
        experience as an RFQ Engineer. That path — electronics, then customer-facing
        technical work — built a habit of digging into how systems actually behave,
        which now shows up in how he approaches automation and infrastructure.
      </motion.p>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover rounded-xl p-6"
          >
            <p.icon className="mb-4 text-signal-teal" size={22} />
            <h3 className="mb-2 font-display text-base font-semibold text-ink-100">
              {p.title}
            </h3>
            <p className="text-sm leading-relaxed text-ink-500">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
