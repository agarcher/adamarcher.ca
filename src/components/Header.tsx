'use client'

import * as Toggle from '@radix-ui/react-toggle'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from '../hooks/useTheme.ts'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </nav>
    </header>
  )
}

