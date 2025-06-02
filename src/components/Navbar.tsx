import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaChevronDown } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import Logo from './Logo'

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Main navigation items (always visible)
  const mainNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  // Secondary navigation items (in dropdown)
  const dropdownLinks = [
    { to: '/blog', label: 'Blog' },
    { to: '/skills', label: 'Skills' },
    { to: '/now', label: 'Now' },
    { to: '/resume', label: 'Resume' },
  ]

  // All links for mobile menu
  const allNavLinks = [...mainNavLinks, ...dropdownLinks]

  const isActiveLink = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  const hasActiveDropdownItem = dropdownLinks.some(link => isActiveLink(link.to))

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass' : 'bg-transparent'
    }`}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <Logo className="w-12 h-12" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Main Navigation Links */}
            {mainNavLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`hover:text-primary transition-colors ${
                  isActiveLink(link.to) ? 'text-primary' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={`flex items-center space-x-1 hover:text-primary transition-colors ${
                  hasActiveDropdownItem ? 'text-primary' : ''
                }`}
                onBlur={(e) => {
                  // Only close if clicking outside the dropdown
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                    setTimeout(() => setIsDropdownOpen(false), 150)
                  }
                }}
              >
                <span>More</span>
                <FaChevronDown 
                  className={`transition-transform duration-200 ${
                    isDropdownOpen ? 'rotate-180' : ''
                  }`} 
                  size={12} 
                />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-0 mt-2 w-40 glass rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="py-2">
                      {dropdownLinks.map((link) => (
                        <Link
                          key={link.to}
                          to={link.to}
                          className={`block px-4 py-2 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                            isActiveLink(link.to) ? 'text-primary bg-gray-100 dark:bg-gray-800' : ''
                          }`}
                          onClick={() => {
                            setIsDropdownOpen(false)
                            setIsMenuOpen(false)
                          }}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={toggleDarkMode}
              className="p-2 hover:text-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 hover:text-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <MdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden glass"
          >
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col space-y-4">
              {allNavLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`hover:text-primary transition-colors py-2 ${
                    isActiveLink(link.to) ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar 