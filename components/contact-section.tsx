"use client"

import { motion } from "framer-motion"

interface ContactLink {
  label: string
  href: string
  icon: string
}

const contactLinks: ContactLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/GOBI-S",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rtr-gobi-s-7b1a52242/",
    icon: "linkedin",
  },
  {
    label: "Email",
    href: "mailto:gobidreamer@gmail.com",
    icon: "email",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-max">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Interested in collaborating on full-stack or security-focused projects? I'm open to internships, freelance
            work, and challenging technical opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <a
              href="mailto:gobidreamer@gmail.com"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition-opacity inline-block"
            >
              Send me an Email
            </a>
          </div>

          <div className="space-y-3 text-muted-foreground">
            <p>Or find me on:</p>
            <div className="flex gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-md border border-border hover:bg-card hover:border-accent/50 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon === "github" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.89 1.529 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.899-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.72c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.413 20 10c0-5.523-4.477-10-10-10z" />
                    </svg>
                  )}
                  {link.icon === "linkedin" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.337 0H3.663C1.636 0 0 1.635 0 3.663v12.674C0 18.365 1.636 20 3.663 20h12.674C18.365 20 20 18.365 20 16.337V3.663C20 1.635 18.365 0 16.337 0zM5.955 17.024H2.977V7.519h2.978v9.505zm-1.489-10.807c-.955 0-1.73-.774-1.73-1.729s.775-1.73 1.73-1.73 1.729.775 1.729 1.73-.774 1.729-1.729 1.729zm12.058 10.807h-2.977v-4.626c0-1.104-.022-2.523-1.537-2.523-1.537 0-1.772 1.199-1.772 2.438v4.711h-2.978V7.519h2.86v1.294h.04c.399-.756 1.374-1.553 2.828-1.553 3.025 0 3.585 1.991 3.585 4.582v5.182z" />
                    </svg>
                  )}
                  {link.icon === "email" && (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
