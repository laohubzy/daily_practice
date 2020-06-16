// 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，
// 所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    if(!s.length) {
        return 1
    }
    const list = s.split('')
    const MAP = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    const length = list.length
    let result = 0
    for(let i = 0; i < length; i++) {
        const item = list[i]
        if(i + 1 < length) {
            const next = list[i + 1]
            if(item === 'I' && (next === 'V' || next === 'X')) {
                result += next === 'V' ? 4 : 9
                i++
                continue
            }
            if(item === 'X' && (next === 'L' || next === 'C')) {
                result += next === 'L' ? 40 : 90
                i++
                continue
            }
            if(item === 'C' && (next === 'D' || next === 'M')) {
                result += next === 'D' ? 400 : 900
                i++
                continue
            }
        }
        console.log(MAP[item])
        result += MAP[item]
    }
    return result > 3999 ? 3999 : result
};

// 《1》 即 左边的罗马数字 > 右边的罗马数字时 => 罗马数 == 左边罗马数字对应的阿拉伯数字 + 右边罗马数字对应的阿拉伯数字
// 《2》 即 左边的罗马数字 < 右边的罗马数字时 => 罗马数 == 左边罗马数字对应的阿拉伯数字的反数即负数 + 右边罗马数字对应的阿拉伯数字
// 且 罗马数字的转换表在上意味着 所有数字都可以有其中的罗马数字字符组成 => 建立罗马数字和阿拉伯数字 Hash对照表

var romanToInt_better = function(s) {
    var hashNum = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }
    var result = 0;
    for(let i = 0;i<s.length;i++){
        hashNum[s[i]] < hashNum[s[i+1]] ? result -= hashNum[s[i]] : result += hashNum[s[i]]
    }
    return result;
};

var romanToInt_best = function(s) {
    let map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000},
        sum = 0, loop = 0, num = 0, now = 0;
    while(loop < s.length) {
        now = map[s[loop]];
        if(num < now) {
            sum -= num;
        } else {
            sum += num;
        }
        num = now;
        loop++;
    }
    sum += num;
    return sum;
};

const romanToIntText = "IX"
// console.log(romanToInt(romanToIntText))


// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
var isValid = function(s) {
    const list = s.split('')
    const stack = []

    if(list.length % 2) {
        return false
    }
    while(list.length) {
        if(!stack.length) {
            stack.push(list.shift())
            continue
        }
        const item = list.shift()
        const last = stack[stack.length - 1]
        if(
            (last==='{' && item ==='}') ||
            (last==='(' && item ===')') ||
            (last==='[' && item ===']')
        ) {
            stack.pop()
        } else {
            stack.push(item)
        }
        
    }
    return !stack.length
};

// console.log(isValid(isValidText))

// 984. 不含 AAA 或 BBB 的字符串
// 给定两个整数 A 和 B，返回任意字符串 S，要求满足：

// S 的长度为 A + B，且正好包含 A 个 'a' 字母与 B 个 'b' 字母；
// 子串 'aaa' 没有出现在 S 中；
// 子串 'bbb' 没有出现在 S 中。
// 输入：A = 1, B = 2
// 输出："abb"
// 解释："abb", "bab" 和 "bba" 都是正确答案。
/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let res = "";
    while (A > 0 || B > 0) {
        if (A > B) {
            if (A > 1) {
                res += "aa"
                A -= 2;
            } else {
                res += "a";
                A--;
            }
            if (B > 0) {
                res += "b";
                B--;
            }
        } else if (A<B) {
            if (B > 1) {
                res += "bb"
                B -= 2;
            } else {
                res += "b";
                B--;
            }
            if (A > 0) {
                res += "a";
                A--;
            }
        } else {
            res += "ab";
            A--;
            B--;
        }
    }
    
    return res;
}
console.log(strWithout3a3b(1, 3))