import express from 'express';

const app = express();

app.set('view engine', 'ejs');

app.use((req,res,next)=>{
    console.log("Do I know how to use middleware?");
    return next();
})

app.get('/',(req,res)=>{
    console.log(req.url);
    res.render("index");
})

app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/profile', (req,res)=>{
    res.render('profile');
})


const PORT = 5003;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});