const cp = require('child_process');
const spawn = cp.spawn;
const ls = spawn('ls', ['-lh', '/usr']);
ls.stdout.on('data', (data) => { 
    console.log(`stdout: ${data}`);
});
ls.stderr.on('data', (data) => { 
    console.log(`stderr: ${data}`);
});
ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
console.log('pid', ls.pid)

// 'message' 事件 'disconnect' 事件 'close' 事件
// 'exit' 事件
// 'error' 事件
// child.pid
// child.connected
// child.stdio
// child.stdin
// child.stdout
// child.stderr

// const fork1 = cp.fork()
// console.log(fork1)