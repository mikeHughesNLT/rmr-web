import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Gate all /manual routes — except the unlock page itself
  if (pathname.startsWith('/manual') && !pathname.startsWith('/manual/unlock')) {
    const auth = request.cookies.get('manual-auth');
    if (!auth || auth.value !== '1') {
      return NextResponse.redirect(new URL('/manual/unlock', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/manual/:path*'],
};
