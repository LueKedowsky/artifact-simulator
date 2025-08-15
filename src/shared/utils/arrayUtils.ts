export function shuffle<T extends unknown[]>(arr: T): T {
  return arr.sort(() => Math.random() - 0.5);
}
