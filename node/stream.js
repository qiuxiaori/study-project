const fs = require('fs')

const r = fs.createReadStream('./os.js')

// r.on('readable', (data) => {
//     console.log('可以读取了')
// })
r.on('data', (chunk) => {
    console.log(chunk.toString())
})
r.on('end', () => {
    console.log('end')
})
r.on('close', () => console.log('close'))

const w = fs.createWriteStream('./test.js')
w.on('pipe', () => console.log('pipe start'))
w.on('end', () => {
    console.log('w end')
})
r.pipe(w)