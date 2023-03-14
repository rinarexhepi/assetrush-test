const variants = [
  "episodesCard",
  "pastPresenters",
  "top10Card",
  "pastEvents",
  "pulseCard",
  "talkCard",
  "becomeCard",
  "singleTalk",
] as const;
export type Variant = typeof variants[number];
