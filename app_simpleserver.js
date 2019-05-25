
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/sd'){
        res.write('Hello world')
        res.end();
    }
    if(req.url==='/api/courses'){
        res.write(JSON.stringify(['Java:125,pava:111']))
        res.end();

    }
});



server.listen(3001);

console.log('Listening on port 3001');