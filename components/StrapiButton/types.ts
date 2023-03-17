const buttonTypes = [
  "primary",
  "secondary",
  "third",
  "primaryCornered",
  "primaryHovered",
] as const;

export type ButtonVariant = typeof buttonTypes[number];
