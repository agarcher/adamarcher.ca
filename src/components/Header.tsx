'use client'

import * as Toggle from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '../hooks/useTheme.ts'
import { useRef, useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const headerRef = useRef<HTMLElement>(null)
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [isOpaque, setIsOpaque] = useState(false)

  useEffect(() => {
    const handleNameVisibility = (event: CustomEvent<{ isVisible: boolean }>) => {
      setIsHeroVisible(event.detail.isVisible)
    }

    window.addEventListener('nameVisibility', handleNameVisibility as EventListener)
    return () => {
      window.removeEventListener('nameVisibility', handleNameVisibility as EventListener)
    }
  }, [])

  useEffect(() => {
    const header = headerRef.current
    if (!header) return

    let intersectionObserver: IntersectionObserver

    const setupObserver = () => {
      const headerHeight = header.offsetHeight
      
      const hero = document.getElementById('hero')
      const heroHeight = hero?.offsetHeight || 0

      if (intersectionObserver) {
        if (hero) {
          intersectionObserver.unobserve(hero)
        }
      }

      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          setIsOpaque(!entry.isIntersecting)
        },
        { 
          threshold: 0,
          rootMargin: `-${headerHeight + heroHeight + 48}px 0px 0px 0px`
        }
      )

      if (hero) {
        intersectionObserver.observe(hero)
      }
    }

    // Set up resize observer to handle header height changes
    const resizeObserver = new ResizeObserver(() => {
      setupObserver()
    })

    resizeObserver.observe(header)
    setupObserver()

    return () => {
      const topSection = document.getElementById('top')
      if (topSection) {
        intersectionObserver.unobserve(topSection)
      }
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 border-b ${
        isOpaque ? 'bg-background border-accent-subtle' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="max-w-3xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center overflow-hidden">
            <h1 
              className={`
                p-2 text-xl font-bold text-foreground
                transform transition-all duration-300 ease-in-out
                ${isHeroVisible ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
              `}
            >
              {isHeroVisible ? (
                <span className="px-2 py-1 text-foreground">Adam Archer</span>
              ) : (
                <a href="#top" className="px-2 py-1 rounded-md text-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary">Adam Archer</a>
              )}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Links for desktop screen sizes */}
            <nav className="hidden sm:flex space-x-4">
              <a href="#about" className="px-2 py-1 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary">About</a>
              <a href="#contact" className="px-2 py-1 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary">Contact</a>
            </nav>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-4">
        <Toggle.Root
          pressed={theme === 'dark'}
          onPressedChange={(pressed: boolean) => setTheme(pressed ? 'dark' : 'light')}
          aria-label="Toggle dark mode"
          className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
        </Toggle.Root>
      </div>
    </header>
  )
}

