// Short, factual descriptions for places (shown on city pages). Distances are approximate.
// Places not listed here fall back to a simple line automatically.
export const placeInfo: Record<string, string> = {
  // Junagadh
  'Girnar': 'Girnar is Gujarat’s most sacred hill, with about 10,000 stone steps leading to Jain and Hindu temples, including the Ambaji and Dattatreya shrines. The base (Girnar Taleti) is about 5 km from Junagadh city. Plan 4–6 hours for the climb and start early in the morning.',
  'Uparkot Fort': 'Uparkot is an ancient hill fort in the middle of Junagadh city, with old Buddhist caves, the Adi Kadi Vav and Navghan Kuvo step-wells, and large historic cannons. Allow 1–2 hours for a visit.',
  'Mahabat Maqbara': 'Mahabat Maqbara is a 19th-century mausoleum in Junagadh known for its detailed carving, silver-plated doors and spiral minarets. It is a short taxi ride from the main market and railway station.',
  'Sakkarbaug Zoo': 'Sakkarbaug Zoo is one of India’s oldest zoos, about 5 km from Junagadh city, and is well known for its Asiatic lions. Check opening days and timings before you go.',
  'Damodar Kund': 'Damodar Kund is a sacred pond at the foot of Girnar, close to the Damodar Rai temple, and is a popular stop for pilgrims before or after the Girnar climb.',
  'Ashoka Rock Edicts': 'The Ashoka Rock Edicts are 14 inscriptions of Emperor Ashoka (about 250 BCE) carved on a large boulder near Girnar, a few km from Junagadh city. It is a quick stop that is easy to combine with Girnar.',
  'Bhavnath Mahadev Temple': 'Bhavnath Mahadev Temple stands at the base of Girnar and is best known for the Mahashivratri fair, when sadhus from across India gather here. It is the usual starting point for Girnar pilgrimage.',
  'Junagadh Railway Station': 'Junagadh Junction is the main railway station for visitors to Girnar, Bhavnath and Gir. NATARAJ.YATRA offers station pickup and drop to Bhavnath, Girnar Taleti and hotels in the city.',

  // Somnath
  'Somnath Temple': 'Somnath Temple, on the Arabian Sea coast, is the first of the twelve Jyotirlingas. The present temple was rebuilt in the 1950s in the Chalukya style. Evening aarti and the sound and light show are popular. Phones and cameras are usually not allowed inside, so check at the gate.',
  'Triveni Sangam': 'Triveni Sangam is the meeting point of the Hiran, Kapila and Saraswati rivers near the sea, a short drive from Somnath Temple. Pilgrims take a holy dip and perform rituals here.',
  'Bhalka Tirth': 'Bhalka Tirth, a few km from Somnath, is the place where Lord Krishna is believed to have been struck by a hunter’s arrow. It is an important stop on the Somnath yatra.',
  'Gita Mandir': 'Gita Mandir is a peaceful temple in the Prabhas Patan area near Triveni Sangam, known for verses of the Bhagavad Gita inscribed on its walls.',
  'Somnath Beach': 'Somnath Beach is right next to the temple and is a quiet place to sit after darshan, especially in the evening.',
  'Prabhas Patan': 'Prabhas Patan is the ancient name of the Somnath area. Old temples, a museum and several pilgrimage sites are close together here, so it is easy to cover them in one half-day taxi trip.',

  // Dwarka
  'Dwarkadhish Temple': 'Dwarkadhish Temple (Jagat Mandir) is the main temple of Lord Krishna and one of the Char Dham. Its five-storey tower rises on 72 pillars, and the flag on top is changed several times a day. Mornings are less crowded.',
  'Gomti Ghat': 'Gomti Ghat is where the Gomti river meets the sea, just beside Dwarkadhish Temple. Pilgrims bathe here before darshan, and the steps are a nice place to see the evening sky.',
  'Rukmini Devi Temple': 'Rukmini Devi Temple, about 2 km from the main temple, is a carved temple dedicated to Rukmini, Krishna’s queen, and is usually visited as part of the Dwarka circuit.',
  'Beyt Dwarka': 'Beyt Dwarka is an island temple town near Okha, about 30 km from Dwarka. You can reach it by the Sudarshan Setu bridge or by ferry from Okha, so plan a half day for the trip.',
  'Nageshwar Jyotirlinga': 'Nageshwar Jyotirlinga is one of the twelve Jyotirlingas, about 17 km from Dwarka, and is usually visited on the same day trip as Dwarka.',
  'Shivrajpur Beach': 'Shivrajpur Beach, around 12 km from Dwarka, is known for its clean sand and blue water and is one of Gujarat’s best-known beaches for a relaxed evening.'
};

export function placeText(place: string, city: string): string {
  return placeInfo[place] ?? `${place} is one of the places visitors can include in a ${city} sightseeing plan. Ask us on WhatsApp for the best timing and a taxi quote.`;
}
