class Solution {
    /**
     * Remove every occurrence of `val` from `nums` in-place.
     * Return k = number of kept elements; first k slots hold the keepers.
     *
     * PATTERN: two-pointer (read / write partition), O(n) time, O(1) space.
     */
    removeElement(nums: number[], val: number): number {
        // `write` = next slot for a keeper, and doubles as the running count k.
        let write = 0

        // `read` scans every element, skipping nothing.
        for (let read = 0; read < nums.length; read++) {
            if (nums[read] !== val) {            // keeper?
                nums[write] = nums[read]         // copy it to the front
                write++                          // KEY: advance write only on a keep
                // (this keeps write <= read, so overwriting-while-reading is safe)
            }
            // if nums[read] === val: do nothing, the value gets dropped
        }

        return write                             // = k
    }
}