const variants = ["half", "standardChild"] as const;

export type Variant = typeof variants[number];
