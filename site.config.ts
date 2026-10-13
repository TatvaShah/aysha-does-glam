import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Aysha Does Glam",
  tagline: "Certified MUAH for bridal, mendhi, and soft glam in the GTA.",
  category: "Makeup and hair",
  schemaType: "BeautySalon",
  area: "Brampton / GTA, ON",
  siteUrl: "https://aysha-does-glam.vercel.app",

  theme: {
    preset: "salon-chic",
  },
  logo: "/images/logo.png",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton and GTA",
    headline: "Bridal and soft glam, tailored to you",
    subhead:
      "Certified makeup and hair for bridal, mendhi, reception, and everyday soft glam. Bookings open. Send a DM to inquire.",
    images: [
      { src: "/images/post-1.jpg", alt: "Soft glam makeup look by Aysha", width: 1720, height: 2293 },
      { src: "/images/post-2.jpg", alt: "Natural mature skin glam", width: 3072, height: 4096 },
      { src: "/images/post-3.jpg", alt: "Soft sculpted glam makeup", width: 1276, height: 1276 },
    ],
    primaryCta: { label: "DM to book", href: "https://instagram.com/ayshadoesglam" },
    secondaryCta: { label: "See the looks", href: "#gallery" },
  },

  highlights: [
    "Certified MUAH",
    "Bridal and non bridal",
    "Mendhi and reception glam",
    "Bookings open by DM",
  ],

  about: {
    title: "Glam that feels like you",
    body: [
      "Aysha Does Glam is a certified makeup and hair artist serving Brampton and the GTA. Whether you want bridal, mendhi, reception ready, or a soft everyday glam, every look is tailored to you.",
      "Bookings are open for 2026 and 2027. Send an Instagram DM with your date, event type, and inspo to get started.",
    ],
    image: { src: "/images/post-2.jpg", alt: "Mature skin soft glam by Aysha", width: 3072, height: 4096 },
  },

  menu: {
    label: "Services",
    title: "Services",
    intro: "Bridal, non bridal, mendhi, and soft glam. Pricing shared when you book.",
    variant: "list",
    showPrices: false,
    priceNote: "Message for current pricing. No public price list posted.",
    groups: [
      {
        title: "Makeup and hair",
        items: [
          { name: "Bridal makeup", description: "Wedding day glam with hair options." },
          { name: "Non bridal glam", description: "Soft glam for nights out and events." },
          { name: "Mendhi and reception glam", description: "Looks built for celebration nights." },
          { name: "Mature skin glam", description: "Soft sculpted glam tailored for mature skin." },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      {
        src: "/images/post-1.jpg",
        width: 1720,
        height: 2293,
        alt: "Gorgeous soft glam look",
        caption: "Soft glam",
        href: "https://www.instagram.com/p/DeYODtnt1tN/",
      },
      {
        src: "/images/post-2.jpg",
        width: 3072,
        height: 4096,
        alt: "Natural mature skin glam",
        caption: "Mature skin glam",
        href: "https://www.instagram.com/p/Dcgtd8_Iv8X/",
      },
      {
        src: "/images/post-3.jpg",
        width: 1276,
        height: 1276,
        alt: "Signature soft sculpted glam",
        caption: "Soft sculpted glam",
        href: "https://www.instagram.com/p/DbJwe5DGpcb/",
      },
      {
        src: "/images/post-4.jpg",
        width: 361,
        height: 640,
        alt: "Signature soft glam reel still",
        caption: "Soft glam reel",
        href: "https://www.instagram.com/p/DajQ57VoYaU/",
      },
      {
        src: "/images/post-5.jpg",
        width: 480,
        height: 640,
        alt: "Reception ready soft glam",
        caption: "Reception glam",
        href: "https://www.instagram.com/p/DabrWn0l4yB/",
      },
      {
        src: "/images/post-6.jpg",
        width: 361,
        height: 640,
        alt: "Mendhi glam look",
        caption: "Mendhi glam",
        href: "https://www.instagram.com/p/DZidFeEI17E/",
      },
      {
        src: "/images/post-7.jpg",
        width: 480,
        height: 640,
        alt: "Defined eyes soft glam for mendhi",
        caption: "Mendhi soft glam",
        href: "https://www.instagram.com/p/DZT8irEjVUN/",
      },
      {
        src: "/images/post-8.jpg",
        width: 361,
        height: 640,
        alt: "Wedding season glam reel still",
        caption: "Wedding season",
        href: "https://www.instagram.com/p/DZEMc7aIytL/",
      },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "ayshadoesglam",
    embeds: [
      "https://www.instagram.com/p/DeYODtnt1tN/",
      "https://www.instagram.com/p/Dcgtd8_Iv8X/",
      "https://www.instagram.com/p/DbJwe5DGpcb/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    label: "How to book",
    headerCtaLabel: "DM to book",
    title: "Book your glam",
    intro:
      "Bookings are open. Tap below to open an Instagram chat with a starter message.",
    dmMessage:
      "Hi Aysha! I would love to book makeup.\nPreferred date:\nEvent type (bridal, mendhi, reception, non bridal):\nInspo or look preference:",
    links: [],
    note: "Serving Brampton and the GTA. Studio or mobile details shared when you book.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I book?",
      a: "Send an Instagram DM with your preferred date, event type, and inspo. You will get a reply with next steps.",
    },
    {
      q: "Where do you serve?",
      a: "Brampton and the wider GTA. Exact location details are shared when you book.",
    },
    {
      q: "What services do you offer?",
      a: "Bridal makeup, non bridal glam, mendhi and reception looks, and mature skin soft glam, plus hair as a certified MUAH.",
    },
    {
      q: "Are bookings open?",
      a: "Yes. Bookings are open for 2026 and 2027. Message to secure your date.",
    },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton / GTA, Ontario",
    socials: [],
  },

  seo: {
    title: "Aysha Does Glam | Bridal and soft glam in Brampton",
    description:
      "Certified MUAH in Brampton and the GTA. Bridal, mendhi, reception, and soft glam. Book by Instagram DM.",
    keywords: [
      "Brampton makeup artist",
      "GTA bridal makeup",
      "mendhi glam Brampton",
      "soft glam GTA",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
