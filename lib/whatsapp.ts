export const PHONE='919023556476';
export function bookingUrl(data:Record<string,string>){const text=`NATARAJ.YATRA Booking Request\nName: ${data.name||''}\nPhone: ${data.phone||''}\nPickup: ${data.pickup||''}\nDrop: ${data.drop||''}\nService: ${data.service||''}\nDate: ${data.date||''}`;return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`}

export function routeUrl(a:string,b:string){return `https://wa.me/${PHONE}?text=${encodeURIComponent(`Hello NATARAJ.YATRA, I need a taxi from ${a} to ${b}. Please share the fare and available cars.`)}`}
