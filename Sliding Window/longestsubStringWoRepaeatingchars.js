class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxS = 0;
        let i = 0;
        let j = 0;
        while( j < s.length){
            const map = new Map();
            let count = 0;
            while(!map.has(s[i]) && i< s.length){
                map.set(s[i] , i)
                count ++;
                i++;
            }
            maxS = Math.max(maxS, count)
            i--;
            j++;
        }
        return maxS
    }
}
const solution = new Solution();
const string = "pwwkew"
console.log(solution.lengthOfLongestSubstring(string))