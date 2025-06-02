import { motion } from 'framer-motion'

interface Tool {
  name: string
  description: string
  category: string
  url?: string
}

const UsesPage = () => {
  const tools: Tool[] = [
    // Development Tools
    {
      name: "Visual Studio",
      description: "Primary IDE for .NET and C# development",
      category: "Development",
      url: "https://visualstudio.microsoft.com/"
    },
    {
      name: "VS Code",
      description: "Lightweight editor for web development and scripting",
      category: "Development",
      url: "https://code.visualstudio.com/"
    },
    
    // Languages & Frameworks
    {
      name: "C# & .NET 8",
      description: "Core stack for enterprise application development",
      category: "Languages & Frameworks"
    },
    {
      name: "WPF",
      description: "Building rich desktop applications with modern UI",
      category: "Languages & Frameworks"
    },
    {
      name: "Python",
      description: "AI/ML development and automation scripts",
      category: "Languages & Frameworks"
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript for web applications",
      category: "Languages & Frameworks"
    },
    
    // AI & Productivity
    {
      name: "OpenAI API",
      description: "Building AI-powered developer tools and workflows",
      category: "AI & Productivity"
    },
    {
      name: "LangChain",
      description: "Framework for developing AI applications",
      category: "AI & Productivity"
    },
    
    // Hardware & Setup
    {
      name: "Windows 11",
      description: "Primary development environment",
      category: "Hardware & Setup"
    }
  ]

  const categories = Array.from(new Set(tools.map(tool => tool.category)))

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Uses</h1>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-3xl">
            Here's a curated list of tools, technologies, and setup that power my development workflow. 
            I believe in using the right tool for the job and continuously evolving my stack to stay productive.
          </p>

          <div className="space-y-12">
            {categories.map((category) => (
              <motion.section
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 retro-text">{category}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {tools
                    .filter(tool => tool.category === category)
                    .map((tool, index) => (
                      <div
                        key={index}
                        className="retro-border p-6 hover:glow transition-all duration-300"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-semibold">{tool.name}</h3>
                          {tool.url && (
                            <a
                              href={tool.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary-dark text-sm"
                            >
                              Visit →
                            </a>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {tool.description}
                        </p>
                      </div>
                    ))}
                </div>
              </motion.section>
            ))}
          </div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 retro-border p-8"
          >
            <h2 className="text-2xl font-bold mb-4 retro-text">Philosophy</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                <strong>Simplicity over complexity:</strong> I prefer tools that get out of the way and let me focus on solving problems.
              </p>
              <p>
                <strong>Developer experience matters:</strong> The tools we use shape how we think and work. I choose technologies that enhance productivity and code quality.
              </p>
              <p>
                <strong>Continuous learning:</strong> Technology evolves rapidly. I'm always exploring new tools and approaches while maintaining stability in production systems.
              </p>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

export default UsesPage 