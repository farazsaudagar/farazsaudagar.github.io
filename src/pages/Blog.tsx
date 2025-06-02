import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaClock, FaTag, FaPen } from 'react-icons/fa'
import { blogPosts } from '../data/blogPosts'

const Blog = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog</h1>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-3xl text-center mx-auto">
            Thoughts on system design, developer productivity, AI integration, and building meaningful software tools. 
            Sharing lessons learned from real-world development experiences.
          </p>

          {blogPosts.length === 0 ? (
            // Empty state when no blog posts
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center retro-border p-12"
            >
              <FaPen className="mx-auto text-primary mb-6" size={48} />
              <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm currently working on some exciting blog posts about AI-powered developer tools, 
                system design principles, and lessons learned from building real-world applications. 
                Check back soon for the latest updates!
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="btn btn-primary">
                  Get Notified
                </Link>
              </div>
            </motion.div>
          ) : (
            // Blog posts grid when posts exist
            <div className="grid lg:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="retro-border p-6 h-full hover:glow transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <time dateTime={post.date}>{formatDate(post.date)}</time>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <FaClock className="mr-1" size={12} />
                          {post.readTime}
                        </div>
                      </div>

                      <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-2 py-1 bg-primary/20 text-primary rounded text-sm"
                          >
                            <FaTag className="mr-1" size={10} />
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-primary group-hover:text-primary-dark transition-colors">
                        <span className="mr-2">Read More</span>
                        <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center retro-border p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get notified when I publish new articles about developer tools, system design, and AI integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <button className="btn btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog 