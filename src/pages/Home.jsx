import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PetalParticles from '../components/PetalParticles'
import GoldenDivider from '../components/GoldenDivider'
// Import hero image - if you have the actual PNG from AI generation, name it hero.png
// Otherwise the SVG placeholder is used
import heroImgSvg from '../assets/hero.svg'
const heroImg = heroImgSvg

export default function Home() {
  const navigate = useNavigate()
  const [loaded, setLoaded] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full" style={{ minHeight: '100dvh', background: '#0a0804' }}>
      {/* ── HERO BACKGROUND IMAGE with Ken Burns ── */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Check if video exists first, fall back to image */}
        <motion.img
          src={heroImg}
          alt="කසුන් සහ තරුෂි"
          className="hero-bg"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: loaded ? 1 : 0, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          onLoad={() => setLoaded(true)}
        />

        {/* Gradient overlays for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(10,8,4,0.65) 0%,
                rgba(10,8,4,0.1) 25%,
                rgba(10,8,4,0.05) 50%,
                rgba(10,8,4,0.3) 75%,
                rgba(10,8,4,0.92) 100%
              )
            `
          }}
        />

        {/* Warm golden vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,3,1,0.5) 100%)'
          }}
        />
      </div>

      {/* ── PETAL PARTICLES ── */}
      <PetalParticles />

      {/* ── TOP ORNAMENTAL HEADER ── */}
      <motion.div
        className="relative z-20 pt-14 pb-4 px-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {/* Decorative top line */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.5))' }} />
          <span className="text-gold-400 text-xs tracking-[0.3em] font-sinhala font-light" style={{ color: '#d4a017' }}>
            ✦ ✦ ✦
          </span>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(212,160,23,0.5), transparent)' }} />
        </div>

        <motion.p
          className="font-sinhala text-sm tracking-[0.25em] font-light mb-1"
          style={{ color: 'rgba(212,160,23,0.85)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          සාදරයෙන් ඔබව ආරාධනා කරමු
        </motion.p>

        <motion.p
          className="font-sinhala text-xs tracking-widest font-light"
          style={{ color: 'rgba(253,246,227,0.5)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          WEDDING INVITATION
        </motion.p>
      </motion.div>

      {/* ── MAIN NAMES ── */}
      <motion.div
        className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center"
        style={{ marginTop: '5vh' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: 'easeOut' }}
      >
        {/* Couple Names in large Sinhala */}
        <h1
          className="font-sinhala font-bold leading-tight mb-2"
          style={{
            fontSize: 'clamp(2.2rem, 9vw, 3.2rem)',
            background: 'linear-gradient(135deg, #f7e060 0%, #d4a017 30%, #f2cc28 60%, #b8860b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: 'none',
            filter: 'drop-shadow(0 2px 12px rgba(212,160,23,0.6))',
          }}
        >
          කසුන්
        </h1>

        <div className="flex items-center gap-4 my-1">
          <div className="h-px w-12" style={{ background: 'rgba(212,160,23,0.6)' }} />
          <span className="font-display italic text-gold-400 text-lg" style={{ color: '#d4a017' }}>සහ</span>
          <div className="h-px w-12" style={{ background: 'rgba(212,160,23,0.6)' }} />
        </div>

        <h1
          className="font-sinhala font-bold leading-tight mt-1"
          style={{
            fontSize: 'clamp(2.2rem, 9vw, 3.2rem)',
            background: 'linear-gradient(135deg, #f7e060 0%, #d4a017 30%, #f2cc28 60%, #b8860b 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 12px rgba(212,160,23,0.6))',
          }}
        >
          තරුෂි
        </h1>
      </motion.div>

      {/* ── DATE PREVIEW FLOATING CARD ── */}
      <motion.div
        className="relative z-20 mx-6 mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <div
          className="glass-card-dark p-4 text-center"
          style={{ border: '1px solid rgba(212,160,23,0.3)' }}
        >
          <GoldenDivider className="my-0 mb-3" />
          <div className="flex justify-around items-center">
            <div className="text-center">
              <p className="font-sinhala text-xs mb-1" style={{ color: 'rgba(212,160,23,0.7)' }}>දිනය</p>
              <p className="font-sinhala text-sm font-semibold text-amber-100">දෙසැම්බර් 25</p>
              <p className="font-display text-xs text-amber-300">2026</p>
            </div>
            <div
              className="w-px self-stretch"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(212,160,23,0.5), transparent)' }}
            />
            <div className="text-center">
              <p className="font-sinhala text-xs mb-1" style={{ color: 'rgba(212,160,23,0.7)' }}>වේලාව</p>
              <p className="font-sinhala text-sm font-semibold text-amber-100">පෙ.ව. 10:00</p>
              <p className="font-sinhala text-xs text-amber-300">සිට</p>
            </div>
            <div
              className="w-px self-stretch"
              style={{ background: 'linear-gradient(180deg, transparent, rgba(212,160,23,0.5), transparent)' }}
            />
            <div className="text-center">
              <p className="font-sinhala text-xs mb-1" style={{ color: 'rgba(212,160,23,0.7)' }}>ස්ථානය</p>
              <p className="font-sinhala text-sm font-semibold text-amber-100">රන් වන</p>
              <p className="font-sinhala text-xs text-amber-300">නිලඹර</p>
            </div>
          </div>
          <GoldenDivider className="mt-3 mb-0" />
        </div>
      </motion.div>

      {/* ── CTA BUTTONS ── */}
      <motion.div
        className="relative z-20 px-6 mt-6 pb-28 flex flex-col gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <button
          id="btn-vivara"
          className="btn-gold w-full py-4 text-sm font-sinhala tracking-wide"
          style={{ fontSize: '1rem' }}
          onClick={() => navigate('/vivara')}
        >
          🌸 &nbsp; ආරාධනා විස්තර බලන්න
        </button>
        <button
          id="btn-rsvp"
          className="btn-outline-gold w-full py-3.5 text-sm font-sinhala"
          style={{ fontSize: '0.9rem' }}
          onClick={() => navigate('/rsvp')}
        >
          ✉️ &nbsp; ආරාධනය තහවුරු කරන්න
        </button>
      </motion.div>

      {/* ── SCROLL DOWN HINT ── */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-px h-8" style={{ background: 'linear-gradient(180deg, transparent, rgba(212,160,23,0.6))' }} />
        <span className="text-xs font-sinhala" style={{ color: 'rgba(212,160,23,0.5)' }}>
          ↓
        </span>
      </motion.div>
    </div>
  )
}
