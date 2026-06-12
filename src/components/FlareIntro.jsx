import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function FlareIntro({ onComplete }) {
  const [phase, setPhase] = useState('build') // build | peak | fade

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('peak'), 800)
    const t2 = setTimeout(() => setPhase('fade'), 1600)
    const t3 = setTimeout(() => onComplete(), 2800)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="flare"
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={
            phase === 'build' ? { opacity: 1 } :
            phase === 'peak'  ? { opacity: 1 } :
            { opacity: 0 }
          }
          transition={phase === 'fade' ? { duration: 1.2, ease: 'easeInOut' } : { duration: 0.8 }}
          onAnimationComplete={() => { if (phase === 'fade') onComplete() }}
          style={{ background: '#0a0804' }}
        >
          {/* Outer warm dark glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 45%, rgba(212,160,23,0.3) 0%, transparent 70%)'
            }}
            animate={phase === 'peak' ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Mid golden glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 45%, rgba(255,230,120,0.8) 0%, rgba(212,160,23,0.5) 20%, transparent 55%)'
            }}
            animate={phase === 'peak' ? { opacity: 1, scale: 1.2 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          />

          {/* White core flare */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 50% 45%, rgba(255,255,255,1) 0%, rgba(255,250,220,0.95) 10%, rgba(255,230,130,0.8) 25%, rgba(212,160,23,0.3) 45%, transparent 65%)'
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              phase === 'build' ? { opacity: 0.7, scale: 0.9 } :
              phase === 'peak'  ? { opacity: 1, scale: 1.3 } :
              { opacity: 0, scale: 1.5 }
            }
            transition={{ duration: phase === 'peak' ? 0.4 : 0.8 }}
          />

          {/* Lens rays */}
          {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
            <motion.div
              key={angle}
              className="absolute"
              style={{
                top: '45%',
                left: '50%',
                width: '2px',
                height: phase === 'peak' ? '60vmax' : '30vmax',
                transformOrigin: '50% 0%',
                transform: `translateX(-50%) rotate(${angle}deg)`,
                background: 'linear-gradient(180deg, rgba(255,250,200,0.6) 0%, transparent 100%)',
                borderRadius: '2px',
              }}
              animate={phase === 'peak' ? { opacity: 0.4, scaleY: 1 } : { opacity: 0, scaleY: 0.3 }}
              transition={{ duration: 0.5, delay: angle / 1800 }}
            />
          ))}

          {/* Center Sinhala title */}
          <motion.div
            className="relative z-10 text-center px-8"
            initial={{ opacity: 0, y: 20 }}
            animate={phase === 'build' ? { opacity: 1, y: 0 } : phase === 'peak' ? { opacity: 0.1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-sinhala text-gold-200 text-sm tracking-widest mb-3 font-light">
              විවාහ ආරාධනය
            </p>
            <h1 className="font-sinhala text-3xl font-bold text-gold-300">
              කසුන් සහ තරුෂි
            </h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
