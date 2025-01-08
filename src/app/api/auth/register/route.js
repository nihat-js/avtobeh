import User from "@/src/database/sequelize/models/User";
import { config } from "@/src/lib/config";
import { safeParse } from "@/src/lib/SandParser";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export async function POST(request) {
  const data = await request.json();

  let result = await safeParse(data, {
    name: ["required", "string", { min: 2 }, { max: 100 }],
    email: ["required", "email"],
    password: ["required", "string", { min: 6 }, { max: 100 }],
  })


  if (result.error) {
    return NextResponse.json(
      { error: result.error },
      { status: 400 }
    );
  }


  const { phoneNumber, name, email, password } = data


  let existingUser = await User.findOne({
    where: { email }
  })

  if (existingUser) {
    return NextResponse.json(
      { message: 'Email already in use' },
      { status: 400 }
    );
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  const jwtToken = jwt.sign(
    {
      userId: newUser.id,
      email: newUser.email
    },
    config.JWTSecret,
    { expiresIn: '1w' }
  );

  // return NextResponse.json({
  //   error: "aa",
  //   data: jwtToken
  // })


  cookies().set('token', jwtToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60,
  });

  return NextResponse.json({
    error: false,
    message: 'Uğurla qeydiyyatdan keçildi',
    data: {
      id: newUser.id,
      email: newUser.email,
    },
  });
}