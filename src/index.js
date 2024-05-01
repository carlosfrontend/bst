import mergeSort from './Functions/mergeSort.js'
import prettyPrint from './Functions/prettyPrint.js'
import Tree from './Models/Tree.js'

let arr = []
arr = [...new Set(mergeSort(arr))] // Sort and remove duplicates of the array
const bst = new Tree(arr)

// PRINT THE TREE
prettyPrint(bst.root)
