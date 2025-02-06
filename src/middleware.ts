// src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/sign-in', 
  '/', 
  '/contact', 
  '/about', 
  
  '/faq', 
  '/grocery/:id(.*)',  // Fixed dynamic route
  '/pricing', 
  '/shop', 
  '/team', 
  '/blog', 
  '/category',
  "/api/cart", // Allow API routes
  "/api/wishlist",
]);

export default clerkMiddleware(async (auth, request) => {
  // Protect all routes except public ones
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Match all non-static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Match API routes
    '/(api|trpc)(.*)',
  ],
};
