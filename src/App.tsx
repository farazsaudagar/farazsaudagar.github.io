import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
import ProjectCard from './components/ProjectCard'
import SkillCard from './components/SkillCard'
import Logo from './components/Logo'
import Typewriter from './components/Typewriter'
import MatrixRain from './components/MatrixRain'
import { projects } from './data/projects'
import { skills } from './data/skills'
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    console.log('%cHey 👋 curious dev. Let\'s build something together!', 'color: #4ade80; font-size: 16px; font-weight: bold;')
  }, [])

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#blog', label: 'Blog' },
    { href: '#skills', label: 'Skills' },
    { href: '#now', label: 'Now' },
    { href: '#contact', label: 'Contact' },
  ]

  const blogPosts = [
    {
      title: 'Building AI-Powered Developer Tools',
      excerpt: 'Exploring the intersection of AI and developer productivity...',
      tags: ['AI', 'Developer Tools', 'Productivity'],
      date: '2024-04-15'
    },
    {
      title: 'The Art of Bug Bounty Hunting',
      excerpt: 'My journey into the world of cybersecurity and bug bounty hunting...',
      tags: ['Security', 'Bug Bounty', 'Web Security'],
      date: '2024-04-10'
    },
    {
      title: 'Modernizing Legacy Systems',
      excerpt: 'Strategies and challenges in modernizing enterprise applications...',
      tags: ['Legacy Systems', 'Modernization', 'WPF'],
      date: '2024-04-05'
    }
  ]

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <MatrixRain />
      
      <button
        onClick={toggleDarkMode}
        className="dark-mode-toggle"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
      </button>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0  w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Logo className="w-12 h-12" />
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <MdClose size={24} /> : <IoMdMenu size={24} />}
            </button>
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
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="hover:text-primary transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="section flex items-center justify-center pt-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">Mohammed Faraz Saudagar</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 retro-text">
              <Typewriter text="Engineer by trade, poet at heart. I build tools that matter." />
            </p>
            <div className="flex justify-center space-x-4">
              <a href="https://github.com/farazsaudagar" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/farazsaudagar" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:faraz@example.com" className="social-icon">
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                I'm a Software Developer at Mantech Inc, where I specialize in rebuilding legacy systems using WPF and .NET 8.
                I hold a BSc in Computer Science from the University of Guelph.
              </p>
              <p className="mb-4">
                My passion lies at the intersection of AI, cybersecurity, and developer tools. I'm particularly interested in
                AI-powered solutions, cyber justice initiatives, and bug bounty hunting.
              </p>
            </div>
            <div className="retro-border p-6">
              <h3 className="text-xl font-bold mb-4">Current Focus</h3>
              <ul className="space-y-2">
                <li>• Rebuilding legacy systems with modern tech</li>
                <li>• Developing AI-powered tools</li>
                <li>• Contributing to cyber justice</li>
                <li>• Bug bounty hunting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="blog-card retro-border p-6">
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Skills & Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Now Section */}
      <section id="now" className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Now</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3 className="text-xl font-bold mb-2">AI Tools Development</h3>
              <p>Building AI-powered developer tools to enhance productivity</p>
            </div>
            <div className="timeline-item">
              <h3 className="text-xl font-bold mb-2">Brazilian Jiu-Jitsu</h3>
              <p>Training in BJJ and improving my ground game</p>
            </div>
            <div className="timeline-item">
              <h3 className="text-xl font-bold mb-2">Spiritual Routine</h3>
              <p>Practicing intentional living and mindfulness</p>
            </div>
            <div className="timeline-item">
              <h3 className="text-xl font-bold mb-2">Bug Bounty Hunting</h3>
              <p>Learning and practicing web security and bug hunting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:faraz@example.com" className="btn btn-outline">
              <FaEnvelope className="mr-2" /> Email Me
            </a>
            <a href="https://linkedin.com/in/farazsaudagar" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaLinkedin className="mr-2" /> LinkedIn
            </a>
            <a href="https://github.com/farazsaudagar" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <FaGithub className="mr-2" /> GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
