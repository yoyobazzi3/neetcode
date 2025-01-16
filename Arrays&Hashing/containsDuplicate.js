class Solution{

    hasDuplicate(nums){
        const seen = new Set();
        for(const i of nums){
           if(seen.has(i)){
            return true;
           }
           seen.add(i)
        }
        return false;
    }
}