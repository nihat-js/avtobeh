// middleware/session.ts
import { withSession } from 'next-session';

const sessionConfig = {
  secret: 'your-secret-key', // Use a strong secret in production
  cookie: {
    maxAge: 60 * 60 * 24 * 7, // 1 week
  },
};

export const getSession = withSession(sessionConfig);
