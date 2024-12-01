// pages/api/register.ts
import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import prisma from '@/prisma';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    console.log({name,email,password})

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists.' });
    }

    // // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({ hashedPassword });

    await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPassword
      }
    })
    res.status(201).json({ message: 'User registered successfully.' });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
