const loading = ["eager", "lazy"] as const;

export type Loading = typeof loading[number];
