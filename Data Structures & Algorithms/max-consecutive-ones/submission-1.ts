class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let counter = 0
        let streak = 0

        if(nums.length === 1 && nums[0] === 1) return 1

        for(let i =0 ; i < nums.length; i ++){
        
           if( nums[i] === 1){
            counter += 1
            if(counter > streak) streak = counter
           }else{
            counter = 0
           }
        }
        return streak
    }
}
