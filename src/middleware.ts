import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest, ev: any) {
  const { pathname } = req.nextUrl;
  if (pathname == "/") {
    return NextResponse.redirect(new URL("/search", req.url));
  }
  return NextResponse.next();
}
