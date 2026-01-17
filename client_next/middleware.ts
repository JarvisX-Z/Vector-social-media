import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token");
  const { pathname } = req.nextUrl;

  const authPages = ["/auth/login", "/auth/register"];
  const protectedPages = ["/main", "/main/activity", "/main/explore", "/main/profile", "/main/settings"];

  if (token && authPages.includes(pathname)) {
    return NextResponse.redirect(new URL("/main", req.url));
  }

  if (!token && protectedPages.some(p => pathname.startsWith(p))) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}
