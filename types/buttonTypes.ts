const buttonTypes = ["primary", "secondary", "third"] as const;

export type ButtonVariant = typeof buttonTypes[number];
