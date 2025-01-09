import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function logout(req) {
  let cookies = await cookies();

  return NextResponse.json({
    error: false,
    message: "oo",
  });
  // cookies.delete('token')
  // return NextResponse.redirect(new URL('/auth/login', req.url));

  return NextResponse.json({
    error: false
  });
}