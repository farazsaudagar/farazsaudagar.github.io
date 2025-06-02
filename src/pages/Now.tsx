import { motion } from 'framer-motion'

const Now = () => {
  const currentFocus = [
    {
      title: 'AI-Powered Developer Tools',
      description: 'Building internal tools that enhance developer productivity and streamline complex workflows',
      details: [
        'Developing AI-powered code analysis tools',
        'Creating automated workflow optimization systems',
        'Integrating LLMs into development processes',
        'Building context-aware developer assistants'
      ],
      progress: 85
    },
    {
      title: 'Legacy System Modernization',
      description: 'Architecting and implementing modern solutions for enterprise applications using .NET 8 and WPF',
      details: [
        'Migrating WPF applications to .NET 8',
        'Implementing modern MVVM patterns',
        'Optimizing performance and maintainability',
        'Building scalable architecture foundations'
      ],
      progress: 70
    },
    {
      title: 'System Design Learning',
      description: 'Deepening understanding of scalable architecture patterns and design principles',
      details: [
        'Studying distributed system patterns',
        'Exploring microservices architecture',
        'Learning advanced database design',
        'Understanding performance optimization'
      ],
      progress: 60
    }
  ]

  const personalGrowth = [
    {
      title: 'Spiritual Routine',
      description: 'Practicing intentional living and mindfulness to maintain balance and clarity',
      practices: [
        'Daily meditation and reflection',
        'Mindful approach to problem-solving',
        'Gratitude practice and journaling',
        'Regular digital detox periods'
      ]
    },
    {
      title: 'Technical Self-Improvement',
      description: 'Continuous learning and skill development in emerging technologies',
      areas: [
        'Advanced AI/ML integration techniques',
        'Modern software architecture patterns',
        'Developer experience optimization',
        'Open source contribution strategies'
      ]
    }
  ]

  const currentReading = [
    {
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      focus: 'Understanding distributed systems and data architecture'
    },
    {
      title: 'The Pragmatic Programmer',
      author: 'David Thomas & Andrew Hunt',
      focus: 'Refining software craftsmanship principles'
    },
    {
      title: 'Building Microservices',
      author: 'Sam Newman',
      focus: 'Learning modern service architecture patterns'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Now</h1>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-3xl text-center mx-auto">
            What I'm currently working on, learning, and focusing my energy towards. Updated regularly to reflect 
            my current priorities and growth areas.
          </p>

          {/* Current Professional Focus */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 retro-text">Current Professional Focus</h2>
            <div className="space-y-8">
              {currentFocus.map((focus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="retro-border p-8"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{focus.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {focus.description}
                      </p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-primary">{focus.progress}%</div>
                      <div className="text-sm text-gray-500">Progress</div>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-6">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${focus.progress}%` }}
                    ></div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {focus.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className="flex items-start bg-gray-50 dark:bg-gray-800 p-4 rounded"
                      >
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Personal Growth */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 retro-text">Personal Growth</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {personalGrowth.map((growth, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + 0.1 * index }}
                  className="retro-border p-6"
                >
                  <h3 className="text-xl font-bold mb-3">{growth.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {growth.description}
                  </p>
                  <ul className="space-y-2">
                    {(growth.practices || growth.areas)?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current Reading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="retro-border p-8"
          >
            <h2 className="text-2xl font-bold mb-6 retro-text">Current Reading</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {currentReading.map((book, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded">
                  <h3 className="font-bold mb-2">{book.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    by {book.author}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {book.focus}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Last Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-8 text-center text-sm text-gray-500"
          >
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Now 