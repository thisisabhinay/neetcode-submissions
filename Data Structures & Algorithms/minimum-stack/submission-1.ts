class MinStack {
    stack: number[]
    minStack: number[]   // parallel stack; its top is always the min of `stack`

    constructor() {
        this.stack = []
        this.minStack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        // Core pattern: carry the "smallest so far" forward at every push.
        // If the min stack is empty, val is the min; otherwise compare val
        // against the current min (the min stack's top) and keep the smaller.
        const currentMin = this.minStack.length === 0
            ? val
            : Math.min(val, this.minStack[this.minStack.length - 1])
        // Push a min on EVERY push so both stacks stay the same height and
        // pop together — this is what makes duplicate minimums safe.
        this.minStack.push(currentMin)
    }

    /**
     * @return {void}
     */
    pop(): void {
        // Remove from both stacks in lockstep to preserve the invariant.
        this.stack.pop()
        this.minStack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        // The min is already sitting at the top of the min stack — just read it.
        // No scanning, no sorting: O(1).
        return this.minStack[this.minStack.length - 1]
    }
}