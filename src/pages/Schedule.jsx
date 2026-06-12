import { motion } from 'framer-motion'
import GoldenDivider from '../components/GoldenDivider'

const schedule = [
  { time: 'පෙ.ව. 9:30',  event: 'ආරාධිතයන්ගේ පැමිණීම',        desc: 'ශාලාවට ඇතුළු වීම හා ආසන ගැනීම',         icon: '🚪' },
  { time: 'පෙ.ව. 10:00', event: 'ශාලා ශෝභාව',                    desc: 'ශාලා වාෙචෝරි සෙරෙමෝනිය',              icon: '✨' },
  { time: 'පෙ.ව. 10:30', event: 'සම්ප්‍රදායික ගීත',              desc: 'ජනප්‍රිය සිංහල ගීත හා නැටුම්',          icon: '🎵' },
  { time: 'පෙ.ව. 11:00', event: 'වර මිණිකඩ ගමන',                desc: 'විවාහ ජෝඩුව ශාලාවට ඇතුළු වේ',          icon: '💑' },
  { time: 'පෙ.ව. 11:30', event: 'විවාහ මංගල්‍යය',                desc: 'නෛතික හා ආගමික කටයුතු',                icon: '💍' },
  { time: 'ම.ව. 12:00',  event: 'ශුභ ෆොටෝ සැසිය',               desc: 'ශිල්පකරු සමඟ ජායාරූප ගැනීම',          icon: '📷' },
  { time: 'ම.ව. 12:30',  event: 'රාජකීය භෝජනය',                  desc: 'සාම්ප්‍රදායික ශ්‍රී ලාංකික ව්‍යාජනය', icon: '🍽️' },
  { time: 'ම.ව. 2:00',   event: 'කේක් කැපීම',                   desc: 'මංගල කේක් කැපීම හා ප්‍රදානය',          icon: '🎂' },
  { time: 'ම.ව. 3:00',   event: 'සංගීත සැසිය',                   desc: 'සජීවී ගීත හා නෘත්‍ය',                icon: '🎶' },
  { time: 'ස.ව. 5:00',   event: 'ආලිංගන හා ගෙදර යාම',           desc: 'සමූ දෙදෙනා ලෙස ජීවිතය ආරම්භ කිරීම',   icon: '🕊️' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.2 } }
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
}

export default function Schedule() {
  return (
    <div
      className="page-scroll"
      style={{
        background: 'linear-gradient(160deg, #0a0804 0%, #1a1005 40%, #0d0a04 100%)',
        minHeight: '100dvh'
      }}
    >
      {/* Header */}
      <motion.div
        className="px-6 pt-12 pb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-sinhala text-xs tracking-[0.3em] mb-2" style={{ color: 'rgba(212,160,23,0.65)' }}>✦ ✦ ✦</p>
        <h2
          className="font-sinhala text-2xl font-bold mb-1"
          style={{
            background: 'linear-gradient(135deg, #f7e060, #d4a017, #f2cc28)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 8px rgba(212,160,23,0.3))'
          }}
        >
          දිනෙ කාලසටහන
        </h2>
        <p className="font-sinhala text-xs" style={{ color: 'rgba(253,246,227,0.45)' }}>
          දෙසැම්බර් 25, 2026
        </p>
        <GoldenDivider className="mt-4" />
      </motion.div>

      {/* Timeline */}
      <div className="px-5 pb-8">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute"
            style={{
              left: '28px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              background: 'linear-gradient(180deg, transparent 0%, #d4a017 10%, #d4a017 90%, transparent 100%)'
            }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {schedule.map((item, i) => (
              <motion.div
                key={i}
                id={`schedule-item-${i}`}
                variants={itemVariants}
                className="flex gap-4 mb-5 relative"
              >
                {/* Timeline dot */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="timeline-dot mt-1"
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #f2cc28, #d4a017)',
                      boxShadow: '0 0 10px rgba(212,160,23,0.6)',
                      zIndex: 1,
                      flexShrink: 0
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  className="flex-1 p-4 rounded-2xl mb-1"
                  style={{
                    background: 'rgba(253,246,227,0.04)',
                    border: '1px solid rgba(212,160,23,0.2)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{item.icon}</span>
                      <span
                        className="font-sinhala text-sm font-bold"
                        style={{
                          background: 'linear-gradient(135deg, #f2cc28, #d4a017)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {item.event}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-display text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(212,160,23,0.15)',
                        color: '#d4a017',
                        border: '1px solid rgba(212,160,23,0.3)'
                      }}
                    >
                      {item.time}
                    </span>
                  </div>
                  <p className="font-sinhala text-xs mt-2" style={{ color: 'rgba(253,246,227,0.5)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
