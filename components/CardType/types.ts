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

const colors = ["blue", "lightPurple", "pink", "darkPurple"] as const;

export type Color = typeof colors[number];
