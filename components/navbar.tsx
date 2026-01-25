"use client"

import { ThemeToggle } from "./theme-toggle"

interface NavLink {
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Security", href: "#projects" }, // points to your security tools section
  { label: "Contact", href: "#contact" },
]

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="text-xl font-bold text-accent hover:text-accent/80 transition-colors"
          >
            Gobi S
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
