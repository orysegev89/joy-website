export interface Video {
  id: string;
  title: string;
  director: string;
  muxPlaybackId?: string; // Optional for video slides
  imageUrl?: string; // Optional for static image slides
  tagline?: string; // Optional tagline text overlay
  type: 'video' | 'image'; // Type of carousel item
}

export const videos: Video[] = [
  {
    id: "1",
    type: "video",
    title: "Fantastic Frames",
    director: "Axel Weirowski",
    muxPlaybackId: "xjWO57AfpL00hk4bywX2Jmskum95d4wbopguo7MCg1dQ",
    tagline: "Joy is an AI production company built by people who have spent their careers making commercials.",
  },
  {
    id: "2",
    type: "image",
    title: "Brand Partnership",
    director: "Maurus vom Scheidt",
    imageUrl: "/directors/rhino-box.png",
    tagline: "We work with brands who are ready to embrace AI without abandoning the creative process they trust.",
  },
  {
    id: "3",
    type: "video",
    title: "Bridge Worlds",
    director: "Ella Uzan",
    muxPlaybackId: "6llBbCn5UeaefsIyWgGkpOFuorLcHkqwueMjY021nKsY",
    tagline: "Joy exists to bridge worlds.\nThe tools are new.\nThe standards are not.",
  },
  {
    id: "4",
    type: "video",
    title: "LIDL Halloween",
    director: "Creative Director",
    muxPlaybackId: "TM4FfGT9xABXbnhTUZbAmEryTRd5lmSlP8SlmY6F8bg",
  },
  {
    id: "5",
    type: "video",
    title: "1106 Commercial",
    director: "Director Name",
    muxPlaybackId: "k46ueBdH4QFfU02bk51eMpSeoFB97pg02kcjVfvDYQ1Fw",
  },
  {
    id: "6",
    type: "video",
    title: "Zeiss Vision",
    director: "Director Name",
    muxPlaybackId: "mIcJNrT3SLd9Epcv3WsCHZXPvYQ1GDyliD87T6l9yjY",
  },
  {
    id: "7",
    type: "video",
    title: "0118 Production",
    director: "Director Name",
    muxPlaybackId: "GF6IgDpoSpScjmG7YGHSpgLvgbEhZpOZWFfOoQeLjrs",
  },
  {
    id: "8",
    type: "image",
    title: "Maurus Portrait",
    director: "Maurus vom Scheidt",
    imageUrl: "/directors/maurus-portrait.png",
  },
];
