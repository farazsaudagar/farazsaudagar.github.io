import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'
import { projects } from '../data/projects'

const Projects = () => {
  const getProjectSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-3xl text-center mx-auto">
            A collection of projects showcasing my work in AI-powered tools, legacy system modernization, 
            and developer productivity solutions. Each project represents a unique challenge and learning experience.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
              >
                <div className="retro-border p-6 h-full hover:glow transition-all duration-300 group-hover:scale-105">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary/20 text-primary rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      )}
                    </div>
                    
                    <Link
                      to={`/projects/${getProjectSlug(project.title)}`}
                      className="flex items-center text-primary hover:text-primary-dark transition-colors"
                    >
                      <span className="mr-2">Learn More</span>
                      <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center retro-border p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Interested in Collaboration?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new projects, especially those involving 
              developer tools, AI integration, or system modernization.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Let's Talk
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects 