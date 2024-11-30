import { useEffect, useRef } from 'react'

export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dispatch a custom event when visibility changes
        window.dispatchEvent(
          new CustomEvent('nameVisibility', {
            detail: { isVisible: entry.isIntersecting }
          })
        )
      },
      { threshold: 0.5 } // Trigger when 50% visible/hidden
    )

    if (nameRef.current) {
      observer.observe(nameRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 
            ref={nameRef}
            className="text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl"
          >
            Adam Archer
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Freelance Software Engineer
          </p>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Bringing decades of experience from top tech companies to your next project.
          </p>
        </div>
      </div>
    </div>
  )
}

