import { NextResponse } from 'next/server'

import { cookieName, fallbackLng, languages } from './app/i18n/settings';
import acceptLanguage from 'accept-language';

acceptLanguage.languages(languages)
const PUBLIC_FILE = /\.(.*)$/
export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)', '/((?!api|_next/static|_next/public|_next/image|assets|favicon.ico|sw.js).*)']
}

export function middleware(req: any) {
  if (req.nextUrl.pathname.indexOf('icon') > -1 || req.nextUrl.pathname.indexOf('chrome') > -1) return NextResponse.next()
  let lng
  if (req.cookies.has(cookieName)) lng = acceptLanguage.get(req.cookies.get(cookieName).value)
  if (!lng) lng = acceptLanguage.get(req.headers.get('Accept-Language'))
  if (!lng) lng = fallbackLng
  //to take the files from the publisc folder
  if (
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }

  if (req.headers.has('referer')) {
    const refererUrl = new URL(req.headers.get('referer'))
    const lngInReferer = languages.find((l) => refererUrl.pathname.startsWith(`/${l}`))
    const response = NextResponse.next()
    if (lngInReferer) response.cookies.set(cookieName, lngInReferer)
    return response
  }

  return NextResponse.next()
}