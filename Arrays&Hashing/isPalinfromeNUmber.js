class Solution{
   
    isPalindrome(x) {
        let str = x.toString();
        
        let r = str.length-1;
        let l = 0;
        if(str[0] === '-'){
            l = 1;
        }else{
            l = 0;
        }


         while(l<r){
          if(str[l] !== str[r]){
            return false;
            }
            l++;
            r--;
        }
            return true;
    };

     range(lower, upper){
        let res=[];
        const palindrome = new Solution();
        for(let i = lower; i<=upper ; i++){
            if(palindrome.isPalindrome(i)){
                res.push(i);
            }
        }

        if(!res.length){
            return [];
        }else{
            return res

        }
        

    }
}

const solution = new Solution();
console.log(solution.isPalindrome(-121));
const result = solution.range(121,200);
console.log(result);