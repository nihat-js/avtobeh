// app/middleware.js

import { NextRequest, NextResponse } from 'next/server';

// In-memory store for rate limiting (for simplicity; in production, consider using Redis)
const rateLimitStore = new Map();

// Rate Limiter Middleware: Prevent too many requests from a single user
function rateLimiter(req) {
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'; // Get user IP
  const currentTime = Date.now();
  const windowTime = 60000; // 1 minute window
  const limit = 5; // Max 5 requests per minute

  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, []);
  }

  const timestamps = rateLimitStore.get(ip);
  timestamps.push(currentTime);

  // Clean up timestamps outside the time window
  const validTimestamps = timestamps.filter((timestamp) => currentTime - timestamp < windowTime);
  rateLimitStore.set(ip, validTimestamps);

  // Check if the rate limit is exceeded
  if (validTimestamps.length > limit) {
    return new NextResponse('Rate limit exceeded', { status: 429 });
  }

  return NextResponse.next();
}

// User Middleware: Ensure the user is authenticated
function userMiddleware(req) {
  const token = req.cookies.get('auth-token'); // Check for auth token in cookies
  if (!token) {
    return new NextResponse('Unauthorized', { status: 401 }); // 401 if no token found
  }
  return NextResponse.next();
}

// Admin Middleware: Ensure the user is an admin
function adminMiddleware(req) {
  const token = req.cookies.get('auth-token'); // Get token from cookies
  if (!token || !isAdminToken(token)) {
    return new NextResponse('Forbidden', { status: 403 }); // 403 if not an admin
  }
  return NextResponse.next();
}

// Helper function to check if the token belongs to an admin
function isAdminToken(token) {
  // For simplicity, let's assume the token is 'admin-token' for admins
  return token === 'admin-token'; // Implement your own admin check logic
}

// export function middleware(req) {
//   // Apply rate limiter on all routes
//   const rateLimitResponse = rateLimiter(req);
//   if (rateLimitResponse) return rateLimitResponse;

//   // Apply user middleware for user routes
//   if (req.url.startsWith('/user')) {
//     return userMiddleware(req);
//   }

//   // Apply admin middleware for admin routes
//   if (req.url.startsWith('/admin')) {
//     return adminMiddleware(req);
//   }

//   console.log("apiiii")
//   if (req.url.startsWith('/api')) {
//   }
//   // return userMiddleware(req);

//   // If no specific middleware applies, allow the request to continue
//   return NextResponse.next();
// }

const excludedRoutes = [
  /^\/icons\//,

];


export function middleware(request) {

  const { pathname } = request.nextUrl;

  for (let pattern of excludedRoutes) {
    if (pattern.test(pathname)) {
      return NextResponse.next();
    }
  }

  const token = request.cookies.get('token');
  if (token){
    
  }
  if (!token) {

    // return NextResponse.redirect(new URL('/auth/login', request.url));
  }


  // console.log({ pathname })

  return NextResponse.next();
}

export const config = {
  // matcher: ['/admin/*', '/user/*', '/api/*'], // Valid path patterns without modifiers
  matcher: ["/:path*"],
  // excludedRoutes: ['/icons/*'],

};
