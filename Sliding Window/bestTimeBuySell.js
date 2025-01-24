class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let minProfit = prices[0];
        for(let sell of prices){
            maxP = Math.max(maxP, sell - minProfit);
            minProfit = Math.min(sell, minProfit);
        }
        return maxP;
    }
}

const solution = new Solution();
const nums = [10,8,7,21,20];
const answer = solution.maxProfit(nums);
console.log(answer)