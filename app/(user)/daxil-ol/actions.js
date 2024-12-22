"use server"

// app/auth/login/action.js

import { cookies } from 'next/headers'; 
import bcrypt from 'bcryptjs'; 
import prisma from '@/prisma';

export async function login({ email, password }) {
  try {
    console.log(email, password)
    if (!email || !password) {
      return { error: "Both email and password are required." };
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return { error: "Invalid email or password." };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return { error: "Invalid email or password." };
    }

    cookies().set('token', user.token, { httpOnly: true });

    return { status: 'ok' };
  } catch (error) {
    console.error(error);
    return { error: "An error occurred while logging in." };
  }
}
