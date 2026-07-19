class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let i = 0; i < nums.length; i++){
            const b = this.hasB(target, nums, i)
            if(b !== -1)
                return [i, b]
            
        }
       return []
    }

    hasB(target: number, list: number[], index: number): number {
        const a = list[index]
        const b = target - a
        return list.indexOf(b, index + 1)
    }
}
