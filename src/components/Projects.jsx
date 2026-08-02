import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'CI/CD Pipeline Flask Application',
    desc: 'A containerized Flask application with a fully automated CI/CD pipeline — every push builds, tests, and ships a new image.',
    stack: ['Python Flask', 'GitHub Actions', 'Docker', 'Docker Hub', 'Render'],
    href: 'https://github.com/Aswin3629-cmd'
  },
  {
    title: 'AWS Infrastructure Automation',
    desc: 'Infrastructure-as-code workflow where Terraform provisions AWS resources and Ansible configures servers and deploys the application.',
    stack: ['AWS EC2', 'Terraform', 'Ansible', 'Docker'],
    href: 'https://github.com/Aswin3629-cmd'
  },
  {
    title: 'Kubernetes Application Deployment',
    desc: 'Application deployed on Kubernetes with proper workload management, service exposure, and ingress-based routing.',
    stack: ['Kubernetes', 'Minikube', 'Helm', 'Ingress', 'Docker'],
    href: 'https://github.com/Aswin3629-cmd'
  },
  {
    title: 'Linux Monitoring Automation',
    desc: 'Bash scripts that watch system resources and logs, flagging issues before they become incidents.',
    stack: ['Bash', 'Linux', 'Log Monitoring'],
    href: 'https://github.com/Aswin3629-cmd'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 lg:px-16">
      <p className="mb-2 font-mono text-sm text-signal-teal">// Projects</p>
      <h2 className="mb-12 font-display text-3xl font-bold text-ink-100 sm:text-4xl">
        Things I've shipped
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 2) * 0.1 }}
            className="glass glass-hover group flex flex-col rounded-xl p-6"
          >
            <div className="mb-3 flex items-start justify-between">
              <h3 className="font-display text-lg font-semibold text-ink-100">
                {p.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-ink-700 transition-colors group-hover:text-signal-teal"
              />
            </div>
            <p className="mb-4 text-sm leading-relaxed text-ink-500">{p.desc}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="rounded border border-white/10 px-2 py-1 font-mono text-[11px] text-ink-300"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-ink-700">
              <Github size={13} /> view source
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
