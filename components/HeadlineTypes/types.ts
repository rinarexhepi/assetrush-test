const headlineVariants = [
  "heading",
  "subheading",
  "subtitles",
  "h4",
  "h5",
  "h6",
] as const;
const levels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export type LevelsVariant = typeof levels[number];
export type HeadlineVariant = typeof headlineVariants[number];
