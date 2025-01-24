class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);

        for(let i = 1; i < nums.length; i++){
            res[i] = res[i-1] * nums[i-1]
        }

        let y = 1;
        for(let i = nums.length-1; i>=0; i--){
            res[i] *= y;
            y*= nums[i];
        }
        return res;
    }
}

const solution = new Solution();
const arr = [1,2,3,4]
console.log(solution.productExceptSelf(arr));