export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'web' | 'ai' | 'fullstack' | 'experiment';
  thumbnail: string;
  bannerImage: string;
  videoPreview?: string;
  techStack: string[];
  features: string[];
  github?: string;
  demo?: string;
  year: string;
  topTen?: number;
  trending?: boolean;
}

export const projects: Project[] = [
  {
    id: 'ai-outfit-recommender',
    title: 'AI Outfit Recommender',
    shortDescription: 'AI-powered fashion recommendation system',
    fullDescription: 'An intelligent fashion recommendation system that uses machine learning algorithms to suggest outfit combinations based on user preferences, weather conditions, occasions, and personal style. The system learns from user interactions and improves recommendations over time.',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=600&fit=crop',
    videoPreview: 'https://images.unsplash.com/photo-1558769132-cb1aea8f12d8?w=400&h=250&fit=crop',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB', 'OpenAI API'],
    features: [
      'AI-powered outfit recommendations',
      'Weather integration for smart suggestions',
      'Style preference learning algorithm',
      'Outfit history and favorites tracking',
      'Occasion-based recommendations',
      'Color combination analysis'
    ],
    year: '2024',
    topTen: 1,
    trending: true
  },
  {
    id: 'ai-resume-shortlisting',
    title: 'AI Resume Shortlisting Tool',
    shortDescription: 'Automated resume screening with NLP',
    fullDescription: 'An intelligent recruitment tool that automates the resume screening process using Natural Language Processing and machine learning. It analyzes resumes, extracts key information, matches candidates with job requirements, and provides rankings based on multiple criteria.',
    category: 'ai',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&h=600&fit=crop',
    videoPreview: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
    techStack: ['Python', 'OpenAI API', 'NLP', 'React', 'Express.js', 'PostgreSQL'],
    features: [
      'Automated resume parsing and analysis',
      'Skill matching with job descriptions',
      'Intelligent candidate ranking',
      'Bias detection and mitigation',
      'Bulk resume processing',
      'Customizable scoring criteria'
    ],
    year: '2024'
  },
  {
    id: 'smart-blog-ai',
    title: 'Smart Blog AI',
    shortDescription: 'AI content generation platform',
    fullDescription: 'A comprehensive blog content generation and optimization platform that leverages AI to help content creators produce engaging, SEO-optimized articles. Features include content generation, optimization suggestions, scheduling, and performance analytics.',
    category: 'fullstack',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop',
    techStack: ['Node.js', 'OpenAI API', 'React', 'MongoDB', 'TypeScript', 'Redux'],
    features: [
      'AI-powered content generation',
      'SEO optimization suggestions',
      'Content scheduling and management',
      'Performance analytics dashboard',
      'Multi-platform publishing',
      'Plagiarism detection'
    ],
    year: '2024'
  },
  {
    id: 'ecommerce-automation',
    title: 'E-Commerce Automation Suite',
    shortDescription: 'Complete automation for online stores',
    fullDescription: 'A comprehensive automation suite for e-commerce businesses featuring inventory management, order processing, customer service automation, and marketing campaign management.',
    category: 'fullstack',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop',
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS', 'Docker'],
    features: [
      'Automated inventory management',
      'Order processing automation',
      'Customer service chatbot',
      'Email marketing automation',
      'Analytics and reporting',
      'Multi-channel integration'
    ],
    year: '2023'
  },
  {
    id: 'task-automation-bot',
    title: 'Task Automation Bot',
    shortDescription: 'Selenium-based automation tool',
    fullDescription: 'A powerful automation bot built with Selenium and Python for automating repetitive web tasks, data scraping, form filling, and browser testing.',
    category: 'experiment',
    thumbnail: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&h=600&fit=crop',
    techStack: ['Python', 'Selenium', 'BeautifulSoup', 'Pandas', 'SQLite'],
    features: [
      'Web scraping automation',
      'Form auto-filling',
      'Browser task automation',
      'Data extraction and processing',
      'Scheduled task execution',
      'Error handling and logging'
    ],
    year: '2023'
  },
  {
    id: 'portfolio-builder',
    title: 'Portfolio Builder Platform',
    shortDescription: 'No-code portfolio creation tool',
    fullDescription: 'A modern platform that allows developers and creatives to build stunning portfolio websites without coding. Features drag-and-drop interface, templates, and hosting.',
    category: 'web',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=250&fit=crop',
    bannerImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Firebase', 'Vercel'],
    features: [
      'Drag-and-drop editor',
      'Pre-built templates',
      'Custom domain support',
      'SEO optimization',
      'Analytics integration',
      'One-click deployment'
    ],
    year: '2024'
  }
];