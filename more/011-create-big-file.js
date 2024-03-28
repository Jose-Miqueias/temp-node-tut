const {writeFileSync} = require('fs')

for (let c = 0; c < 10000; c++){
    writeFileSync('./content/big.txt', `No such thing as impossible ${c}\n`, {flag: 'a'})
}

console.log('Done.')

