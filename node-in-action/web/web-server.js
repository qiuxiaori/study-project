const http = require('http')
const parse = require('url').parse

const server = http.createServer((req, res) => {
    const method = req.method
    console.log(method)
    console.log(parse(req.url))
    res.end()
})

server.listen(3000, () => {
    console.log('server is running on 3000')
})