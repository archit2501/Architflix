// queries/getTimeline.ts
import { TimelineItem } from '../types';

export async function getTimeline(): Promise<TimelineItem[]> {
  return [
    {
      name: 'F1jobs.io (NeuraScribe Inc, Austin, Texas – Remote)',
      timelineType: 'work',
      title: 'Full Stack Engineer',
      techStack: 'React.js, Node.js, MongoDB, AI-driven workflows, RESTful APIs',
      summaryPoints: [
        'Developing and maintaining scalable full-stack web applications using React.js, Node.js, and MongoDB, ensuring high performance and seamless user experience',
        'Engineered custom portfolio builders and GitHub optimization tools, empowering clients to enhance their professional presence and visibility online',
        'Built and optimized automated resume enhancement systems leveraging AI-driven workflows, reducing manual processing time and improving output accuracy',
        'Collaborating cross-functionally to design, deploy, and manage production-grade APIs and UI/UX architectures, driving product innovation and platform reliability'
      ],
      dateRange: 'Oct 2025 - Present'
    },
    {
      name: 'Amity University, Uttar Pradesh',
      timelineType: 'education',
      title: 'Bachelor of Technology - Computer Science (Data Science)',
      techStack: '',
      summaryPoints: [
        'Relevant Coursework: Data Structures using C, Object Oriented programming using C++, introduction to computer and Programming in C, Java Programming, Python for Data Science, Artificial intelligence, Machine Learning and its applications',
        '🏆 Secured 1st place (out of 150 teams) in Cyber Cup 5.0 – National Hackathon (2025)',
        '🏆 Secured 3rd place (out of 160 teams) in Cyber Cup 4.0 – National Hackathon (2024)'
      ],
      dateRange: 'Sep 2022 - Apr 2026'
    }
  ];
}
