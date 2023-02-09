const gridTypes = [
    'fullBleed',
    'guttersOnly',
    'halfAndHalf',
    'half',
    'standard',
    'centered',
    'cards',
    'centeredCards'
] as const;

export type GridVariant = typeof gridTypes[number];