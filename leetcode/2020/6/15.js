// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。
// 输入: ["flower","flow","flight"]
// 输出: "fl"
// 输入: ["dog","racecar","car"]
// 输出: ""



/**
 * @param {string[]} strs
 * @return {string}
 */
//	112 ms	41.3 MB
var longestCommonPrefix = function(strs) {
    if(!strs.length) {
        return ''
    }
    if(strs.length === 1) {
        return strs[0]
    }
    let reslut = ''
    const length = strs.length
    for(let i = 0; i < length - 1; i++) {
        let itemList = i === 0 ? strs[0].split('') : reslut.split('')
        reslut = ''
        while (itemList.length) {
            let shift = itemList.shift()
            const str = reslut + shift
            if(new RegExp(`^${str}`,"g").test(strs[i + 1])) {
                reslut = str
            } else {
                break
            }
        }
    }
    return reslut || ''
};   

// 	76 ms	33.5 MB
var longestCommonPrefix_2 = function(strs) {
    var re = strs[0] ? strs[0]:'';
    for (var i=1;i<strs.length;i++){
        var regex = new RegExp('^'+re);
        while (!regex.test(strs[i])&&re.length){
            re = re.slice(0,re.length-1);
            regex = new RegExp('^'+re);
        }
    }
    return re;
};

console.log(longestCommonPrefix(["a", "a"]))