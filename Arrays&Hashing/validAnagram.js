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
     for(let count of s){
        frequency1[count] = (frequency1[count] || 0) + 1
     }
     for (let count of t){
        frequency2[count] = (frequency2[count] || 0) + 1;
     }
     for (let i in frequency1){
       if(frequency1[i] !== frequency2[i]){
        return false;
       }
     }
     return true;
    }
}
