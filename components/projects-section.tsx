"use client"

import { motion, Variants } from "framer-motion"
import { ProjectCard } from "./project-card"

interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  github?: string
  live?: string
  image?: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "Room Rent Platform (MERN Stack)",
    description:
      "Full-stack room rental platform built with the MERN stack where users can browse listings, view room details, manage bookings, and authenticate securely.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "JWT", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/GOBI-S/Room-Rent-Web-App-MERN-",
  },
  {
    id: "2",
    title: "Vulnerability Scanner & Web Application Firewall",
    description:
      "Security-focused web application that scans for common web vulnerabilities and includes a custom Web Application Firewall (WAF) to detect and block attacks such as SQL injection and XSS.",
    technologies: ["Node.js", "Express", "MongoDB", "Security", "WAF"],
    github: "https://github.com/GOBI-S/Vulnerability-Scanner-Web-Application-Firewall",
  },
  
  {
    id: "3",
    title: "Weather Reminder Application",
    description:
      "Weather-based notification system that alerts users about temperature or weather condition changes using a custom API and real-time data handling.",
    technologies: ["Next.js", "TypeScript", "Node.js", "API Integration", "JavaScript"],
    github: "https://github.com/GOBI-S/weather-frontend",
  },
  {
    id: "4",
    title: "Three.js Solar System Simulation",
    description:
      "Interactive 3D solar system simulation built with Three.js featuring animated planetary orbits, lighting effects, and camera controls for real-time exploration.",
    technologies: ["JavaScript", "Three.js", "WebGL", "3D Animation"],
    github: "https://github.com/GOBI-S/Soloarsystem",
  },
]

export function ProjectsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
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
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  }

  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4">Featured Projects</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Selected projects showcasing my work in full-stack development, backend architecture, web security, and
            interactive 3D web experiences.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
