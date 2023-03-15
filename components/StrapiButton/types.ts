const buttonTypes = [
  "primary",
  "secondary",
  "third",
  "primaryCornered",
] as const;

export type ButtonVariant = typeof buttonTypes[number];
