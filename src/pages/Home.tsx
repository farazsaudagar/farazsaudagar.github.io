import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa'
import Typewriter from '../components/Typewriter'
import MatrixRain from '../components/MatrixRain'

const Home = () => {
  const sectionPreviews = [
    {
      title: 'About',
      description: 'Software developer specializing in legacy system modernization and AI-powered tools',
      link: '/about',
      icon: '👨‍💻'
    },
    {
      title: 'Projects',
      description: 'Featured work including AI chatbots, developer tools, and enterprise applications',
      link: '/projects',
      icon: '🚀'
    },
    {
      title: 'Blog',
      description: 'Thoughts on system design, developer productivity, and building meaningful tools',
      link: '/blog',
      icon: '✍️'
    },
    {
      title: 'Skills',
      description: 'Tech stack, expertise in C#/.NET, WPF, Python, and AI development',
      link: '/skills',
      icon: '⚡'
    },
    {
      title: 'Resume',
      description: 'Professional experience, education, and technical skills overview',
      link: '/resume',
      icon: '📄'
    },
    {
      title: 'Now',
      description: 'Current focus on AI tools development and technical growth',
      link: '/now',
      icon: '🎯'
    }
  ]

  return (
    <div className="min-h-screen">
      <MatrixRain />
      
      {/* Hero Section */}
      <section className="section flex items-center justify-center pt-20 min-h-screen">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
              Mohammed Faraz Saudagar
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 retro-text">
              <Typewriter text="Engineer by trade, poet at heart. I build tools that matter." />
            </p>
            <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Software Developer at Mantech Inc, rebuilding legacy systems and creating AI-powered tools 
              that enhance developer productivity and solve real problems.
            </p>
            
            <div className="flex justify-center space-x-4 mb-16">
              <a href="https://github.com/farazsaudagar" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub size={24} />
              </a>
              <a href="https://linkedin.com/in/farazsaudagar" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin size={24} />
              </a>
              <a href="mailto:contact@farazsaudagar.com" className="social-icon">
                <FaEnvelope size={24} />
              </a>
              <a 
                href="/Mohammed_Faraz_Saudagar_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <FaDownload className="mr-2" />
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Previews */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Explore</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sectionPreviews.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link to={section.link} className="block group">
                    <div className="retro-border p-6 h-full hover:glow transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{section.icon}</span>
                        <h3 className="text-xl font-bold">{section.title}</h3>
                        <FaArrowRight className="ml-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {section.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center retro-border p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Let's Build Something Together</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Interested in collaborating or discussing developer tools and system design?
            </p>
            <Link to="/contact" className="btn btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 