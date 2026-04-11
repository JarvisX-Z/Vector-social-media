"use client";

import { useResume } from "@/context/ResumeContext";
import { ResumeTemplate } from "./ResumeTemplate";

export default function ResumePreview() {
  const { resumeData } = useResume();

  return (
    <div className="flex flex-col w-full">
      {/* Toolbar */}
      <div className="flex items-center px-4 py-2.5 border-b border-neutral-100 bg-neutral-50">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-2 text-xs text-neutral-400 font-medium">
            Resume Preview
          </span>
        </div>
      </div>

      {/* Preview Area */}
      <div className="bg-neutral-200 flex justify-center p-10 overflow-auto">
        <ResumeTemplate data={resumeData} />
      </div>
    </div>
  );
}