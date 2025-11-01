import { useState } from 'react'
import About from './components/About'
import OurTeams from './components/OurTeams'
import Header from './components/Header'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  return (
    <>
      <Header />
      
      {/* Video background only for component pages, not landing page */}
      {currentPage !== 'landing' && (
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="app-video-background"
        >
          <source src="/videos/BG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      
      {currentPage === 'landing' && <About onNavigate={setCurrentPage} />}
      {currentPage === 'teams' && <OurTeams onNavigate={setCurrentPage} showGridOnly={true} />}
    </>
  )
}

export default App
