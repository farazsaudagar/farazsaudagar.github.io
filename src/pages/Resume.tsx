import { motion } from 'framer-motion'
import { FaDownload, FaPrint, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Resume = () => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center">
              <Link 
                to="/about" 
                className="mr-4 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
              >
                <FaArrowLeft size={20} />
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Resume</h1>
            </div>
            <div className="flex space-x-4">
              <a 
                href="/Mohammed_Faraz_Saudagar_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex items-center"
              >
                <FaDownload className="mr-2" />
                Download PDF
              </a>
              <button 
                onClick={handlePrint}
                className="btn btn-outline flex items-center"
              >
                <FaPrint className="mr-2" />
                Print
              </button>
            </div>
          </div>
          
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-3xl text-center mx-auto">
            Professional experience, education, and technical skills overview. Building innovative software 
            solutions with a focus on AI integration and developer productivity.
          </p>
          
          {/* Resume Content */}
          <div className="retro-border p-8 bg-white dark:bg-gray-900">
            {/* Professional Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mohammed Faraz Saudagar</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">Software Developer</p>
              <div className="text-gray-600 dark:text-gray-400 space-y-1">
                <p>📧 contact@farazsaudagar.com</p>
                <p>🔗 linkedin.com/in/farazsaudagar</p>
                <p>💻 github.com/farazsaudagar</p>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white border-b-2 border-primary pb-1">
                Professional Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Software Developer specializing in legacy system modernization and AI-powered developer tools. 
                Experienced in rebuilding enterprise applications using modern technologies like .NET 8 and WPF. 
                Passionate about creating tools that enhance developer productivity and solve real-world problems.
              </p>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-primary pb-1">
                Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Software Developer</h4>
                    <span className="text-gray-600 dark:text-gray-400">2024 - Present</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">Mantech Inc</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                    <li>Rebuild legacy systems using WPF and .NET 8 technologies</li>
                    <li>Develop AI-powered internal tools to enhance developer productivity</li>
                    <li>Modernize enterprise applications with focus on maintainability and performance</li>
                    <li>Collaborate with cross-functional teams to deliver scalable solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-primary pb-1">
                Education
              </h3>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Science in Computer Science</h4>
                  <span className="text-gray-600 dark:text-gray-400">2023</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">University of Guelph</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Focus on software engineering principles and system design
                </p>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-primary pb-1">
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Languages & Frameworks</h4>
                  <p className="text-gray-700 dark:text-gray-300">C#, .NET 8, Python, JavaScript, TypeScript, React</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technologies</h4>
                  <p className="text-gray-700 dark:text-gray-300">WPF, MVVM, SQL Server, Git, Azure, Docker</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI & Machine Learning</h4>
                  <p className="text-gray-700 dark:text-gray-300">LLM Integration, OpenAI API, AI-powered tools</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specializations</h4>
                  <p className="text-gray-700 dark:text-gray-300">Legacy System Modernization, Developer Tools, System Design</p>
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-primary pb-1">
                Key Projects
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">AI-Powered Developer Tools</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Developed internal tools leveraging AI to enhance developer productivity and automate complex workflows
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Legacy System Modernization</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Led modernization of enterprise WPF applications, improving performance and maintainability
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Personal Portfolio Website</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    Built responsive portfolio site using React, TypeScript, and modern web technologies
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white border-b-2 border-primary pb-1">
                Additional Information
              </h3>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                <li>Passionate about building tools that genuinely improve developer experience</li>
                <li>Active in learning system design patterns and scalable architecture principles</li>
                <li>Interested in the intersection of AI and developer productivity</li>
                <li>Committed to writing clean, maintainable, and well-documented code</li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center retro-border p-8"
          >
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <a 
                href="/Mohammed_Faraz_Saudagar_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Download PDF
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume 