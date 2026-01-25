"use client"

import { motion, type Variants } from "framer-motion"

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section className="section-padding pt-24 md:pt-32">
      <div className="container-max">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className="mb-4">
            <span className="text-foreground">Gobi S</span>
            <br />
            <span className="text-accent">
              Full-Stack Developer | Security-Focused Builder
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground mb-8 leading-relaxed"
          >
            I build full-stack web applications with a strong focus on backend architecture and web security. 
            Passionate about breaking, securing, and engineering real-world systems.
          </motion.p>

          <motion.div variants={itemVariants} className="flex gap-4">
            <a
              href="#projects"
              className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-border text-foreground rounded-md font-medium hover:bg-card transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
