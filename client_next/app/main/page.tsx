"use client"

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Feed from "@/components/feed/Feed";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function home() {

  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if(searchParams.get("login")==='google') {
      toast.success("Logged in successfully!");
      router.replace('/main');
    }
  }, []);

  return (
    <div className="overflow-y-auto h-screen">
      <Navbar/>
      <Feed/>
    </div>
  );
}
