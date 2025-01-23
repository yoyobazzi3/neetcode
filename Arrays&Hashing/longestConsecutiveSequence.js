class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(!map.has(nums[i])){
                map.set(nums[i],i);
            }

        }
        let number = 0;
        let big = 0;
        for(let i = 0; i < nums.length; i++){
            let j = nums[i]
            while(map.has(j)){
                number++;
                j--;
            }
            if(number > big){
                big = number;
            }
            number = 0;
        }
        return big;
    }
}

const solution = new Solution();
const arr = [2,20,4,10,3,4,5]
console.log(solution.longestConsecutive(arr));