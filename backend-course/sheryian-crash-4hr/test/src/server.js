// import express from 'express'

// const app = express();

// app.get('/',(req,res)=>{
//     const met = req.method;
//     res.send(`Hello world, method is ${met}`);
//     console.log(`User sent a ${met} request`);

// })


// const PORT = 5003;
// app.listen(PORT, ()=>{
//     console.log(`Server is running at port ${PORT}`);
// }
// );

import http from 'http'

const server = http.createServer((req, res) => {
    console.log(req.url);
    const met = req.method;
    console.log(`User sent a ${met} request`);
    res.end(`
<head><title>Title</title></head>
<h1>Hello world! Method is ${met}</h1>`);

})

const PORT = 5003;

server.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
}
)