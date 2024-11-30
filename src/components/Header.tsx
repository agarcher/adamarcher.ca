'use client'

import * as Toggle from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '../hooks/useTheme.ts'
import { useRef, useEffect } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const navRef = useRef<HTMLElement>(null)

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
      {/* <div className="absolute inset-0 h-24 bg-gradient-to-b from-background via-background to-transparent -z-10" />
      <nav 
        ref={navRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 root-background"
      > */}
        <div className="flex justify-end h-16">
          <div className="flex items-center">
            <Toggle.Root
              pressed={theme === 'dark'}
              onPressedChange={(pressed: boolean) => setTheme(pressed ? 'dark' : 'light')}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Toggle.Root>
          </div>
        </div>
      {/* </nav> */}
    </header>
  )
}

