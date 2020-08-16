const bubble = function (array) {
    const len = array.length
    if (len < 2) return array

    for (let i = 1;i < len;i ++) {
        for (let j = 1; j < len - i + 1; j ++) {
            if (array[j-1] > array[j]) {
                swap(array, j, j - 1)
            }
        }
    }
}

function swap (array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

const array = [2,4,5,6,8,2,1,3,4,55,9,74,32,34,5]

bubble(array)


console.log(array)