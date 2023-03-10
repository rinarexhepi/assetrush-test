const variants = [
  "episodesCard",
  "pastPresenters",
  "top10Card",
  "pastEvents",
] as const;

export type Variant = typeof variants[number];
