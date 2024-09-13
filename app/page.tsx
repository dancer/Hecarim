"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, Palette, Code, Zap, Eye } from "lucide-react"

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Hecarim Logo" width={50} height={50} />
          </Link>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Link href="/theme">
              <Button variant="outline" size="icon">
                <Palette className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </header>

        <main className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in-down">
            Hecarim VS Code Theme
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Elevate your coding experience with our sleek and modern theme for Visual Studio Code.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/theme">
              <Button size="lg" className="animate-pulse">
                Explore Theme
              </Button>
            </Link>
            <a href="https://github.com/dancer/Hecarim-Theme" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="hover-lift">
              <CardContent className="flex flex-col items-center p-6">
                <Code className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-2">Syntax Highlighting</h2>
                <p className="text-center text-muted-foreground">Carefully crafted color scheme for optimal readability</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="flex flex-col items-center p-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-2">Performance Optimized</h2>
                <p className="text-center text-muted-foreground">Lightweight theme for smooth coding experience</p>
              </CardContent>
            </Card>
            <Card className="hover-lift">
              <CardContent className="flex flex-col items-center p-6">
                <Eye className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-xl font-semibold mb-2">Easy on the Eyes</h2>
                <p className="text-center text-muted-foreground">Designed for long coding sessions with reduced eye strain</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-primary text-primary-foreground p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your coding environment?</h2>
            <Link href="/theme">
              <Button size="lg" variant="secondary">
                Get Started Now
              </Button>
            </Link>
          </div>
        </main>

        <footer className="mt-12 text-center text-muted-foreground">
          <p>&copy; 2024 Hecarim Theme. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
};