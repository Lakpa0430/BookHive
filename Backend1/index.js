const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./route/user.router.js');
const authRouter = require('./route/auth.router.js');
dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

  app.use('/api/user', userRouter);
  app.use('/api/auth', authRouter);

