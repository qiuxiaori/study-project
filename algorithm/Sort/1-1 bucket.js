const bucket = function (array) {
  let nums = new Array(0,0,0,0,0,0,0,0,0,0)
  for (let i = 0; i < array.length; i ++) {
    nums[array[i]]++
  }
  for (let j = 9; j > -1; j --) {
    if (nums[j]) {
      for (let k = 0; k < nums[j]; k ++) console.log(j)
    }
  }
}


bucket([1,3,4,5,6,7,3,2,3,2,2,2,3])