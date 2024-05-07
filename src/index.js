import mergeSort from './Functions/mergeSort.js'
import prettyPrint from './Functions/prettyPrint.js'
import Tree from './Models/Tree.js'

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
arr = [...new Set(mergeSort(arr))] // Sort and remove duplicates of the array
const bst = new Tree(arr)

// INSERT

bst.insert(22)

// DELETE

bst.delete(3)
bst.delete(6345)
bst.delete(5)
bst.delete(4)

// FIND VALUE

console.log('\n ######### FIND VALUE #########\n')
console.log(bst.findValue(67))

// LEVEL ORDER IRERATIVE

console.log('\n ######### LEVEL ORDER ITERATIVE #########\n')
console.log(bst.levelOrderIterative(bst.Tree))

// LEVEL ORDER RECURSIVE

console.log('\n ######### LEVEL ORDER RECURSIVE #########\n')


// PRINT THE TREE

prettyPrint(bst.root)
