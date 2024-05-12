import mergeSort from './Functions/mergeSort.js'
import prettyPrint from './Functions/prettyPrint.js'
import Tree from './Models/Tree.js'

let arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
arr = [...new Set(mergeSort(arr))] // Sort and remove duplicates of the array
const bst = new Tree(arr)

// INSERT

bst.insert(22)
bst.insert(44)

// DELETE

bst.delete(3)
bst.delete(6345)
bst.delete(5)
bst.delete(4)

// FIND VALUE

console.log('\n ######### FIND VALUE #########\n')
console.log(bst.findValue(67))
prettyPrint(bst.root)

// LEVEL ORDER IRERATIVE

console.log('\n ######### LEVEL ORDER ITERATIVE #########\n')
console.log(bst.levelOrderIterative())
prettyPrint(bst.root)

// LEVEL ORDER RECURSIVE

console.log('\n ######### LEVEL ORDER RECURSIVE #########\n')
console.log(bst.levelOrderRecursive())
prettyPrint(bst.root)

console.log('\n ######### IN ORDER WITH CALLBACK AS PARAMETER #########\n')
console.log(bst.inOrder(bst.root, bst.orderCallback))
prettyPrint(bst.root)

console.log('\n ######### IN ORDER WITHOUT CALLBACK AS PARAMETER #########\n')
console.log(bst.inOrder(bst.root))
prettyPrint(bst.root)

console.log('\n ######### PRE ORDER WITH CALLBACK AS PARAMETER #########\n')
console.log(bst.preOrder(bst.root, bst.orderCallback))
prettyPrint(bst.root)

console.log('\n ######### PRE ORDER WITHOUT CALLBACK AS PARAMETER #########\n')
console.log(bst.preOrder(bst.root))
prettyPrint(bst.root)

console.log('\n ######### POST ORDER WITH CALLBACK AS PARAMETER #########\n')
console.log(bst.postOrder(bst.root, bst.orderCallback))
prettyPrint(bst.root)

console.log('\n ######### POST ORDER WITHOUT CALLBACK AS PARAMETER #########\n')
console.log(bst.postOrder(bst.root))
prettyPrint(bst.root)
