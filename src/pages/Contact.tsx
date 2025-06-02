import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:contact@farazsaudagar.com',
      icon: FaEnvelope,
      description: 'Drop me a line directly',
      color: 'text-red-500'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/farazsaudagar',
      icon: FaLinkedin,
      description: 'Connect professionally',
      color: 'text-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/farazsaudagar',
      icon: FaGithub,
      description: 'Check out my code',
      color: 'text-gray-800 dark:text-gray-200'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/farazsaudagar',
      icon: FaTwitter,
      description: 'Follow my thoughts',
      color: 'text-blue-400'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  const collaborationAreas = [
    {
      title: 'AI-Powered Developer Tools',
      description: 'Building tools that enhance developer productivity and workflow automation'
    },
    {
      title: 'Legacy System Modernization',
      description: 'Helping organizations modernize their enterprise applications and infrastructure'
    },
    {
      title: 'System Architecture Consulting',
      description: 'Designing scalable, maintainable software architectures for complex systems'
    },
    {
      title: 'Open Source Contributions',
      description: 'Contributing to projects that align with developer productivity and AI integration'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Contact</h1>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-3xl text-center mx-auto">
            Let's connect! Whether you're interested in collaboration, have questions about my work, 
            or just want to discuss technology and innovation.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold mb-8 retro-text">Connect With Me</h2>
              <div className="space-y-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-center p-6 retro-border hover:glow transition-all duration-300 group"
                  >
                    <link.icon className={`text-2xl mr-4 ${link.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <h3 className="font-bold text-lg">{link.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{link.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Collaboration Areas */}
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-6 retro-text">Areas of Interest</h3>
                <div className="space-y-4">
                  {collaborationAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                      className="bg-gray-50 dark:bg-gray-800 p-4 rounded"
                    >
                      <h4 className="font-semibold mb-2">{area.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{area.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="retro-border p-8"
              >
                <h2 className="text-2xl font-bold mb-6 retro-text">Send a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                    Thanks for your message! I'll get back to you soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <FaPaperPlane className="mr-2" />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>

          {/* Response Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center retro-border p-6"
          >
            <h3 className="text-lg font-bold mb-2">Response Time</h3>
            <p className="text-gray-600 dark:text-gray-400">
              I typically respond to messages within 24-48 hours. For urgent matters, 
              feel free to reach out directly via email or LinkedIn.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 