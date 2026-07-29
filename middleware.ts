import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Gate /manual routes (except the unlock page) and /manual-print
  const isGated =
    pathname === '/manual-print' ||
    (pathname.startsWith('/manual') && !pathname.startsWith('/manual/unlock'));

  if (isGated) {
    const auth = request.cookies.get('manual-auth');
    if (!auth || auth.value !== '1') {
      return NextResponse.redirect(new URL('/manual/unlock', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/manual/:path*', '/manual-print'],
};
