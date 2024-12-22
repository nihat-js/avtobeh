import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/prisma';
import { NextResponse } from 'next/server';

const JWT_SECRET = process.env.JWT_SECRET || 'avtobeh-2025-od-jtw';

export async function handler(request, { params }) {
    const { operation } = params; // This will capture the 'operation' part of the route

    if (operation === 'signup') {
        return await signup(request);
    }

    if (operation === 'login') {
        return await login(request); // Call the login handler
    }

    if (operation === 'protected') {
        return await protectedRoute(request); // Call the protected route handler
    }

    return NextResponse.json({ message: 'Operation not found' }, { status: 404 });
}

async function signup(request) {
    const { email, password } = await request.json();

    const existingUser = await prisma.user.findUnique({
        where: { email },
    });

    if (existingUser) {
        return NextResponse.json(
            { message: 'Email already in use' },
            { status: 400 }
        );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
    });

    return NextResponse.json({
        message: 'User created successfully',
        user: {
            id: newUser.id,
            email: newUser.email,
        },
    });
}

// Login operation handler
async function login(request) {
    const { email, password } = await request.json();

    // Find user by email
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    // Generate a JWT token
    const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }
    );

    return NextResponse.json({
        message: 'Login successful',
        token,
    });
}

// Protected route handler
async function protectedRoute(request) {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return NextResponse.json({ message: 'No token provided' }, { status: 401 });
    }

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, JWT_SECRET);
        return NextResponse.json({
            message: 'Protected data',
            user: decoded,
        });
    } catch (error) {
        return NextResponse.json({ message: 'Invalid or expired token' }, { status: 401 });
    }
}
