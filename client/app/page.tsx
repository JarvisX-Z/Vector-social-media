import Link from "next/link";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { ResumeTemplate } from "@/components/resume/ResumeTemplate";
import { demoResumeData } from "@/utils/demoData";
import { Download, LucideIcon, Puzzle, Target, Zap } from "lucide-react";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Working from "@/components/Home/Working";
import Preview from "@/components/Home/Preview";
import CTA from "@/components/Home/CTA";


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      <Hero/>
      <Features/>
      <Working/>
      <Preview/>
      <CTA/>
      <Footer/>
    </div>
  );
}
