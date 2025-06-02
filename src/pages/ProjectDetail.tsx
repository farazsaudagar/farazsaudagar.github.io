import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import { projects } from '../data/projects'

interface ProjectDetailData {
  [key: string]: {
    problem: string
    solution: string
    learnings: string[]
    features: string[]
    challenges: string[]
  }
}

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  
  const getProjectSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  }

  const project = projects.find(p => getProjectSlug(p.title) === slug)

  const projectDetails: ProjectDetailData = {
    'summaryze-whisper': {
      problem: 'Consuming long-form video content is time-consuming, especially for educational or professional content where viewers need quick insights.',
      solution: 'Built an AI-powered YouTube video summarizer that extracts key points and generates concise summaries, making it easier to consume and review video content efficiently.',
      features: [
        'AI-powered video transcription and summarization',
        'Support for various video lengths and formats',
        'Clean, intuitive Streamlit interface',
        'Customizable summary length and detail level'
      ],
      challenges: [
        'Handling different audio qualities and accents',
        'Optimizing API costs while maintaining quality',
        'Creating meaningful summaries from technical content'
      ],
      learnings: [
        'Advanced integration with OpenAI APIs',
        'Building user-friendly AI applications with Streamlit',
        'Optimizing LangChain workflows for video processing'
      ]
    },
    'script-editor-for-robotic-systems': {
      problem: 'Robotic automation systems needed a flexible, user-friendly way to create and manage complex automation workflows without requiring deep programming knowledge.',
      solution: 'Developed a recursive script editor with a modern WPF interface that allows users to build sophisticated automation sequences through an intuitive visual interface.',
      features: [
        'Recursive script structure for complex workflows',
        'Modern WPF interface with XAML styling',
        'Real-time script validation and error checking',
        'Export capabilities for different robotic platforms'
      ],
      challenges: [
        'Designing an intuitive interface for complex logic',
        'Ensuring script reliability in production environments',
        'Balancing flexibility with ease of use'
      ],
      learnings: [
        'Advanced WPF and XAML development techniques',
        'User experience design for technical tools',
        'Building robust desktop applications with .NET 8'
      ]
    },
    'graphrag-chatbot': {
      problem: 'Traditional chatbots lack context awareness and struggle to provide accurate responses based on structured knowledge relationships.',
      solution: 'Created a knowledge-graph powered chatbot using Neo4j and Ollama that understands data relationships and provides context-aware responses.',
      features: [
        'Knowledge graph integration with Neo4j',
        'Local AI processing with Ollama',
        'Context-aware response generation',
        'Structured data relationship understanding'
      ],
      challenges: [
        'Designing effective knowledge graph schemas',
        'Optimizing query performance for real-time responses',
        'Balancing accuracy with response speed'
      ],
      learnings: [
        'Graph database design and optimization',
        'Local AI model deployment and management',
        'Building context-aware conversational AI'
      ]
    },
    'rentr': {
      problem: 'Finding and managing rental properties involves complex workflows and communication between multiple parties, often leading to inefficiencies.',
      solution: 'Built a comprehensive rental application during a hackathon that streamlines the property search and management process for both tenants and landlords.',
      features: [
        'Cross-platform mobile application with Flutter',
        'Real-time property listings and updates',
        'Integrated communication tools',
        'Firebase backend for scalability'
      ],
      challenges: [
        'Rapid development under hackathon time constraints',
        'Creating an intuitive UX for complex workflows',
        'Implementing real-time features with Firebase'
      ],
      learnings: [
        'Rapid prototyping and MVP development',
        'Flutter cross-platform development',
        'Firebase integration and real-time features'
      ]
    }
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const details = projectDetails[slug || ''] || {
    problem: 'Project details coming soon...',
    solution: 'Detailed information about this project will be available soon.',
    features: [],
    challenges: [],
    learnings: []
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Navigation */}
          <Link
            to="/projects"
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>

          {/* Project Header */}
          <div className="retro-border p-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FaGithub className="mr-2" />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem & Solution */}
            <div className="space-y-8">
              <div className="retro-border p-6">
                <h2 className="text-2xl font-bold mb-4 retro-text">The Problem</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {details.problem}
                </p>
              </div>

              <div className="retro-border p-6">
                <h2 className="text-2xl font-bold mb-4 retro-text">The Solution</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {details.solution}
                </p>
              </div>
            </div>

            {/* Features & Details */}
            <div className="space-y-8">
              {details.features.length > 0 && (
                <div className="retro-border p-6">
                  <h2 className="text-2xl font-bold mb-4 retro-text">Key Features</h2>
                  <ul className="space-y-2">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {details.challenges.length > 0 && (
                <div className="retro-border p-6">
                  <h2 className="text-2xl font-bold mb-4 retro-text">Challenges</h2>
                  <ul className="space-y-2">
                    {details.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-400">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Learnings */}
          {details.learnings.length > 0 && (
            <div className="mt-8 retro-border p-6">
              <h2 className="text-2xl font-bold mb-4 retro-text">Key Learnings</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {details.learnings.map((learning, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                    <p className="text-gray-600 dark:text-gray-400">{learning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectDetail 