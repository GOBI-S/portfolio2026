"use client"

import { motion, Variants } from "framer-motion"

interface SkillCategory {
  name: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux",
      "React Query",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Three.js",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT Authentication",
      "Socket.io",
    ],
  },
  {
    name: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Vercel",
      "Netlify",
      "Render",
      "Heroku",
      "NPM",
      "Nodemon",
      "Prettier",
    ],
  },
  {
    name: "Security & Data",
    skills: [
      "Web Security",
      "WAF Development",
      "Vulnerability Scanning",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "scikit-learn",
    ],
  },
]

export function SkillsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1], // TS-safe easing
      },
    },
  }

  return (
    <section id="skills" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A comprehensive overview of my technical expertise across different domains.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <h3 className="text-lg font-semibold mb-4 text-accent">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-accent/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
