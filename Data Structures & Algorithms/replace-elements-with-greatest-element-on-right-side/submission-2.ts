class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        // Pattern: suffix max via a single reverse pass.
        // Walk right-to-left keeping the largest value seen so far. Because we've
        // only visited cells to the RIGHT of i, `maxRight` is already the answer
        // for index i by the time we arrive.
        //
        // Seed with -1: the last cell has nothing to its right, so it must become -1.
        let maxRight = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            // Pattern: lag-write (capture-before-update) to overwrite in place.
            // Order is load-bearing:
            //   1) save the current max-to-the-right (this cell's answer)
            //   2) fold this cell's ORIGINAL value into the running max
            //   3) write the saved answer back into the cell
            // Doing (3) before (2) would destroy the original value that cells
            // further left still need.
            const answer = maxRight;                  // 1
            maxRight = Math.max(maxRight, arr[i]);    // 2
            arr[i] = answer;                          // 3
        }

        return arr;
    }
}