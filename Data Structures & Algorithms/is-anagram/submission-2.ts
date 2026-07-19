class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length !== t.length) return false

        
        const table = new Map()

        for(let i = 0; i < s.length; i++) {
            const value = table.get(s[i])

            if(value) {
                table.set(s[i], value + 1)                
            }else{
                table.set(s[i], 1)
            }

        }

        for(let i = 0; i < t.length; i++) {
            const value = table.get(t[i])
            
            if(!value)
                return false
            else if(value && value >= 0) {
                table.set(t[i], value - 1)                
            }else{
                return false
            }
        }

        return true
    }
}
