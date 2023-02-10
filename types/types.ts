const gridTypes = [
    'fullBleed',
    'guttersOnly',
    'halfAndHalf',
    'half',
    'standard',
    'centered',
    'cards',
    'centeredCards',
    'standardChild',
    'centeredChild',
    'singleCard',
    'centeredCard'
] as const;

export type GridVariant = typeof gridTypes[number];