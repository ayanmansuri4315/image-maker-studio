import { StudioPhoto, ServiceItem, PackageItem, StudioInfo, InstagramReel } from '../types';

export const studioInfo: StudioInfo = {
  brandName: "IMAGES MAKER STUDIO",
  brandSub: "PHOTOGRAPHY STUDIO",
  photographerName: "Images Maker Studio",
  tagline: "Moments that Last a Lifetime",
  bioHeadline: "About Our Studio",
  bioShort: "We are Images Maker Studio, a dedicated wedding & portrait photography studio based in Sidhpur, Gujarat, capturing heartfelt, unscripted moments with artistry and warmth.",
  bioFull: [
    "We believe in capturing real, raw, and beautiful moments that you'll cherish forever. Our approach is natural, unobtrusive, and focused on genuine human emotion.",
    "Over the past decade, we've had the honor of documenting sacred rituals, tearful glances, joyful celebration under starlit canopies, and intimate family milestones.",
    "Our work blends modern editorial composition with the timeless nostalgia of analog warmth and heirloom-quality craft."
  ],
  philosophyHeadline: "Our Philosophy",
  philosophyText: "It's not just about taking pictures. It's about telling your story.",
  phone: "+91 96380 76661",
  email: "paintervishal1234@gmail.com",
  instagram: "https://www.instagram.com/_image_maker__studio/",
  instagramHandle: "_IMAGE_MAKER_ STUDIO",
  location: "Sidhpur, Gujarat",
  address: "G-7, Near Shifa Hospital, Royal Complex, Sidhpur, Gujarat 384151",
  businessHours: "Mon – Sat: 9:00 AM – 7:00 PM | Sunday: Closed",
  whatsappNumber: "919638076661",
  whatsappDefaultMsg: "Hello Images Maker Studio, I would like to enquire about your photography services.",
  mapEmbedUrl: "https://maps.google.com/maps?q=G-7,+Near+Shifa+Hospital,+Royal+Complex,+Sidhpur,+Gujarat+384151&t=&z=16&ie=UTF8&iwloc=&output=embed",
  stats: [
    { label: "10+ YEARS", value: "10+", sublabel: "YEARS EXPERIENCE" },
    { label: "250+ WEDDINGS", value: "250+", sublabel: "STORIES CAPTURED" },
    { label: "20+ AWARDS", value: "20+", sublabel: "AWARDS WON" }
  ]
};

// Hero Photography Image
export const heroPhoto = {
  url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85",
  title: "Golden Hour Romance",
  subtitle: "Moments that Last a Lifetime"
};

