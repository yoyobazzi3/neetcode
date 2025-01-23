class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let index = 0;
        let str = "";
        let nadaRinno = s.toLowerCase();
        for(let i = 0; i < s.length; i ++){
           if(nadaRinno[i].charCodeAt(0) <= "z".charCodeAt(0) &&
              nadaRinno[i].charCodeAt(0) >= "a".charCodeAt(0) ||
              nadaRinno[i].charCodeAt(0) <= "9".charCodeAt(0) &&
              nadaRinno[i].charCodeAt(0) >= "0".charCodeAt(0)){
              str += nadaRinno[i];
          }
        }
        let start = 0;
        let end = str.length-1;
        while(start<end){
            if(str[start] !== str[end]){
                return false;
            }
            start ++;
            end --;
        }
        return true;
    }
}
const solution = new Solution();
solution.isPalindrome("tabat!123")
console.log(solution.isPalindrome("Was it a car or a cat I saw?"))