import {notFound} from 'next/navigation';import {cities,getCity} from '@/lib/cities';import CityPage from '@/components/CityPage';import type {Metadata} from 'next';
export function generateStaticParams(){return cities.map(c=>({slug:c.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const c=getCity(slug);if(!c)return {};return {title:`Taxi Service in ${c.name} | NATARAJ.YATRA`,description:`Book taxi in ${c.name}, Gujarat for local sightseeing, outstation trips, airport transfers and tours. Call 90235 56476.`}}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const c=getCity(slug);if(!c)notFound();return <CityPage city={c!}/>} 
