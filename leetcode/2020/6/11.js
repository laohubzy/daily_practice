// 根据每日 气温 列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
var dailyTemperatures = function(T) {
    return T.map((t, tIndex) =>{
        const nextList = T.slice(tIndex + 1)
        if(nextList.length <= 1) return 0
        const next = nextList.findIndex(i => i > t)
        return next === -1 ?  0 : next + 1
    })
}
// 时间超出 使用findIndex map 复杂度高  	4012 ms	48.5 MB
// console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))

var dailyTemperatures_2 = function(T) {
    const result = []
    while(T.length) {
        const t = T.shift()
        let index = 0
        for(let i = 0; i<T.length; i++) {
            if(T[i] > t) {
                index = i + 1
                break
            }
        }
        result.push(index)
        
    }
    return result
}
// 	1348 ms	45.9 MB
// console.log(dailyTemperatures_2([73, 74, 75, 71, 69, 72, 76, 73]))

var dailyTemperatures_3 = function(T) {
    let res = new Array(T.length).fill(0)
    let stack = []
    // 比较多少次
    for(let i = 0; i < T.length; i++) {
        // 反向找后面大于前面的
        while(stack.length && T[i] > T[stack[stack.length - 1]]) {
            let topIdx = stack.pop()
            res[topIdx] = i - topIdx
            
        }
        
        stack.push(i)
    }
    return res
}
// 	192 ms	46.8 MB	
// console.log(dailyTemperatures_3([73, 74, 75, 71, 69, 72, 76, 73]))


// 衍生 ==> for, for in, for of, while, forEach, map 循环效率
const sourceArray = new Array(10000000).fill(9)
sourceArray[999999] = 1

const methodFor = () => {
    console.time('methodFor')
    const array = []
    for(let i = 0; i < sourceArray.length; i ++) {
        array.push(i)
        if(sourceArray[i] === 1) {
            break
        }
    }
    
    console.timeEnd('methodFor')
}

const methodFor_length = () => {
    console.time('methodFor_length')
    const array = []
    const length = sourceArray.length
    for(let i = 0; i < length; i ++) {
        array.push(i)
        if(sourceArray[i] === 1) {
            break
        }
    }
    console.timeEnd('methodFor_length')
}

const methodFor_item = () => {
    console.time('methodFor_item')
    const array = []
    for(let i = 0, item; item = sourceArray[i]; i++) {
        if(item === 1) {
            break
        }
    }
    
    console.timeEnd('methodFor_item')
}

const methodForIn = () => {
    console.time('methodForIn')
    const array = []
    for(let i in sourceArray) {
        array.push(i)
        if(sourceArray[i] === 1) {
            break
        }
    }
    
    console.timeEnd('methodForIn')
}

const methodForOf = () => {
    console.time('methodForOf')
    const array = []
    for(let i of sourceArray) {
        array.push(i)
        if(sourceArray[i] === 1) {
            break
        }
    }
    
    console.timeEnd('methodForOf')
}

const methodWhile = () => {
    console.time('methodWhile')
    const array = []
    let i = 0
    while(i < sourceArray.length) {
        array.push(i)
        if(sourceArray[i] === 1) {
            reslut = sourceArray[i]
            break
        }
        i ++
    }
    console.timeEnd('methodWhile')
}

const methodForEach = () => {
    console.time('methodForEach')
    const array = []
    let reslut
    sourceArray.forEach(i => {
        array.push(i)
        if(i === 1) {
            reslut = sourceArray[i]
            return
        }
    })

    console.timeEnd('methodForEach')
}

const methodMap = () => {
    console.time('methodMap')
    const array = []
    let reslut
    sourceArray.map(i => {
        array.push(i)
        if(i === 1) {
            reslut = sourceArray[i]
            return
        }
    })

    console.timeEnd('methodMap')
}

const methodFind = () => {
    console.time('methodFind')
    const array = []
    const reslut = sourceArray.find(i => i === 1)

    console.timeEnd('methodFind')
}

const methodFindIndex = () => {
    console.time('methodFindIndex')
    const array = []
    const reslut = sourceArray.findIndex(i => i === 1)

    console.timeEnd('methodFindIndex')
}

const methodIndexOf = () => {
    console.time('methodIndexOf')
    const array = []
    const reslut = sourceArray.indexOf(1)

    console.timeEnd('methodIndexOf')
}

const methodIncludes = () => {
    console.time('methodIncludes')
    const array = []
    const reslut = sourceArray.includes(1)

    console.timeEnd('methodIncludes')
}

const methodSome = () => {
    console.time('methodSome')
    const array = []
    const reslut = sourceArray.some(i => i === 1)

    console.timeEnd('methodSome')
}


const methodFilter = () => {
    console.time('methodFilter')
    const array = []
    const reslut = sourceArray.filter(i => i === 1)

    console.timeEnd('methodFilter')
}



methodFor()
methodFor_length()
methodFor_item()
methodForIn()
methodForOf()
methodWhile()

methodForEach()
methodMap()

methodIncludes()
methodIndexOf()
methodFind()
methodFindIndex()
methodFilter()
methodSome()