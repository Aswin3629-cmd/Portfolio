import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ArrowDown, Download, Mail } from 'lucide-react'

const stages = ['source', 'build', 'test', 'push', 'deploy']

const commands = [
  '$ git push origin main',
  '$ docker build -t aswin/app:latest .',
  '$ docker push aswin/app:latest',
  '$ kubectl apply -f deployment.yaml',
  '$ status: deployment successful ✓'
]

function PipelineViz() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActive((a) => (a + 1) % stages.length)
    }, 1600)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="glass w-full max-w-xl rounded-xl p-5">
      <div className="mb-4 flex items-center justify-between font-mono text-xs text-ink-500">
        <span>pipeline.yml</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-green" />
          running
        </span>
      </div>

      <div className="flex items-center justify-between">
        {stages.map((stage, i) => (
          <div key={stage} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border font-mono text-[10px] transition-all duration-500 ${
                  i <= active
                    ? 'border-signal-teal bg-signal-teal/15 text-signal-teal shadow-glow'
                    : 'border-white/10 text-ink-700'
                }`}
              >
                {i < active ? '✓' : i + 1}
              </div>
              <span
                className={`font-mono text-[10px] capitalize transition-colors ${
                  i <= active ? 'text-ink-100' : 'text-ink-700'
                }`}
              >
                {stage}
              </span>
            </div>
            {i < stages.length - 1 && (
              <div className="mx-1 mb-4 h-px flex-1 bg-white/10">
                <div
                  className="h-px bg-signal-teal transition-all duration-700"
                  style={{ width: i < active ? '100%' : '0%' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-lg bg-black/40 p-3 font-mono text-[11px] text-signal-green">
        {commands[active]}
        <span className="ml-0.5 animate-pulse">▍</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center gap-12 px-6 pt-24 lg:flex-row lg:gap-16 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-xl text-center lg:text-left"
      >
        <p className="mb-4 font-mono text-sm text-signal-teal">Hi, I'm</p>
        <h1 className="font-display text-5xl font-bold leading-tight text-ink-100 sm:text-6xl">
          M P Aswin
        </h1>
        <h2 className="mt-3 font-display text-2xl font-medium text-gradient sm:text-3xl">
          DevOps Engineer
        </h2>
        <p className="mt-5 font-mono text-sm text-ink-300 sm:text-base">
          Cloud Enthusiast · CI/CD · Docker · Kubernetes · AWS
        </p>
        <p className="mt-4 max-w-md text-sm text-ink-500 lg:max-w-none">
          I build automated pipelines and containerized systems that ship reliably —
          from a single Dockerfile to a full deploy-to-cluster workflow.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <a
            href="#projects"
            className="rounded-md bg-signal-teal px-5 py-2.5 font-mono text-sm font-medium text-base-950 transition-transform hover:-translate-y-0.5 hover:shadow-glow"
          >
            View Projects
          </a>
          <a
            href="/Aswin_MP_Resume.pdf"
            className="flex items-center gap-2 rounded-md border border-white/15 px-5 py-2.5 font-mono text-sm text-ink-100 transition-all hover:border-signal-orange/50 hover:text-signal-orange"
          >
            <Download size={15} /> Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-2 py-2.5 font-mono text-sm text-ink-300 transition-colors hover:text-signal-teal"
          >
            <Mail size={15} /> Contact
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
      >
        <PipelineViz />
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-700 hover:text-signal-teal"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  )
}
