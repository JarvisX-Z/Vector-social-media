"use client";

import { useResume } from "@/context/ResumeContext";
import { SectionEditor } from "./SectionEditor";
import { Plus, Trash2 } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";

export const ResumeForm = () => {
  const {
    resumeData,
    updatePersonalInfo,
    updateEducation,
    addEducation,
    removeEducation,
    updateExperience,
    addExperience,
    removeExperience,
    updateProject,
    addProject,
    removeProject,
    updateSkills,
    updateAchievements,
  } = useResume();

  const handleBulletPointChange = (
    expIndex: number,
    pointIndex: number,
    value: string
  ) => {
    const newPoints = [...resumeData.experience[expIndex].bulletPoints];
    newPoints[pointIndex] = value;
    updateExperience(expIndex, "bulletPoints", newPoints);
  };

  const addBulletPoint = (expIndex: number) => {
    const newPoints = [...resumeData.experience[expIndex].bulletPoints, ""];
    updateExperience(expIndex, "bulletPoints", newPoints);
  };

  const removeBulletPoint = (expIndex: number, pointIndex: number) => {
    const newPoints = resumeData.experience[expIndex].bulletPoints.filter(
      (_, i) => i !== pointIndex
    );
    updateExperience(expIndex, "bulletPoints", newPoints);
  };

  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="personal"
      className="space-y-4"
    >
      {/* PERSONAL */}
      <SectionEditor value="personal" title="Personal Information">
        <div className="space-y-4">

          <input
            type="text"
            value={resumeData.personalInfo.name}
            onChange={(e) => updatePersonalInfo("name", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Full Name"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="email"
              value={resumeData.personalInfo.email}
              onChange={(e) => updatePersonalInfo("email", e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Email"
            />

            <input
              type="tel"
              value={resumeData.personalInfo.phone}
              onChange={(e) => updatePersonalInfo("phone", e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Phone"
            />
          </div>

          <input
            type="text"
            value={resumeData.personalInfo.location}
            onChange={(e) => updatePersonalInfo("location", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            placeholder="Location"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="url"
              value={resumeData.personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo("linkedin", e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="LinkedIn"
            />

            <input
              type="url"
              value={resumeData.personalInfo.github}
              onChange={(e) => updatePersonalInfo("github", e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="GitHub"
            />
          </div>
        </div>
      </SectionEditor>

      {/* EDUCATION */}
      <SectionEditor value="education" title="Education">
        <div className="space-y-6">

          {resumeData.education.map((edu, index) => (
            <div
              key={edu.id}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50"
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium">Entry {index + 1}</span>

                <button
                  onClick={() => removeEducation(index)}
                  className="text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <input
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(index, "degree", e.target.value)
                }
                className="w-full mb-2 px-4 py-2 border rounded-lg"
                placeholder="Degree"
              />

              <input
                value={edu.university}
                onChange={(e) =>
                  updateEducation(index, "university", e.target.value)
                }
                className="w-full mb-2 px-4 py-2 border rounded-lg"
                placeholder="University"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  value={edu.year}
                  onChange={(e) =>
                    updateEducation(index, "year", e.target.value)
                  }
                  className="px-4 py-2 border rounded-lg"
                  placeholder="Year"
                />

                <input
                  value={edu.gpa}
                  onChange={(e) =>
                    updateEducation(index, "gpa", e.target.value)
                  }
                  className="px-4 py-2 border rounded-lg"
                  placeholder="GPA"
                />
              </div>
            </div>
          ))}

          <button
            onClick={addEducation}
            className="w-full py-3 border-2 border-dashed border-blue-200 bg-blue-50 text-blue-600 rounded-lg flex justify-center gap-2"
          >
            <Plus size={18} />
            Add Education
          </button>
        </div>
      </SectionEditor>

      {/* EXPERIENCE */}
      <SectionEditor value="experience" title="Experience">
        <div className="space-y-6">

          {resumeData.experience.map((exp, index) => (
            <div
              key={exp.id}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50"
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium">Experience {index + 1}</span>

                <button
                  onClick={() => removeExperience(index)}
                  className="text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <input
                value={exp.jobTitle}
                onChange={(e) =>
                  updateExperience(index, "jobTitle", e.target.value)
                }
                className="w-full mb-2 px-4 py-2 border rounded-lg"
                placeholder="Job Title"
              />

              <input
                value={exp.company}
                onChange={(e) =>
                  updateExperience(index, "company", e.target.value)
                }
                className="w-full mb-2 px-4 py-2 border rounded-lg"
                placeholder="Company"
              />

              <input
                value={exp.duration}
                onChange={(e) =>
                  updateExperience(index, "duration", e.target.value)
                }
                className="w-full mb-3 px-4 py-2 border rounded-lg"
                placeholder="Duration"
              />

              {exp.bulletPoints.map((point, i) => (
                <input
                  key={i}
                  value={point}
                  onChange={(e) =>
                    handleBulletPointChange(index, i, e.target.value)
                  }
                  className="w-full mb-2 px-4 py-2 border rounded-lg"
                  placeholder="Bullet point"
                />
              ))}

              <button
                onClick={() => addBulletPoint(index)}
                className="text-sm text-blue-500"
              >
                + Add Bullet
              </button>
            </div>
          ))}

          <button
            onClick={addExperience}
            className="w-full py-3 border-2 border-dashed border-blue-200 bg-blue-50 text-blue-600 rounded-lg flex justify-center gap-2"
          >
            <Plus size={18} />
            Add Experience
          </button>
        </div>
      </SectionEditor>

      {/* PROJECTS */}
      <SectionEditor value="projects" title="Projects">
        <div className="space-y-6">

          {resumeData.projects.map((project, index) => (
            <div
              key={project.id}
              className="p-4 border border-gray-200 rounded-lg bg-gray-50"
            >
              <div className="flex justify-between mb-3">
                <span className="font-medium">Project {index + 1}</span>

                <button
                  onClick={() => removeProject(index)}
                  className="text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <input
                value={project.name}
                onChange={(e) =>
                  updateProject(index, "name", e.target.value)
                }
                className="w-full mb-2 px-4 py-2 border rounded-lg"
                placeholder="Project Name"
              />

              <textarea
                value={project.description}
                onChange={(e) =>
                  updateProject(index, "description", e.target.value)
                }
                className="w-full mb-2 px-4 py-2 border rounded-lg"
                rows={3}
                placeholder="Description"
              />

              <input
                value={project.techStack}
                onChange={(e) =>
                  updateProject(index, "techStack", e.target.value)
                }
                className="w-full mb-2 px-4 py-2 border rounded-lg"
                placeholder="Tech Stack"
              />

              <input
                value={project.link}
                onChange={(e) =>
                  updateProject(index, "link", e.target.value)
                }
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Project Link"
              />
            </div>
          ))}

          <button
            onClick={addProject}
            className="w-full py-3 border-2 border-dashed border-blue-200 bg-blue-50 text-blue-600 rounded-lg flex justify-center gap-2"
          >
            <Plus size={18} />
            Add Project
          </button>
        </div>
      </SectionEditor>

      {/* SKILLS */}
      <SectionEditor value="skills" title="Skills">
        <textarea
          value={resumeData.skills.join(", ")}
          onChange={(e) =>
            updateSkills(
              e.target.value.split(",").map((s) => s.trim()).filter(Boolean)
            )
          }
          className="w-full px-4 py-2 border rounded-lg"
          rows={4}
          placeholder="React, Node, MongoDB"
        />
      </SectionEditor>

      {/* ACHIEVEMENTS */}
      <SectionEditor value="achievements" title="Achievements & Certifications">
        <textarea
          value={resumeData.achievements.join("\n")}
          onChange={(e) =>
            updateAchievements(e.target.value.split("\n").filter(Boolean))
          }
          className="w-full px-4 py-2 border rounded-lg"
          rows={4}
        />
      </SectionEditor>
    </Accordion.Root>
  );
};