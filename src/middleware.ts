import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!api|_next|static|public|favicon.ico).*)",
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (user === "alameli-admin" && pwd === "alameli123") {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
