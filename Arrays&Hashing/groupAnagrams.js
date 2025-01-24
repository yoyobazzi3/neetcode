class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const res = {}
       for(let words of strs){
        const count = new Array(26).fill(0);
        for(let c of words){
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = count.join(',')
        if(!res[key]){
            res[key] = [];
        }
        res[key].push(words);
       }
       return Object.values(res);
    }
}

const solution = new Solution();
const strs = ["act","pots","tops","cat","stop","hat"]
console.log(solution.groupAnagrams(strs))
