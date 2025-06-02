import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaShare, FaTwitter, FaLinkedin, FaClock, FaTag, FaUser } from 'react-icons/fa'
import { getPostBySlug, blogPosts } from '../data/blogPosts'

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/blog" className="btn btn-primary">
              Back to Blog
            </Link>
          </motion.div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Get related posts (exclude current post)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .slice(0, 2)

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link 
            to="/blog" 
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
              <div className="flex items-center">
                <FaUser className="mr-2" size={14} />
                {post.author}
              </div>
              <div className="flex items-center">
                <FaClock className="mr-2" size={14} />
                {post.readTime}
              </div>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                >
                  <FaTag className="mr-1" size={10} />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div className="retro-border p-8">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br />') 
                }}
              />
            </div>
          </article>

          {/* Article Footer */}
          <footer className="border-t border-gray-200 dark:border-gray-700 pt-8 mb-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h3 className="font-semibold mb-2">Share this article</h3>
                <div className="flex space-x-4">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <button
                    onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    <FaShare size={18} />
                  </button>
                </div>
              </div>
            </div>
          </footer>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-8">Related Posts</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <Link to={`/blog/${relatedPost.slug}`} className="block group">
                      <div className="retro-border p-6 hover:glow transition-all duration-300 group-hover:scale-105">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <time dateTime={relatedPost.date}>{formatDate(relatedPost.date)}</time>
                          <span className="mx-2">•</span>
                          <span>{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default BlogPost 