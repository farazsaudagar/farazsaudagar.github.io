import { motion } from 'framer-motion';
import { Skill } from '../data/skills';

interface SkillCardProps {
  skill: Skill;
}

const getLevelColor = (level: Skill['level']) => {
  switch (level) {
    case 'Expert':
      return 'bg-primary text-black';
    case 'Advanced':
      return 'bg-primary/75 text-black';
    case 'Intermediate':
      return 'bg-primary/50 text-white';
    case 'Learning':
      return 'bg-primary/25 text-white';
  }
};

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="retro-border p-3 sm:p-4"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-sm sm:text-base">{skill.name}</h3>
        <span className={`px-2 py-1 rounded text-xs sm:text-sm ${getLevelColor(skill.level)}`}>
          {skill.level}
        </span>
      </div>
      <p className="text-xs sm:text-sm text-gray-400">{skill.category}</p>
    </motion.div>
  );
};

export default SkillCard; 