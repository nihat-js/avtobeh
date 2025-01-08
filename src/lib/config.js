import "server-only"

export const config = {
  JWTSecret: process.env.JWT_SECRET || 'avtobeh-2025-jwt-jwt',
};