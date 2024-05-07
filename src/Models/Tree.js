import buildTree from '../Functions/buildTree.js'
import Node from './Node.js'

class Tree {
  // CONSTRUCTOR
  constructor (arr) {
    this.root = buildTree(arr, 0, arr.length - 1)
  }

  // METHODS
  insert (value) {
    // Inserts a new node into the tree
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
    if (current === null) return
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

  levelOrder (callback = this.enqueu) {
    return callback(this.root)
  }
}

export default Tree
