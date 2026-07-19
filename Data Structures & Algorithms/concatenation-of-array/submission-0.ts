class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        const n = nums.length
        const dArray = new Array(n * 2)
        
        for(let i = 0; i < n; i++){
            dArray[i] = nums[i]
            dArray[i + n] = nums[i]
        }

        return dArray
    }
}
