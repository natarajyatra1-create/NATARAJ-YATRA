import './globals.css';import type {Metadata} from 'next';import type {ReactNode} from 'react';import {SITE_URL} from '@/lib/site';import SiteFooter from '@/components/SiteFooter';
const title='Taxi Service in Junagadh & All Gujarat | Cab, Airport & Outstation | NATARAJ.YATRA';
const description='Book taxi service in Junagadh, Somnath, Dwarka, Rajkot, Ahmedabad & all Gujarat: airport pickup & drop, one way and outstation cabs. Call 90235 56476, 24/7.';
export const metadata:Metadata={metadataBase:new URL(SITE_URL),title,description,alternates:{canonical:'/'},openGraph:{title,description,url:'/',siteName:'NATARAJ.YATRA',type:'website',locale:'en_IN',images:[{url:'/scene.jpg'}]},verification:{google:'NrlbYegKBfIGkk8UXWjxS2tS46yHIzvejZWO60RqpQg'}};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en-IN"><body>{children}<SiteFooter/></body></html>}
