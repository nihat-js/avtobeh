// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import prisma from "@/prisma";

const secret = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    try {
      // Find the user by email using Prisma
      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user) {
        return res.status(401).json({ error: "Invalid credentials." });
      }

      // Validate the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials." });
      }

      // Generate a JWT
      const token = jwt.sign(
        { userId: user.id, email: user.email },
        secret,
        { expiresIn: "2h" }
      );

      // Set the JWT token in a secure, HttpOnly cookie
      res.setHeader(
        "Set-Cookie",
        serialize("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 60 * 60 * 2, // 2 hours
          path: "/",
        })
      );

      // Return a success response
      return res.status(200).json({ message: "Login successful." });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
