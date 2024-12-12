"use server"

// app/auth/login/action.js

import { cookies } from 'next/headers'; // To handle cookies (for sessions or tokens)
import bcrypt from 'bcryptjs'; // For password hashing (if you're using bcrypt)
import prisma from '@/prisma';

export async function loginAction({ email, password }) {
  try {
    // Validate email and password
    if (!email || !password) {
      return { error: "Both email and password are required." };
    }

    // Find the user by email in your database (assuming you're using Prisma)
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return { error: "Invalid email or password." };
    }

    // Compare the password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: "Invalid email or password." };
    }

    // If login is successful, set a cookie (or use JWT, etc.)
    cookies().set('authToken', user.token, { httpOnly: true });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while logging in." };
  }
}
