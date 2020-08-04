// function quick (array,i,j) {
//   if (i < j) {
//     let poivt = getPoivt(array, i, j)
//     quick(array,i, poivt -1)
//     quick(array, poivt+1, j)
//   }
// }

// function getPoivt (array, i, j) {
//   let temp = array[i]
//   while (i < j) {
//     while (i < j && array[j] >= temp) {
//       j--
//     }
//     array[i] = array[j]
//     while (i < j && array[i] <= temp) {
//       i++
//     }
//     array[j] = array[i]
//   }
//   array[i] = temp
//   return i
// }

// function select (array) {
//   const len = array.length
//   if (len < 2) return array

//   for (let i = 0; i < len; i++) {
//     let p = i
//     for (let j = i; j < len; j++) {
//       if (array[j] < array[p]) p = j
//     }
//     if (i !== p) swap(array, i, p)
//   }
// }

function swap (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

// function bubble (array) {
//   let len = array.length
//   if (len < 2) return array

//   for (let i = 0;i < len; i++) {
//     for (let j = len - 1;j >= i; j --) {
//       if (array[j] < array[i]) swap(array, i, j)
//     }
//   }
// }

function insert (array) {
  let len = array.length
  if (len < 2) return array

  for (let i = 0; i < len; i++) {
    for (let j = i; j > -1 && array[j] < array[j-1]; j --) {
      swap(array, j ,j-1)
    }
  }
}

function shell (array) {
  let len = array.length
  if (len < 2) return array

  let inc = 1
  while (inc < len) {
    inc = inc * 3 + 1
  }
  for (;inc > 0;inc = Math.floor(inc/3)) {
    for (let i = inc; i < len; i ++) {
      for (let j = i-inc; j > -1 && array[j] < array[j-inc]; j -= inc) {
        swap(array, j, j - inc)
      }
    }
  }


}

const a = [1,3,4,3,2,6,7,4,8,3,9,3,1]
shell(a,0,12)
console.log(a)