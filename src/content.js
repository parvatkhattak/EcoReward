// ─────────────────────────────────────────────
//  EcoReward — Central Content Configuration
//  Replace GOOGLE_FORM_LINK with your actual Google Form URL
// ─────────────────────────────────────────────

export const GOOGLE_FORM_LINK = "https://forms.gle/bBJHzBEYGvBbikUz9";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Rewards", href: "#rewards" },
  { label: "Leaderboard", href: "#leaderboard" },
];

export const HERO = {
  title: "EcoReward",
  tagline: "Turn Waste into Worth",
  description:
    "Join our campus sustainability movement. Schedule a free waste pickup, earn Eco Points, and redeem exciting green rewards — all while making our college a cleaner, greener place.",
  ctaLabel: "Request Pickup",
};

export const HOW_IT_WORKS = [
  {
    step: "01",
    icon: "📋",
    title: "Request Pickup",
    description:
      "Fill out our quick Google Form with your location, waste type and preferred pickup time.",
  },
  {
    step: "02",
    icon: "🚛",
    title: "Collector Picks Up Waste",
    description:
      "Our eco-volunteers arrive at your doorstep to collect the segregated organic waste.",
  },
  {
    step: "03",
    icon: "⭐",
    title: "Earn Eco Points",
    description:
      "Points are credited based on the weight and type of waste you contribute each week.",
  },
  {
    step: "04",
    icon: "🎁",
    title: "Redeem Rewards",
    description:
      "Exchange your Eco Points for compost, plants, seeds, organic manure, and more.",
  },
];

export const WASTE_TYPES = [
  { icon: "🍛", label: "Food Waste", color: "#e8f5e9" },
  { icon: "🌸", label: "Flower Waste", color: "#fce4ec" },
  { icon: "🥦", label: "Vegetable Waste", color: "#e8f5e9" },
  { icon: "🍎", label: "Fruit Waste", color: "#fff3e0" },
  { icon: "🌿", label: "Garden Waste", color: "#e0f2f1" },
];

export const REWARDS = [
  {
    icon: "🪣",
    title: "Compost",
    points: "200 pts",
    description: "Rich organic compost ready for home gardening and potting.",
    tag: "Most Popular",
  },
  {
    icon: "🌱",
    title: "Organic Manure",
    points: "350 pts",
    description: "Natural manure to boost soil fertility for your garden.",
    tag: null,
  },
  {
    icon: "🌿",
    title: "Plants",
    points: "500 pts",
    description: "Saplings of air-purifying and ornamental indoor plants.",
    tag: "New",
  },
  {
    icon: "🌾",
    title: "Seeds",
    points: "150 pts",
    description: "Packets of herb, vegetable and flower seeds to grow at home.",
    tag: null,
  },
  {
    icon: "♻️",
    title: "Eco Products",
    points: "750 pts",
    description: "Bamboo bottles, jute bags, and other sustainable lifestyle items.",
    tag: "Premium",
  },
];

export const LEADERBOARD = {
  categories: ["Restaurants", "Hotels", "Households", "Temples"],
  data: [
    {
      rank: 1,
      name: "Green Leaf Canteen",
      category: "Restaurants",
      points: 2840,
      badge: "🥇",
    },
    {
      rank: 2,
      name: "Sunrise Hotel",
      category: "Hotels",
      points: 2610,
      badge: "🥈",
    },
    {
      rank: 3,
      name: "Block-A Hostel",
      category: "Households",
      points: 2390,
      badge: "🥉",
    },
    {
      rank: 4,
      name: "Sri Ganesh Temple",
      category: "Temples",
      points: 2150,
      badge: "🌟",
    },
    {
      rank: 5,
      name: "Campus Café",
      category: "Restaurants",
      points: 1980,
      badge: "🌟",
    },
    {
      rank: 6,
      name: "Lotus Inn",
      category: "Hotels",
      points: 1760,
      badge: "🌟",
    },
    {
      rank: 7,
      name: "Faculty Quarters",
      category: "Households",
      points: 1540,
      badge: "🌟",
    },
    {
      rank: 8,
      name: "Saraswathi Kovil",
      category: "Temples",
      points: 1320,
      badge: "🌟",
    },
  ],
};

export const FOOTER = {
  collegeName: "Green Valley College of Engineering",
  tagline: "Committed to a sustainable tomorrow.",
  contact: {
    email: "ecoreward@greenvalley.edu",
    phone: "+91 98765 43210",
    address: "Campus Road, Eco Nagar, Tamil Nadu - 600001",
  },
  social: [
    { label: "Instagram", icon: "📸", href: "#" },
    { label: "Twitter / X", icon: "🐦", href: "#" },
    { label: "LinkedIn", icon: "💼", href: "#" },
    { label: "YouTube", icon: "▶️", href: "#" },
  ],
};
