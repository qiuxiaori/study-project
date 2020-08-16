/**
 * 斐波那契数列
 */

/**
 * @param {Number} n 第 n 个斐波那契数
 */
// function recursion (n) {
//     if (n < 0) {
//         return -1
//     }
//     if (n = 0) 
// }

function top (n) {

}

function bottom (n) {
    if (n < 0) {
        return -1
    }
    let res = new Array(n-1) // 初始化数组
    res[0] = 0 // 第1个 = 0
    res[1] = 1 // 第2个 = 1

    for (let i = 2; i < n; i++) {
        res[i] = res[i-1] + res[i-2] // 重叠子问题: 第i个= 第i-1个 + 第i-2个
    }
    return res[n-1]
}


console.log(bottom(3))
