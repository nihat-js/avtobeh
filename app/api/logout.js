// pages/api/logout.js
import { serialize } from 'cookie'; // Import cookie serializer from 'cookie' package

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Clear the JWT token from the cookies
    res.setHeader('Set-Cookie', serialize('token', '', { 
      path: '/', 
      httpOnly: true,  // Ensure the cookie is only accessible by the server
      secure: process.env.NODE_ENV === 'production',  // Set secure flag in production
      maxAge: -1,  // Expire the cookie immediately
    }));

    // Redirect to the homepage or login page
    return res.status(200).json({ message: 'Logged out successfully.' });
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
