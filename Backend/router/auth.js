const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require("../db/conn");
const User = require("../models/userSchemes");

router.get('/', (req, res) => {
  res.send("Hello world from the server from router");
});
router.get('/contact', (req, res) => {
  res.cookie("test", 'jwtoken');
  res.send("Hello world from the server from contact");
});

// using promisses 

// router.post('/register', (req, res) => {

//     const {name, email, skills, password, cpassword} = req.body;
//     if(!name || !email || !skills || !password || !cpassword) {
//         return res.status(422).json({error :"Please fill all the field."});
//     }
//     else if(password != cpassword){
//         return res.status(400).json({error :"Invalid cridential"});
//     }

//     User.findOne({email: email})
//     .then((userExist) => {
//         if(userExist) {
//         return res.status(400).json({error :"Email already exist."});
//         }
//     })

//     const user = new User({name, email, skills, password, cpassword});

//     user.save().then(() => {
//         return res.status(201).json({message :"User register successfully."});
//     }).catch(error => {
//         console.log(error);
//     });

//     console.log(req.body);
//     // res.send("register page");
//   });


// using async 
router.post('/register', async (req, res) => {
  const { name, email, skills, password, cpassword } = req.body;

  if (!name || !email || !password || !cpassword || !skills) {
    return res.status(400).send({ Error: "Please fill all the fields" });
  }

  if (password != cpassword) {
    return res
      .status(400)
      .send({ Error: "Password and Confirm Password does not match" });
  }

  try {
    const userExist = await User.findOne({ email: email });

    if (userExist) {
      return res.status(400).json({ error: "Email already exists" });
    } else {
      const user = await User.create({ name, email, skills, password, cpassword });

      if (user) {
        return res.status(200).send({ msg: "Registration successful" });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.post('/login', async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(422).json({ error: "Please fill all the fields." });
    }

    const loginUser = await User.findOne({ email: email });

    if (loginUser) {
      // check paw with database 
      const isMatch = await bcrypt.compare(password, loginUser.password);

      token = await loginUser.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 2589200000),
        httpOnly: true
      });

      if (!isMatch) {
        return res.status(404).json({ error: "invalid crediential" });
      } else {
        res.json({ message: "User login Successfully" });
      }
    } else {
      return res.status(404).json({ error: "invalid crediential" });
    }


    // Here you can add logic to check the password and perform authentication
    // Example: if (loginUser.password !== password) { ... }

    // If authentication is successful, you can send a success response

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal server error" });
  }
});


const middleware = (req, res, next) => {
  console.log(req.body);
  next();
}

module.exports = { router, middleware };
