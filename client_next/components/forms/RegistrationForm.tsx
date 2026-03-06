"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { useAppContext } from "@/context/AppContext";

export default function RegistrationForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { refreshAuth } = useAppContext();

  const [loading, setLoading] = useState(false);
  const { isLoggedIn, isProfileComplete } = useAppContext();

  useEffect(() => {
    if (isLoggedIn && isProfileComplete) {
      router.replace("/main");
    }
    if (isLoggedIn && !isProfileComplete) {
      router.replace("/auth/profile");
    }
  }, [isLoggedIn]);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.warn("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post( BACKEND_URL + "/api/auth/register", { name, surname, email, phoneNumber, password }, { withCredentials: true });
      if (data.success) {
        await refreshAuth();
        toast.success("Account created successfully!");
        router.replace("/auth/profile");
      } else {
        toast.warn(data.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-black/10 dark:border-white/10 backdrop-blur-3xl rounded-lg px-5 md:px-10 py-6 w-80 md:w-fit">
      
      <p className="font-semibold text-[1rem] md:text-[1.2rem] text-white">
        Welcome to Vector!
      </p>
      <p className="mt-2 mb-5 text-[0.9rem] md:text-[1rem] text-gray-300">
        Register to start posting right away!
      </p>

      <button
        className="border bg-white w-full rounded-md h-10 flex items-center justify-center gap-2 my-3 cursor-pointer"
        onClick={() => {
          window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`;
        }}
      >
        <img src="/Google.png" alt="" className="h-5" />
        Continue with Google
      </button>

      {/* Clean Divider */}
      <div className="flex items-center gap-3 mt-5 mb-4">
        <div className="flex-1 h-px bg-white/20"></div>
        <span className="text-sm text-white/70">or</span>
        <div className="flex-1 h-px bg-white/20"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <div className="w-full">
          <p className="font-semibold text-white">First Name</p>
          <input
            type="text"
            placeholder="demo"
            className="outline-none h-10 bg-white/30 w-full rounded-md p-3 my-2 text-[0.95rem]"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-full">
          <p className="font-semibold text-white">Last Name</p>
          <input
            type="text"
            placeholder="user"
            className="outline-none h-10 bg-white/30 w-full rounded-md p-3 my-2 text-[0.95rem]"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-2 md:gap-5">
        <div className="w-full">
          <p className="font-semibold text-white">Email</p>
          <input
            type="email"
            placeholder="demo@gmail.com"
            className="outline-none h-10 bg-white/30 w-full rounded-md p-3 my-2 text-[0.95rem]"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <p className="font-semibold text-white">Phone number</p>
          <input
            type="tel"
            placeholder="+00 00000 00000"
            className="outline-none h-10 bg-white/30 w-full rounded-md p-3 my-2 text-[0.95rem]"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <p className="font-semibold text-white mt-2">Set a password</p>
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter a password"
          className="outline-none h-10 bg-white/30 w-full rounded-md p-3 my-2 text-[0.95rem] pr-10"
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/60"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>

      <p className="font-semibold text-white">Confirm your password</p>
      <div className="relative">
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm your password"
          className="outline-none h-10 bg-white/30 w-full rounded-md p-3 my-2 text-[0.95rem] pr-10"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <span
          className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-white/60"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>

      <Button
        disabled={loading}
        className={`w-full mt-5 cursor-pointer ${
          loading ? "bg-blue-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
        onClick={handleRegister}
      >
        {loading ? "Creating.." : "Create account"}
      </Button>

      <p className="text-[0.9rem] mt-4 flex justify-between text-white">
        Already have an account?
        <span
          className="font-semibold underline cursor-pointer"
          onClick={() => router.push("/auth/login")}
        >
          Log in
        </span>
      </p>
    </div>
  );
}