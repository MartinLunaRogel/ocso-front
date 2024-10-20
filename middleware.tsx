import { NextRequest, NextResponse } from "next/server";
import { TOKEN_NAME } from "./constants";

export default function MiddleWare(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/dashboard')){
    const token = req.cookies.get(TOKEN_NAME)?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }
  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }
  return NextResponse.next()
}