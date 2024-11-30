import { useEffect, useRef } from 'react'

interface FadeGuardProps {
  children: React.ReactNode
  className?: string
}

export default function FadeGuard({ children, className = '' }: FadeGuardProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let rafId: number
    const updateGradient = () => {
      const rect = container.getBoundingClientRect()
      const headerHeight = 64 // Adjust this to match your header height
      const gradientPosition = Math.max(headerHeight - rect.top, 0)
      container.style.setProperty('--gradient-position', `${gradientPosition}px`)
      
      rafId = requestAnimationFrame(updateGradient)
    }

    rafId = requestAnimationFrame(updateGradient)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        '--gradient-position': '0px',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, transparent var(--gradient-position), black calc(var(--gradient-position) + 24px))',
        maskImage: 'linear-gradient(to bottom, transparent, transparent var(--gradient-position), black calc(var(--gradient-position) + 24px))'
      } as React.CSSProperties}
    >
      {children}
    </div>
  )
} 