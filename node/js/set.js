/**
 * 实例属性
 */

const set = new Set()

console.log(set.size)

/**
 * 实例方法
 */
set.add('2')
console.log(set.has('2'))
console.log(set.size)
set.delete('2')
console.log(set.size)

set.add('3')
console.log(set.size)
set.clear()
console.log(set[0])

/**
 * 遍历操作
 */

 
set.add('3').add('4')
for (let item of set.keys()) {
    console.log(item)
}

for (let item of set.values()) {
    console.log(item)
}

for (let item of set.entries()) {
    console.log(item)
}

set.forEach((value, key) => console.log(key + ' : ' + value))