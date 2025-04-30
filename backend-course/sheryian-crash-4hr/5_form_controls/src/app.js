import userModel from '../models/user.js';
import dbConnection from '../config/db.js';

import express, { urlencoded } from 'express';
import morgan from 'morgan'; // 3rd party middleware installed via 'npm i morgan'


const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));

app.use(express.json());

app.use(urlencoded({ extended:true }));

app.use(express.static('public'));

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

app.get('/register', (req,res) => {
  res.render('register');
}
);

app.post('/get-form-data', (req,res)=>{
    console.log(req.body);
    res.send('data received');
})

app.post('/register', async (req,res)=>{
    console.log(req.body);
    const { username, email, password } = req.body;
    const newUser= await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(newUser);
})

app.get('/get-users', (req,res)=>{
    userModel.find().then((users) => {
        res.send(users);
    }        
    );
});


const PORT = 5003;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});