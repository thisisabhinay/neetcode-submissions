class Solution {
    /**
     * @param {number} n
     * @return {number}
     */

    memo: Map<number, number> = new Map()
    climbStairs(n: number): number {
        if(n <= 2) return n

        const memoN = this.memo.get(n)
        if(memoN) return memoN

        const result = this.climbStairs(n-1) + this.climbStairs(n-2)
        this.memo.set(n, result)
        return result
    }
}
