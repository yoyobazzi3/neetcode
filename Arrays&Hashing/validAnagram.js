class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if(s.length !== t.length){
        return false;
     }
     const frequency1 = {}
     const frequency2 = {}
     for (let char of s){
        frequency1[char] = ((frequency1[char] || 0) + 1)
        frequency2[char] = ((frequency2[char] || 0) + 1)
     }
     for(let keys of frequency1){
        if(frequency1[keys] !== frequency2[keys]){
            return false;
        }
     }
     return true;
    }
}
