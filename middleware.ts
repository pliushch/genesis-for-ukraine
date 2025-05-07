import { geolocation, next } from '@vercel/edge';

export const config = {
  runtime: 'edge',
};

const ALLOWED_COUNTRY = 'UA';

export default function middleware(request: Request) {
  const { country } = geolocation(request);

  console.log('Access attempt from country:', country)

  if (country === ALLOWED_COUNTRY) {
    return next();
  }

  return next({
    status: 403,
    body: 'Forbidden',
  });
}
