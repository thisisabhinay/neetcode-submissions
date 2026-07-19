class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        const rightIndex = arr.length - 1
        let pick = -1
        for(let i = rightIndex; i >= 0; i--){
            const stamp = pick
            if( i === rightIndex) {
                pick = arr[i]
                arr[i] = -1
            }else if(arr[i] > pick){
                pick = arr[i]
            }

            arr[i] = stamp
        }

        return arr
    }
}
