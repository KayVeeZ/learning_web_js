import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    console.log(req.url);
    const met = req.method;
    res.send(`<h2>Hello world, method is ${met}</h2>`);
    console.log(`User sent a ${met} request`);

})


const PORT = 5003;
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
}
);