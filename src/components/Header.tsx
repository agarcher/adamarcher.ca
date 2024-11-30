'use client'

import * as Toggle from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '../hooks/useTheme.ts'
import { useRef, useEffect, useState } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const navRef = useRef<HTMLElement>(null)
  const [isHeroVisible, setIsHeroVisible] = useState(true)

  useEffect(() => {
    const handleNameVisibility = (event: CustomEvent<{ isVisible: boolean }>) => {
      setIsHeroVisible(event.detail.isVisible)
    }

    // Add event listener for our custom event
    window.addEventListener('nameVisibility', handleNameVisibility as EventListener)

    return () => {
      window.removeEventListener('nameVisibility', handleNameVisibility as EventListener)
    }
  }, [])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    let rafId: number
    const updatePosition = () => {
      nav.style.backgroundPositionY = `${-window.scrollY}px`
      rafId = requestAnimationFrame(updatePosition)
    }
    
    rafId = requestAnimationFrame(updatePosition)
    
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
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
                <span className="text-foreground">Adam Archer</span>
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

