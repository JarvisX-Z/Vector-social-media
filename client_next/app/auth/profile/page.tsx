"use client";

import PfpForm from "@/components/forms/ProfileForm";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function Pfp() {

    const searchParams = useSearchParams();
      const router = useRouter();
    
      useEffect(() => {
        if(searchParams.get("register")==='google') {
          toast.success("Account created!");
          router.replace('/auth/profile');
        }
      }, []);

    return (
        <div className="h-screen flex items-center justify-center">
            <PfpForm/>
        </div>
    );
}