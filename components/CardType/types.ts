const variants = [
  "episodesCard",
  "pastPresenters",
  "top10Card",
  "pastEvents",
  "pulseCard",
  "talkCard",
] as const;

export type Variant = typeof variants[number];
