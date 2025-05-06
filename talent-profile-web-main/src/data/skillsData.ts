
export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'languages' | 'tools';
}

export const skills: Skill[] = [
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Angular', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'languages' },
  { name: 'TypeScript', level: 90, category: 'languages' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'PostgreSQL', level: 70, category: 'backend' },
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'AWS', level: 70, category: 'tools' },
];

export const resumeData = {
  name: "Mohammad Shafi",
  title: "Full Stack Developer",
  summary: "Passionate full stack developer with 1+ years of experience building modern web applications. Specialized in React, Angular, and Node.js.",
  experience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      period: "2021 - Present",
      description: "Lead developer for enterprise SaaS platform, managing frontend React applications and Node.js microservices."
    },
    {
      company: "WebSolutions Ltd",
      position: "Frontend Developer",
      period: "2018 - 2021",
      description: "Developed responsive user interfaces with Angular, implemented state management patterns, and optimized application performance."
    },
    {
      company: "Digital Startup",
      position: "Junior Developer",
      period: "2016 - 2018",
      description: "Built web applications using JavaScript frameworks and contributed to backend development with Express.js."
    }
  ],
  education: [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Presidency University",
      year: "2026"
    }
  ]
};
