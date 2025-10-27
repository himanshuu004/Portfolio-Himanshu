import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import BeyondCoding from './components/BeyondCoding'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Loading from './components/Loading'
import NotFound from './components/NotFound'

function App() {
  const [theme, setTheme] = useState('light')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Always start with light theme on initial load
    // Theme preference will be applied after user interaction
    setTheme('light')
    localStorage.setItem('theme', 'light')
  }, [])

  useEffect(() => {
    // Apply theme to document
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  useEffect(() => {
    // Loading animation
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const toggleTheme = (newTheme) => {
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  if (loading) {
    return <Loading />
  }

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-[#0D0D0F]' : 'bg-gray-50'}`}>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar theme={theme} toggleTheme={toggleTheme} />
              <Hero theme={theme} />
              <About theme={theme} />
              <Projects theme={theme} />
              <BeyondCoding theme={theme} />
              <Contact theme={theme} />
              <Footer theme={theme} />
              <ScrollToTop theme={theme} />
            </>
          } />
          <Route path="*" element={<NotFound theme={theme} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

