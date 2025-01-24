class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
       let l = 0;
       let r = numbers.length-1;
       while(l<r){
        const num = numbers[l] + numbers[r];
        if(num > target){
            r--;
        }else if(num<target){
            l++
        }else{
            return [l+1, r+1]
        }
       }
       return [];
    }
}
const solution = new Solution();
const arr = [1,2,3,4]
console.log(solution.twoSum(arr,4));
