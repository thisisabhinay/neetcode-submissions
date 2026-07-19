class MinStack {
    stack: number[]
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length -1]
    }

    /**
     * @return {number}
     */
    getMin(): number {
        const copy = [...this.stack]
        return copy.sort((a, b) => a - b)[0];
    }
    
}
