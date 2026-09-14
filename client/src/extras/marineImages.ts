export const marineOperationImages = import.meta.glob<string>(
  "@assets/Marine/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

export function getMarineOperationImage(filename: string): string {
  const key = Object.keys(marineOperationImages).find((path) =>
    path.endsWith(filename)
  );

    return key
    ? marineOperationImages[key]
    : marineOperationImages["@assets/Marine/marine-operation-fallback.jpg"];
}
