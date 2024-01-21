const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config/config.env' });
require('./db/conn');

app.use(express.json());
const PORT = process.env.PORT;

const { router, middleware } = require('./router/auth.js');

app.use('/', router); 


app.get('/', (req, res) => {
    res.send("Hello world from the server from app");
});

app.get('/about', middleware, (req, res) => {
    res.send("This is the about page.");
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
