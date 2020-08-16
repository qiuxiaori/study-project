/**
 * 钢条切割
 * 给定一段长度为n英寸的钢条和一个价格表Pi(i=1,2,…n)，求切割钢条方案，使得销售收益rn最大
 * 如果长度为n英寸的钢条的价格Pn足够大，最优解可能就是完全不需要切割
 */

const prices = [0,1,5,8,9,10,17,17,20,24,30]

const cut = function (n) {
    if (n < 0) {
        return -1
    }

    let profits = new Array(n) // 初始化数组
    profits[0] = 0 // 0英寸 = 0
    profits[1] = prices[1] // 1英寸时不能切割

    for (let i = 2; i <= n; i ++) {
        let profit = prices[i] || 0 // 最优解设为i英寸长的钢条对应的价格 没有对应价格时为0
        for (let j = 1; j <= i/2; j ++ ) { // 将i英寸长的钢条从 1-i/2 英寸进行切割 获得最大值
            profit = Math.max(profit, profits[j]+profits[i-j]) // 最优子结构
        }
        profits[i] = profit
    }
    return profits[n]
}
console.log(cut(19))