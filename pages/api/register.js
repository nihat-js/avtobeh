// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import db from "@/db/drizzle"; // Adjust based on your DB setup
import { usersTable } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required." });
    }

    try {
      // Check if user exists
      const existingUser = await db
        .select()
        .from(usersTable)
        .where( eq(usersTable.email,email)) 
        .limit(1);

      if (existingUser.length > 0) {
        return res.status(400).json({ error: "User already exists." });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Insert the user into the database
      await db.insert(usersTable).values({
        id: crypto.randomUUID(),
        email,
        password: hashedPassword,
        createdAt: new Date(),
      });

      res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed." });
  }
}
