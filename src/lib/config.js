import "server-only"

export const config = {
  JWTSecret: process.env.JWT_SECRET || 'avtobeh-2025-jwt-jwt',
  databaseHost: process.env.DATABASE_HOST || 'localhost',
  databasePort: process.env.DATABASE_PORT || '3306',
  databaseUser: process.env.DATABASE_USER || 'root',
  databasePassword: process.env.DATABASE_PASSWORD || '',
  databaseName: process.env.DATABASE_NAME || 'avto-beh',
};