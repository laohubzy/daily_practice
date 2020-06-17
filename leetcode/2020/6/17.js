//1014. 最佳观光组合
// 给定正整数数组 A，A[i] 表示第 i 个观光景点的评分，并且两个景点 i 和 j 之间的距离为 j - i。

// 一对景点（i < j）组成的观光组合的得分为（A[i] + A[j] + i - j）：景点的评分之和减去它们两者之间的距离。

// 返回一对观光景点能取得的最高分。

//  

// 示例：

// 输入：[8,1,5,2,6]
// 输出：11
// 解释：i = 0, j = 2, A[i] + A[j] + i - j = 8 + 5 + 0 - 2 = 11
//  

// 提示：

// 2 <= A.length <= 50000
// 1 <= A[i] <= 1000
// 求A[i] + i 大   A[j]-j 大

/**
 * @param {number[]} A
 * @return {number}
 */
// var maxScoreSightseeingPair = function(A) {
//     let total = 0
//     let i = 0
//     let j = 1
//     const length = A.length
//     while(i < length) {
//         console.log(i, j)
//         let iCount = A[i] + i
//         let jCount = A[j] - j
//         if(total < iCount + jCount) {
//             total = iCount + jCount
//         }
//         j++
//         while(j < length - 1) { 
//             if(jCount < A[j] - j) {
//                 jCount = A[j] - j
//                 total = iCount + jCount
//                 break
//             }
//             j ++  
//         }
//         i ++
//         while(i < j - 1) {
//             if(iCount < A[i] + i) {
//                 iCount = A[i] + i
//                 total = iCount + jCount
//             }
//             i ++
//         }

//     }
    
//     return total

// };
// 遇到这中数组中两个元素的差，和乘积的问题，第一秒想到的就是双指针，变形有排序，快慢指针，滑动窗口等，这里的两个指针有一个肯定要步步移动，另一个怎么移动？从题干中查找：
// 假设慢指针i， 快指针j，当移动j的时候计算当前两个值的和与距离插值，保存；
// 当A[j]与A[i]的差不小于两个值的距离时，即A[j]>=A[i] - j + i，可看到无论右侧j'移动到什么位置，A[j'] + A[j] - j' + j
// 的值都大于或等于A[j'] + A[i] - j' + i，你可以简单换算下：
// A[j'] + A[j] - j' + j>= A[j'] + A[i] - j' + i可以得到A[j]>=A[i] - j + i；
// 那么就知道慢指针的移动原则：只有当A[j]>=A[i] - j + i；慢指针移动到j的位置，其他情况慢指针不用移动；
// 总结代码如下
var maxScoreSightseeingPair = function(A) {
    var i = 0, j = 1, max = -Infinity;
    while (j < A.length) {
        const lof = A[i] - j + i;
        max = Math.max(max, lof + A[j] )
        if (A[j] >= lof) {
            i = j;
        }
        j++;
    }
    return max;
};

const list = [8,1,5,2,6]
// console.log(maxScoreSightseeingPair(list))


// 6. Z 字形变换
// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
// 示例 1:

// 输入: s = "LEETCODEISHIRING", numRows = 3
// 输出: "LCIRETOESIIGEDHN"
// 示例 2:

// 输入: s = "LEETCODEISHIRING", numRows = 4
// 输出: "LDREOEIIECIHNTSG"
// 解释:

// L     D     R
// E   O E   I I
// E C   I H   N
// T     S     G

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1)
        return s;

    const len = Math.min(s.length, numRows);
    const rows = new Array(len).fill('');
    let loc = 0;
    let down = false;

    for(const c of s) {
        rows[loc] += c;
        if(loc == 0 || loc == numRows - 1) {
            down = !down;
        }
        loc += down ? 1 : -1;
    }
    return rows.join('');
}

console.log(convert('LEETCODEISHIRING', 4))