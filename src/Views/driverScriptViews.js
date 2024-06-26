import getRandomNumbersArray from '../Functions/getRandomNumbersArray.js'
import prettyPrint from '../Functions/prettyPrint.js'
import randomGreaterThan100 from '../Functions/randomGreaterThan100.js'
import Tree from '../Models/Tree.js'

const driverScriptView = (size) => {
  const bst = new Tree(getRandomNumbersArray(size))
  console.log('\n****************************************')
  console.log('****************************************')
  console.log('******** STARTS DRIVER SCRIPT **********')
  console.log('****************************************')
  console.log('****************************************\n')
  prettyPrint(bst.root)
  console.log('\nIs the tree balanced ?')
  console.log(bst.isBalanced(bst.root))
  console.log(`\nLevel Order: ${JSON.stringify(bst.levelOrderRecursive())}`)
  console.log(`\nPre Order: ${JSON.stringify(bst.preOrder(bst.root))}`)
  console.log(`\nPost Order: ${JSON.stringify(bst.postOrder(bst.root))}`)
  console.log(`\nIn Order: ${JSON.stringify(bst.inOrder(bst.root))}`)
  const firstNumber = randomGreaterThan100()
  const secontNumber = randomGreaterThan100()
  const thirdNumber = randomGreaterThan100()
  const fourthNumber = randomGreaterThan100()
  bst.insert(firstNumber)
  console.log(`\nInserted: ${firstNumber}`)
  bst.insert(secontNumber)
  console.log(`\nInserted: ${secontNumber}`)
  bst.insert(thirdNumber)
  console.log(`\nInserted: ${thirdNumber}`)
  bst.insert(fourthNumber)
  console.log(`\nInserted: ${fourthNumber}`)
  console.log('\n')
  prettyPrint(bst.root)
  console.log('\nIs the tree balanced ?')
  console.log(bst.isBalanced(bst.root))
  console.log('\nRebalance the tree !!\n')
  bst.rebalance()
  prettyPrint(bst.root)
  console.log('\nIs now the tree balanced ?')
  console.log(bst.isBalanced(bst.root))
  console.log(`\nLevel Order: ${JSON.stringify(bst.levelOrderRecursive())}`)
  console.log(`\nPre Order: ${JSON.stringify(bst.preOrder(bst.root))}`)
  console.log(`\nPost Order: ${JSON.stringify(bst.postOrder(bst.root))}`)
  console.log(`\nIn Order: ${JSON.stringify(bst.inOrder(bst.root))}`)
  console.log('\n****************************************')
  console.log('****************************************')
  console.log('******** ENDS DRIVER SCRIPT **********')
  console.log('****************************************')
  console.log('****************************************\n')
}

export default driverScriptView
