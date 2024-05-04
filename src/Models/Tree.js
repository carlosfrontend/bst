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
}

export default Tree
