import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const responsibilities = [
  'RFQ analysis for customer technical requirements',
  'Technical documentation and specification review',
  'Coordination with engineering teams across projects',
  'Handling and translating customer requirements into actionable specs'
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28 lg:px-16">
      <p className="mb-2 font-mono text-sm text-signal-teal">// Experience</p>
      <h2 className="mb-12 font-display text-3xl font-bold text-ink-100 sm:text-4xl">
        Work history
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass glass-hover max-w-2xl rounded-xl p-7"
      >
        <div className="mb-4 flex items-start gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-signal-teal/30 bg-signal-teal/10">
            <Briefcase size={20} className="text-signal-teal" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-ink-100">
              RFQ Engineer / RFQ Analyst
            </h3>
            <p className="text-sm text-ink-500">SFO Technologies</p>
            <p className="font-mono text-xs text-ink-700">March 2025 — March 2026</p>
          </div>
        </div>

        <ul className="space-y-2.5">
          {responsibilities.map((r) => (
            <li key={r} className="flex items-start gap-2.5 text-sm text-ink-300">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal-orange" />
              {r}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
