import { ResumeData } from '../types/resume';

export const demoResumeData: ResumeData = {
  personalInfo: {
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    phone: '+1 (555) 123-4567',
    linkedin: 'linkedin.com/in/sarahjohnson',
    github: 'github.com/sarahjohnson',
    location: 'San Francisco, CA',
  },
  education: [
    {
      id: '1',
      degree: 'B.S. in Computer Science',
      university: 'Stanford University',
      year: '2018 - 2022',
      gpa: '3.9/4.0',
    },
  ],
  experience: [
    {
      id: '1',
      jobTitle: 'Senior Software Engineer',
      company: 'Google',
      duration: 'Jan 2023 - Present',
      bulletPoints: [
        'Led development of user authentication system serving 10M+ users, improving security and performance',
        'Mentored team of 5 junior engineers, establishing coding standards and best practices',
        'Reduced API response time by 40% through optimization and caching strategies',
      ],
    },
    {
      id: '2',
      jobTitle: 'Software Engineer',
      company: 'Meta',
      duration: 'Jun 2022 - Dec 2022',
      bulletPoints: [
        'Developed React components for news feed feature used by millions daily',
        'Implemented automated testing suite reducing bugs in production by 30%',
        'Collaborated with design team to improve UI/UX consistency across platform',
      ],
    },
  ],
  projects: [
    {
      id: '1',
      name: 'TaskFlow - Project Management Tool',
      description: 'Built full-stack project management application with real-time collaboration features',
      techStack: 'React, Node.js, PostgreSQL, Socket.io',
      link: 'github.com/sarahjohnson/taskflow',
    },
    {
      id: '2',
      name: 'AI Resume Analyzer',
      description: 'Created ML-powered tool to analyze and improve resume content for ATS optimization',
      techStack: 'Python, TensorFlow, Flask, React',
      link: 'github.com/sarahjohnson/resume-ai',
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'SQL',
    'Git',
    'AWS',
    'Docker',
    'REST APIs',
    'GraphQL',
    'Agile/Scrum',
  ],
  achievements: [
    'AWS Certified Developer Associate (2023)',
    'Winner of Stanford Hackathon 2021 - Best Technical Implementation',
    'Published research paper on machine learning optimization in ACM Journal',
    'Google Code Jam 2022 - Top 500 worldwide',
  ],
};
