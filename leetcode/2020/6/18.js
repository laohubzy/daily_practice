var recoverFromPreorder = function(S) {
    if(S.length <= 1) {
        return [S]
    }
    const root = S.charAt(0)
    const list = S.match(/(\-+\d)/g)
    
    const reslut = [root]
    return list
};
let SS = '1-2--3--4-5--6--7'
console.log(recoverFromPreorder(SS))