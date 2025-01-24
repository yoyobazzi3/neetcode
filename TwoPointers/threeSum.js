class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //sort the array from least to greatest
        nums.sort((a,b) => a-b);
        const res = []
        for (let i = 0; i < nums.length; i++){
            if(nums[0] > 0) break;

            if(i>0 && nums[i] === nums[i-1]) continue
            let l = i+1;
            let r = nums.length -1;

            while(l<r){
                let sum = nums[i] + nums[r] + nums[l];
                if(sum < 0){
                    l++;
                }else if(sum > 0){
                    r--;
                }else{
                    res.push([nums[i], nums[r],nums[l]]);
                    l++;
                    r--;
                    while(l < r && nums[i] === nums[i-1]){
                        l++;
                    }
                }
            }
        }
        return res;
    }
}

const solution = new Solution();
const nums = [-1,0,1,2,-1,-4]
console.log(solution.threeSum(nums));