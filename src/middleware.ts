import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

const protectedRoutes = ["/admin"];

// Create the i18n middleware
const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest) {
  // First, update the session
  const sessionResponse = await updateSession(request);

  // If `updateSession` modifies the response, return it
  if (sessionResponse) {
    return sessionResponse;
  }

  // Otherwise, continue with the i18n middleware
  return intlMiddleware(request);
}

export const config = {
  // Combine matchers from both configs
  matcher: [
    // Match all paths except for API, static files, and image optimization
    "/((?!api|trpc|_next/static|_next/image|_vercel|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
