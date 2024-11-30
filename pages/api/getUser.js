// pages/api/getUser.js
import { parseCookies } from 'cookie';
import jwt from 'jsonwebtoken';
import db from '@/db/drizzle'; // Your DB setup file
import { usersTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
  const cookies = parseCookies({ req });
  const token = cookies.token;
  console.log({token})
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    // Fetch the user data from the database
    const userData = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.id,decoded.userId))
      .limit(1);

    if (userData.length > 0) {
      const user = {
        id: userData[0].id,
        email: userData[0].email,
        avatar: userData[0].avatar || '/default-avatar.png',
        bonus: userData[0].bonus || 0,
        balance: userData[0].balance || 0,
      };

      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
