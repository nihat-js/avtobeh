// pages/api/bonus.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const userId = session.user.id;

  let user
  switch (req.method) {
    case 'GET':
      // Fetch user stars and last collected date
      user = await getUserStars(userId); // Implement this to fetch from your DB
      return res.status(200).json(user);

    case 'POST':
      // Handle collecting stars
      const today = new Date().toISOString().split('T')[0];
      const user = await getUserStars(userId);

      if (user.lastCollected === today) {
        return res.status(400).json({ message: 'Bonus already collected today.' });
      }

      // Add 25 stars and update last collected date
      await updateUserStars(userId, user.stars + 25, today); // Implement this in your DB
      return res.status(200).json({ message: 'Bonus collected successfully.' });

    case 'PUT':
      // Handle promoting listing (deduct 280 stars)
      const { stars } = req.body;
      if (stars < 280) {
        return res.status(400).json({ message: 'Not enough stars to promote listing.' });
      }

      // Deduct 280 stars and promote the listing
      await updateUserStars(userId, stars - 280); // Implement this in your DB
      return res.status(200).json({ message: 'Listing promoted successfully.' });

    default:
      res.status(405).json({ message: 'Method Not Allowed' });
  }
}

// Helper functions to interact with the database (implement these based on your DB setup)
async function getUserStars(userId) {
  // Fetch the user’s stars and last collected date from your database
  return { stars: 230, lastCollected: '2024-11-30' }; // Example response
}

async function updateUserStars(userId, stars, lastCollected) {
  // Update the user's stars and last collected date in your database
}
