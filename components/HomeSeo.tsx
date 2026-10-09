import Link from 'next/link';
import {cities} from '@/lib/cities';
import {faqLd, gujaratCity, homeFaq, taxiLd} from '@/lib/seo';
import {SITE_URL} from '@/lib/site';
import Ld from './Ld';

const services = [
  ['Local taxi service', 'Local cab for sightseeing, temples, shopping and meetings.'],
  ['Airport pickup & drop', 'Airport taxi booking across Gujarat, on time.'],
  ['Outstation cab booking', 'Outstation taxi service from Junagadh to every Gujarat city.'],
  ['One way taxi', 'Book one direction only on selected routes.'],
  ['Round trip taxi', 'Go and return with the same car and driver.'],
  ['Car rental with driver', 'Sedan, Ertiga / SUV and Innova Crysta with driver.'],
  ['Gujarat & India tour packages', 'Family, holiday and customised tour packages.'],
  ['Corporate & wedding travel', 'Staff transport and wedding transportation service.']
];

export default function HomeSeo() {
  return (
    <>
      <Ld data={taxiLd('NATARAJ.YATRA – All Gujarat Taxi & Cab Services', SITE_URL + '/', [gujaratCity('Junagadh'), ...cities.map(c => gujaratCity(c.name)), {'@type': 'State', name: 'Gujarat'}])} />
      <Ld data={faqLd(homeFaq)} />

      <section className="container py-14">
        <div className="text-xs font-black tracking-widest text-[#f47b20]">TAXI SERVICE IN GUJARAT</div>
        <h2 className="text-3xl font-black text-[#0b1f4d] mt-2">Taxi Service in Junagadh & All Over Gujarat</h2>
        <p className="text-slate-600 leading-8 mt-3 max-w-3xl">
          NATARAJ.YATRA is a Bhavnath, Junagadh based taxi and cab service for travellers across Gujarat. Book a local
          taxi, one way taxi, round trip taxi, airport pickup and drop, outstation cab or a car rental with driver by call
          or WhatsApp. We also arrange Gujarat tour packages, family tour packages, corporate travel and wedding
          transportation. Taxi booking is open 24/7.
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

      <section className="bg-white border-y border-slate-200 py-14">
        <div className="container">
          <h2 className="text-3xl font-black text-[#0b1f4d]">Cab Service in Every Gujarat City</h2>
          <div className="flex flex-wrap gap-3 mt-6">
            {cities.map(c => (
              <Link key={c.slug} href={`/city/${c.slug}`} className="card px-4 py-2 text-sm font-bold text-[#0b1f4d] hover:-translate-y-0.5 transition">
                Taxi service in {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-14 max-w-3xl">
        <div className="text-xs font-black tracking-widest text-[#f47b20]">FAQ</div>
        <h2 className="text-3xl font-black text-[#0b1f4d] mt-2">Taxi Booking – Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-3">
          {homeFaq.map(f => (
            <details key={f.q} className="card p-4">
              <summary className="font-black cursor-pointer text-[#0b1f4d]">{f.q}</summary>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
