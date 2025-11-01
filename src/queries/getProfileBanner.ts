// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return {
    backgroundImage: {
      url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif'
    },
    headline: 'Full Stack Engineer & AI/ML Enthusiast',
    resumeLink: {
      url: '/Archit_Jain_Resume.pdf'
    },
    linkedinLink: 'https://www.linkedin.com/in/architjain01/',
    profileSummary: 'B.Tech Computer Science (Data Science) student at Amity University, graduating April 2026. Full Stack Engineer at F1jobs.io building scalable applications with React, Node.js, and MongoDB. 1st place winner at Cyber Cup 5.0 National Hackathon.'
  };
}
