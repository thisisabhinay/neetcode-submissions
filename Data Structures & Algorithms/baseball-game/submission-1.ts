class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations: string[]): number {
        // The record behaves like a STACK: every operation only ever reads or
        // removes the most recent score(s), so we push/pop from one end.
        const scores: number[] = []

        for (const op of operations) {
            const lastIndex = scores.length - 1

            if (op === "C") {
                // Cancel: pop (remove) the most recent score.
                scores.pop()
            } else if (op === "D") {
                // Double: peek the last score (read, don't remove), push twice its value.
                scores.push(scores[lastIndex] * 2)
            } else if (op === "+") {
                // Sum: peek the last two scores, push their total.
                scores.push(scores[lastIndex] + scores[lastIndex - 1])
            } else {
                // Plain number given as a string — convert and push it.
                // Base 10 is explicit so a leading "-" (negatives allowed) parses correctly.
                scores.push(parseInt(op, 10))
            }
        }

        // Aggregate at the end: one clean pass summing whatever survived on the stack.
        return scores.reduce((total, score) => total + score, 0)
    }
}