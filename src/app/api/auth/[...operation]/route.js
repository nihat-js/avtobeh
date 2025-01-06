import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/prisma';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'avtobeh-2025-od-jtw';

export async function POST(request, { params }) {
    const { operation } = await params;

    if (operation == 'register') {
        return await register(request);
    }

    if (operation == 'login') {
        return await login(request);
    }

    if (operation == 'status') {
        return await status(request);
    }

    if (operation == 'logout') {
        return await logout(request);
    }

    // if (operation == 'protected') {
    //     return await protectedRoute(request);
    // }

    return NextResponse.json({ message: 'Not found' }, { status: 404 });
}

async function register(request) {
    const { name, email, password } = await request.json();

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
            name,
            email,
            password: hashedPassword,
        },
    });


    const jwtToken = jwt.sign(
        { userId: newUser.id, email: newUser.email },
        JWT_SECRET,
        { expiresIn: '1h' }
    );

    cookies().set('token', jwtToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60,
    });

    return NextResponse.json({
        message: 'User created successfully',
        status: 'ok',

        user: {
            id: newUser.id,
            email: newUser.email,
        },
    });
}

async function status(request) {

    const token = request.cookies.get('token');
    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const decodeData = jwt.verify(token, JWT_SECRET);
    return NextResponse.json({ message: 'Authorized', data: decodeData });
}

// Login operation handler
async function login(request) {
    const { email, password } = await request.json();

    // Find user by email
    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return NextResponse.json({ status: 'error', message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return NextResponse.json({ status: 'error', message: 'Invalid credentials' });
    }

    const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '7d' }
    );

    const cookieStore = await cookies();

    cookieStore.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
    });

    // cookies().set('token', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production',
    //     sameSite: 'strict',
    //     maxAge: 60 * 60 * 24 * 7,
    // });


    return NextResponse.json({
        status: 'ok',
        message: 'Login successful',
        data: user,
    });
}

async function logout(request) {
    const cookieStore = await cookies(); 

    cookieStore.delete('token');

    return NextResponse.json({
        status: 'ok',
        message: 'Logout successful',
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
