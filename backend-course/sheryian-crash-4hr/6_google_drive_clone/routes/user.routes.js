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

router.post('/register',
  body('email').trim().isEmail().isLength({ min: 10 }),
  body('password').trim().isLength({ min: 5 }),
  body('username').trim().isLength({ min: 3 }),
  

  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json(
        {
          errors: errors.array(),
          message: "Invalid data"
        }
      );
    }
    const { username, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.create({
      email,
      username,
      password: hashedPassword
    });

    res.json(newUser);
  }
)

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

    const isMatch = bcrypt.compare(password, user.password);

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
    res.send("Logged In");
}
)
export default router;