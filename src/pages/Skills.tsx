import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaPython, FaJs, FaFigma } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiRabbitmq, SiCplusplus, SiDjango, SiFlask, SiTensorflow, SiPytorch, SiScikitlearn, SiMongodb } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  // Languages
  FaPython: <FaPython />,
  SiCplusplus: <SiCplusplus />,
  FaJs: <FaJs />,
  FaJava: <FaJava />,
  // Frontend
  FaReact: <FaReact />,
  // Backend
  FaNodeJs: <FaNodeJs />,
  SiDjango: <SiDjango />,
  SiFlask: <SiFlask />,
  // ML/AI
  SiTensorflow: <SiTensorflow />,
  SiPytorch: <SiPytorch />,
  SiScikitlearn: <SiScikitlearn />,
  // Database
  SiMongodb: <SiMongodb />,
  SiMysql: <SiMysql />,
  // DevOps
  FaDocker: <FaDocker />,
  // Tools
  FaGitAlt: <FaGitAlt />,
  FaFigma: <FaFigma />,
  // Legacy icons (keeping for compatibility)
  SiRubyonrails: <SiRubyonrails />,
  SiSpringboot: <SiSpringboot />,
  SiPhp: <SiPhp />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  SiPostgresql: <SiPostgresql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
};


const Skills: React.FC = () => {

  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }

    fetchSkills()
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
