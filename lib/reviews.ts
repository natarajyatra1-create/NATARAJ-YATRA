export type Review = {
  name: string;
  place?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  date?: string;
};

// IMPORTANT: add only REAL reviews from real customers here (copy them from Google or WhatsApp).
// Example of one entry (remove the // marks and put real details):
// {name: 'Ramesh Patel', place: 'Rajkot', rating: 5, text: 'Driver was on time and the car was very clean.', date: 'Oct 2026'},
export const reviews: Review[] = [];

// Optional: paste your Google "Write a review" link here (Google Business Profile > Ask for reviews > copy link).
// If this is empty, the button opens your business on Google Maps instead.
export const GOOGLE_REVIEW_URL = '';
