import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import Header from '@/components/Header';
import BookingForm from '@/components/BookingForm';
import ContactStrip from '@/components/ContactStrip';
import Ld from '@/components/Ld';
import {breadcrumbLd, cityByName, faqLd, getRoute, gujaratCity, routes, taxiLd, type Faq} from '@/lib/seo';
import {PHONE, PHONE_DISPLAY, SITE_URL} from '@/lib/site';
import {routeUrl} from '@/lib/whatsapp';

export function generateStaticParams() {
  return routes.map(r => ({route: r.slug}));
}

export async function generateMetadata({params}: {params: Promise<{route: string}>}): Promise<Metadata> {
  const {route} = await params;
  const r = getRoute(route);
  if (!r) return {};
  const title = `${r.from} to ${r.to} Taxi – One Way & Round Trip Cab | NATARAJ.YATRA`;
  const description = `Book ${r.from} to ${r.to} taxi: one way and round trip outstation cab with driver. Sedan, Ertiga / SUV, Innova Crysta. Call ${PHONE_DISPLAY}, 24/7.`;
  return {
    title,
    description,
    keywords: [`${r.from} to ${r.to} taxi`, `${r.from} to ${r.to} cab`, `${r.from} ${r.to} outstation taxi`, `one way taxi ${r.from}`],
    alternates: {canonical: `/taxi/${r.slug}`},
    openGraph: {title, description, url: `/taxi/${r.slug}`, siteName: 'NATARAJ.YATRA', type: 'website', locale: 'en_IN'}
  };
}

export default async function RoutePage({params}: {params: Promise<{route: string}>}) {
  const {route} = await params;
  const r = getRoute(route);
  if (!r) notFound();
  const {from, to} = r!;
  const fromCity = cityByName(from);
  const toCity = cityByName(to);
  const faq: Faq[] = [
    {q: `How can I book a ${from} to ${to} taxi?`, a: `Call or WhatsApp ${PHONE_DISPLAY} with your pickup point, date and number of passengers. We confirm the exact fare and vehicle before the trip.`},
    {q: `Is one way taxi available from ${from} to ${to}?`, a: `Yes. One way and round trip options are available on this route. Ask on WhatsApp for the fare for your date.`},
    {q: `Which cars can I take from ${from} to ${to}?`, a: 'Sedan (up to 4 passengers), Ertiga / SUV (up to 6 passengers) and Toyota Innova Crysta (up to 7 passengers).'}
  ];
  return (
    <>
      <Header />
      <Ld data={taxiLd(`NATARAJ.YATRA – ${from} to ${to} Taxi`, `${SITE_URL}/taxi/${r!.slug}`, [gujaratCity(from), gujaratCity(to)])} />
      <Ld data={faqLd(faq)} />
      <Ld data={breadcrumbLd([{name: 'Home', path: '/'}, {name: `${from} to ${to} Taxi`, path: `/taxi/${r!.slug}`}])} />
      <main>
        <section className="gradient text-white">
          <div className="container py-14 md:py-16">
            <div className="text-orange-300 font-black tracking-widest text-sm">NATARAJ.YATRA · OUTSTATION TAXI</div>
            <h1 className="text-4xl md:text-5xl font-black mt-3">{from} to {to} Taxi</h1>
            <p className="text-white/80 text-lg mt-5 max-w-2xl">
              Book a clean, comfortable one way or round trip taxi from {from} to {to}. Experienced driver, transparent quote and 24/7 call and WhatsApp booking.
            </p>
            <div className="flex gap-3 mt-7 flex-wrap">
              <a href={`tel:+${PHONE}`} className="btn btn-orange">Call {PHONE_DISPLAY}</a>
              <a href={routeUrl(from, to)} target="_blank" rel="noopener" className="btn bg-white text-[#0b1f4d]">WhatsApp</a>
            </div>
          </div>
        </section>

        <BookingForm city={from} />

        <section className="container py-14 max-w-3xl">
          <h2 className="text-3xl font-black text-[#0b1f4d]">{from} to {to} outstation cab</h2>
          <p className="text-slate-600 leading-8 mt-3">
            NATARAJ.YATRA runs taxi service from {from} to {to} for families, pilgrims, tourists and business travellers.
            Choose a Sedan for up to 4 passengers, an Ertiga / SUV for up to 6, or a Toyota Innova Crysta for up to 7.
            Tell us your date, pickup point and number of passengers on call or WhatsApp, and we will confirm the exact fare and vehicle.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {fromCity && <Link href={`/city/${fromCity.slug}`} className="card px-4 py-2 text-sm font-bold text-[#0b1f4d]">Taxi service in {from}</Link>}
            {toCity && <Link href={`/city/${toCity.slug}`} className="card px-4 py-2 text-sm font-bold text-[#0b1f4d]">Taxi service in {to}</Link>}
          </div>
        </section>

        <section className="bg-white border-y border-slate-200 py-14">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-black text-[#0b1f4d]">{from} to {to} taxi – FAQ</h2>
            <div className="mt-6 grid gap-3">
              {faq.map(f => (
                <details key={f.q} className="card p-4">
                  <summary className="font-black cursor-pointer text-[#0b1f4d]">{f.q}</summary>
                  <p className="mt-2 text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <section className="bg-[linear-gradient(180deg,#e9f2fb_0%,#fde8cf_100%)] pb-10 pt-2" id="contact"><div className="container"><ContactStrip /></div></section>
    </>
  );
}
