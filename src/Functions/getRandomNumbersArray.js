import mergeSort from './mergeSort.js'

const getRandomNumbersArray = (size) => {
  let randNumbsArr = []

  while (randNumbsArr.length < size) {
    randNumbsArr.push(((Math.round(Math.random() * 100)) * 100) / 100)
    randNumbsArr = [...new Set(mergeSort(randNumbsArr))]
  }

  return randNumbsArr
}

export default getRandomNumbersArray
