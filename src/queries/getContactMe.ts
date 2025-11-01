// queries/getContactMe.ts
import { ContactMe } from '../types';

export async function getContactMe(): Promise<ContactMe> {
  return {
    profilePicture: {
      url: '/archit-profile.jpg'
    },
    name: 'Archit Jain',
    title: 'Full Stack Engineer @ F1jobs.io (NeuraScribe Inc)',
    summary: 'Currently pursuing B.Tech in Computer Science (Data Science) at Amity University, graduating in April 2026. Working as a Full Stack Engineer at F1jobs.io (NeuraScribe Inc), where I develop scalable web applications using React.js, Node.js, and MongoDB, and build AI-driven automation tools. Passionate about Machine Learning and Full Stack Development, with hands-on experience in optimizing ML models and creating production-grade applications.',
    companyUniversity: 'F1jobs.io (NeuraScribe Inc, Austin, Texas)',
    linkedinLink: 'https://www.linkedin.com/in/architjain01/',
    email: 'architjain2501@gmail.com',
    phoneNumber: '+91 8595875456'
  };
}
