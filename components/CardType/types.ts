const variants = ["episodesCard", "pastPresenters", "top10Card"] as const;

export type Variant = typeof variants[number];
