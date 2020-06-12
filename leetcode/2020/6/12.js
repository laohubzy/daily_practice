// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = []
    const lenth = nums.length
    const hash = {}
    if(lenth < 3) {
        return []
    }
    if (lenth === 3) {
        if(!nums.reduce((a, b) => a + b, 0)) {
            return [nums]
        }
        return []
    }
    nums = nums.sort((a, b) => a - b)
    const reslut = []
    // let l = 0
    for(let i= 0; i< lenth - 2; i++) {
        let  left = i + 1
        let right = left + 1
        const sum = nums[i]
        while(left <= lenth - 2) {
            while(nums[left] === nums[left + 1]) left++
            while(nums[right] === nums[right + 1]) right++            
            let leftItem = nums[left]
            let rightItem = nums[right]
            if(!(sum + leftItem + rightItem)) {
                key = [sum, leftItem, rightItem].sort().toString()
                if(!hash[key]) {
                    result.push([sum, leftItem, rightItem])
                    hash[key] = 1
                } 

            }
            console.log(sum, leftItem, rightItem)

            if(right === lenth - 1) {
                left +=1
                right = left + 1
            } else {
                right ++
            }
        }
    }
    return result
};
const aa = [-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]
console.log(threeSum(aa))
// console.log(aa.sort((a, b) => a-b))