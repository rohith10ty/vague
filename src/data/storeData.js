import shoeBoots from "../assets/shoe-boots.webp";
import shoeYellowAir from "../assets/shoe-yellow-air.webp";
import shoeBlueRetro from "../assets/shoe-blue-retro.webp";
import vagueWatch from "../assets/vague-watch.webp";
import vagueNecklace from "../assets/vague-necklace.webp";
import vagueSunglasses from "../assets/vague-sunglasses.webp";
import vagueHandbag from "../assets/vague-handbag.webp";
import vagueShoes from "../assets/vague-shoes.webp";
import vagueEarrings from "../assets/vague-earrings.webp";

export const categories = [
  {
    id: 1,
    number: "01",
    title: "Jewellery",
    image: vagueNecklace,
    accent: "#F0C020",
  },
  {
    id: 2,
    number: "02",
    title: "Handbags",
    image: vagueHandbag,
    accent: "#D02020",
  },
  {
    id: 3,
    number: "03",
    title: "Watches",
    image: vagueWatch,
    accent: "#1040C0",
  },
  {
    id: 4,
    number: "04",
    title: "Cosmetics",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=85",
    accent: "#F0C020",
  },
  {
    id: 5,
    number: "05",
    title: "Footwear",
    image: vagueShoes,
    accent: "#D02020",
  },
  {
    id: 6,
    number: "06",
    title: "Accessories",
    image: vagueSunglasses,
    accent: "#1040C0",
  },
];

export const products = [
  // JEWELLERY
  {
    id: 1,
    name: "Bauhaus Form Necklace",
    category: "Jewellery",
    price: 2499,
    oldPrice: 3299,
    rating: 4.9,
    badge: "Edition 01",
    image: vagueNecklace,
  },
  {
    id: 9,
    name: "Bauhaus Pendant Earrings",
    category: "Jewellery",
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
    badge: "Edition 01",
    image: vagueEarrings,
  },
  {
    id: 10,
    name: "Sculpt Gold Cuff",
    category: "Jewellery",
    price: 2999,
    oldPrice: 3899,
    rating: 4.9,
    badge: "Selected",
    image:
      "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 21,
    name: "Aura Geometric Ring",
    category: "Jewellery",
    price: 1699,
    oldPrice: 2199,
    rating: 4.7,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
  },

  // HANDBAGS
  {
    id: 2,
    name: "Structure Leather Bag",
    category: "Handbags",
    price: 3899,
    oldPrice: 4899,
    rating: 4.9,
    badge: "Edition 01",
    image: vagueHandbag,
  },
  {
    id: 11,
    name: "Mono Canvas Tote",
    category: "Handbags",
    price: 2799,
    oldPrice: 3599,
    rating: 4.7,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 12,
    name: "Prism Crossbody",
    category: "Handbags",
    price: 3499,
    oldPrice: 4499,
    rating: 4.8,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=85",
  },

  // WATCHES
  {
    id: 3,
    name: "Square Watch No. 01",
    category: "Watches",
    price: 3499,
    oldPrice: 4599,
    rating: 4.9,
    badge: "Edition 01",
    image: vagueWatch,
  },
  {
    id: 13,
    name: "Archive Minimal Chrono",
    category: "Watches",
    price: 5999,
    oldPrice: 7299,
    rating: 4.8,
    badge: "Limited",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 14,
    name: "Chronos Black Dial",
    category: "Watches",
    price: 4999,
    oldPrice: 6499,
    rating: 4.7,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85",
  },

  // COSMETICS
  {
    id: 4,
    name: "Pigment Set",
    category: "Cosmetics",
    price: 1799,
    oldPrice: 2299,
    rating: 4.8,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 15,
    name: "Velvet Matte Lip Trio",
    category: "Cosmetics",
    price: 1499,
    oldPrice: 1999,
    rating: 4.9,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 16,
    name: "Aura Glow Serum",
    category: "Cosmetics",
    price: 2199,
    oldPrice: 2899,
    rating: 4.8,
    badge: "Selected",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=85",
  },

  // FOOTWEAR
  {
    id: 5,
    name: "Ankle-Strap Heel Pump",
    category: "Footwear",
    price: 4499,
    oldPrice: 5899,
    rating: 4.9,
    badge: "Edition 01",
    image: vagueShoes,
  },
  {
    id: 17,
    name: "Apex Air Sneaker",
    category: "Footwear",
    price: 4299,
    oldPrice: 5599,
    rating: 4.9,
    badge: "Trending",
    image: shoeYellowAir,
  },
  {
    id: 18,
    name: "Retro Classic Blue",
    category: "Footwear",
    price: 3999,
    oldPrice: 5199,
    rating: 4.8,
    badge: "Best Seller",
    image: shoeBlueRetro,
  },
  {
    id: 22,
    name: "Sculpt Heeled Boot",
    category: "Footwear",
    price: 4899,
    oldPrice: 6299,
    rating: 4.9,
    badge: "New",
    image: shoeBoots,
  },

  // ACCESSORIES
  {
    id: 6,
    name: "Geometric Sunglasses",
    category: "Accessories",
    price: 2199,
    oldPrice: 2799,
    rating: 4.9,
    badge: "Edition 01",
    image: vagueSunglasses,
  },
  {
    id: 8,
    name: "Utility Carry",
    category: "Accessories",
    price: 3199,
    oldPrice: 4199,
    rating: 4.7,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 19,
    name: "Linear Leather Belt",
    category: "Accessories",
    price: 1699,
    oldPrice: 2299,
    rating: 4.8,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1624222247344-550fb60583dc?auto=format&fit=crop&w=900&q=85",
  },
  {
    id: 20,
    name: "Minimalist Card Case",
    category: "Accessories",
    price: 1299,
    oldPrice: 1799,
    rating: 4.7,
    badge: "Selected",
    image:
      "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=900&q=85",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Aanya",
    location: "Bengaluru",
    review:
      "VAGUE feels completely different from every regular fashion store. The products and the visual identity both feel carefully curated.",
    rating: 5,
    avatar: "https://i.pravatar.cc/300?img=47",
  },
  {
    id: 2,
    name: "Meera",
    location: "Hyderabad",
    review:
      "The accessories are bold without feeling over-designed. Even the packaging feels like part of the VAGUE experience.",
    rating: 5,
    avatar: "https://i.pravatar.cc/300?img=44",
  },
  {
    id: 3,
    name: "Arjun",
    location: "Mumbai",
    review:
      "Clean products, strong design language and a store experience that actually feels memorable instead of generic.",
    rating: 5,
    avatar: "https://i.pravatar.cc/300?img=12",
  },
];
