import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { LOGIN, MY_PROPERTY } from "./constants/page.routes";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (
    (pathname.startsWith("/sell") || pathname.startsWith("/profile")) &&
    !request.cookies.has("token")
  ) {
    return NextResponse.redirect(new URL(LOGIN, request.url));
  } else if (pathname.startsWith(LOGIN) && request.cookies.has("token")) {
    return NextResponse.redirect(new URL(MY_PROPERTY, request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|images).*)",
  ],
};
