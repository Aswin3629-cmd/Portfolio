import { motion } from 'framer-motion'

const items = [
  {
    tag: 'B.Tech',
    year: '2024',
    title: 'Electronics and Communication Engineering',
    place: 'Jyothi Engineering College',
    meta: 'CGPA: 6.91'
  },
  {
    tag: '12th',
    year: '2020',
    title: 'Higher Secondary',
    place: 'A.K.N.M.M.A.M HSS, Kattukulam',
    meta: '80%'
  },
  {
    tag: '10th',
    year: '2018',
    title: 'Secondary School',
    place: 'Sreekrishnapuram Central School',
    meta: '75%'
  }
]

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28 lg:px-16">
      <p className="mb-2 font-mono text-sm text-signal-teal">// Education</p>
      <h2 className="mb-12 font-display text-3xl font-bold text-ink-100 sm:text-4xl">
        Academic timeline
      </h2>

      <div className="relative border-l border-white/10 pl-8">
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-signal-teal bg-base-900" />
            <div className="glass glass-hover rounded-xl p-5">
              <div className="mb-2 flex flex-wrap items-center gap-3 font-mono text-xs text-ink-500">
                <span className="rounded border border-signal-teal/30 px-2 py-0.5 text-signal-teal">
                  {item.tag}
                </span>
                <span>{item.year}</span>
              </div>
              <h3 className="font-display text-lg font-semibold text-ink-100">
                {item.title}
              </h3>
              <p className="text-sm text-ink-500">{item.place}</p>
              <p className="mt-1 font-mono text-sm text-signal-orange">{item.meta}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
