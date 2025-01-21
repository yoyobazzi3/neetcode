class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if (s.length !== t.length){
         return false;
      }
      const jackie = {}
      const youssef = {}

      for (let i of s){
         jackie[i] = (jackie[i] || 0) + 1;
      }
      for (let o of t ){
         youssef[o] = (youssef[o]|| 0) +1;     
      }

      for (let p in youssef){
         if (jackie[p] !== youssef[p]){
            return false
         } 
      }
      return true
   } 
}

// !== === '0' != 0
// != or == '0' = 0


