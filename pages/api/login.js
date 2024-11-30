// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "@/db/drizzle"; // Adjust based on your DB setup
import { users } from "@/db/schema";
import { serialize } from "v8";

const secret = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    try {
      // Find the user by email
      const user = await db
        .select()
        .from(users)
        .where(users.email.eq(email))
        .limit(1);

      if (user.length === 0) {
        return res.status(401).json({ error: "Invalid credentials." });
      }

      // Validate the password
      const isPasswordValid = await bcrypt.compare(password, user[0].password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid credentials." });
      }

      // Generate a JWT
      const token = jwt.sign(
        { userId: user[0].id, email: user[0].email },
        secret,
        { expiresIn: "2h" } // Token expiration
      );

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

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
