import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const WS_PATH = '/wilderness-services';
const WS_COOKIE = 'ws-preview';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Preview password gate for /wilderness-services.
  // Only active when WS_PREVIEW_KEY is set (isolated preview project); no effect otherwise.
  if (pathname === WS_PATH || pathname.startsWith(WS_PATH + '/')) {
    const key = process.env.WS_PREVIEW_KEY;
    if (!key) return NextResponse.next();

    const q = request.nextUrl.searchParams.get('key');
    const c = request.cookies.get(WS_COOKIE)?.value;

    if (q === key || c === key) {
      const res = NextResponse.next();
      res.headers.set('x-robots-tag', 'noindex, nofollow');
      res.headers.set('cache-control', 'private, no-store');
      if (q === key && c !== key) {
        res.cookies.set(WS_COOKIE, key, {
          httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 90,
        });
      }
      return res;
    }

    const url = request.nextUrl.clone();
    url.pathname = '/preview-lock';
    url.search = q ? '?bad=1' : '';
    const res = NextResponse.rewrite(url);
    res.headers.set('x-robots-tag', 'noindex, nofollow');
    res.headers.set('cache-control', 'private, no-store');
    return res;
  }

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
  matcher: ['/manual/:path*', '/manual-print', '/wilderness-services', '/wilderness-services/:path*'],
};
