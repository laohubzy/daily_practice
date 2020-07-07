// 718. 最长重复子数组
// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

// 示例 1:

// 输入:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// 输出: 3
// 解释: 
// 长度最长的公共子数组是 [3, 2, 1]。


/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    if(!A.length || !B.length) {
        return []
    }
    
    const list = A.length > B.length ? B : A
    const length = list.length
    const reslut = []
    const temp = []
    // for(let i = 0; i < length; i++) {
    //     let j = 0
    //     while() {

    //     }
    // }
    let top = 0
    let bottom
    while(top >= A.length) {
        if()
    }
};