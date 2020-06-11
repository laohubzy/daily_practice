const sourceArray = new Array(10000000).fill(9)
sourceArray[999999] = 1

const methodFor_length = () => {
    console.time('methodFor_length')
    let reslut
    const length = sourceArray.length
    for(let i = 0; i < length; i ++) {
        if(sourceArray[i] === 1) {
            reslut = sourceArray[i]
            break
        }
    }
    console.timeEnd('methodFor_length')
}

const methodForOf = () => {
    console.time('methodForOf')
    let reslut
    for(let i of sourceArray) {
        if(i === 1) {
            reslut = i
            break
        }
    }
    console.timeEnd('methodForOf')
}

const methodWhile = () => {
    console.time('methodWhile')
    let reslut
    let i = 0
    while(i < sourceArray.length) {
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
    let reslut
    sourceArray.forEach(i => {
        if(i === 1) {
            reslut = i
            return
        }
    })
    console.timeEnd('methodForEach')
}

const methodFind = () => {
    console.time('methodFind')
    const reslut = sourceArray.find(i => i === 1)
    console.timeEnd('methodFind')
}

const methodFindIndex = () => {
    console.time('methodFindIndex')
    const index = sourceArray.findIndex(i => i === 1)
    let reslut = sourceArray[index]
    console.timeEnd('methodFindIndex')
}

const methodIndexOf = () => {
    console.time('methodIndexOf')
    const index = sourceArray.indexOf(1)
    let reslut = sourceArray[index]
    console.timeEnd('methodIndexOf')
}

const methodFilter = () => {
    console.time('methodFilter')
    const reslut = sourceArray.filter(i => i === 1)
    console.timeEnd('methodFilter')
}

methodFor_length()
methodForOf()
methodWhile()
methodForEach()
methodFind()
methodFindIndex()
methodIndexOf()
methodFilter()

const a = [{b:1, c:2}]
console.log(a.map(i => i))