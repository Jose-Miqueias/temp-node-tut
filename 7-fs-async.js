const {readFile, writeFile} = require('fs');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(result);

    const first = result;

    writeFile('./content/result-async.txt', `The result is: ${first}`, (err, result)=>{
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })
})