import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/farazsaudagar',
      icon: FaGithub
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/farazsaudagar',
      icon: FaLinkedin
    },
    {
      name: 'Email',
      url: 'mailto:contact@farazsaudagar.com',
      icon: FaEnvelope
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/farazsaudagar',
      icon: FaTwitter
    }
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">Mohammed Faraz Saudagar</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Software Developer passionate about building AI-powered tools and modernizing legacy systems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Interested in collaboration or have a project in mind?
            </p>
            <a
              href="mailto:contact@farazsaudagar.com"
              className="text-primary hover:text-primary-dark transition-colors"
            >
              contact@farazsaudagar.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            © {currentYear} Mohammed Faraz Saudagar. Built with{' '}
            <FaHeart className="text-red-500 mx-1" size={14} />
            and React.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 