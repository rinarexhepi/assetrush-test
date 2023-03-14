const headlineVariants = [
  "heading",
  "subheading",
  "subtitles",
  "videoCardText",
  "pastEventsCard",
  "pastARPresenters",
  "pastEventsDate",
  "pulseDate",
  "footerText",
  "ecosystem",
  "becomeTitle",
  "becomeSubheading",
] as const;
const levels = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
const colors = ["blue", "lightPurple", "pink", "darkPurple"] as const;

export type Color = typeof colors[number];
export type LevelsVariant = typeof levels[number];
export type HeadlineVariant = typeof headlineVariants[number];
