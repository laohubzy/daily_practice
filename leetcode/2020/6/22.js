// 面试题 16.18. 模式匹配
// 你有两个字符串，即pattern和value。 
// pattern字符串由字母"a"和"b"组成，用于描述字符串中的模式。
// 例如，字符串"catcatgocatgo"匹配模式"aabab"（其中"cat"是"a"，"go"是"b"），该字符串也匹配像"a"、"ab"和"b"这样的模式。
// 但需注意"a"和"b"不能同时表示相同的字符串。编写一个方法判断value字符串是否匹配pattern字符串。
// 输入： pattern = "abba", value = "dogcatcatdog"
// 输出： true
// 输入： pattern = "abba", value = "dogcatcatfish"
// 输出： false
// 输入： pattern = "abba", value = "dogdogdogdog"
// 输出： true
// 解释： "a"="dogdog",b=""，反之也符合规则

/**
 * @param {string} pattern
 * @param {string} value
 * @return {boolean}
 */
var patternMatching = function(pattern, value) {
    if(!pattern) {
        return !value
    }
    if(!value) {
        return !(pattern.includes('a') && pattern.includes('b'))
    }
    const length = value.length
    for(var i = 1; i < length; i++) {
        const aPattern = value.slice(0, i)
        const tempValue = value.replace(new RegExp(aPattern, 'g'), '')
        console.log(tempValue)
        if(!tempValueLength) {
            return true
        }
        if(tempValueLength % 2) {
            continue
        }
        const bPattern = tempValue.slice(0, tempValueLength / 2)
        let tempStr = pattern.replace(/a/g, aPattern).replace(/b/g, bPattern)
        if(tempStr === value) {
            return true
        }
        tempStr = pattern.replace(/b/g, aPattern).replace(/a/g, bPattern)
        
        if(tempStr === value) {
            return true
        }
        
    }
    return false

};

console.log(patternMatching("bbba", "xxxxxxy"))