let os = require('os');

// info about current user
let user = os.userInfo();


// returns system uptime in seconds

console.log(`The system uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log('currentOS',currentOS);