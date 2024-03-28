const {readFile, writeFile} = require('fs').promises

const start = async ()=>{
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-granate.txt', 'These shall be the blueprints for the project.')
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()
console.log('last.')




// const getText = (path) => {
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, result)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(result);
//             }
//         })
//     })
// }

// getText('./content/first.txt').then((data => {console.log(data)})).catch(err => {console.log(err)})