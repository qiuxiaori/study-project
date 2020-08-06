// 需要两个方法，一个获取哨兵归位后的下标，一个递归
const quick = function (array, start, end) {
    if (start > end) return
    const poivtIndex = getPoivtIndex(array, start, end)
    quick(array, start, poivtIndex - 1)
    quick(array, poivtIndex + 1, end)
}

const getPoivtIndex = function (array, start, end) {
    const poivt = start
    while (start < end) {
        while (start < end && array[end] > array[poivt]) {
            end --
        }
        while (start < end && array[start] <= array[poivt]) {
            start ++
        }
        if (start !== end) swap(array, start, end)
    }
    if (start !== poivt) swap(array, poivt, start)
    return start
}


function swap (array, i, j) {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}





const array = [2,4,5,6,8,2,1,3,4,55,9,74,32,34,5]

quick(array, 0, 14)


console.log(array)