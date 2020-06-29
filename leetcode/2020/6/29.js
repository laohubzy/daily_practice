// 215. 数组中的第K个最大元素
// 在未排序的数组中找到第 k 个最大的元素。请注意，
// 你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 输入: [3,2,1,5,6,4] 和 k = 2 
// 输出: 5
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const list = nums.sort((a, b) => b - a)
    return list[k - 1]
};

const list = [3,2,3,1,2,4,5,5,6]
const key = 4
// console.log(findKthLargest(list, key))



// 216. 组合总和 III
// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

// 说明：

// 所有数字都是正整数。
// 解集不能包含重复的组合。 
// 示例 1:
// 输入: k = 3, n = 7
// 输出: [[1,2,4]]

// 示例 2:
// 输入: k = 3, n = 9
// 输出: [[1,2,6], [1,3,5], [2,3,4]]

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
let ans;
var combinationSum3 = function (k, n) {
    ans = [];
    back(k, n, [], 0, 1);
    return ans;
};
/*
 * @params {Array} nowArr 当前回溯组合
 * @params {number} sum 当前回溯组合的总和
 * @params {number} start 下次回溯的起点坐标
 */
function back(k, n, nowArr, sum, start) {
    if(nowArr.length === k) {
        if(sum === n) return ans.push(nowArr);
        else return ;
    }
    for (let i = start; i <= 9; i++) {
        if(sum + i > n) break;
        back(k, n, [...nowArr, i], sum + i, i + 1);
    }
}