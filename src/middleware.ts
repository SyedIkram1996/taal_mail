import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { LOGIN, MY_PROPERTIES_PAGE } from "./constants/page.routes";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  request.headers.set("x-pathname", pathname);
  if (
    (pathname.startsWith("/sell") ||
      pathname.startsWith("/profile") ||
      pathname.startsWith("/admin")) &&
    !request.cookies.has("token")
  ) {
    return NextResponse.redirect(new URL(LOGIN, request.url), {
      headers: request.headers,
    });
  } else if (pathname.startsWith(LOGIN) && request.cookies.has("token")) {
    return NextResponse.redirect(new URL(MY_PROPERTIES_PAGE(), request.url), {
      headers: request.headers,
    });
  }

  return NextResponse.next({
    request: {
      headers: request.headers,
    },
  });
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
