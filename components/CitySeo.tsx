import Link from 'next/link';
import {City, cities} from '@/lib/cities';
import {breadcrumbLd, cityFaq, faqLd, gujaratCity, routesFrom, taxiLd} from '@/lib/seo';
import {SITE_URL} from '@/lib/site';
import Ld from './Ld';

export default function CitySeo({city}: {city: City}) {
  const n = city.name;
  const faq = cityFaq(city);
  const services = [
    [`Local taxi service in ${n}`, `Hourly and full-day local cab for sightseeing, temples, shopping and meetings in ${n}.`],
    [`Airport taxi pickup & drop`, `On-time airport cab booking from ${n} to Rajkot, Ahmedabad, Jamnagar and other airports.`],
    [`Outstation taxi from ${n}`, `Outstation cab booking from ${n} to any city in Gujarat and beyond.`],
    [`One way taxi from ${n}`, `Pay for one direction only on selected routes. Ask for the fare on WhatsApp.`],
    [`Round trip taxi`, `Go and return with the same car and driver, with a fixed plan for your days.`],
    [`Car rental with driver`, `Sedan, Ertiga / SUV and Innova Crysta with an experienced driver for family and group trips.`],
    [`Gujarat tour packages`, `Pilgrimage, heritage and family tour packages starting from ${n}.`],
    [`Corporate & wedding travel`, `Staff transport, guest pickups and wedding transportation in ${n}.`]
  ];
  const fromRoutes = routesFrom(n);
  const others = cities.filter(c => c.slug !== city.slug);

  return (
    <>
      <Ld data={taxiLd(`${'NATARAJ.YATRA'} – Taxi Service in ${n}`, `${SITE_URL}/city/${city.slug}`, gujaratCity(n))} />
      <Ld data={faqLd(faq)} />
      <Ld data={breadcrumbLd([{name: 'Home', path: '/'}, {name: `Taxi Service in ${n}`, path: `/city/${city.slug}`}])} />

      <section className="container py-14">
        <div className="text-xs font-black tracking-widest text-[#f47b20]">TAXI & CAB SERVICES</div>
        <h2 className="text-3xl font-black text-[#0b1f4d] mt-2">Taxi & Cab Services in {n}</h2>
        <p className="text-slate-600 leading-8 mt-3 max-w-3xl">
          Looking for a taxi service in {n}? NATARAJ.YATRA offers local taxi, airport pickup and drop, outstation cab
          booking, one way and round trip taxi, and car rental with driver in {n}, {city.region}. Book by call or WhatsApp,
          any time of day.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
          {services.map(s => (
            <div className="card p-5" key={s[0]}>
              <h3 className="font-black text-[#0b1f4d]">{s[0]}</h3>
              <p className="text-sm text-slate-500 mt-2">{s[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {fromRoutes.length > 0 && (
        <section className="container pb-14">
          <h2 className="text-2xl font-black text-[#0b1f4d]">Outstation taxi routes from {n}</h2>
          <div className="flex flex-wrap gap-3 mt-5">
            {fromRoutes.map(r => (
              <Link key={r.slug} href={`/taxi/${r.slug}`} className="card px-4 py-2 text-sm font-bold text-[#0b1f4d] hover:-translate-y-0.5 transition">
                {r.from} to {r.to} taxi
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="bg-white border-y border-slate-200 py-14">
        <div className="container max-w-3xl">
          <div className="text-xs font-black tracking-widest text-[#f47b20]">FAQ</div>
          <h2 className="text-3xl font-black text-[#0b1f4d] mt-2">Taxi in {n} – Frequently Asked Questions</h2>
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

      <section className="container py-14">
        <h2 className="text-2xl font-black text-[#0b1f4d]">Taxi service in other Gujarat cities</h2>
        <div className="flex flex-wrap gap-3 mt-5">
          {others.map(c => (
            <Link key={c.slug} href={`/city/${c.slug}`} className="card px-4 py-2 text-sm font-bold text-[#0b1f4d] hover:-translate-y-0.5 transition">
              Taxi service in {c.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
