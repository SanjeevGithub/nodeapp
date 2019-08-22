
const express = require('express')

const app=express();

app.get('/customer',(req,res)=>{
    res.write('<H1>Inside HTML tag changes</H1>')
    res.end()
})

app.get('/customer/:id',(req,res)=>{

    res.write(req.params.id);
    res.end()
})

const port=process.env.PORT||3001

app.listen(port,()=>{
    console.log(`listening on ${port}`)
});

