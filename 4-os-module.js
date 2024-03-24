const os = require('os');

// Info about current user

const user = os.userInfo();

console.log(user);

const osInfo = {
    type: os.type(),
    release: os.release(),
    freeMem: os.freemem(),
    totalMem: os.totalmem()

};

function showSystemInfo() {
    console.log(osInfo.type);
    console.log(osInfo.release);
    console.log(osInfo.freeMem);
    console.log(osInfo.totalMem);
}

const doIt = showSystemInfo()

doIt;