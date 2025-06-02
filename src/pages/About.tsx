import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  const timeline = [
    {
      year: '2025',
      title: 'Software Developer at Mantech Inc',
      description: 'Started full-time position specializing in rebuilding legacy systems using WPF and .NET 8, developing AI-powered internal tools'
    },
    {
      year: '2025',
      title: 'BSc Computer Science Graduate',
      description: 'University of Guelph - Focused on software engineering and system design principles'
    },
    {
      year: '2020',
      title: 'Started Computer Science Degree',
      description: 'Began Bachelor of Science in Computer Science at University of Guelph'
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Me</h1>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-3xl text-center mx-auto">
            Software developer specializing in legacy system modernization and AI-powered tools. 
            Passionate about building meaningful solutions that enhance developer productivity.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Bio */}
            <div className="lg:col-span-2 space-y-6">
              <div className="retro-border p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold retro-text">Professional Background</h2>
                  <a 
                    href="/Mohammed_Faraz_Saudagar_Resume.pdf" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex items-center"
                  >
                    <FaDownload className="mr-2" />
                    Download Resume
                  </a>
                </div>
                <div className="space-y-4 text-lg">
                  <p>
                    I'm a Software Developer at Mantech Inc, where I specialize in rebuilding legacy systems 
                    using modern technologies like WPF and .NET 8. My work focuses on transforming outdated 
                    enterprise applications into efficient, maintainable solutions that serve businesses better.
                  </p>
                  <p>
                    I hold a BSc in Computer Science from the University of Guelph, where I developed a strong 
                    foundation in software engineering principles and system design. This academic background, 
                    combined with hands-on industry experience, shapes my approach to building robust software solutions.
                  </p>
                  <p>
                    My passion lies in the intersection of system design, developer productivity, and artificial 
                    intelligence. I'm particularly interested in creating AI-powered internal tools that enhance 
                    workflows and solve real problems for development teams. I believe in building tools that 
                    genuinely matter—software that makes developers' lives easier and more productive.
                  </p>
                </div>
              </div>

              <div className="retro-border p-8">
                <h2 className="text-2xl font-bold mb-6 retro-text">Current Focus</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Legacy System Modernization</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Architecting and implementing modern solutions for enterprise applications, 
                      focusing on maintainability and performance improvements.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">AI-Powered Developer Tools</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Building internal tools that leverage AI to enhance developer productivity 
                      and streamline complex workflows.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">System Design</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Deepening understanding of scalable architecture patterns and design principles 
                      for building robust software systems.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Developer Experience</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Focusing on tools and practices that improve the daily experience of 
                      software developers and engineering teams.
                    </p>
                  </div>
                </div>
              </div>

              <div className="retro-border p-8">
                <h2 className="text-2xl font-bold mb-6 retro-text">Philosophy</h2>
                <div className="space-y-4">
                  <blockquote className="border-l-4 border-primary pl-6 italic text-lg">
                    "Engineer by trade, poet at heart. I build tools that matter."
                  </blockquote>
                  <p className="text-gray-600 dark:text-gray-400">
                    I believe in the power of well-crafted software to solve meaningful problems. 
                    My approach combines technical rigor with creative thinking, always asking: 
                    "How can this tool genuinely improve someone's work or life?"
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Whether rebuilding a legacy system or creating a new AI-powered tool, I focus on 
                    clarity, craftsmanship, and the human experience of using the software. 
                    Technology should serve people, not the other way around.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Sidebar */}
            <div className="lg:col-span-1">
              <div className="retro-border p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6 retro-text">Timeline</h2>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      className="relative"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black font-bold text-sm">
                          {item.year}
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold text-sm">{item.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="absolute left-6 top-12 w-0.5 h-6 bg-gray-300 dark:bg-gray-600"></div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About 