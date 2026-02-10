import { useAppContext } from "@/context/AppContext";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const {isLoggedIn, userData} = useAppContext();
  if (!isLoggedIn) {
    redirect("/auth/login");
  }
  if (!userData) {
    redirect("/auth/login");
  }
  if (!userData.isProfileComplete) {
    redirect("/auth/profile");
  }
  redirect("/main");
}