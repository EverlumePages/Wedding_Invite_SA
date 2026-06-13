import { useEffect, useRef } from 'react'

const FLOWER_COUNT = 10

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function PetalParticles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const flowers = []

    for (let i = 0; i < FLOWER_COUNT; i++) {
      const flower = document.createElement('div')
      flower.className = 'petal'
      flower.textContent = '❀'

      const size = randomBetween(14, 24)
      const left = randomBetween(0, 100)
      const duration = randomBetween(8, 16)
      const delay = randomBetween(0, 14)
      const isPink = Math.random() > 0.5

      flower.style.cssText = `
        left: ${left}%;
        font-size: ${size}px;
        line-height: 1;
        color: ${isPink ? 'rgba(255,182,193,0.9)' : 'rgba(255,255,255,0.9)'};
        text-shadow: 0 0 4px ${isPink ? 'rgba(255,182,193,0.5)' : 'rgba(255,255,255,0.5)'};
        animation-duration: ${duration}s;
        animation-delay: ${-delay}s;
      `
      container.appendChild(flower)
      flowers.push(flower)
    }

    return () => { flowers.forEach(f => f.remove()) }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    />
  )
}
