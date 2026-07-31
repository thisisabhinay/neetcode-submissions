class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        // The stack holds opening brackets we've seen but haven't matched yet.
        // A stack is last-in-first-out, which mirrors nesting exactly: the most
        // recently opened bracket is the one that must close first.
        const stack: string[] = []

        // Lookup table mapping each CLOSING bracket to the OPENING one it needs.
        // Doing a lookup here also classifies the character: if it's a key in
        // this map it's a closer, otherwise it's an opener. This replaces a
        // long if/else chain — a common "table over conditionals" pattern.
        const closeToOpen: Record<string, string> = {
            ")": "(",
            "]": "[",
            "}": "{",
        }

        for (const char of s) {
            const expectedOpener = closeToOpen[char]

            if (expectedOpener === undefined) {
                // Not a closer, so it's an opener: push it to match later.
                stack.push(char)
            } else {
                // It's a closer. The only valid match is the bracket on top.
                // stack.pop() returns undefined if the stack is empty, and
                // undefined can never equal a real opener — so this single
                // comparison catches BOTH failure cases at once:
                //   1. wrong type / wrong order  (top !== expected)
                //   2. closer with no opener      (stack was empty -> undefined)
                if (stack.pop() !== expectedOpener) {
                    return false
                }
            }
        }

        // Final check: valid only if every opener got matched, i.e. nothing is
        // left on the stack. Skipping this would wrongly accept inputs like "(".
        return stack.length === 0
    }
}