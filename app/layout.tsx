import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gobi S | Full-Stack Developer & Security Enthusiast",
  description:
    "Portfolio of Gobi S — Full-stack developer specializing in secure web applications, backend systems, and cybersecurity-focused projects including WAF and vulnerability scanning tools.",
  keywords: [
    "Gobi S",
    "Full Stack Developer",
    "Cybersecurity",
    "Web Security",
    "MERN Developer",
    "Backend Developer",
    "CTF Player",
    "Web Application Firewall",
  ],
  authors: [{ name: "Gobi S" }],
  creator: "Gobi S",
  icons: {
    icon: "favi.ico",
    // apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://gobi.page/"),
  openGraph: {
    title: "Gobi S | Full-Stack Developer & Security Enthusiast",
    description:
      "Building secure full-stack applications, backend APIs, and cybersecurity tools.",
    url: "https://gobi.page/",
    siteName: "Gobi S Portfolio",
    type: "website",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
