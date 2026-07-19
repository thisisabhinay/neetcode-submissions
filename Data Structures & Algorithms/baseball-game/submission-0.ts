class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        const stack = []
        operations.forEach((op, i) => {
            const l1 = stack[stack.length - 1] ?? 0
            const l2 = stack[stack.length - 2] ?? 0
            
            if(op === "+") {
                stack.push(l1 + l2)
            }
            
            else if(op === "D") {
                stack.push(l1 * 2)
            }

            else if(op === "C") {
                stack.pop()
            }
            
            else {
                stack.push(parseInt(op))
            }
        })

        return stack.reduce((acc, val) => acc += val, 0)
    }
}
