"use client"

import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    technologies: string[]
    github?: string
    live?: string
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      className="h-full p-6 rounded-lg bg-background border border-border hover:border-accent/50 transition-all duration-300"
      whileHover={{ y: -4, boxShadow: "0 20px 25px -5 rgba(0, 0, 0, 0.1)" }}
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <span key={tech} className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.89 1.529 2.341 1.544 2.914 1.184.092-.923.35-1.544.636-1.899-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.72c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.138 18.163 20 14.413 20 10c0-5.523-4.477-10-10-10z" />
            </svg>
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Live
          </a>
        )}
      </div>
    </motion.div>
  )
}
