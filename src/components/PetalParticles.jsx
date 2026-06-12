import { useEffect, useRef } from 'react'

const PETAL_COUNT = 18

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function PetalParticles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const petals = []

    for (let i = 0; i < PETAL_COUNT; i++) {
      const petal = document.createElement('div')
      petal.className = 'petal'

      const size = randomBetween(8, 20)
      const left = randomBetween(0, 100)
      const duration = randomBetween(6, 14)
      const delay = randomBetween(0, 12)
      const hue = randomBetween(340, 360)
      const isGold = Math.random() > 0.6

      petal.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${size * 0.8}px;
        animation-duration: ${duration}s;
        animation-delay: ${-delay}s;
        background: ${isGold
          ? `radial-gradient(ellipse, rgba(255,220,100,0.85), rgba(212,160,23,0.4))`
          : `radial-gradient(ellipse, rgba(255,${Math.floor(randomBetween(150,200))},${Math.floor(randomBetween(180,220))},0.85), rgba(255,100,130,0.4))`
        };
        border-radius: ${randomBetween(40,70)}% ${randomBetween(30,60)}% ${randomBetween(50,70)}% ${randomBetween(30,60)}% / 
                       ${randomBetween(40,70)}% ${randomBetween(30,60)}% ${randomBetween(50,70)}% ${randomBetween(30,60)}%;
        transform-origin: ${randomBetween(40,60)}% ${randomBetween(40,60)}%;
        filter: blur(${randomBetween(0, 0.5)}px);
      `
      container.appendChild(petal)
      petals.push(petal)
    }

    return () => { petals.forEach(p => p.remove()) }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
      aria-hidden="true"
    />
  )
}
