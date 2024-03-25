const fs = require('fs');

console.log('started a first task.');
// CHECK FILE PATH!!!
fs.readFile('./content/first.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
    console.log('Completed first task!');
})
console.log('starting next task.')