import { motion } from 'framer-motion'

const shots = [
  {
    file: 'kubectl-pods.png',
    title: 'Kubernetes — Pods',
    caption: 'Deployment running healthy replicas alongside other cluster workloads'
  },
  {
    file: 'kubectl-svc.png',
    title: 'Kubernetes — Services',
    caption: 'Service exposing the portfolio deployment via NodePort'
  },
  {
    file: 'helm.png',
    title: 'Helm',
    caption: 'Chart deployed and tracked as a Helm release'
  },
  {
    file: 'cicd.png',
    title: 'CI/CD',
    caption: 'GitHub Actions building and pushing the image on every push to main'
  },
  {
    file: 'dockerhub.png',
    title: 'Docker Hub',
    caption: 'Published image tags, built automatically by CI'
  }
]

export default function ProofOfWork() {
  return (
    <section id="proof" className="mx-auto max-w-6xl px-6 py-28 lg:px-16">
      <p className="mb-2 font-mono text-sm text-signal-teal">// proof of work</p>
      <h2 className="mb-4 font-display text-3xl font-bold text-ink-100 sm:text-4xl">
        This site is the project
      </h2>
      <p className="mb-12 max-w-2xl text-ink-300">
        This portfolio isn't just deployed — it's containerized, built through CI/CD,
        and running on Kubernetes via Helm. Here's the actual pipeline behind it.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {shots.map((s, i) => (
          <motion.div
            key={s.file}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass glass-hover overflow-hidden rounded-xl"
          >
            <img
              src={`/screenshots/${s.file}`}
              alt={s.title}
              className="h-56 w-full border-b border-white/10 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="font-display text-base font-semibold text-ink-100">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-ink-500">{s.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
