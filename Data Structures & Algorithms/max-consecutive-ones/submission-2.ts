class Solution {
    /**
     * Returns the length of the longest run of consecutive 1s.
     *
     * CORE PATTERN — "running counter with reset":
     * Any "longest streak of X in a row" problem is this same shape.
     * Walk once, count while the condition holds, reset to zero the
     * moment it breaks, and remember the largest count seen.
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let current = 0;  // length of the run of 1s we're standing in right now
        let best = 0;     // longest run seen so far (this is the answer)

        for (const num of nums) {
            if (num === 1) {
                // Still inside a run: extend it...
                current++;
                // ...and check the max here, WHILE extending. A run only
                // ever grows until it breaks, so its peak is its last value.
                // Checking on every 1 means we never miss that peak — even
                // if the array ends mid-run with no trailing 0.
                if (current > best) best = current;
            } else {
                // Hit a 0: the run is broken. Reset to 0 (not 1) so the
                // next 1 restarts the count cleanly from 1.
                current = 0;
            }
        }

        return best;
    }
}