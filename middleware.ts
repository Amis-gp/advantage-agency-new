import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/config';

export default createMiddleware({
  locales: ['ua', 'en'],
  defaultLocale: 'ua',
  localePrefix: 'always'
});

export const config = {
  matcher: ['/', '/(ua|en)/:path*']
};
