const gridTypes = [
    'fullBleed',
    'guttersOnly',
    'halfAndHalf',
    'standard',
    'centered',
    'cards',
    'centeredCards',

] as const;

export type GridVariant = typeof gridTypes[number];