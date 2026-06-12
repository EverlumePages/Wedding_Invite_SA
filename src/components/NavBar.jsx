import { useLocation, useNavigate } from 'react-router-dom'

const navItems = [
  { path: '/',           label: 'ගෙදර',     icon: '🏠' },
  { path: '/vivara',     label: 'විස්තර',    icon: '📅' },
  { path: '/kalasatahan',label: 'කාලසටහන', icon: '⏱️' },
  { path: '/rupam',      label: 'රූප',      icon: '🖼️' },
  { path: '/rsvp',       label: 'RSVP',     icon: '✉️' },
]

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="bottom-nav">
      <div className="flex justify-around items-center px-2">
        {navItems.map(({ path, label, icon }) => {
          const active = location.pathname === path
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-300 ${
                active
                  ? 'text-yellow-400'
                  : 'text-amber-700/60'
              }`}
            >
              <span
                className={`text-xl transition-transform duration-300 ${active ? 'scale-125' : 'scale-100'}`}
                style={{ filter: active ? 'drop-shadow(0 0 6px rgba(212,160,23,0.8))' : 'none' }}
              >
                {icon}
              </span>
              <span
                className={`font-sinhala text-[10px] leading-none font-medium transition-all duration-300 ${
                  active ? 'text-gold-gradient' : ''
                }`}
                style={active ? {
                  background: 'linear-gradient(135deg, #f7e060, #d4a017)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                } : {}}
              >
                {label}
              </span>
              {active && (
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: '#d4a017', boxShadow: '0 0 6px #d4a017' }}
                />
              )}
            </button>
          )
        })}
      </div>
    </nav>
  )
}
