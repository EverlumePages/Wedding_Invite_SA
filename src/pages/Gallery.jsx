import { motion } from 'framer-motion'
import { useState } from 'react'
import GoldenDivider from '../components/GoldenDivider'

const galleryItems = [
  { id: 1, src: '/4.jpg',  tall: true },
  { id: 2, src: '/1.jpg',  tall: false },
  { id: 3, src: '/2.jpg',  tall: false },
  { id: 4, src: '/3.jpg',  tall: true },
  { id: 5, src: '/5.jpg',  tall: false },
  { id: 6, src: '/6.jpg',  tall: false },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

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
          ජායාරූප
        </h2>
        <p className="font-sinhala text-xs" style={{ color: 'rgba(253,246,227,0.45)' }}>
          අපගේ ආදර ස්මරණ
        </p>
        <GoldenDivider className="mt-4" />
      </motion.div>

      {/* Mosaic Gallery Grid */}
      <div className="px-4 pb-8">
        <div
          className="grid gap-2"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              id={`gallery-item-${item.id}`}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              style={{
                gridRow: item.tall ? 'span 2' : 'span 1',
                height: item.tall ? '260px' : '120px',
                border: '1px solid rgba(212,160,23,0.2)'
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(item)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-cover object-center transition-transform duration-700"
                style={{
                  objectPosition: i % 3 === 0 ? 'center top' : i % 3 === 1 ? 'center center' : 'center bottom'
                }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(10,8,4,0.7) 0%, transparent 60%)' }}
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-2">
                <p className="font-sinhala text-xs text-amber-200/80">{item.caption}</p>
              </div>
              {/* Golden corner accent */}
              <div
                className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center"
                style={{
                  background: 'rgba(212,160,23,0.2)',
                  border: '1px solid rgba(212,160,23,0.4)',
                  borderRadius: '50%',
                  fontSize: '8px',
                  color: '#d4a017'
                }}
              >
                ✦
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gallery note */}
        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="font-sinhala text-xs" style={{ color: 'rgba(253,246,227,0.35)' }}>
            ~ ඡායාරූප දිගටම එකතු වෙමින් පවතී ~
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.div
            className="relative max-w-sm w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={selected.caption}
              className="w-full rounded-2xl"
              style={{ border: '2px solid rgba(212,160,23,0.5)' }}
            />
            <p
              className="font-sinhala text-center mt-3 text-sm"
              style={{ color: '#d4a017' }}
            >
              {selected.caption}
            </p>
            <button
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(10,8,4,0.8)', border: '1px solid rgba(212,160,23,0.4)', color: '#d4a017' }}
              onClick={() => setSelected(null)}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
