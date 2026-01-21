export interface Director {
  id: string;
  name: string;
  slug: string;
  bio: string;
  portfolioImages: string[];
}

export const directors: Director[] = [
  {
    id: "ella-uzan",
    name: "Ella Uzan",
    slug: "ella-uzan",
    bio: "Ella Uzan is a director and creative known for blending surreal imagery with emotional storytelling. Her work explores themes of identity, transformation, and the boundaries between reality and imagination. With a background in both commercial and narrative filmmaking, Ella brings a distinct visual language to every project, creating worlds that feel both dreamlike and deeply human.",
    portfolioImages: [
      "/directors/ella-binoculars.png",
      "/directors/ella-birds-head.png",
      "/directors/ella-tent.png",
      "/directors/ella-couple-birds.png",
    ],
  },
  {
    id: "maurus-vom-scheidt",
    name: "Maurus vom Scheidt",
    slug: "maurus-vom-scheidt",
    bio: "Maurus vom Scheidt is a director who combines technical precision with heartfelt storytelling. His work spans commercials, branded content, and short films, always with an eye for authentic moments and compelling characters. Maurus has a talent for finding the extraordinary in the everyday, creating work that resonates on both an emotional and visual level.",
    portfolioImages: [
      "/directors/maurus-meerkat.png",
      "/directors/maurus-portrait.png",
    ],
  },
  {
    id: "axel-weirowski",
    name: "Axel Weirowski",
    slug: "axel-weirowski",
    bio: "Axel is a commercial and film director working at the intersection of cinematic storytelling and emerging technology. Since 2005, he has directed films and campaigns for global brands including BMW, Mercedes, Coca-Cola, Burger King, Lufthansa, Nokia, and others.\n\nHis work has received international recognition across major industry awards and is known for transforming brand identities into cinematic experiences with strong visual language and narrative clarity.\n\nOver the past four years, Axel has fully immersed himself in AI driven filmmaking, delivering large scale commercial productions for major clients. Through hands on experience, he has developed a practical understanding of AI's creative potential alongside its current constraints in a rapidly evolving AI creative landscape.\n\nFor Axel, AI is a tool of liberation, it expands imagination, democratizes craft, and enables visual worlds that were previously impossible or prohibitively costly to realize. When guided by human intuition and storytelling discipline, AI removes traditional production barriers and allows ideas to evolve in real time. The technology never replaces the narrative; it amplifies it.",
    portfolioImages: [
      "/directors/axel-fan-crowd.png",
      "/directors/axel-lion-jetski.png",
      "/directors/axel-stadium.png",
      "/directors/axel-sculptor.png",
    ],
  },
];
