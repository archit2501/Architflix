// queries/getCertifications.ts
import { Certification } from '../types';

export async function getCertifications(): Promise<Certification[]> {
  return [
    {
      title: 'Introduction to Model Context Protocol',
      issuer: 'Anthropic',
      issuedDate: '2025',
      link: 'https://www.anthropic.com',
      iconName: 'SiAnthropic'
    },
    {
      title: 'AWS Cloud Essentials',
      issuer: 'Amazon Web Services',
      issuedDate: '2024',
      link: 'https://aws.amazon.com/certification/',
      iconName: 'FaAws'
    },
    {
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco',
      issuedDate: '2024',
      link: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications.html',
      iconName: 'SiCisco'
    },
    {
      title: 'Generative AI Fundamentals',
      issuer: 'Google',
      issuedDate: '2024',
      link: 'https://cloud.google.com/learn/certification',
      iconName: 'FaGoogle'
    },
    {
      title: 'Machine Learning with Python',
      issuer: 'IBM',
      issuedDate: '2024',
      link: 'https://www.ibm.com/training',
      iconName: 'SiIbm'
    },
    {
      title: 'Python with Data Science',
      issuer: 'IIT Madras',
      issuedDate: '2024',
      link: 'https://www.iitm.ac.in/',
      iconName: 'FaPython'
    }
  ];
}
