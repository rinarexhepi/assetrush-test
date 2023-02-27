const aspectRatio = ["16/9", "4/3", "1/1"] as const;

export type AspectRatio = typeof aspectRatio[number];
