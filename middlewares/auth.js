// middleware.ts
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import Cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

export async function middleware(req) {
  const token = req.cookies.get('token');  // Get the token from cookies
  const secret = process.env.JWT_SECRET || "your-secret-key";

  if (token) {
    try {
      // Verify the token and decode user information
      const decoded = jwt.verify(token, secret);
      // Attach user info to request headers for later use (like in a header component)
      req.headers.set('x-user-id', decoded.userId);
      req.headers.set('x-user-email', decoded.email);

      // Allow the request to continue to the page/API
      return NextResponse.next();
    } catch (error) {
      // If token is invalid or expired, redirect to login page
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // If no token, allow the request to proceed (non-authenticated)
  return NextResponse.next();
}
