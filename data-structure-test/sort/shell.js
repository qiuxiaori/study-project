function shell(arr) {
    var len = arr.length,
        gap = 1;
    while(gap < len/3) { // 动态获取增量
        gap = gap * 3 + 1;
    }

    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            let temp = arr[i];
            for (var j = i-gap; j >= 0 && temp < arr[j]; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}


function swap (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

const a = [1,5,3,4,2,4,0,8,7,6,9,8]
shell2(a)
console.log(a)
function shell2 (array) {
  const len = array.length
  if (len < 2) return array

  let inc = 1
  while (inc < len/3) {
    inc = 3 * inc + 1
  }

  for (;inc > 0;inc = Math.floor(inc/3)) {
    for (let i = inc; i < len; i++) {
      let temp = array[i]
      for (var j = i - inc; j >= 0 && temp < array[j];j -= inc) {
        array[j+inc] = array[j]
      }
      array[j+inc] = temp
    }
  }
}