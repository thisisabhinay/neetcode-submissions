class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = {}
        let result = false
        for(const n of nums) {
            if(!map[n]) map[n] = 1
            else map[n] = map[n] + 1

            if(map[n] > 1) return true
        }

        return false
    }
}
