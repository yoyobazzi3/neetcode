class Solution {
    /**
     * Encodes a list of strings to a single string.
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encoded = "";
        for (let s of strs) {
            encoded += `${s.length}:${s}`;
        }
        return encoded;
    }

    /**
     * Decodes a single string to a list of strings.
     * @param {string} s
     * @return {string[]}
     */
    decode(s) {
        let decoded = [];
        let i = 0;
        while(i< s.length){
            let j = i;
            if(s[j] !== ":"){
                j++;
            }
            const length = parseInt(s.substring(i,j),10);
            const str = s.substring(j + 1, j + length + 1);
            decoded.push(str)
            i = j+1+length;
        }
        return decoded;
    }
}

