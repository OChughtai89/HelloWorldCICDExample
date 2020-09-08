const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('Hello World');
});


app.listen(port,() =>{
    console.log('Hello World Node app listending on Port ${port}');
});