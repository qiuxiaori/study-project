/**
 * 小朋友过桥
 * 在一个夜黑风高的晚上，有n（n <= 50）个小朋友在桥的这边，现在他们需要过桥
 * 由于桥很窄，每次只允许不大于两人通过，他们只有一个手电筒，所以每次过桥的两个人需要把手电筒带回来
 * i号小朋友过桥的时间为T[i]，(T[i] > T[i-1])两个人过桥的总时间为二者中时间长者
 * 问所有小朋友过桥的总时间最短是多少
 */

const T = [1,2,4,5,6,8,10]
const crossBridge = function (T, n) {
    n = n > T.length ? T.length : n
    if (n < 0 || n > 50) {
        return -1
     }
    let res = new Array(n)
    res[0] = 0
    res[1] = 1
    res[2] = 2

    for (let i = 3; i <= n; i++) {
        // 一种是让花费时间最少的人跑来跑去，一种是 比较两种方式哪个最优
        res[i] = Math.min(res[i-1] + T[i-1] + T[0], res[i-2] + T[i-1] + T[0] + 2 * T[1])
    }

    return res[n]
}

console.log(crossBridge(T,4))
