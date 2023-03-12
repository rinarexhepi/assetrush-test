const variants = [
  "episodesCard",
  "pastPresenters",
  "top10Card",
  "pastEvents",
  "pulseCard",
] as const;

export type Variant = typeof variants[number];
