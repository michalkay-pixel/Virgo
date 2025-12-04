export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  href: string;
  image: string;
}

export const articles: Article[] = [
  {
    id: "soprano-ice-darker-skin",
    title: "Why Soprano Ice is the Gold Standard for Darker Skin Tones",
    excerpt:
      "Understanding why the Soprano ICE Platinum technology is revolutionizing laser hair removal for all skin types.",
    category: "Technology",
    readTime: "5 min read",
    href: "/journal/soprano-ice-darker-skin",
    image: "/images/textures/water-ripple.png",
  },
  {
    id: "winter-hydration",
    title: "Jolanta's Guide to Winter Hydration",
    excerpt:
      "Expert tips on keeping your skin radiant and hydrated during the colder months.",
    category: "Skincare",
    readTime: "4 min read",
    href: "/journal/winter-hydration",
    image: "/images/textures/silk-fabric.png",
  },
  {
    id: "understanding-pigmentation",
    title: "Understanding Pigmentation: The Science of Clarity",
    excerpt:
      "A deep dive into what causes pigmentation and how our Radiance Program addresses it.",
    category: "Education",
    readTime: "6 min read",
    href: "/journal/understanding-pigmentation",
    image: "/images/textures/stone.png",
  },
];

