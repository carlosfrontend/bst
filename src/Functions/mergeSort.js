const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }
  const middle = parseInt(arr.length / 2, 10)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle, arr.length)

  const merge = (leftArr, rightArr) => {
    const myArray = []
    let leftIndex = 0
    let rightIndex = 0
    left = leftArr
    right = rightArr

    while (leftIndex < left.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        myArray.push(leftArr[leftIndex])
        leftIndex += 1
      } else {
        myArray.push(rightArr[rightIndex])
        rightIndex += 1
      }
    }

    return myArray.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
  }

  return merge(mergeSort(left), mergeSort(right))
}

export default mergeSort
