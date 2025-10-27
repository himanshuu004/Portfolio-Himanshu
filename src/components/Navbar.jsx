import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'beyond-coding', label: 'Beyond Coding', href: '#beyond-coding' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navLinks.map(link => ({
        ...link,
        element: document.querySelector(link.href)
      }))

      const current = sections.find(section => {
        const element = section.element
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom >= 100
      })

      if (current) {
        setActiveSection(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navLinks])

  const handleThemeChange = () => {
    const currentTheme = localStorage.getItem('theme') || 'light'
    
    if (currentTheme === 'light') {
      toggleTheme('dark')
    } else {
      toggleTheme('light')
    }
  }

  const getThemeIcon = () => {
    const currentTheme = localStorage.getItem('theme') || 'light'
    
    if (currentTheme === 'light') return <FaSun className="text-2xl" />
    return <FaMoon className="text-2xl" />
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'h-20 shadow-lg' : 'h-24'
      } ${theme === 'dark' ? 'bg-[#0D0D0F]' : 'bg-white'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <p className={`text-2xl sm:text-3xl font-semibold ${theme === 'dark' ? 'text-primary' : 'text-primary'}`}>
            Hey
          </p>
          <span className={`absolute -top-2 -right-3 text-5xl sm:text-6xl ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            .
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`relative font-medium transition-colors ${
                    activeSection === link.id
                      ? theme === 'dark' ? 'text-primary' : 'text-primary'
                      : theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      className={`absolute -bottom-2 left-1/2 w-1 h-1 rounded-full ${
                        theme === 'dark' ? 'bg-primary' : 'bg-primary'
                      }`}
                      layoutId="activeDot"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      style={{ x: '-50%' }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Resume Button */}
          <a
            href="/resume/Himanshu_Rawat_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors flex items-center gap-2"
          >
            View Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={handleThemeChange}
            className={`p-3 rounded-lg transition-colors ${
              theme === 'dark' 
                ? 'hover:bg-gray-800 text-white' 
                : 'hover:bg-gray-100'
            }`}
            aria-label="Toggle theme"
          >
            <span className={theme === 'dark' ? 'text-white' : ''}>
              {getThemeIcon()}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={handleThemeChange}
            className={`p-2 rounded-lg ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
            aria-label="Toggle theme"
          >
            <span className={theme === 'dark' ? 'text-white' : ''}>
              {getThemeIcon()}
            </span>
          </button>
          <button
            className={`p-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className={`lg:hidden absolute top-full left-0 right-0 ${
              theme === 'dark' 
                ? 'bg-[#0D0D0F] border-t border-gray-800' 
                : 'bg-white border-t border-gray-200'
            }`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  whileHover={{ x: 10 }}
                  className={`${
                    activeSection === link.id
                      ? theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
                      : ''
                  }`}
                >
                  <a
                    href={link.href}
                    className={`block px-8 py-3 font-medium transition-colors ${
                      activeSection === link.id
                        ? theme === 'dark' ? 'text-primary' : 'text-primary'
                        : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="px-8 py-3">
                <a
                  href="/resume/Himanshu_Rawat_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  View Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

