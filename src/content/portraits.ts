// For You side content. Founding rates run through December 25, 2026.

export const packages = [
  {
    name: 'The Verse',
    price: '$900',
    image: { src: '/images/web/verse.webp', width: 1024, height: 1024, alt: 'A woman in a wool coat stands on a cobblestone street' },
    count: '10 unique images',
    includes: [
      'Up to 2 hours at one location',
      '2 outfits',
      '10 unique, hand-edited images',
      'A framed triptych of three 8.5×11 prints',
      '10 story cards, every image as a 4×6 print in a box',
      'Online gallery with downloads',
      'Delivery in 7 days',
    ],
  },
  {
    name: 'The Story',
    price: '$1,700',
    image: { src: '/images/web/story.webp', width: 1400, height: 933, alt: 'Two friends bump fists in front of a glowing fireplace' },
    count: '20 unique images',
    includes: [
      'Up to 6 hours across multiple locations',
      'Unlimited outfits',
      '20 unique, hand-edited images',
      'A framed 13×19 hero print and four framed 8.5×11 prints',
      '20 story cards in a box',
      'A private, in-person reveal',
      'Delivery in 14 days',
    ],
  },
  {
    name: 'The Epic',
    price: '$4,000',
    image: { src: '/images/web/discovery.webp', width: 1024, height: 1024, alt: 'A couple talks in leather chairs beside a stone fireplace' },
    count: '30 unique images and a short film',
    includes: [
      'A full day across as many locations as your story needs',
      '30 unique, hand-edited images',
      'A 60 to 90 second story film',
      'A second shooter',
      'A museum 13×19 anchor piece, four framed 8.5×11 prints, and an Heirloom Book',
      '30 story cards in a box',
      'A private, in-person reveal',
    ],
  },
];

export const hallway = [
  { src: '/images/web/verse.webp', width: 1024, height: 1024, shape: 'p', alt: 'A woman in a wool coat stands on a cobblestone street', title: 'Story portrait', line: 'The Verse' },
  { src: '/images/web/discovery.webp', width: 1024, height: 1024, shape: 'l', alt: 'A couple talks in leather chairs beside a stone fireplace', title: 'Story portrait', line: 'The Story' },
  { src: '/images/web/portrait4.webp', width: 1600, height: 1060, shape: 'l', alt: 'A couple smiles on a beach next to a pier', title: 'Story portrait', line: 'The Verse' },
  { src: '/images/web/portrait3.webp', width: 1143, height: 1600, shape: 'p', alt: 'A man kneels on a white backdrop with his black dog', title: 'Story portrait', line: 'The Verse' },
  { src: '/images/web/portrait1.webp', width: 1600, height: 1067, shape: 'l', alt: 'A man sits at a table at night with a drink in hand', title: 'Story portrait', line: 'The Story' },
  { src: '/images/web/hero.webp', width: 1600, height: 1236, shape: 'l', alt: 'A black and white portrait of a man in glasses and a cap', title: 'Story portrait', line: 'The Story' },
  { src: '/images/web/portrait2.webp', width: 1143, height: 1600, shape: 'p', alt: 'A man in a dark suit and teal tie on a black backdrop', title: 'Portrait', line: 'Studio' },
  { src: '/images/web/story.webp', width: 1400, height: 933, shape: 'l', alt: 'Two friends bump fists in front of a glowing fireplace', title: 'Story portrait', line: 'The Story' },
] as const;

export const portraitFaq = [
  { q: 'What if my story needs an odd location or an odd time?', a: 'Then we are a good match. If the place or the hour matters to your story, we make it happen.' },
  { q: 'I hate being photographed. Will this work for me?', a: "A lot of people feel that way. Instead of asking you to pose, I have you do your thing, whatever that is, and I capture you being you. I may direct small movements, but you won't be twisted into a pretzel unless you want to be. The Discovery Hour also helps me find out what made past sessions feel uncomfortable." },
  { q: 'I need accommodations. Will you follow through?', a: 'Yes. Tell me what you need during the Discovery Hour, and I design the session around it.' },
  { q: "I'm loud, bold, and kind of a lot. Is that okay?", a: 'Absolutely. Bring all of it. My job is to capture you, not sand you down.' },
  { q: 'Can I bring someone with me?', a: 'Yes. If a friend, partner, or support person helps, bring them. Please limit this to one person.' },
  { q: 'What if I need to cancel or reschedule?', a: 'You can cancel within 3 business days of booking for a full refund. After that, your booking fee is non-refundable. With 14 or more days of notice, the rest of your deposit is refunded. With less notice, it moves to a new date within 90 days. Weather never costs you anything.' },
  { q: 'Do you photograph families, weddings, or newborns?', a: 'Traditional family, wedding, and newborn work is not my focus. I am happy to refer you to someone who specializes in it. My heart is with individuals who want to go deeper.' },
];
