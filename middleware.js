import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.next();
}

export const config = {
  matcher: "/news",
};

// we can performs different tasks on the on going request and validate the data in between the requests using middleware

// middleware is also a reserved keyword both for filename and function name
