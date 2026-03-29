"use client"

import { demoResumeData } from "@/utils/demoData";
import { ResumeTemplate } from "../resume/ResumeTemplate";
import Link from "next/link";

export default function Hero() {
    return (
        <div>
            <section className="relative md:h-screen pt-20 md:pt-0 flex items-center px-6 overflow-hidden">

                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[180px] font-black text-blue-50 select-none pointer-events-none">
                    BUILD
                </h1>

                <div className="flex flex-col md:flex-row gap-10 md:gap-0 relative">

                    {/* LEFT */}
                    <div className="md:px-10 text-center md:text-left w-full md:w-[50%]">

                        {/* TOP BADGE */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-500 text-xs font-medium mb-6 animate-fade-in-up stagger-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                            Build · Analyze · Improve
                        </div>

                        {/* HEADLINE */}
                        <h1 className="text-4xl md:text-[3rem] font-bold text-neutral-900 leading-[1.1] tracking-tight mb-5 animate-fade-in-up stagger-2">
                            Build and analyze {" "}
                            <span className="bg-blue-500 bg-clip-text text-transparent">
                                resumes in seconds
                            </span>
                        </h1>

                        {/* DESCRIPTION */}
                        <p className="text-lg text-neutral-500 leading-relaxed mb-6 animate-fade-in-up stagger-3">
                            Create clean, ATS-friendly resumes and instantly analyze them
                            against job descriptions to uncover missing skills, weak points,
                            and improvement opportunities.
                        </p>

                        <div className="flex flex-col justify-center md:justify-start sm:flex-row gap-3 animate-fade-in-up stagger-4">

                            <Link href="/builder" className="btn-primary text-sm flex justify-center py-3 px-6">
                                Create Resume →
                            </Link>

                            <Link href="/resume-analyzer" className="btn-secondary text-sm flex justify-center py-3 px-6">
                                Analyze Resume →
                            </Link>

                        </div>

                        {/* SOCIAL PROOF */}
                        <div className="flex items-center gap-4 mt-8 animate-fade-in-up stagger-5">
                            <div className="flex -space-x-2">
                                {["bg-blue-200", "bg-blue-200", "bg-blue-200", "bg-blue-200"].map((c, i) => (
                                    <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white`} />
                                ))}
                            </div>
                            <p className="text-xs text-neutral-500">
                                <span className="font-semibold text-neutral-700">200+</span> resumes built this month
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative my-auto animate-fade-in-up w-full md:w-[50%] pb-10 md:pb-0">

                        
                        <img src="/demo5.png" alt="" />
                    </div>

                </div>
            </section>
        </div>
    );
}