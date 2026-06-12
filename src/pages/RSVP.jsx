import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import GoldenDivider from '../components/GoldenDivider'

export default function RSVP() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    attending: '',
    guests: '1',
    meal: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    await new Promise(r => setTimeout(r, 1500))
    setSubmitted(true)
    setLoading(false)
  }

  const handleWhatsApp = () => {
    const msg = `*විවාහ RSVP* 🌸\n\nනම: ${form.name}\nදුරකතන: ${form.phone}\nපැමිණීම: ${form.attending === 'yes' ? 'ඔව්' : 'නැත'}\nගණන: ${form.guests}\nවිශේෂ: ${form.message || '-'}`
    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/94771234567?text=${encoded}`, '_blank')
  }

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
          ආරාධනය තහවුරු කිරීම
        </h2>
        <p className="font-sinhala text-xs" style={{ color: 'rgba(253,246,227,0.45)' }}>
          නොවැම්බර් 20 වැනිදාට පෙර RSVP කරන්න
        </p>
        <GoldenDivider className="mt-4" />
      </motion.div>

      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            className="px-5 pb-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Name */}
            <div className="mb-4">
              <label className="font-sinhala text-xs text-amber-400/80 block mb-2">
                ඔබේ නම *
              </label>
              <input
                id="rsvp-name"
                name="name"
                type="text"
                required
                placeholder="ඔබේ සම්පූර්ණ නම"
                className="form-input"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label className="font-sinhala text-xs text-amber-400/80 block mb-2">
                දුරකතන අංකය *
              </label>
              <input
                id="rsvp-phone"
                name="phone"
                type="tel"
                required
                placeholder="07X XXX XXXX"
                className="form-input"
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            {/* Attending */}
            <div className="mb-4">
              <label className="font-sinhala text-xs text-amber-400/80 block mb-2">
                ඔබ පැමිණෙනවාද? *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'yes', label: 'ඔව්, ලැබේ' },
                  { value: 'no', label: 'නැත, ලැබෙන්නේ නෑ' },
                ].map(opt => (
                  <button
                    key={opt.value}
                    type="button"
                    id={`attend-${opt.value}`}
                    onClick={() => setForm(f => ({ ...f, attending: opt.value }))}
                    className="py-3 rounded-xl text-xs font-sinhala transition-all duration-300"
                    style={{
                      background: form.attending === opt.value
                        ? 'linear-gradient(135deg, #d4a017, #f2cc28)'
                        : 'rgba(253,246,227,0.05)',
                      color: form.attending === opt.value ? '#3a2500' : 'rgba(253,246,227,0.6)',
                      border: form.attending === opt.value
                        ? 'none'
                        : '1px solid rgba(212,160,23,0.25)',
                      fontWeight: form.attending === opt.value ? '700' : '400',
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest Count */}
            {form.attending === 'yes' && (
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <label className="font-sinhala text-xs text-amber-400/80 block mb-2">
                  ආගන්තුක ගණන (ඔබ ඇතුළුව) *
                </label>
                <select
                  id="rsvp-guests"
                  name="guests"
                  className="form-input"
                  value={form.guests}
                  onChange={handleChange}
                >
                  {[1,2,3,4,5,6].map(n => (
                    <option key={n} value={n} style={{ background: '#1a1005' }}>
                      {n} {n === 1 ? 'නෙකා' : 'නෙකා'}
                    </option>
                  ))}
                </select>
              </motion.div>
            )}

            {/* Meal Preference */}
            {form.attending === 'yes' && (
              <motion.div
                className="mb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <label className="font-sinhala text-xs text-amber-400/80 block mb-2">
                  ආහාර වඩාත්ම
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'regular', label: 'සාමාන්‍ය' },
                    { value: 'veg', label: 'නිර්මාංශ' },
                    { value: 'halal', label: 'හලාල්' },
                    { value: 'no-spice', label: 'ගම්මිරිස් නැති' },
                  ].map(opt => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setForm(f => ({ ...f, meal: opt.value }))}
                      className="py-2.5 rounded-xl text-xs font-sinhala transition-all duration-300"
                      style={{
                        background: form.meal === opt.value
                          ? 'rgba(212,160,23,0.2)'
                          : 'rgba(253,246,227,0.04)',
                        color: form.meal === opt.value ? '#d4a017' : 'rgba(253,246,227,0.5)',
                        border: form.meal === opt.value
                          ? '1px solid rgba(212,160,23,0.6)'
                          : '1px solid rgba(212,160,23,0.15)',
                      }}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Message */}
            <div className="mb-6">
              <label className="font-sinhala text-xs text-amber-400/80 block mb-2">
                ශුභ පැතුමක් 💬
              </label>
              <textarea
                id="rsvp-message"
                name="message"
                rows={3}
                placeholder="ජෝඩුවට ශුභ පැතුමක් ලියන්න..."
                className="form-input resize-none"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col gap-3">
              <button
                id="btn-submit-rsvp"
                type="submit"
                className="btn-gold w-full py-4 text-sm font-sinhala"
                disabled={loading || !form.name || !form.attending}
                style={{ opacity: loading || !form.name || !form.attending ? 0.6 : 1 }}
              >
                {loading ? '⏳ ඉදිරිපත් කෙරේ...' : '✅ &nbsp;RSVP ඉදිරිපත් කරන්න'}
              </button>

              <button
                id="btn-whatsapp-rsvp"
                type="button"
                className="w-full py-3.5 text-sm font-sinhala rounded-full transition-all duration-300 font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #128C7E)',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.3)'
                }}
                onClick={handleWhatsApp}
              >
                📱 &nbsp;WhatsApp මගින් RSVP
              </button>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            className="px-6 py-12 flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', damping: 15 }}
          >
            {/* Success animation */}
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(212,160,23,0.2), rgba(212,160,23,0.05))',
                border: '2px solid rgba(212,160,23,0.5)',
                boxShadow: '0 0 40px rgba(212,160,23,0.3)'
              }}
              animate={{ boxShadow: ['0 0 20px rgba(212,160,23,0.2)', '0 0 60px rgba(212,160,23,0.5)', '0 0 20px rgba(212,160,23,0.2)'] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <span className="text-4xl">💍</span>
            </motion.div>

            <h3
              className="font-sinhala text-2xl font-bold mb-3"
              style={{
                background: 'linear-gradient(135deg, #f7e060, #d4a017)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              ස්තූතියි!
            </h3>

            <p className="font-sinhala text-sm text-amber-100/70 leading-relaxed mb-2">
              <strong className="text-amber-200">{form.name}</strong>,<br />
              ඔබේ RSVP ලැබිණ. 🌸
            </p>

            <p className="font-sinhala text-sm text-amber-100/50 leading-relaxed mb-8">
              ඔබේ ප්‍රියතම දිනය ජෝඩුව සමග බෙදා ගන්නට<br />
              දෙසැම්බර් 25 දා ලැබෙන්නේ ය.
            </p>

            <GoldenDivider className="w-full" />

            <p className="font-sinhala text-xs mt-4" style={{ color: 'rgba(212,160,23,0.6)' }}>
              ✦ &nbsp; කසුන් සහ තරුෂි &nbsp; ✦
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
