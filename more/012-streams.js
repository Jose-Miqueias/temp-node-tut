const {createReadStream} = require('fs');
const { stubObject } = require('lodash');

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000});

// highWaterMark -> Chunk size

stream.on('data', (chunk)=> {
    console.log('new chunk of data received:')
    console.log(chunk)
})

stream.on('error', (err) => console.log(err))