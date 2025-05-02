import express from 'express';
import { body, validationResult } from 'express-validator';
import userModel from '../src/models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

// router.get('/test', (req,res) => {
//   res.send('user test route');
// }
// )

// register path
router.get('/register', (req, res) => {
  res.render('register');
}
);

router.post(
  '/register',
  [
    body('email').trim().isEmail().withMessage('Must be a valid email').isLength({ min: 10 }).withMessage('Email must be at least 10 characters long'),
    body('password').trim().isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: 'Invalid data',
      });
    }

    const { username, email, password } = req.body;

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

      await userModel.create({
        email,
        username,
        password: hashedPassword,
      });

      // If you want to redirect after success, use res.redirect without res.sendStatus
      return res.redirect('/user/login');
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Server error' });
    }
  }
);

router.get('/login', (req,res) => {
  res.render('login');
}
)


router.post('/login', 
  body('email').trim().isEmail().isLength({ min: 10 }),
  body('password').trim().isLength({ min: 5 }),
  async (req,res) => {
    

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
        message: "Login not passed" 
      })
    }

    const { email, password } = req.body;

    const user = await userModel.findOne({
      email: email
    })

    if (!user)
    {
      return res.status(400).json({
        message: "email or password is incorrect"
      })
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      {
        return res.status(400).json({
          message: "email or password is incorrect"
        })
      }
    
    const token = jwt.sign({
      userId: user._id,
      email: user.email,
      username: user.username
    }, process.env.JWT_SECRET);

    res.cookie('token', token);
    return res.redirect('/');
    // res.send(`Logged In <br>
    //   <a href="/">Home</a>`);
}
)
export default router;