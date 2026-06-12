import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import FlareIntro from './components/FlareIntro'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Details from './pages/Details'
import Schedule from './pages/Schedule'
import Gallery from './pages/Gallery'
import RSVP from './pages/RSVP'

function AppContent() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="mobile-frame">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vivara" element={<Details />} />
        <Route path="/kalasatahan" element={<Schedule />} />
        <Route path="/rupam" element={<Gallery />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
      <NavBar />
    </div>
  )
}

export default function App() {
  const [showFlare, setShowFlare] = useState(() => {
    return !sessionStorage.getItem('flare_shown')
  })

  const handleFlareComplete = () => {
    sessionStorage.setItem('flare_shown', 'true')
    setShowFlare(false)
  }

  return (
    <BrowserRouter>
      {showFlare && <FlareIntro onComplete={handleFlareComplete} />}
      <AppContent />
    </BrowserRouter>
  )
}
