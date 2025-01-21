class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            "]" : "[",
            ")" : "(",
            "}" : "{"
        }

        for(let c of s){
            if(pairs[c]){
            if(stack.length > 0 && stack[stack.length-1] === pairs[c]){
                stack.pop();
            }
            else{
                return false;
            }
            
            }
            else{
                stack.push(c);
            }
        }
        return stack.length === 0;

    }
}
