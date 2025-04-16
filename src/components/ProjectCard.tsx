import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="retro-border p-4 sm:p-6 h-full flex flex-col"
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-4 flex-grow text-sm sm:text-base">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Technologies:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline flex items-center text-sm sm:text-base"
          >
            <FaGithub className="mr-2" /> Code
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary text-sm sm:text-base"
          >
            Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard; 