// queries/getSkills.ts
import { Skill } from '../types';

export async function getSkills(): Promise<Skill[]> {
  return [
    { name: 'Python', category: 'Languages', description: 'ML/AI and Backend development', icon: 'FaPython' },
    { name: 'C++', category: 'Languages', description: 'Object-oriented programming', icon: 'SiCplusplus' },
    { name: 'JavaScript', category: 'Languages', description: 'Web development', icon: 'FaJs' },
    { name: 'Java', category: 'Languages', description: 'Enterprise applications', icon: 'FaJava' },
    { name: 'React', category: 'Frontend', description: 'Modern web interfaces', icon: 'FaReact' },
    { name: 'Node.js', category: 'Backend', description: 'Server-side JavaScript', icon: 'FaNodeJs' },
    { name: 'Django', category: 'Backend', description: 'Python web framework', icon: 'SiDjango' },
    { name: 'Flask', category: 'Backend', description: 'Lightweight Python framework', icon: 'SiFlask' },
    { name: 'TensorFlow', category: 'ML/AI', description: 'Deep learning framework', icon: 'SiTensorflow' },
    { name: 'PyTorch', category: 'ML/AI', description: 'Machine learning library', icon: 'SiPytorch' },
    { name: 'Scikit-learn', category: 'ML/AI', description: 'Machine learning toolkit', icon: 'SiScikitlearn' },
    { name: 'MongoDB', category: 'Database', description: 'NoSQL database', icon: 'SiMongodb' },
    { name: 'MySQL', category: 'Database', description: 'Relational database', icon: 'SiMysql' },
    { name: 'Docker', category: 'DevOps', description: 'Containerization', icon: 'FaDocker' },
    { name: 'Git', category: 'Tools', description: 'Version control', icon: 'FaGitAlt' },
    { name: 'Figma', category: 'Tools', description: 'UI/UX design', icon: 'FaFigma' }
  ];
}
