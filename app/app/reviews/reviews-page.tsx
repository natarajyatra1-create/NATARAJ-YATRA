import type {Metadata} from 'next';
import Header from '@/components/Header';
import ContactStrip from '@/components/ContactStrip';
import Ld from '@/components/Ld';
import {breadcrumbLd} from '@/lib/seo';
import {PHONE, PHONE_DISPLAY} from '@/lib/site';
import {GOOGLE_REVIEW_URL, reviews} from '@/lib/reviews';

const title = 'Customer Reviews – NATARAJ.YATRA Taxi Service in Junagadh & Gujarat';
const description = 'Read what customers say about NATARAJ.YATRA taxi and cab service in Junagadh, Somnath, Dwarka, Rajkot, Ahmedabad and all Gujarat. Share your own experience too.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {canonical: '/reviews'},
  openGraph: {title, description, url: '/reviews', siteName: 'NATARAJ.YATRA', type: 'website', locale: 'en_IN'}
};

const googleUrl = GOOGLE_REVIEW_URL || 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('nataraj.yatra bhavnath');
const feedbackUrl = `https://wa.me/${PHONE}?text=` + encodeURIComponent('Hello NATARAJ.YATRA, I want to share my feedback about my trip:\nName:\nTrip (from – to):\nMy review:');

const stars = (n: number) => '★'.repeat(n) + '☆'.repeat(5 - n);

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <Ld data={breadcrumbLd([{name: 'Home', path: '/'}, {name: 'Customer Reviews', path: '/reviews'}])} />
      <main>
        <section className="gradient text-white">
          <div className="container py-14 md:py-16">
            <div className="text-orange-300 font-black tracking-widest text-sm">NATARAJ.YATRA · CUSTOMER REVIEWS</div>
            <h1 className="text-4xl md:text-5xl font-black mt-3">What Our Customers Say</h1>
            <p className="text-white/80 text-lg mt-5 max-w-2xl">
              Real feedback from families, pilgrims and travellers who rode with us across Gujarat. Your honest review helps other travellers choose with confidence.
            </p>
            <div className="flex gap-3 mt-7 flex-wrap">
              <a href={googleUrl} target="_blank" rel="noopener" className="btn btn-orange">Write a Google Review</a>
              <a href={feedbackUrl} target="_blank" rel="noopener" className="btn bg-white text-[#0b1f4d]">Send Feedback on WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="container py-14">
          {reviews.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <article key={i} className="card p-6">
                  <div className="text-[#f47b20] text-xl tracking-widest" aria-label={`${r.rating} out of 5 stars`}>{stars(r.rating)}</div>
                  <p className="text-slate-700 leading-7 mt-3">“{r.text}”</p>
                  <div className="mt-4 font-black text-[#0b1f4d]">{r.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{[r.place, r.date].filter(Boolean).join(' · ')}</div>
                </article>
              ))}
            </div>
          ) : (
            <div className="card p-8 md:p-10 max-w-3xl mx-auto text-center">
              <div className="text-4xl">⭐</div>
              <h2 className="text-2xl md:text-3xl font-black text-[#0b1f4d] mt-3">Customer reviews will appear here</h2>
              <p className="text-slate-600 leading-7 mt-3">
                Travelled with NATARAJ.YATRA? Tell us how your trip was. Your review will be shown on this page and helps other families plan their yatra.
              </p>
            </div>
          )}
        </section>

        <section className="bg-white border-y border-slate-200 py-14">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-black text-[#0b1f4d]">Share your experience</h2>
            <p className="text-slate-600 leading-7 mt-3">
              It takes less than a minute. Review us on Google, or send your feedback on WhatsApp or call {PHONE_DISPLAY}.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap justify-center">
              <a href={googleUrl} target="_blank" rel="noopener" className="btn btn-orange">Review on Google</a>
              <a href={feedbackUrl} target="_blank" rel="noopener" className="btn btn-dark">WhatsApp Feedback</a>
              <a href={`tel:+${PHONE}`} className="btn bg-white text-[#0b1f4d] border border-slate-300">Call {PHONE_DISPLAY}</a>
            </div>
          </div>
        </section>
      </main>
      <section className="bg-[linear-gradient(180deg,#e9f2fb_0%,#fde8cf_100%)] pb-10 pt-2" id="contact"><div className="container"><ContactStrip /></div></section>
    </>
  );
}
