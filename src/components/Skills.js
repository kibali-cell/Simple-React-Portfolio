import React from 'react';
import { Layout, Code, Database } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import '../styles.css';

const skillsData = [
  {
    category: "Frontend",
    icon: <Layout size={16} />,
    items: [
      { name: "React/Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "UI/UX Design", level: 80 }
    ]
  },
  {
    category: "Backend",
    icon: <Code size={16} />,
    items: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "API Design", level: 90 }
    ]
  },
  {
    category: "Database",
    icon: <Database size={16} />,
    items: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Redis", level: 75 }
    ]
  }
];

const Skills = () => (
  <AnimatedSection delay={400}>
    <div className="card bg-dark text-white mb-3">
      <div className="card-body">
        <h5 className="card-title">Technical Skills</h5>
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="mb-3">
            <div className="d-flex align-items-center mb-1">
              {skillCategory.icon}
              <span className="ms-2">{skillCategory.category}</span>
            </div>
            {skillCategory.items.map((skill, i) => (
              <div key={i} className="mb-2">
                <div className="d-flex justify-content-between">
                  <span className="small">{skill.name}</span>
                  <span className="small">{skill.level}%</span>
                </div>
                <div className="progress" style={{ height: '6px' }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default Skills;
