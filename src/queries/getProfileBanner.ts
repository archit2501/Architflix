// queries/getProfileBanner.ts
import { ProfileBanner } from '../types';

export async function getProfileBanner(): Promise<ProfileBanner> {
  return {
    backgroundImage: {
      url: 'https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5eWwwbjRpdWM1amxyd3VueHhteTVzajVjeGZtZGJ1dDc4MXMyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/16u7Ifl2T4zYfQ932F/giphy.gif'
    },
    headline: 'Full Stack Developer & Machine Learning Engineer',
    resumeLink: {
      url: '/Archit_Jain_Resume.pdf'
    },
    linkedinLink: 'https://www.linkedin.com/in/architjain01/',
    profileSummary: 'Computer Science student at Amity University specializing in Machine Learning and Full Stack Development. Built optimized ML models improving prediction accuracy by 18%. Passionate about AI-powered solutions and web technologies. 3rd place winner at Cyber Cup 4.0 National Hackathon (2024).'
  };
}
