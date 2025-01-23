class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length-1;

        while(left< right){
            const num = numbers[left] + numbers[right];
            if(num > target ){
                right --;
            }else if(num < target){
                left ++;
            }else{
                return [left +1, right +1];
            }
        }
        return [];
    }
}
const solution = new Solution();
const arr = [1,2,3,4]
console.log(solution.twoSum(arr,3));
