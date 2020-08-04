function select (array) {
  const len = array.length
  if (len < 2) return array

  for (let i = 0;i < len;i++) {
    let temp = i
    for (let j = i; j < len;j++) {
      if (array[j] < array[temp]) temp = j
    }
    if (temp !== i) swap(array, temp, i)
  }
}

function swap (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}


const array = [3,4,5,2,4,5,7,1,3,0]
select(array)
console.log(array)