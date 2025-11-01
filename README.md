# Architflix - Netflix-Style Portfolio

A Netflix-themed portfolio website showcasing my professional journey, projects, skills, and interests. Built with React and TypeScript, this interactive portfolio provides an engaging way to explore my work experience, technical skills, and personal interests.

## Live Demo

Visit the live site: [Architflix](https://archit2501.github.io/Architflix)

## About Me

I'm Archit Jain, a Full Stack Engineer at F1jobs.io (NeuraScribe Inc) and a B.Tech student in Computer Science (Data Science) at Amity University, graduating in April 2026. I'm passionate about building scalable web applications and AI-driven automation tools.

## Features

### Core Sections

- **Home/Browse**: Netflix-style landing page with profile selection
- **Work Experience**: Interactive timeline showcasing my professional journey
- **Projects**: Gallery of AI/ML and Full Stack projects with detailed descriptions
- **Skills**: Comprehensive showcase of technical skills and expertise
- **Certifications**: Professional certifications and achievements
- **Contact Me**: Easy ways to get in touch

### Personal Interests

- **Reading**: Books that have shaped my journey
- **Music**: Favorite albums and music genres
- **Blogs**: Thoughts and insights (coming soon)
- **Recommendations**: Professional endorsements

## Tech Stack

- **Frontend**: React 18.2.0, TypeScript
- **Routing**: React Router v6
- **Styling**: CSS3 with Netflix-inspired design system
- **Icons**: React Icons
- **Animations**: CSS animations and transitions
- **Timeline**: React Vertical Timeline Component

## Design System

The project follows Netflix's design aesthetic:

- **Primary Color**: Netflix Red (#E50914)
- **Background**: Dark theme (#141414, #000000)
- **Typography**: Netflix Sans font family
- **UI/UX**: Hover effects, smooth transitions, responsive design

## Project Structure

```
Architflix/
├── public/
│   ├── archit-profile.jpg
│   ├── Archit_Jain_Resume.pdf
│   └── avatars/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── NetflixTitle.tsx
│   │   ├── ProfileCard.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── WorkExperience.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   ├── ContactMe.tsx
│   │   ├── Music.tsx
│   │   ├── Reading.tsx
│   │   └── ...
│   ├── queries/
│   │   ├── getContactMe.ts
│   │   ├── getProjects.ts
│   │   ├── getSkills.ts
│   │   └── ...
│   ├── images/
│   ├── types.ts
│   ├── App.tsx
│   └── Layout.tsx
└── package.json
```

## Key Projects Featured

1. **Insurance Brokerage Management System** - Full-stack system with TypeScript, React, Node.js, MongoDB
2. **AI Wardrobe Stylist** - AI-powered styling with Python, Streamlit, OpenCV
3. **Enhanced Anomaly Detection System** - Deep Learning system with 99.98% accuracy
4. **AI-Powered Resume Shortlisting Tool** - NLP-based tool with 85% accuracy
5. **SmartBin - Waste Classification** - Computer vision for waste management
6. **Movie Genre Classification** - CNN-based genre prediction from posters

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/archit2501/Architflix.git
cd Architflix
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## Features in Detail

### Netflix-Style Animation
- Click-triggered animation on landing page
- Smooth transitions between pages
- Hover effects on cards and buttons

### Responsive Design
- Mobile-friendly hamburger menu
- Adaptive layouts for all screen sizes
- Touch-optimized interactions

### Interactive Timeline
- Visual representation of work experience
- Education milestones
- Key achievements

### Dynamic Content
- Data-driven architecture
- Easy content updates through query files
- Type-safe with TypeScript

## Customization

To customize the portfolio for your own use:

1. Update personal information in `src/queries/getContactMe.ts`
2. Modify projects in `src/queries/getProjects.ts`
3. Update skills in `src/queries/getSkills.ts`
4. Change work experience in `src/queries/getTimeline.ts`
5. Replace images in `src/images/` and `public/` directories

## Contact

- **Email**: architjain2501@gmail.com
- **LinkedIn**: [linkedin.com/in/architjain01](https://www.linkedin.com/in/architjain01/)
- **Phone**: +91 8595875456
- **GitHub**: [github.com/archit2501](https://github.com/archit2501)

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by Netflix's UI/UX design
- Built with React and TypeScript
- Icons from React Icons library
- Timeline component from React Vertical Timeline Component

---

**Note**: This portfolio is actively maintained and updated with new projects and achievements.

Made with ❤️ by Archit Jain
