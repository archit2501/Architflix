import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon, FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './WorkExperience.css';
import { TimelineItem } from '../types';
import { getTimeline } from '../queries/getTimeline';

const WorkExperience: React.FC = () => {
  const [timeLineData, setTimeLineData] = useState<TimelineItem[] | null>(null);

  useEffect(() => {
    async function fetchTimelineItem() {
      const data = await getTimeline();
      setTimeLineData(data);
    }
    fetchTimelineItem();
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Archit_Jain_Resume.pdf';
    link.download = 'Archit_Jain_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!timeLineData) return <div>Loading...</div>;

  return (
    <div className="work-experience-container">
      <div className="work-experience-content">
        {/* Header */}
        <div className="about-header">
          <h1 className="about-title">The Story Behind the Code</h1>
          <p className="about-subtitle">A journey from curiosity to mastery — building the future, one line at a time.</p>
        </div>

        {/* Statistics Cards */}
        <div className="stats-container">
          <div className="stat-card">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">5+</h3>
            <p className="stat-label">Tech Stacks Mastered</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">3+</h3>
            <p className="stat-label">Years Experience</p>
          </div>
        </div>

        {/* About Archit Jain Section */}
        <div className="about-archit-section">
          <h2 className="about-archit-title">About Archit Jain</h2>
          <p className="about-archit-text">
            I'm Archit Jain, a passionate Computer Science student at Amity University specializing in Machine Learning and Full Stack Development.
            Built optimized ML models improving prediction accuracy by 18%. 3rd place winner at Cyber Cup 4.0 National Hackathon (2024).
            With expertise in modern web technologies and artificial intelligence, I specialize in building scalable web applications, AI-powered tools,
            and machine learning solutions. I'm always eager to take on new challenges and deliver exceptional results.
          </p>
        </div>

        {/* Education Section - MOVED BEFORE TIMELINE */}
        <div className="about-main">
          <div className="about-section">
            <h2>Education</h2>
            <div className="education-card">
              <h3>Bachelor of Technology - Computer Science (Data Science)</h3>
              <p className="institution">Amity University, Uttar Pradesh</p>
              <p className="duration">Sep 2022 - Apr 2026</p>
            </div>
          </div>
        </div>

        {/* Career Timeline Section */}
        <div className="timeline-section">
          <div className="timeline-container">
            <h2 className="timeline-title">Career Timeline</h2>
          </div>
          <VerticalTimeline>
            {timeLineData.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--${item.timelineType}`}
                contentStyle={{
                  background: '#1a1a1a',
                  color: '#fff',
                  border: '2px solid #e50914',
                  boxShadow: '0 3px 10px rgba(229, 9, 20, 0.3)'
                }}
                contentArrowStyle={{
                  borderRight: '7px solid #e50914'
                }}
                date={item.dateRange}
                iconStyle={{
                  background: '#e50914',
                  color: '#fff',
                  boxShadow: '0 0 0 4px #1a1a1a, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)'
                }}
                icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
              >
                {item.timelineType === "work" ? (
                  <div style={{ color: 'white' }}>
                    <h3 className="vertical-timeline-element-title" style={{ color: '#e50914' }}>{item.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: '#fff' }}>{item.name}</h4>
                    <p className="vertical-timeline-element-tech" style={{ color: '#ccc' }}>🔧 {item.techStack}</p>
                    <p style={{ color: '#ccc' }}>{item.summaryPoints}</p>
                  </div>
                ) : (
                  <div style={{ color: 'white' }}>
                    <h3 className="vertical-timeline-element-title" style={{ color: '#e50914' }}>{item.name}</h3>
                    <h4 className="vertical-timeline-element-subtitle" style={{ color: '#fff' }}>{item.title}</h4>
                    <p style={{ color: '#ccc' }}>{item.summaryPoints}</p>
                  </div>
                )}
              </VerticalTimelineElement>
            ))}
            <VerticalTimelineElement
              iconStyle={{ background: '#e50914', color: '#fff', boxShadow: '0 0 0 4px #1a1a1a' }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </div>

        <div className="about-main">
          {/* Connect With Me Section */}
          <div className="about-section">
            <h2>Connect With Me</h2>
            <div className="social-links">
              <a href="https://github.com/archit2501" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/architjain01/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="mailto:architjain2501@gmail.com" className="social-btn">
                <FaEnvelope /> Email
              </a>
            </div>
          </div>

          {/* Download Resume Button */}
          <div className="resume-section">
            <button className="download-resume-btn" onClick={handleDownloadResume}>
              <FaDownload /> Download Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
