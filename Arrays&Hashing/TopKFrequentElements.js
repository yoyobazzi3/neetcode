class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for(let i of nums){
            map.set(i,(map.get(i) || 0) + 1);
        }

        const arr = new Array(nums.length +1).fill(null).map(() => [])
        for(let [number, freq] of map){
            arr[freq].push(number)
        }
        const count = []
        for(let i = nums.length-1; i>=0 && k>count.length; i--){
            if(arr[i].length > 0){
                count.push(...arr[i])
            }
        }
        return count;
    }
}


const solution = new Solution();

const nums1 = [1, 1, 1, 2, 2, 3,3,3,3,3];
const k1 = 2;
console.log(solution.topKFrequent(nums1, k1)); 