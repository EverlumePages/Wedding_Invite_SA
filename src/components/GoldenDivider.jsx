export default function GoldenDivider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 my-4 ${className}`}>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,23,0.6))' }} />
      <div className="flex items-center gap-1.5">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#d4a017', boxShadow: '0 0 6px #d4a017' }}
        />
        <span
          className="text-gold-500 text-lg"
          style={{ filter: 'drop-shadow(0 0 4px rgba(212,160,23,0.6))' }}
        >
          ✦
        </span>
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: '#d4a017', boxShadow: '0 0 6px #d4a017' }}
        />
      </div>
      <div className="flex-1 h-px" style={{ background: 'linear-gradient(90deg, rgba(212,160,23,0.6), transparent)' }} />
    </div>
  )
}
