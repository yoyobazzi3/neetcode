class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
       let str = "";

       for(let s of strs){
           str += `${s.length}#${s}`
       }
       return str;
    }

    /**
     * Decodes a single string to a list of strings.
     * @param {string} s
     * @return {string[]}
     */
    decode(s) {
        const arr = [];
        let i = 0;
        while(i < s.length){
            let j = i;
            while(s[j] !== "#"){
                j++;
            }
            const length = parseInt(s.substring(i,j), 10);
            const word = s.substring(j+1, j+1 + length);
            arr.push(word);
            i = j + 1 + length;
        }
        return arr
    }
}

const solution = new Solution();
const arr = ["Yo","youssef", "Hey"];
const a = solution.encode(arr);
console.log(a);
console.log(solution.decode(a));
