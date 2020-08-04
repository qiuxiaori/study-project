function swap (array, i, j) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

/**
 * 冒泡排序
 * @param {Array} array 待排数组
 */
function bubble (array) {
  const len = array.length
  if (!len) return

  for (let i = 0;i < len;i++) {
    for (let j = len-1;j > i;j--){
      if (array[j-1] > array[j]) {
        swap(array, j-1, j)
      }
    }
  }
}

function bubblePlus (array) {
   const len = array.length
  if (!len) return
  let flag = true
  for (let i = 0;i < len && flag;i++) {
    flag = false
    for (let j = len-1;j > i;j--){
      if (array[j-1] > array[j]) {
        swap(array, j-1, j)
        flag = true
      }
    }
  }
}
const array = [3,4,5,2,4,5,7,1,3,0]
bubblePlus(array)
console.log(array)