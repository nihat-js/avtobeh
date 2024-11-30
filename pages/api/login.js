// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import db from "@/db/drizzle"; // Your Drizzle DB instance
import { usersTable } from "@/db/schema"; // Adjust based on your schema
import { eq } from "drizzle-orm";

const secret = process.env.JWT_SECRET || "your-secret-key";

export default async function handler(req , res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    try {
      // Find the user by email using Drizzle ORM
      const user = await db
        .select()
        .from(usersTable)
        .where( eq(usersTable.email,email))
        .limit(1)
        .execute();

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
