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
    bio: "Axel Weirowski is a director known for his bold, cinematic approach to commercial filmmaking. With a background in both traditional production and AI-driven workflows, Axel pushes creative boundaries while maintaining a strong focus on storytelling. His work is characterized by dynamic visuals, unexpected juxtapositions, and a playful sense of imagination that brings brands to life in memorable ways.",
    portfolioImages: [
      "/directors/axel-stadium.png",
      "/directors/axel-lion-jetski.png",
      "/directors/axel-sculptor.png",
      "/directors/axel-fan-crowd.png",
      "/directors/axel-rhino-astronaut.png",
    ],
  },
];
