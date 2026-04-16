import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error('JWT_SECRET missing');

const protectedRoutes = ['/dashboard'];

const rateLimitLogin = new Map<string, { count: number; resetTime: number }>();

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rate limiting for login
  if (pathname.includes('/LoginPage') && request.method === 'POST') {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const key = `login:${ip}`;

    if (rateLimitLogin.has(key)) {
      const record = rateLimitLogin.get(key)!;
      if (now < record.resetTime) {
        if (record.count >= 5) {
          return NextResponse.json({ error: 'Muitas tentativas. Tente em 1 minuto.' }, { status: 429 });
        }
        record.count++;
      } else {
        rateLimitLogin.set(key, { count: 1, resetTime: now + 60_000 });
      }
    } else {
      rateLimitLogin.set(key, { count: 1, resetTime: now + 60_000 });
    }
  }

  // Auth check
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    const token = request.cookies.get('auth_token')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(SECRET));
      // Add userId to headers if needed
    } catch {
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('auth_token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/login/:path*']
};

