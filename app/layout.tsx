import './globals.css';import type {Metadata} from 'next';import type {ReactNode} from 'react';
export const metadata:Metadata={title:'NATARAJ.YATRA | All Gujarat Taxi & Cab Services',description:'Book taxis across Gujarat for local, airport, outstation, pilgrimage and tour travel. Call 90235 56476.'};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body>{children}</body></html>}
