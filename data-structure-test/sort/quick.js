function quick (array, start, end) {
  if (start < end) {
    const piovt = getPiovt(array, start, end)
    quick(array, start, piovt-1)
    quick(array, piovt+1, end)
  }
}


function getPiovt(array, i, j) {
  const piovt = array[i]
  while (i < j) {
    while (i < j && array[j] >= piovt) {
      j--
    }
    array[i] = array[j]
    while (i < j && array[i] <= piovt) {
      i++
    }
    array[j] = array[i]
  }
  array[i] = piovt
  return i
}
const a = [1,5,3,4,2,7,6,9,8]
quick(a,0,8)
console.log(a)