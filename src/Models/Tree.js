import buildTree from '../Functions/buildTree.js'
import Node from './Node.js'

class Tree {
  // CONSTRUCTOR
  constructor (arr) {
    this.root = buildTree(arr, 0, arr.length - 1)
  }

  // METHODS
  insert (value) {
    const insertRec = (root, value) => {
      if (root === null) {
        root = new Node(value)
        return root
      }

      if (value < root.data) {
        root.left = insertRec(root.left, value)
      } else if (value > root.data) {
        root.right = insertRec(root.right, value)
      }

      return root
    }

    return insertRec(this.root, value)
  }

  delete (value) {
    const deleteRec = (root, value) => {
      if (root === null || value === undefined) {
        return root
      }

      if (value < root.data) {
        root.left = deleteRec(root.left, value)
      } else if (value > root.data) {
        root.right = deleteRec(root.right, value)
      } else {
        if (root.left === null) {
          return root.right
        } else if (root.right === null) {
          return root.left
        }
        const findMin = (root) => {
          let minValue = root.data
          while (root.left !== null) {
            minValue = root.left.data
            root = root.left
          }
          return minValue
        }

        root.data = findMin(root.right)
        root.right = deleteRec(root.right, root.data)
      }

      return root
    }

    return deleteRec(this.root, value)
  }

  findValue (value) {
    const findValueRec = (root, value) => {
      let current = root

      while (current) {
        if (value === undefined) {
          return 'Write a value please!'
        } else if (current.data > value) {
          current = current.left
        } else if (current.data < value) {
          current = current.right
        } else {
          console.log('Found!')
          return current
        }
      }

      if (!current) {
        return `The value ${value} not was found in the tree!`
      }
    }

    return findValueRec(this.root, value)
  }

  enqueu (current) {
    const QUEU = []
    const arr = []
    if (current === null) return arr
    QUEU.push(current)

    while (QUEU.length) {
      current = QUEU.shift()
      QUEU.unshift()
      arr.push(current.data)
      if (current.left) QUEU.push(current.left)
      if (current.right) QUEU.push(current.right)
    }
    return arr
  }

  levelOrderIterative (callback = this.enqueu) {
    return callback(this.root)
  }

  levelOrderRecursive () {
    const arr = []
    let orderedArr = []

    const traverse = (current, level) => {
      if (!current) return

      if (arr.length <= level) {
        arr.push([])
      }

      arr[level].push(current.data)

      traverse(current.left, level + 1)
      traverse(current.right, level + 1)
    }

    traverse(this.root, 0)

    arr.forEach((el, index) => {
      orderedArr = orderedArr.concat(arr[index])
    })

    return orderedArr
  }

  orderCallback (data) {
    console.log(`${data}`)
  }

  inOrder (root, callback = null) {
    const res = []

    const process = (root) => {
      if (root === null) {
        return null
      }
      process(root.left)
      res.push(root.data)
      if (callback) {
        callback(root.data)
      }
      process(root.right)
    }
    process(root)
    return res
  }

  preOrder (root, callback = null) {
    const res = []
    const process = (root) => {
      if (root === null) {
        return null
      }

      res.push(root.data)
      if (callback) {
        callback(root.data)
      }
      process(root.left)
      process(root.right)
    }
    process(root)
    return res
  }

  postOrder (root, callback = null) {
    const res = []
    const process = (root) => {
      if (root === null) {
        return null
      }

      process(root.left)
      process(root.right)
      res.push(root.data)
      if (callback) {
        callback(root.data)
      }
    }
    process(root)
    return res
  }

  height (node) {
    if (!node) return -1
    const leftHeight = this.height(node.left)
    const rightHeight = this.height(node.right)

    return 1 + Math.max(leftHeight, rightHeight)
  }

  depth (node) {
    const findDepth = (current, target, currentDepth) => {
      if (!current) return -1
      if (current === target) return currentDepth

      const leftDepth = findDepth(current.left, target, currentDepth + 1)
      const rightDepth = findDepth(current.right, target, currentDepth + 1)

      if (leftDepth === -1 && rightDepth === -1) return -1
      return Math.max(leftDepth, rightDepth)
    }

    return findDepth(this.root, node, 0)
  }

  isBalanced (root) {
    if (!root) return true
    const leftHeight = this.height(root.left)
    const rightHeight = this.height(root.right)

    if (leftHeight > rightHeight) {
      if ((leftHeight - rightHeight) > 1) {
        return false
      } else {
        return true
      }
    } else if (rightHeight > leftHeight) {
      if ((rightHeight - leftHeight) > 1) {
        return false
      } else {
        return true
      }
    }
    return true
  }

  rebalance () {
    if (!this.root) return
    const arr = this.inOrder(this.root)
    this.root = buildTree(arr, 0, arr.length - 1)
  }
}

export default Tree
