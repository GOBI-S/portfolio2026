"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am a Computer and Communication Engineering student with hands-on experience in full-stack development and cybersecurity.
              </p>
              <p>
                I build real-world web applications, backend APIs, and security-focused systems including Web Application Firewalls and vulnerability scanners. I actively participate in Capture The Flag (CTF) competitions to understand real attack techniques and defensive strategies.
              </p>
              <p>
                My focus is on developing systems that are not just functional, but secure, scalable, and built with strong backend architecture.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-lg bg-background border border-border">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Projects Built</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <div className="text-3xl font-bold text-accent mb-2">Founder</div>
              <p className="text-sm text-muted-foreground">Onyx Technologies</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <div className="text-3xl font-bold text-accent mb-2">CTF</div>
              <p className="text-sm text-muted-foreground">Active Participant</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border">
              <div className="text-3xl font-bold text-accent mb-2">Security</div>
              <p className="text-sm text-muted-foreground">Focused Developer</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
