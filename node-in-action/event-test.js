const emitter = require('events')

const my = new emitter()
my.on('d',() => {
    console.log('ddd')
})
my.emit('d')