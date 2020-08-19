const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.has(o) // false
console.log(m.size)
console.log(m.get(o))
m.delete(o) // true