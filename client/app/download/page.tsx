"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useResume } from "@/context/ResumeContext";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";

export default function DownloadPage() {
  const { resumeData } = useResume();
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-50/50">
      <Navbar />

      <div className="pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-14 items-start">

          {/* LEFT SIDE */}
          <div className="flex-1 max-w-xl text-center lg:text-left">

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Resume unlocked successfully
            </div>

            <h1 className="text-3xl md:text-[2.3rem] flex flex-col gap-2.5 font-bold text-neutral-900 tracking-tight">
              Your resume is <span className="text-blue-500 md:text-[3rem]">ready to rock!</span>
            </h1>

            <p className="text-neutral-500 text-base max-w-md mx-auto lg:mx-0 my-7">
              {resumeData.personalInfo.name
                ? `${resumeData.personalInfo.name}'s resume`
                : "Your resume"}{" "}
              is polished and ready to impress. Download your PDF below.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <button
                onClick={handleDownload}
                disabled={downloading}
                className="btn-primary text-sm py-3 px-7 disabled:opacity-70"
              >
                {downloading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Generating PDF...
                  </span>
                ) : downloaded ? (
                  <span className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    PDF Downloaded!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </span>
                )}
              </button>

              <Link href="/builder" className="btn-secondary text-sm py-3 px-7">
                Edit Resume
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center md:justify-start w-full gap-10 mt-10 py-5 border-t border-neutral-200">
              {[
                { label: "ATS Score", value: "98/100", color: "text-emerald-600" },
                { label: "Sections", value: "6", color: "text-blue-500" },
                { label: "Format", value: "PDF/A", color: "text-neutral-700" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className={`text-xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px flex-1 bg-neutral-200" />
              <span className="text-xs text-blue-400 font-medium">Final Preview</span>
              <div className="h-px flex-1 bg-neutral-200" />
            </div>

            <div className="bg-white rounded-2xl border border-neutral-200 shadow-card overflow-hidden">
              <div className="bg-neutral-50 border-b border-neutral-100 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-300/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>
                <span className="ml-2 text-xs text-neutral-400">
                  {resumeData.personalInfo.name
                    ? `${resumeData.personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`
                    : "Resume.pdf"}
                </span>
              </div>

              <div className="p-6">
                <div className="bg-white border-2 border-neutral-200 rounded-lg shadow-xl overflow-hidden">
                  <div style={{ aspectRatio: "8.5 / 11" }}>
                    <ResumeTemplate data={resumeData} />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 flex flex-col justify-center items-center">
          <h3 className="text-[1.5rem] md:text-[2rem] font-bold text-blue-500 mb-10">What's next?</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-14">
            {[
              { icon: "📧", title: "Apply to jobs", desc: "Send your PDF to recruiters and job boards" },
              { icon: "🔗", title: "Update LinkedIn", desc: "Upload to LinkedIn profile for visibility" },
              { icon: "🔄", title: "Keep it fresh", desc: "Come back and edit anytime, free" },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-neutral-700">{item.title}</p>
                  <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}