// Centralized Home Page Collage: 24 carefully curated photographs
export const homePhotos: StudioPhoto[] = [
  // Row 1 (5 Photos)
  {
    id: "home-1",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    title: "Groom in Classic Tuxedo",
    category: "wedding",
    caption: "The quiet anticipation before I do",
    rotation: "-2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-2",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    title: "Reception Cheers & Celebration",
    category: "events",
    caption: "A toast to forever",
    rotation: "1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-3",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80",
    title: "Intimate Whisper",
    category: "wedding",
    caption: "Close embraced love",
    rotation: "-1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-4",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80",
    title: "Sunset Stroll in the Hills",
    category: "pre-wedding",
    caption: "Golden hour magic",
    rotation: "2deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "home-5",
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
    title: "Bridal Party Laughter",
    category: "wedding",
    caption: "Lifelong best friends",
    rotation: "-1deg",
    tapeType: "top",
    aspect: "portrait"
  },

  // Row 2 (5 Photos)
  {
    id: "home-6",
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
    title: "Tender Forehead Kiss",
    category: "wedding",
    caption: "Quiet devotion",
    rotation: "1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-7",
    url: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=800&q=80",
    title: "Vineyard Walk",
    category: "pre-wedding",
    caption: "Hand in hand through Napa",
    rotation: "-2.5deg",
    tapeType: "left-corner",
    aspect: "portrait"
  },
  {
    id: "home-8",
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80",
    title: "First Look Tears",
    category: "wedding",
    caption: "When words aren't needed",
    rotation: "0.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-9",
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80",
    title: "Golden Hour Glow",
    category: "pre-wedding",
    caption: "Warm Californian light",
    rotation: "-1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-10",
    url: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=800&q=80",
    title: "Candid Sunset Smile",
    category: "wedding",
    caption: "Pure unscripted happiness",
    rotation: "2deg",
    tapeType: "corner",
    aspect: "portrait"
  },

  // Row 3 (5 Photos)
  {
    id: "home-11",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    title: "Glasshouse Ceremony",
    category: "events",
    caption: "Botanical sanctuary vows",
    rotation: "-1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-12",
    url: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&q=80",
    title: "Meadow Embrace",
    category: "portraits",
    caption: "Lost in each other",
    rotation: "1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-13",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80",
    title: "First Dance under Chandeliers",
    category: "wedding",
    caption: "Spinning into forever",
    rotation: "-2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-14",
    url: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=800&q=80",
    title: "Baby Sleeping in Wool",
    category: "newborn",
    caption: "Gentle dreaming",
    rotation: "0deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-15",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    title: "Editorial Hat Portrait",
    category: "fashion",
    caption: "Cinematic light & shadow",
    rotation: "-1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },

  // Row 4 (5 Photos)
  {
    id: "home-16",
    url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
    title: "Bohemian Veil Detail",
    category: "fashion",
    caption: "Lace details in natural breeze",
    rotation: "2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-17",
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    title: "Newborn Nestled in Palms",
    category: "newborn",
    caption: "Tiny hands & big miracles",
    rotation: "-2deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "home-18",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
    title: "Aisle Exit Confetti",
    category: "wedding",
    caption: "Just married joy",
    rotation: "1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-19",
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80",
    title: "Starlit Dinner Tablescape",
    category: "events",
    caption: "Warm ambiance & gathering",
    rotation: "-1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-20",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    title: "Evening Ballroom Dance",
    category: "events",
    caption: "Lights down low",
    rotation: "2.5deg",
    tapeType: "top",
    aspect: "portrait"
  },

  // Row 5 (4 Photos)
  {
    id: "home-21",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    title: "Cathedral Archways",
    category: "wedding",
    caption: "Historic stone vows",
    rotation: "-2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-22",
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
    title: "Bridesmaids in Silk",
    category: "wedding",
    caption: "Morning preparations",
    rotation: "1.5deg",
    tapeType: "left-corner",
    aspect: "portrait"
  },
  {
    id: "home-23",
    url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=800&q=80",
    title: "Warm Beach Sunset Vows",
    category: "pre-wedding",
    caption: "Waves gently rolling in",
    rotation: "-1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "home-24",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
    title: "Intimate Sunset Portrait",
    category: "portraits",
    caption: "Golden horizon memories",
    rotation: "2deg",
    tapeType: "corner",
    aspect: "portrait"
  }
];

// Curated Category Photos for "Our Work" (Masonry / Editorial Gallery)
export const weddingPhotos: StudioPhoto[] = [
  {
    id: "w-1",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    title: "Meadow Vows at Twilight",
    category: "wedding",
    caption: "Serenade in Santa Barbara",
    rotation: "-1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "w-2",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    title: "The Archway Embrace",
    category: "wedding",
    caption: "Framed in white florals",
    rotation: "1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "w-3",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    title: "Stone Courtyard First Look",
    category: "wedding",
    caption: "Heartbeats racing",
    rotation: "-2deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "w-4",
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=85",
    title: "Intimate Whisper",
    category: "wedding",
    caption: "Cherished quiet moments",
    rotation: "1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "w-5",
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=85",
    title: "Bridal Suite Moments",
    category: "wedding",
    caption: "Morning stillness",
    rotation: "-1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "w-6",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=1200&q=85",
    title: "First Dance Glow",
    category: "wedding",
    caption: "Under glowing fairy lights",
    rotation: "2deg",
    tapeType: "top",
    aspect: "portrait"
  }
];

export const preWeddingPhotos: StudioPhoto[] = [
  {
    id: "pw-1",
    url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1200&q=85",
    title: "Coastal Cliffside Romance",
    category: "pre-wedding",
    caption: "Pacific Coast Highway sunset",
    rotation: "-1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "pw-2",
    url: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=85",
    title: "Golden Hour in Napa",
    category: "pre-wedding",
    caption: "Vineyard hills at dusk",
    rotation: "2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "pw-3",
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=85",
    title: "Warm Embrace on Dunes",
    category: "pre-wedding",
    caption: "Soft wind and golden light",
    rotation: "-2deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "pw-4",
    url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85",
    title: "Oceanfront Walk",
    category: "pre-wedding",
    caption: "Barefoot in Malibu",
    rotation: "1deg",
    tapeType: "top",
    aspect: "portrait"
  }
];

export const newbornPhotos: StudioPhoto[] = [
  {
    id: "nb-1",
    url: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=85",
    title: "Sleeping Slumber in Knit Cap",
    category: "newborn",
    caption: "Pure innocence at 14 days old",
    rotation: "-1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "nb-2",
    url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=85",
    title: "Mother's Warm Embrace",
    category: "newborn",
    caption: "Skin to skin warmth",
    rotation: "2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "nb-3",
    url: "https://images.unsplash.com/photo-1544126592-807ade215a0f?auto=format&fit=crop&w=1200&q=85",
    title: "Tiny Toes & Soft Blankets",
    category: "newborn",
    caption: "The smallest details",
    rotation: "-1.5deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "nb-4",
    url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85",
    title: "Nursery Sunlight",
    category: "newborn",
    caption: "Peaceful morning light",
    rotation: "1deg",
    tapeType: "top",
    aspect: "portrait"
  }
];

export const fashionPhotos: StudioPhoto[] = [
  {
    id: "fsh-1",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    title: "Modern Muse Editorial",
    category: "fashion",
    caption: "Chiaroscuro studio styling",
    rotation: "-2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "fsh-2",
    url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1200&q=85",
    title: "Bohemian Couture",
    category: "fashion",
    caption: "Natural textures & linen",
    rotation: "1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "fsh-3",
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85",
    title: "Desert Sunset Silhouette",
    category: "fashion",
    caption: "Silk flowing in the wind",
    rotation: "-1deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "fsh-4",
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=85",
    title: "High Fashion Monochrome",
    category: "fashion",
    caption: "Subtle film grain study",
    rotation: "2deg",
    tapeType: "top",
    aspect: "portrait"
  }
];

export const eventPhotos: StudioPhoto[] = [
  {
    id: "ev-1",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    title: "Grand Gala Dinner",
    category: "events",
    caption: "Candlelit luxury",
    rotation: "-1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "ev-2",
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85",
    title: "Starlit Garden Party",
    category: "events",
    caption: "Festive laughter & drinks",
    rotation: "2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "ev-3",
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=85",
    title: "Anniversary Celebration",
    category: "events",
    caption: "Toast to five decades of love",
    rotation: "-2deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "ev-4",
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=85",
    title: "Intimate Dinner Soirée",
    category: "events",
    caption: "Warm ambiance & fine dining",
    rotation: "1deg",
    tapeType: "top",
    aspect: "portrait"
  }
];

export const portraitPhotos: StudioPhoto[] = [
  {
    id: "pt-1",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85",
    title: "Natural Light Editorial",
    category: "portraits",
    caption: "Expressive gaze",
    rotation: "-1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "pt-2",
    url: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=1200&q=85",
    title: "Golden Hour Glow",
    category: "portraits",
    caption: "Warm autumn afternoon",
    rotation: "2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "pt-3",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
    title: "Artist Studio Portrait",
    category: "portraits",
    caption: "Craftsman in focus",
    rotation: "-1deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "pt-4",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    title: "Maternity Sunset",
    category: "portraits",
    caption: "Anticipating new life",
    rotation: "1.5deg",
    tapeType: "top",
    aspect: "portrait"
  }
];

export const anniversaryPhotos: StudioPhoto[] = [
  {
    id: "ann-1",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
    title: "Ten Years Together in Florence",
    category: "anniversary",
    caption: "A decade of laughter, travel, and unconditional love",
    rotation: "-1.5deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "ann-2",
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85",
    title: "Golden Hour Stroll in Venice",
    category: "anniversary",
    caption: "Holding hands just like day one",
    rotation: "2deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "ann-3",
    url: "https://images.unsplash.com/photo-1545232979-fbf68fe9b1af?auto=format&fit=crop&w=1200&q=85",
    title: "Intimate Dinner Celebration",
    category: "anniversary",
    caption: "Revisiting where it all began",
    rotation: "-2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "ann-4",
    url: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1200&q=85",
    title: "Pacific Coast Anniversary Sunset",
    category: "anniversary",
    caption: "Endless horizons together",
    rotation: "1.5deg",
    tapeType: "top",
    aspect: "portrait"
  }
];

export const lifestylePhotos: StudioPhoto[] = [
  {
    id: "ls-1",
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=85",
    title: "Sunday Morning in the Kitchen",
    category: "lifestyle",
    caption: "Coffee brewing, record spinning, natural morning light",
    rotation: "-1deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "ls-2",
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=85",
    title: "Garden Gathering with Friends",
    category: "lifestyle",
    caption: "Warm afternoon conversations under olive trees",
    rotation: "2deg",
    tapeType: "corner",
    aspect: "portrait"
  },
  {
    id: "ls-3",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=85",
    title: "Ceramic Studio Craftsmanship",
    category: "lifestyle",
    caption: "Hands at work shaping clay",
    rotation: "-2deg",
    tapeType: "top",
    aspect: "portrait"
  },
  {
    id: "ls-4",
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85",
    title: "Coastal Summer Afternoon",
    category: "lifestyle",
    caption: "Salty breeze and sun-drenched moments",
    rotation: "1.5deg",
    tapeType: "top",
    aspect: "portrait"
  }
];

// All Combined Portfolio Photos
export const allPortfolioPhotos: StudioPhoto[] = [
  ...weddingPhotos,
  ...preWeddingPhotos,
  ...anniversaryPhotos,
  ...newbornPhotos,
  ...fashionPhotos,
  ...eventPhotos,
  ...portraitPhotos,
  ...lifestylePhotos
];

// Services Data matching all 8 categories
export const servicesData: ServiceItem[] = [
  {
    id: "wedding",
    title: "WEDDING PHOTOGRAPHY",
    categorySlug: "wedding",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Timeless, cinematic documentation of your wedding day with high emotional resonance.",
    fullDescription: "From early morning preparations and heartfelt first looks to tears during the vows and lively dance floor moments, our wedding coverage captures the full emotional tapestry of your celebration.",
    features: [
      "Full day or custom coverage",
      "Two professional photographers",
      "High-resolution digital gallery with print release",
      "Custom archival heirloom wedding album"
    ],
    startingPrice: "$2,800"
  },
  {
    id: "pre-wedding",
    title: "PRE-WEDDING & ENGAGEMENT",
    categorySlug: "pre-wedding",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Intimate engagement and destination couple sessions in breathtaking natural landscapes.",
    fullDescription: "Celebrate your engagement with a relaxed, editorial couple's session at sunset. Perfect for save-the-dates, guest books, or simply freezing this tender chapter in time.",
    features: [
      "Up to 3 hours on location",
      "Outfit consultation & location scouting",
      "50+ hand-edited fine art images",
      "Online sharing gallery"
    ],
    startingPrice: "$950"
  },
  {
    id: "anniversary",
    title: "ANNIVERSARY STORIES",
    categorySlug: "anniversary",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Celebrate milestones, renew your vows, and preserve your enduring love story.",
    fullDescription: "Honoring the journey you have traveled together. Whether it's your first year or your golden jubilee, we document the depth of your shared history.",
    features: [
      "2-3 hours intimate on-location session",
      "Fine-art heirloom photo prints included",
      "Wardrobe and creative guidance",
      "High-res private digital gallery"
    ],
    startingPrice: "$1,100"
  },
  {
    id: "newborn",
    title: "NEWBORN & MATERNITY",
    categorySlug: "newborn",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Gentle, organic studio and in-home newborn sessions capturing your baby's first precious days.",
    fullDescription: "Patient, safe, and tender portraits of your newborn baby and immediate family in the comfort of your home or our natural light studio.",
    features: [
      "2-3 hours relaxed session with feeding breaks",
      "Studio props, wraps & organic blankets provided",
      "Parent & sibling portraits included",
      "Private viewing gallery"
    ],
    startingPrice: "$750"
  },
  {
    id: "fashion",
    title: "FASHION & EDITORIAL",
    categorySlug: "fashion",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    shortDescription: "High-concept lookbooks, editorial campaigns, and designer collections with artistic flair.",
    fullDescription: "Elevating apparel and aesthetic brands through striking lighting, intentional art direction, and sophisticated visual storytelling.",
    features: [
      "Half-day or full-day studio/location shoots",
      "Moodboard & creative direction support",
      "Commercial usage license included",
      "Retouched high-res master files"
    ],
    startingPrice: "$1,800"
  },
  {
    id: "portraits",
    title: "PORTRAIT SESSIONS",
    categorySlug: "portraits",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Fine-art personal branding, artist portraits, and modern editorial headshots with soul.",
    fullDescription: "Authentic, character-rich portraits that reflect who you are. Designed for artists, founders, creative professionals, and individuals.",
    features: [
      "60-90 minute session",
      "Multiple wardrobe changes",
      "25 beautifully retouched high-res images",
      "Digital gallery & print release"
    ],
    startingPrice: "$650"
  },
  {
    id: "event",
    title: "EVENT PHOTOGRAPHY",
    categorySlug: "events",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Sophisticated coverage of galas, anniversaries, corporate summits, and intimate dinners.",
    fullDescription: "Discreet and polished event photography that highlights your guests, keynote moments, venue styling, and atmosphere without interruption.",
    features: [
      "Hourly coverage options",
      "Fast 48-hour preview turnaround",
      "Full digital archive with download rights",
      "Multi-photographer option for large venues"
    ],
    startingPrice: "$1,200"
  },
  {
    id: "lifestyle",
    title: "LIFESTYLE & INTERIORS",
    categorySlug: "lifestyle",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80",
    shortDescription: "Documenting authentic everyday rituals, warm gatherings, and architectural spaces.",
    fullDescription: "Rich, atmospheric visual stories for architectural firms, interior designers, culinary artists, and families who love natural in-home aesthetics.",
    features: [
      "Natural-light on-location shoot",
      "Detailed styling & prop arrangement",
      "Commercial & personal licensing",
      "Curated digital archive"
    ],
    startingPrice: "$900"
  }
];

// Packages Data matching the reference (ESSENTIAL, SIGNATURE, PREMIUM, CUSTOM)
export const packagesData: PackageItem[] = [
  {
    id: "essential",
    name: "ESSENTIAL",
    subtitle: "TIMELESS INITIATION",
    price: "$1,200",
    duration: "4 Hours Coverage",
    deliverables: "Online Gallery + High-Res Downloads",
    features: [
      "4 Hours Dedicated Coverage",
      "1 Lead Photographer",
      "Online Private Gallery",
      "150+ Hand-Edited High Resolution Images",
      "Personal Printing Rights",
      "Sneak Peek Preview within 72 Hours"
    ]
  },
  {
    id: "signature",
    name: "SIGNATURE",
    subtitle: "THE EDITORIAL STORY",
    price: "$2,400",
    popular: true,
    duration: "8 Hours Coverage",
    deliverables: "Engagement Session + Online Gallery",
    features: [
      "8 Hours Comprehensive Coverage",
      "2 Professional Photographers",
      "Complimentary Pre-Wedding Engagement Shoot",
      "Online Gallery with Infinite Cloud Storage",
      "400+ Hand-Retouched Fine Art Images",
      "Full Print Release & USB Keepsake Box",
      "Priority 3-Week Final Delivery"
    ]
  },
  {
    id: "premium",
    name: "PREMIUM",
    subtitle: "THE HEIRLOOM MASTERPIECE",
    price: "$3,800",
    duration: "Full Day Coverage",
    deliverables: "2 Photographers + Handcrafted Linen Album",
    features: [
      "Full Day Uncapped Coverage (Up to 12 Hours)",
      "2 Lead Photographers + Lighting Assistant",
      "Destination or Local Engagement Session",
      "Handcrafted 12x12 Italian Linen Heirloom Album",
      "Two 8x8 Parent Gift Albums",
      "600+ Master Edited High-Resolution Files",
      "Drone Aerial Imagery (Venue Permitting)",
      "Lifetime Archival Vault Storage"
    ]
  },
  {
    id: "custom",
    name: "CUSTOM",
    subtitle: "BESPOKE COMMISSIONS",
    price: "Custom",
    duration: "Flexible Itinerary",
    deliverables: "Tailored to Your Exact Vision",
    features: [
      "Multi-Day Destination Wedding Coverage",
      "Worldwide Travel & Lodging Coordination",
      "Custom Fine-Art Print Packages & Framing",
      "Editorial Lookbooks & Rehearsal Dinner Coverage",
      "Private Studio Consultation & Concept Planning",
      "Direct Creative Art Direction & Itinerary Planning"
    ]
  }
];

// About Page Assets
export const aboutAssets = {
  portraitMain: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
  portraitSecondary: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
  portraitTertiary: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=600&q=80",
  philosophyCouple: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85"
};
