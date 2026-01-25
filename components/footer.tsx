export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border py-8 bg-card/30">
      <div className="container-max">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Gobi S. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Next.js
            </a>{" "}
            {/* and{" "}
            <a
              href="https://www.framer.com/motion"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Framer Motion
            </a> */}
          </p>
        </div>
      </div>
    </footer>
  )
}
