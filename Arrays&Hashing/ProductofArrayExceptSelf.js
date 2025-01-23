class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const res = new Array(n).fill(1);

        for(let i = 1; i < n ; i ++){
            res[i] = res[i-1]  * nums[i-1];
        }

        let number = 1;
        for(let i = n-1; i >= 0; i--){
            res[i] *= number;
            number *= nums[i];
        }
        return res;

    }
}

const solution = new Solution();
const arr = [1,2,3,4]
console.log(solution.productExceptSelf(arr));