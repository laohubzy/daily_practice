// 斐波那契数列是另一个可以用递归解决的问题。
// 它是一个由0、1、1、2、3、5、8、13、21、34等数组成的序列。
// 数2由1+1得到，数3由1+2得到，数5由2+3得到，以此类推。斐波那契数列的定义如下。
// ❑ 位置0的斐波那契数是零。❑ 1和2的斐波那契数是1。❑ n（此处n > 2）的斐波那契数是（n -1）的斐波那契数加上（n -2）的斐波那契数。
function fibonacci_1(n) {
    let last_1 = 0
    let last_2 = 1
    let curr = 0
    let total = 0
    const list = [last_1]
    for(let i = 2; curr < n; i++) {
        curr = last_1 + last_2
        total += curr
        last_2 = last_1
        last_1 = curr
        list.push(curr)
    }
    return total
}
// console.log(fibonacci(5))
const List = []
function fibonacci_2(n, list) {
    if(n < 0) return list
    if(n === 0) {
        list.push(0)
        return list
    }
    list.push(n)
    return fibonacci_2(n - 1, list)
}

console.log(fibonacci_2(5, []))