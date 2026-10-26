// Shared facts used across both sides of the site. Change a number here and it changes everywhere.

export const site = {
  connectionCall: 'https://sharpsightedphotos.sproutstudio.com/book/connection-call-booking',
  phoneDisplay: '(214) 233-5338',
  phoneHref: 'tel:2142335338',
  email: 'dean@sharpsightedstudio.com',
  tagline: 'Stay Sharp. Stay Seen. Stay Human.',
  foundingDeadline: 'December 25, 2026',
  serviceArea: 'Denton and Dallas Fort Worth. Travel is free within 30 miles of Denton.',
  taxNote: 'Prices are before 8.25% Texas sales tax.',
  // Placeholder until the headshot booking page exists. It points to the Connection Call booking for now.
  headshotBooking: 'https://sharpsightedphotos.sproutstudio.com/book/connection-call-booking',
};

// HARD RULE: every call to action uses the exact words below, everywhere it appears.
// Nav, hero, section, closing, footer, and every page. Never retype a CTA by hand. Import it from here.
// The headshots page is the one approved exception: its main CTA is "Book a Session",
// and its Connection Call offer reads "Start with a Connection Call", below the fold only.
export const cta = {
  call: 'Book a Connection Call',
  gift: 'Give a Gift Session',
  packages: 'See the packages',
  headshotsBook: 'Book a Session',
  headshotsCall: 'Start with a Connection Call',
} as const;

export const giftRequestLink =
  'mailto:dean@sharpsightedstudio.com?subject=Gift%20Session%20Request&body=' +
  encodeURIComponent('Your name:\nRecipient name:\nThe Verse or The Story:\nPrinted ticket or digital ticket:\nAnything I should know about them:\n');
