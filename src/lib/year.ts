/**
 * Current year for the footer copyright.
 *
 * Next 16 will not let a component read the clock directly while
 * prerendering, so this is wrapped in "use cache", which computes it once
 * per build and reused, which is exactly what a copyright year needs.
 */
export async function getCurrentYear(): Promise<number> {
  "use cache";
  return new Date().getFullYear();
}
