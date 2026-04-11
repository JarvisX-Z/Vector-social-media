import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import { ResumeData } from '@/types/resume';

interface ResumeTemplateProps {
  data: ResumeData;
}

export const ResumeTemplate = ({ data }: ResumeTemplateProps) => {
  const { personalInfo, education, experience, projects, skills, achievements } = data;

  return (
    <div className="bg-white w-full h-full overflow-auto p-12 text-[11px] leading-relaxed">
      {/* Header */}
      <div className="mb-6">
        {personalInfo.name && (
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{personalInfo.name}</h1>
        )}
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>•</span>}
          {personalInfo.location && <span>{personalInfo.location}</span>}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-gray-700 mt-1">
          {personalInfo.linkedin && <a href={personalInfo.linkedin} className="text-indigo-500 hover:underline">{personalInfo.linkedin}</a>}
          {personalInfo.github && personalInfo.linkedin && <span>•</span>}
          {personalInfo.github && <a href={personalInfo.github} className="text-indigo-500 hover:underline">{personalInfo.github}</a>}
        </div>
      </div>

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-semibold text-gray-900">{edu.degree}</div>
                  <div className="text-gray-700">{edu.university}</div>
                </div>
                <div className="text-right text-gray-700">
                  {edu.year && <div>{edu.year}</div>}
                  {edu.gpa && <div>GPA: {edu.gpa}</div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <div className="font-semibold text-gray-900">{exp.jobTitle}</div>
                  <div className="text-gray-700">{exp.company}</div>
                </div>
                <div className="text-gray-700">{exp.duration}</div>
              </div>
              {exp.bulletPoints.length > 0 && (
                <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
                  {exp.bulletPoints.map((point, idx) => (
                    point && <li key={idx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="mb-3">
              <div className="flex justify-between items-start mb-1">
                <div className="font-semibold text-gray-900">{project.name}</div>
                {project.link && (
                  <a href={project.link} className="text-indigo-500 hover:underline text-xs">{project.link}</a>
                )}
              </div>
              {project.description && <div className="text-gray-700 mb-1">{project.description}</div>}
              {project.techStack && <div className="text-gray-600 italic">Tech: {project.techStack}</div>}
            </div>
          ))}
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">Skills</h2>
          <div className="text-gray-700">{skills.join(' • ')}</div>
        </div>
      )}

      {/* Achievements */}
      {achievements.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">Achievements & Certifications</h2>
          <ul className="list-disc list-outside ml-5 space-y-1 text-gray-700">
            {achievements.map((achievement: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, idx: Key | null | undefined) => (
              achievement && <li key={idx}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
