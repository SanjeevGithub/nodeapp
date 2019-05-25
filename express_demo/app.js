
const express = require('express')

const app=express();

app.get('/customer',(req,res)=>{
    res.write('<H1>Inside HTML tag</H1>')
    res.end()
})

app.listen(3001);
console.log('listening on 3001');
