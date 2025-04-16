export interface Skill {
  name: string;
  category: 'Languages' | 'Frameworks' | 'Tools' | 'Databases' | 'Other';
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning';
}

export const skills: Skill[] = [
  { name: 'C#', category: 'Languages', level: 'Expert' },
  { name: 'Python', category: 'Languages', level: 'Advanced' },
  { name: 'JavaScript/TypeScript', category: 'Languages', level: 'Advanced' },
  { name: 'Dart', category: 'Languages', level: 'Intermediate' },
  
  { name: '.NET', category: 'Frameworks', level: 'Expert' },
  { name: 'React', category: 'Frameworks', level: 'Advanced' },
  { name: 'WPF', category: 'Frameworks', level: 'Expert' },
  { name: 'Flutter', category: 'Frameworks', level: 'Intermediate' },
  
  { name: 'Neo4j', category: 'Databases', level: 'Advanced' },
  { name: 'SQL', category: 'Databases', level: 'Advanced' },
  
  { name: 'Docker', category: 'Tools', level: 'Advanced' },
  { name: 'Git/Bitbucket', category: 'Tools', level: 'Expert' },
  { name: 'LangChain', category: 'Tools', level: 'Advanced' },
  { name: 'Ollama', category: 'Tools', level: 'Intermediate' },
  
  { name: 'AI/ML', category: 'Other', level: 'Learning' },
  { name: 'Cybersecurity', category: 'Other', level: 'Learning' },
  { name: 'Bug Bounty', category: 'Other', level: 'Learning' },
]; 