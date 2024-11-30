// lib/verifyToken.ts
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your-secret-key";

export function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    throw new Error("Invalid or expired token.");
  }
}
