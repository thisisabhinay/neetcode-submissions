class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length;

        // We know the final length up front (exactly 2n), so pre-size the array
        // once. This reserves every slot immediately, which lets us write to a
        // position "ahead" of i (namely i + n) without growing the array as we go.
        const ans = new Array(2 * n);

        // Single pass over the input. Each value lands in TWO slots:
        //   - i      -> its spot in the first copy
        //   - i + n  -> the same value, shifted n places into the second copy
        // The fixed +n offset is what places the second half in the same loop,
        // so we never need a second pass or a built-in concat.
        for (let i = 0; i < n; i++) {
            ans[i] = nums[i];
            ans[i + n] = nums[i];
        }

        return ans;
    }
}