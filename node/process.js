/**
 * 事件
 */

// message
// exit
// beforeExit
// rejectionHandled
// unhandledRejection
// uncaughtException

/**
 * 属性
 */
// console.log(process.stdin)
// console.log(process.stdout)
// console.log(process.stderr)
// console.log(process.pid)
// console.log(process.config)
// console.log(process.env)
// console.log(process.platform)
// console.log(process.arch)
// console.log(process.release)
// console.log(process.title)
// console.log(process.connected)
// console.log(process.exitCode)
// console.log(process.argv)
// console.log(process.execPath)
// console.log(process.version)
// console.log(process.versions)

/**
 * 方法
 */
// [process.send(message[, sendHandle[, options]], callback]) process.nextTick(callback[, arg][, ...])
// process.disconnect()
// process.exit([code])
// process.abort()
// process.kill(pid[, signal]) process.cwd() process.chdir(directory) process.memoryUsage() process.umask([mask]) process.uptime()
// process.hrtime()
// process.setuid(id)
// process.getuid()
// process.setgid(id)
// process.getgid()
// process.seteuid(id)
// process.geteuid()
// process.setegid(id)
// process.getegid() process.setgroups(groups) process.getgroups() process.initgroups(user, extra_group)

process.on('message', (data) => {
    console.log(data)
})

process.on('exit', (code) => {
    console.log('exit', code)
})
process.on('beforeExit', (code) => {
    console.log('beforeExit', code)
})
const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, p) => {
    unhandledRejections.set(p, reason);
});
process.on('rejectionHandled', (p) => { 
    unhandledRejections.delete(p);
});