import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    console.log(req.url);
    const met = req.method;
    res.send(`<head><title>Home Page</title></head>
            <h1>Hello world! Welcome to home Page! Method is ${met}</h1>
            <a href="/about">Go to About</a><br/>
            <a href="/profile">Go to Profile</a>`);
    console.log(`User sent a ${met} request`);

})

app.get('/about',(req,res)=>{
    res.send(`
        <head><title>About Page</title></head>
        <h2>about page</h2>
        <a href="/profile">Go to Profile</a><br/>
            <a href="/">Go to Home</a>`);
})

app.get('/profile', (req,res)=>{
    res.send(`
        <head><title>Profile Page</title></head>
        <h2>profile page</h2>
        <a href="/about">Go to About</a><br/>
        <a href="/">Go to Home</a>`);
})


const PORT = 5003;
app.listen(PORT, ()=>{
    console.log(`Server is running at port ${PORT}`);
}
);