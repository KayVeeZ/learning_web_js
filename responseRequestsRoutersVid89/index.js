const express = require('express');
const app = express();
const port = 3000;
const blog = require('./routes/blog');

app.use('/blog', blog);

app.use(express.static('public')); // makes files in public folder public

app.get('/', (req, res) => {
    console.log("This is a Get request");
    res.send('Hello World!');
}).post('/', (req, res) => {
    console.log("This is a post request");
    res.send('Hello World! post');
}).put('/', (req, res) => {
    console.log("This is a put request");
    res.send('Hello World! put');
});

app.get('/index', (req, res) => {
    console.log("Hey its index");
    res.sendFile('./templates/index.html', {root: __dirname});
});

app.get('/api', (req,res)=>{
    res.json({a:1,b:2, name: ["kshitij", "batman"]});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});