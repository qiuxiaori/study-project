function insert (array) {
  const len = array.length
  if(!len) return array

  for (let i = 0; i < len; i++) {
    for (let j = i; array[j] < array[j-1] && j > -1; j--) {
      swap(array, j, j-1)
    }
  }
}


function swap (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}


const a = [1,5,3,4,2,7,6,9,8]
insert(a,0,8)
console.log(a)