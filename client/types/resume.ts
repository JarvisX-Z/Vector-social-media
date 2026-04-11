export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
}

export interface Education {
  id: string;
  degree: string;
  university: string;
  year: string;
  gpa: string;
}

export interface Experience {
  id: string;
  jobTitle: string;
  company: string;
  duration: string;
  bulletPoints: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string;
  link: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: string[];
  achievements: string[];
}

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    location: '',
  },
  education: [],
  experience: [],
  projects: [],
  skills: [],
  achievements: [],
};
