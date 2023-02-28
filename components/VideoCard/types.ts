const variants = ["cards", "centeredCards", "centeredCard"] as const;

export type Variant = typeof variants[number];
