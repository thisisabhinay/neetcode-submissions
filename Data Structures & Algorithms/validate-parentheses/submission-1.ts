class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const stack: string[] = []
        const bracketMap: Record<string, string> = {
            "]" : "[",
            "}" : "{",
            ")" : "(",
        }

        for(const char of s){
            if(bracketMap[char]) {
                const topElement = stack.length > 0 ? stack.pop() : '#'

                if(topElement !== bracketMap[char]){
                    return false
                }
            }else{
                stack.push(char)
            }
        }

        return stack.length === 0;
    }
}
