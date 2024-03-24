const http = require('http');

const server = http.createServer((req, res)=>{
    if (req.url == '/'){
        res.write('Welcome to our homepage.')
    }

    if (req.url == '/about'){
        res.write('There is nothing you need to know about us :)')
    }

    res.end();

})

server.listen(5000);