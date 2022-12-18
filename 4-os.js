const os = require('os');

// info about current user
const user = os.userInfo();
console.log(`The current user is ${user.username}`);

// method returns the system uptime in seconds
const uptime = os.uptime();
console.log(`The system uptime is ${uptime} seconds`);

const currentOS = { type: os.type(), release: os.release(), cpu: os.cpus(), totalMem: os.totalmem(), freeMem: os.freemem() };
console.log('System info: ', currentOS);
