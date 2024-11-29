'use client'

import * as Toggle from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '../hooks/useTheme'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-background shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-foreground">Adam Archer</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
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
      </nav>
    </header>
  )
}

