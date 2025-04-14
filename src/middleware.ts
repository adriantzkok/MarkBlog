import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Create the i18n middleware
const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Define the locales used in your app
  const { locales } = routing;

  // Check if the route is protected
  const isProtectedRoute = locales.some(
    (locale) =>
      path.startsWith(`/${locale}/admin`) || path.startsWith(`/${locale}/auth`)
  );

  if (isProtectedRoute) {
    // Run authentication logic for protected routes
    const sessionResponse = await updateSession(request);

    // If `updateSession` modifies the response, return it
    if (sessionResponse) {
      return sessionResponse;
    }
  }

  // Otherwise, continue with the i18n middleware
  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all paths except for API, static files, and image optimization
    "/((?!api|trpc|_next/static|_next/image|_vercel|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
