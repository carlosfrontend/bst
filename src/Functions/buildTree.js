import Node from '../Models/Node.js'

const buildTree = (array, start, end) => {
  if (start > end) return null
  const mid = Math.floor((start + end) / 2)
  const root = new Node(array[mid])
  root.left = buildTree(array, start, mid - 1)
  root.right = buildTree(array, mid + 1, end)
  return root
}

export default buildTree
