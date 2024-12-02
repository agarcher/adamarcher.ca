import { useEffect, useRef } from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { XLogo } from './icons/XLogo'

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        window.dispatchEvent(
          new CustomEvent('nameVisibility', {
            detail: { isVisible: entry.isIntersecting }
          })
        )
      },
      { threshold: 0.5 }
    )

    if (nameRef.current) {
      observer.observe(nameRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div id="hero" className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="text-center">
        <h1 
          ref={nameRef}
          className="text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl transition-colors duration-300"
        >
          Adam Archer
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-5xl transition-colors duration-300">
          Freelance Software Engineer
        </p>
        <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-5xl transition-colors duration-300">
          Bringing decades of experience to your next project.
        </p>
        <div className="mt-8 flex justify-center space-x-6">
          <a 
            href="https://github.com/agarcher" 
            className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">GitHub</span>
            <GitHubLogoIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://www.linkedin.com/in/agarcher/" 
            className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInLogoIcon className="h-6 w-6" />
          </a>
          <a 
            href="https://x.com/agarcher" 
            className="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">X</span>
            <XLogo className="h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  )
}

