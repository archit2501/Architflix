export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  videoPreview?: string;
  category: 'ai' | 'fullstack' | 'web' | 'experiment';
  techStack: string[];
  year: number;
  trending?: boolean;
  topTen?: number;
  githubUrl: string;
  liveUrl?: string;
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

export const projects: Project[] = [
  {
    id: 'ai-outfit-recommender',
    title: 'AI Outfit Recommender',
    shortDescription: 'Intelligent fashion recommendation system powered by machine learning.',
    fullDescription: 'An advanced AI-powered fashion recommendation system that analyzes user preferences, weather conditions, and occasions to suggest the perfect outfit combinations. Uses computer vision and machine learning algorithms to understand style patterns and provide personalized recommendations.',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&q=80',
    videoPreview: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop&q=80',
    category: 'ai',
    techStack: ['Python', 'TensorFlow', 'React', 'Node.js', 'OpenCV', 'FastAPI'],
    year: 2024,
    trending: true,
    topTen: 1,
    githubUrl: 'https://github.com/archit2501/AI-wardrobe-stylist',
    features: [
      'AI-powered outfit recommendations',
      'Weather-based suggestions',
      'Personal style learning',
      'Wardrobe management system',
      'Occasion-based filtering'
    ],
    challenges: [
      'Training accurate style recognition models',
      'Handling diverse fashion preferences',
      'Real-time recommendation generation'
    ],
    learnings: [
      'Deep learning for image classification',
      'Building recommendation systems',
      'Full-stack AI integration'
    ]
  },
  {
    id: 'resume-shortlisting-tool',
    title: 'AI Resume Shortlisting Tool',
    shortDescription: 'Automated resume screening using NLP and machine learning.',
    fullDescription: 'A sophisticated automated resume screening system that leverages Natural Language Processing and machine learning to match candidates with job requirements. The tool significantly reduces manual review time by intelligently analyzing resumes and ranking candidates based on relevance.',
    thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=500&fit=crop&q=80',
    videoPreview: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=500&fit=crop&q=80',
    category: 'ai',
    techStack: ['Python', 'OpenAI API', 'NLP', 'React', 'spaCy', 'scikit-learn'],
    year: 2024,
    trending: true,
    topTen: 2,
    githubUrl: 'https://github.com/archit2501/resume-shortlisting-tool',
    features: [
      'Intelligent resume parsing',
      'Skill matching algorithm',
      'Automated candidate ranking',
      'Batch processing support',
      'Detailed analysis reports'
    ],
    challenges: [
      'Handling various resume formats',
      'Accurate skill extraction',
      'Bias-free candidate evaluation'
    ],
    learnings: [
      'NLP text processing techniques',
      'Working with OpenAI API',
      'Building scalable ML pipelines'
    ]
  },
  {
    id: 'smartblog-ai',
    title: 'SmartBlog AI',
    shortDescription: 'Intelligent blog content generation platform with SEO optimization.',
    fullDescription: 'An intelligent blog content generation platform that empowers creators to produce engaging, SEO-optimized articles using advanced AI technology. Features include automated content generation, SEO analysis, topic suggestions, and content optimization tools.',
    thumbnail: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop&q=80',
    videoPreview: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=500&fit=crop&q=80',
    category: 'fullstack',
    techStack: ['Node.js', 'OpenAI API', 'React', 'MongoDB', 'Express', 'TypeScript'],
    year: 2024,
    trending: true,
    topTen: 3,
    githubUrl: 'https://github.com/archit2501/smartblog-ai',
    features: [
      'AI-powered content generation',
      'SEO optimization suggestions',
      'Topic research and analysis',
      'Multi-format export',
      'Plagiarism checking'
    ],
    challenges: [
      'Generating human-like content',
      'Ensuring SEO compliance',
      'Managing API costs'
    ],
    learnings: [
      'Working with GPT models',
      'SEO best practices',
      'Full-stack development with TypeScript'
    ]
  },
  {
    id: 'smartbin-wbc',
    title: 'SmartBin WBC',
    shortDescription: 'Smart waste classification system using computer vision.',
    fullDescription: 'An innovative waste management solution that uses computer vision and IoT sensors to automatically classify waste into different categories. Helps promote proper waste disposal and recycling practices.',
    thumbnail: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop&q=80',
    category: 'ai',
    techStack: ['Python', 'TensorFlow', 'Raspberry Pi', 'OpenCV', 'IoT'],
    year: 2023,
    trending: false,
    githubUrl: 'https://github.com/archit2501/Smartbin-WBC',
    features: [
      'Automated waste classification',
      'Real-time image processing',
      'IoT integration',
      'Usage analytics dashboard',
      'Alert system for bin capacity'
    ]
  },
  {
    id: 'anomaly-detection-system',
    title: 'Enhanced Anomaly Detection System',
    shortDescription: 'Advanced system for detecting anomalies in time-series data.',
    fullDescription: 'A comprehensive anomaly detection system designed to identify unusual patterns in time-series data. Implements multiple machine learning algorithms for robust anomaly detection across various use cases.',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&q=80',
    category: 'ai',
    techStack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    year: 2023,
    githubUrl: 'https://github.com/archit2501/enhanced-anomaly-detection-system',
    features: [
      'Multiple detection algorithms',
      'Time-series analysis',
      'Visualization dashboard',
      'Configurable sensitivity',
      'Real-time monitoring'
    ]
  },
  {
    id: 'insurance-brokerage-system',
    title: 'Insurance Brokerage System',
    shortDescription: 'Complete insurance management platform for brokers and clients.',
    fullDescription: 'A comprehensive insurance brokerage management system that streamlines policy management, client relationships, and claims processing. Features a modern interface for both brokers and clients.',
    thumbnail: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop&q=80',
    category: 'fullstack',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Tailwind CSS'],
    year: 2024,
    trending: true,
    githubUrl: 'https://github.com/archit2501/insurance-brokerage-system',
    features: [
      'Policy management',
      'Client portal',
      'Claims tracking',
      'Document management',
      'Analytics dashboard'
    ]
  },
  {
    id: 'ngo-website',
    title: 'NGO Website',
    shortDescription: 'Modern responsive website for non-profit organizations.',
    fullDescription: 'A beautiful and functional website template designed for NGOs and non-profit organizations. Features donation integration, event management, and volunteer coordination.',
    thumbnail: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=500&fit=crop&q=80',
    category: 'web',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    year: 2023,
    githubUrl: 'https://github.com/archit2501/ngo-website',
    features: [
      'Responsive design',
      'Donation integration',
      'Event management',
      'Volunteer sign-up',
      'Blog section'
    ]
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    shortDescription: 'Modern personal portfolio with animations and dark mode.',
    fullDescription: 'A sleek and modern portfolio website showcasing projects and skills. Features smooth animations, dark mode support, and responsive design.',
    thumbnail: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop&q=80',
    category: 'web',
    techStack: ['React', 'TypeScript', 'CSS3', 'Framer Motion'],
    year: 2023,
    githubUrl: 'https://github.com/archit2501/portfolio-website',
    features: [
      'Smooth animations',
      'Dark/Light mode',
      'Project showcase',
      'Contact form',
      'Responsive design'
    ]
  },
  {
    id: 'file-encryption-tool',
    title: 'File Encryption & Decryption Tool',
    shortDescription: 'Secure file encryption tool using Python cryptography.',
    fullDescription: 'A secure file encryption and decryption tool built with Python. Implements strong encryption algorithms to protect sensitive files and data.',
    thumbnail: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop&q=80',
    category: 'experiment',
    techStack: ['Python', 'Cryptography', 'Tkinter'],
    year: 2022,
    githubUrl: 'https://github.com/archit2501/File-Encryption-and-Decryption-tool-using-Python-',
    features: [
      'AES encryption',
      'Password protection',
      'Batch file processing',
      'GUI interface',
      'Key management'
    ]
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    shortDescription: 'Simple expense tracking application with data visualization.',
    fullDescription: 'A user-friendly expense tracking application that helps users monitor their spending habits. Features data visualization and budget management tools.',
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop&q=80',
    category: 'web',
    techStack: ['React', 'JavaScript', 'Chart.js', 'CSS3'],
    year: 2022,
    githubUrl: 'https://github.com/archit2501/Expense-tracker',
    features: [
      'Expense categorization',
      'Budget tracking',
      'Visual reports',
      'Export to CSV',
      'Monthly summaries'
    ]
  },
  {
    id: 'tic-tac-toe',
    title: 'Tic-Tac-Toe Game',
    shortDescription: 'Interactive Tic-Tac-Toe game with AI opponent.',
    fullDescription: 'A classic Tic-Tac-Toe game implementation with both player vs player and player vs AI modes. Features a clean interface and smooth animations.',
    thumbnail: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=500&fit=crop&q=80',
    category: 'experiment',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    year: 2022,
    githubUrl: 'https://github.com/archit2501/tic-tac-toe-project',
    features: [
      'Player vs Player',
      'Player vs AI',
      'Win detection',
      'Score tracking',
      'Responsive design'
    ]
  },
  {
    id: 'movie-genre-classification',
    title: 'Movie Genre Classification',
    shortDescription: 'CNN-based movie genre prediction from poster images.',
    fullDescription: 'A deep learning project that classifies movie genres based on poster images using Convolutional Neural Networks. Demonstrates the application of computer vision in entertainment.',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop&q=80',
    category: 'ai',
    techStack: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy'],
    year: 2023,
    githubUrl: 'https://github.com/archit2501/-Movie-Genres-Classification-from-their-Poster-Image-using-CNNs',
    features: [
      'Multi-label classification',
      'Transfer learning',
      'Data augmentation',
      'Model evaluation metrics',
      'Poster image preprocessing'
    ]
  }
];

// Helper functions for filtering projects
export const getTrendingProjects = () => projects.filter(p => p.trending);
export const getTopTenProjects = () => projects.filter(p => p.topTen).sort((a, b) => (a.topTen || 0) - (b.topTen || 0));
export const getProjectsByCategory = (category: Project['category']) => projects.filter(p => p.category === category);
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getRecentProjects = () => projects.sort((a, b) => b.year - a.year).slice(0, 6);
