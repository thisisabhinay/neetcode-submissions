// Check if array contains a pair of duplicate values,
// where the two duplicates are no farther than k positions from
// eachother (i.e. arr[i] == arr[j] and abs(i - j) + 1 <= k).
// O(n * k)
export function closeDuplicatesBruteForce(nums: number[], k: number): boolean {
  for (let i = 0; i < nums.length; i++) {
    // Only compare against elements inside the window of size k.
    for (let j = i + 1; j < nums.length && j < i + k; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }
  return false;
}
