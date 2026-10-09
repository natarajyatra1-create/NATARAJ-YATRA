import {cities, City} from './cities';
import {BRAND, EMAIL, PHONE, PHONE_DISPLAY, SITE_URL} from './site';

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ---------- Route pages (e.g. "Junagadh to Ahmedabad taxi") built from the routes already defined per city ----------
export type Route = {slug: string; from: string; to: string};
export const routes: Route[] = (() => {
  const m = new Map<string, Route>();
  for (const c of cities) for (const r of c.routes) {
    const [from, to] = r.split(' → ');
    if (!from || !to) continue;
    const slug = `${slugify(from)}-to-${slugify(to)}-taxi`;
    if (!m.has(slug)) m.set(slug, {slug, from, to});
  }
  return [...m.values()];
})();
export const getRoute = (slug: string) => routes.find(r => r.slug === slug);
export const routesFrom = (name: string) => routes.filter(r => r.from === name);
export const cityByName = (name: string) => cities.find(c => c.name === name);

// ---------- FAQ (shown on the page AND sent to Google as FAQ schema) ----------
export type Faq = {q: string; a: string};
const cars = 'Sedan (up to 4 passengers), Ertiga / SUV (up to 6 passengers) and Toyota Innova Crysta (up to 7 passengers)';

export function cityFaq(c: City): Faq[] {
  return [
    {q: `How do I book a taxi in ${c.name}?`,
     a: `Call or WhatsApp ${PHONE_DISPLAY}, or fill the booking form on this page. We confirm the exact fare and vehicle before your trip.`},
    {q: `Is airport taxi pickup and drop available from ${c.name}?`,
     a: `Yes. ${BRAND} arranges airport pickup and drop across Gujarat, including Rajkot, Ahmedabad and Jamnagar airports. Share your flight time on WhatsApp and we will plan the pickup.`},
    {q: `Do you offer one way and round trip outstation taxi from ${c.name}?`,
     a: `Yes. You can book a one way taxi or a round trip outstation cab from ${c.name} to any city in Gujarat. We confirm the fare for your route before travel.`},
    {q: `Which cars are available in ${c.name}?`,
     a: `${cars}. Choose a car based on your group size and luggage.`},
    {q: `Is your taxi service in ${c.name} available 24 hours?`,
     a: `Call and WhatsApp booking is open 24/7 on ${PHONE_DISPLAY}.`},
    {q: `Can I hire a car with driver for sightseeing around ${c.name}?`,
     a: `Yes. Car rental with driver is available for local sightseeing, temple visits and Gujarat tours. Tell us your places and number of days and we will confirm the quote.`}
  ];
}

export const homeFaq: Faq[] = [
  {q: 'How do I book a taxi in Junagadh?',
   a: `Call or WhatsApp ${PHONE_DISPLAY}, or use the booking form on our website. We confirm the exact fare and vehicle before the trip.`},
  {q: 'Do you provide outstation cab booking across Gujarat?',
   a: `Yes. ${BRAND} offers one way and round trip outstation taxis from Junagadh, Bhavnath, Somnath, Dwarka, Rajkot, Ahmedabad and all other major Gujarat cities.`},
  {q: 'Is airport pickup and drop available?',
   a: 'Yes. We arrange airport taxi pickup and drop, including Rajkot, Ahmedabad and Jamnagar airports.'},
  {q: 'Which cars can I book?',
   a: `${cars}.`},
  {q: 'Is the taxi service available 24 hours?',
   a: `Call and WhatsApp booking is open 24/7 on ${PHONE_DISPLAY}.`},
  {q: 'Do you offer Gujarat tour packages?',
   a: 'Yes. We arrange Gujarat pilgrimage, heritage and family tours with a car and driver, and can customise a tour for your group.'}
];

export const faqLd = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map(f => ({'@type': 'Question', name: f.q, acceptedAnswer: {'@type': 'Answer', text: f.a}}))
});

export const breadcrumbLd = (items: {name: string; path: string}[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({'@type': 'ListItem', position: i + 1, name: it.name, item: SITE_URL + it.path}))
});

const allWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const openingHours = {'@type': 'OpeningHoursSpecification', dayOfWeek: allWeek, opens: '00:00', closes: '23:59'};

export const taxiLd = (name: string, url: string, areaServed: object | object[]) => ({
  '@context': 'https://schema.org',
  '@type': 'TaxiService',
  name,
  url,
  telephone: '+' + PHONE,
  email: EMAIL,
  image: SITE_URL + '/scene.jpg',
  areaServed,
  openingHoursSpecification: openingHours,
  address: {'@type': 'PostalAddress', addressLocality: 'Bhavnath, Junagadh', addressRegion: 'Gujarat', addressCountry: 'IN'}
});

export const gujaratCity = (name: string) => ({'@type': 'City', name, containedInPlace: {'@type': 'State', name: 'Gujarat'}});
