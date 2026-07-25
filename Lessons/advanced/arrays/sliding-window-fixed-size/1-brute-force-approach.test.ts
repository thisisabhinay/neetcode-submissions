import { closeDuplicatesBruteForce } from "./1-brute-force-approach";

describe("closeDuplicatesBruteForce", () => {
  it("finds a duplicate pair within the window", () => {
    expect(closeDuplicatesBruteForce([1, 2, 3, 1], 4)).toBe(true);
  });

  it("returns false when duplicates are farther than k apart", () => {
    expect(closeDuplicatesBruteForce([1, 2, 3, 1], 3)).toBe(false);
  });

  it("returns false when there are no duplicates", () => {
    expect(closeDuplicatesBruteForce([1, 2, 3, 4], 3)).toBe(false);
  });

  it("handles adjacent duplicates", () => {
    expect(closeDuplicatesBruteForce([5, 5], 2)).toBe(true);
  });

  it("handles an empty array", () => {
    expect(closeDuplicatesBruteForce([], 3)).toBe(false);
  });
});
