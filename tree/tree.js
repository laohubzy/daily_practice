class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class BasicTree {
    constructor() {
        this.root = null
    }
    insert(val) {
        if(!this.root) {
            this.root = new TreeNode(val)
        } else {
            this.insertNode(this.root, val)
        }
    }
    insertNode(node, val) {
        if(!node.left) {
            node.left = new TreeNode(val)
            return
        }
        if(!node.right) {
            node.right = new TreeNode(val)
            return
        }
        this.insertNode(node.left, val)
    }
    insertNodeList(list) {
        list.forEach(i => {
            this.insert(i)
        })
    }
}


const basicTree = new BasicTree()
basicTree.insertNodeList([-10,9,20,null,null,15,7])

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    const dsf = (node) => {
        if(!node) return 0
        
        const rightMax = dsf(node.right)
        const maxLeft = dsf(node.left)
        return Math.max(...[node.val, maxLeft + node.val, maxLeft + node.val + rightMax])
    }
    return dsf(root)
 };

 console.log(maxPathSum(basicTree))
//  var maxPathSum = function(root) {
//     let resultArr = [];
//     let helper = function(node){
//         if(node == null) return 0;
//         let leftPathVal = Math.max(helper(node.left), 0);
//         let rightPathVal = Math.max(helper(node.right), 0);
//         resultArr.push(leftPathVal+rightPathVal+node.val)
//         return Math.max(leftPathVal,rightPathVal)+node.val;
//     }
//     resultArr.push(helper(root));
//     return Math.max.apply(null,resultArr);
// };

// maxPathSum(basicTree)