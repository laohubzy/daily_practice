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
console.log(tree.max())
