import { motion } from 'framer-motion'
import GoldenDivider from '../components/GoldenDivider'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

function InfoCard({ icon, title, children, id }) {
  return (
    <motion.div
      id={id}
      variants={cardVariants}
      className="glass-card-dark p-5 mb-4"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl" style={{ filter: 'drop-shadow(0 0 8px rgba(212,160,23,0.6))' }}>
          {icon}
        </span>
        <h3
          className="font-sinhala font-semibold text-sm tracking-wider"
          style={{
            background: 'linear-gradient(135deg, #f2cc28, #d4a017)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          {title}
        </h3>
      </div>
      <div className="ornament-line" style={{ margin: '0 0 12px 0' }} />
      {children}
    </motion.div>
  )
}

export default function Details() {
  return (
    <div
      className="page-scroll"
      style={{
        background: 'linear-gradient(160deg, #0a0804 0%, #1a1005 40%, #0d0a04 100%)',
        minHeight: '100dvh'
      }}
    >
      {/* Page Header */}
      <motion.div
        className="px-6 pt-12 pb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p
          className="font-sinhala text-xs tracking-[0.3em] mb-2"
          style={{ color: 'rgba(212,160,23,0.65)' }}
        >
          ✦ ✦ ✦
        </p>
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
          විවාහ විස්තර
        </h2>
        <p className="font-sinhala text-xs" style={{ color: 'rgba(253,246,227,0.45)' }}>
          ඔබේ පැමිණීම ඉතා අගය කෙරේ
        </p>
        <GoldenDivider className="mt-4" />
      </motion.div>

      {/* Cards */}
      <motion.div
        className="px-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Date Card */}
        <InfoCard id="card-date" icon="📅" title="විශේෂ දිනය">
          <div className="text-center py-2">
            <p
              className="font-sinhala text-3xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #f7e060, #d4a017)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              25
            </p>
            <p className="font-sinhala text-lg font-semibold text-amber-200 mt-1">
              දෙසැම්බර් 2026
            </p>
            <p className="font-sinhala text-xs text-amber-700/70 mt-1">
              බ්‍රහස්පතිදා
            </p>
          </div>
        </InfoCard>

        {/* Time Card */}
        <InfoCard id="card-time" icon="⏰" title="වේලාව">
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-amber-900/30">
              <span className="font-sinhala text-sm text-amber-100/70">ශාලා ආරාධනය</span>
              <span className="font-sinhala text-sm font-semibold text-amber-200">පෙ.ව. 10:00</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-amber-900/30">
              <span className="font-sinhala text-sm text-amber-100/70">විවාහ මංගල්‍යය</span>
              <span className="font-sinhala text-sm font-semibold text-amber-200">පෙ.ව. 11:30</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-sinhala text-sm text-amber-100/70">භෝජනය</span>
              <span className="font-sinhala text-sm font-semibold text-amber-200">ම.ව. 12:30</span>
            </div>
          </div>
        </InfoCard>

        {/* Venue Card */}
        <InfoCard id="card-venue" icon="📍" title="ස්ථානය">
          <div className="text-center py-1">
            <p className="font-sinhala text-lg font-bold text-amber-100 mb-1">
              රන් වන නිලඹර
            </p>
            <p className="font-sinhala text-sm text-amber-200/70 mb-3">
              ගෝල්ඩන් ෆොරෙස්ට් එස්ටේට්
            </p>
            <p className="font-sinhala text-sm text-amber-100/60">
              මහනුවර, ශ්‍රී ලංකාව
            </p>
            {/* Map Button */}
            <a
              href="https://maps.google.com/?q=Kandy+Sri+Lanka"
              target="_blank"
              rel="noreferrer"
              id="btn-map"
              className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 btn-outline-gold text-xs font-sinhala"
            >
              🗺️ &nbsp; සිතියමේ බලන්න
            </a>
          </div>
        </InfoCard>

        {/* Dress Code Card */}
        <InfoCard id="card-dress" icon="👘" title="ඇඳුම් සංග්‍රහය">
          <div className="text-center py-2">
            <p
              className="font-sinhala text-xl font-bold mb-2"
              style={{
                background: 'linear-gradient(135deg, #f7e060, #d4a017)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              රන් හා සුදු
            </p>
            <p className="font-sinhala text-sm text-amber-100/60 leading-relaxed">
              සාම්ප්‍රදායික හෝ නූතන ඇඳුම් පළඳින්න.<br />
              රන් හෝ සුදු වර්ණ ප්‍රධාන ලෙස භාවිතා කරන්න.
            </p>
          </div>
        </InfoCard>

        {/* RSVP Reminder Card */}
        <motion.div
          variants={cardVariants}
          className="mb-8"
          style={{
            background: 'linear-gradient(135deg, rgba(212,160,23,0.15), rgba(212,160,23,0.05))',
            border: '1px solid rgba(212,160,23,0.4)',
            borderRadius: '20px',
            padding: '20px',
            textAlign: 'center'
          }}
        >
          <p
            className="font-sinhala text-sm font-semibold mb-1"
            style={{ color: '#d4a017' }}
          >
            ⚠️ &nbsp; වැදගත් දැනුම්දීමක්
          </p>
          <p className="font-sinhala text-xs text-amber-100/70 leading-relaxed">
            ඔබේ පැමිණීම තහවුරු කිරීම සඳහා<br />
            <strong className="text-amber-200">නොවැම්බර් 20 වැනිදාට</strong> පෙර RSVP කරන්න
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
