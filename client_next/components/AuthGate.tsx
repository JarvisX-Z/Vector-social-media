"use client";

import { useAppContext } from "@/context/AppContext";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { loading } = useAppContext();

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}