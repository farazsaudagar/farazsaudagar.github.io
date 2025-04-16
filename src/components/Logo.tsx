import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = '' }: LogoProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className={`relative ${className}`}
    >
      <div className="absolute inset-0 bg-primary opacity-20 blur-lg" />
      <div className="relative flex items-center justify-center">
        <span className="text-2xl font-bold retro-text tracking-wider">FS</span>
      </div>
    </motion.div>
  );
};

export default Logo; 