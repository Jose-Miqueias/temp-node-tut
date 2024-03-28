const eventEmitter = require('events')

const customEmitter = new eventEmitter()

customEmitter.on('response', ()=>{
    console.log('Branchreality corp.')
})

customEmitter.on('response', (name, report)=>{
    console.log(report)
    console.log(`data received. Thanks, ${name}.`)
})

customEmitter.emit('response', 'Marcos', 'I found the object near the lake.')