class Node {
    constructor(key) {
        this.key = key
        this.left = null
        this.right = null
    }
}
const defaultCompare = (left, right) => {
    return left.key >= right.key
}
const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
}
class BinarySearchTree {
    constructor(compareFn = defaultCompare) {
        this.compareFn = compareFn
        this.root = null
    }
    insert(key) {
        if(!this.root) {
            this.root = new Node(key)
        } else {
            this.insertNode(this.root, key)
        }
    }
    insertNode(root, key) {
        const node = new Node(key)
        if(this.compareFn(root, node)) {
            if(!root.left) {
                root.left = node
            } else {
                this.insertNode(root.left, key)
            }
        } else {
            if(!root.right) {
                root.right = node
            } else {
                this.insertNode(root.right, key)
            }            
        }
    }

    search(key) {
        return this.searchNode(this.root, key)
    }
    searchNode(root, key) {
        if(root.key === key) {
            return root
        }
        const node = new Node(key)
        if(this.compareFn(root, node)) {
            if(root.left) {
                return this.searchNode(root.left, key)
            }
        } else {
            if(root.right) {
                return this.searchNode(root.right, key)
            }
            
        }
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback)
    }
    inOrderTraverseNode(node, callback) {
        if(!node) {
            return
        }
        this.inOrderTraverseNode(node.left, callback)
        callback(node)
        this.inOrderTraverseNode(node.right, callback)
    }

    preOrderTraverse(callback) {
        this.preOrderTraverseNode(this.root, callback)
    }
    preOrderTraverseNode(node, callback) {
        if(!node) {
            return
        }
        callback(node)
        this.preOrderTraverseNode(node.left, callback)
        this.preOrderTraverseNode(node.right, callback)
    }

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback)
    }
    postOrderTraverseNode(node, callback) {
        if(!node) {
            return
        }
        this.postOrderTraverseNode(node.left, callback)
        this.postOrderTraverseNode(node.right, callback)
        callback(node)
    }    

    min() {
        return this.minNode(this.root)
    }
    minNode(node) {
        let currNode = node
        while(currNode != null && currNode.left != null) {
            currNode = currNode.left
        }
        return currNode
    }
    max() {
        return this.maxNode(this.root)
    }
    maxNode(node) {
        let currNode = node
        while(currNode != null && currNode.right != null) {
            currNode = currNode.right
        }
        return currNode
    }
    remove(key) {
        const node = ths.search(key)
    }
    getHeight(node) {
        if(node === null) {
            return -1
        }
        return Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1
    }
    getBalanceFactor(node) {
        const heightDifference = this.getHeight(node.left) - this.getHeight(node.right)
        switch (heightDifference) {
            case -2:    // 右边不平衡
                return BalanceFactory.UNBALANCED_RIGHT;
            case -1:    // 右边有点点不平衡
                return BalanceFactory.SLIGHTLY_UNBALANCED_RIGHT;
            case 0:    // 平衡
                return BalanceFactory.BALANCED;
            case 1:    // 左边有点点不平衡
                return BalanceFactory.SLIGHTLY_UNBALANCED_LEFT;
            case 2:    // 左边不平衡
                return BalanceFactory.UNBALANCED_LEFT;
        }
    }
    rotationLL(node) {
        const temp = node.left
        node.left = temp.right
        temp.right = node
        return temp
    }
    rotationRR(node) {
        const temp = node.right
        node.right = node.left
        temp.left = node
        return temp
    }
    rotationRR
}

const tree = new BinarySearchTree()
tree.insert(50)
tree.insert(48)
tree.insert(49)
tree.insert(53)
tree.insert(90)
tree.insert(51)
tree.insert(33)
tree.insert(23)
tree.insert(10)
console.log(tree.getBalanceFactor())


const getTree = (list) => {
    const tree = new BinarySearchTree()
    list.forEach(i => {
        tree.insert(i)
    })
    return tree
}
/**
 * Definition for a binary tree node.
 * function TreeNode(key) {
 *     this.val = key;
 *     this.left = this.right = null;
 * }
 */
