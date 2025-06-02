import { motion } from 'framer-motion'
import { skills } from '../data/skills'
import SkillCard from '../components/SkillCard'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: ['C#', '.NET 8', 'WPF', 'Python', 'TypeScript', 'JavaScript', 'React']
    },
    {
      title: 'AI & Machine Learning',
      skills: ['OpenAI API', 'LangChain', 'Streamlit', 'Ollama', 'AI Integration']
    },
    {
      title: 'Databases & Storage',
      skills: ['Neo4j', 'Firebase', 'SQL Server', 'Graph Databases']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Visual Studio', 'VS Code', 'Git', 'Azure', 'Docker']
    }
  ]

  const philosophies = [
    {
      title: 'System Design Philosophy',
      description: 'I believe in building systems that are simple to understand, easy to maintain, and resilient to change. Good architecture should feel inevitable—the natural solution to the problem at hand.',
      principles: [
        'Favor composition over inheritance',
        'Design for testability and maintainability',
        'Embrace incremental improvement over big rewrites',
        'Keep interfaces simple and focused'
      ]
    },
    {
      title: 'Developer Tooling Approach',
      description: 'Great tools should feel like an extension of your thinking. They should reduce cognitive load, not add to it. I focus on building tools that developers actually want to use.',
      principles: [
        'Optimize for developer experience first',
        'Provide immediate feedback and clear error messages',
        'Make the common case trivial, the complex case possible',
        'Integrate seamlessly into existing workflows'
      ]
    },
    {
      title: 'AI Integration Strategy',
      description: 'AI should augment human capabilities, not replace human judgment. The best AI tools are those that make experts more productive, not those that try to replace expertise.',
      principles: [
        'AI as a productivity multiplier, not a replacement',
        'Maintain human oversight and control',
        'Focus on specific, well-defined problems',
        'Ensure transparency in AI decision-making'
      ]
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
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Skills</h1>
          <p className="text-lg mb-12 text-gray-600 dark:text-gray-400 max-w-3xl text-center mx-auto">
            Technical expertise across full-stack development, AI integration, and system design. 
            Focused on building scalable solutions and developer productivity tools.
          </p>

          {/* Skills Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 retro-text">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                >
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </div>

            {/* Categorized Skills */}
            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="retro-border p-6"
                >
                  <h3 className="text-xl font-bold mb-4 retro-text">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Philosophy & Approach */}
          <div>
            <h2 className="text-3xl font-bold mb-8 retro-text">Philosophy & Approach</h2>
            <div className="space-y-8">
              {philosophies.map((philosophy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + 0.1 * index }}
                  className="retro-border p-8"
                >
                  <h3 className="text-2xl font-bold mb-4">{philosophy.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                    {philosophy.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {philosophy.principles.map((principle, principleIndex) => (
                      <div
                        key={principleIndex}
                        className="flex items-start bg-gray-50 dark:bg-gray-800 p-4 rounded"
                      >
                        <span className="text-primary mr-3 mt-1">•</span>
                        <span className="text-gray-700 dark:text-gray-300">{principle}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 retro-border p-8"
          >
            <h2 className="text-2xl font-bold mb-6 retro-text">Currently Learning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="font-semibold mb-2">Advanced System Architecture</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Exploring microservices patterns and distributed system design
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">AI Model Optimization</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Techniques for efficient AI integration in production systems
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2">Developer Experience Design</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Research on what makes developer tools truly effective
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills 