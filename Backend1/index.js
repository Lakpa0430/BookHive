const  express = require('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// dotenv.config({path: './config.env'})
dotenv.config();

// mongoose.connect(process.env.DATABASE);
mongoose.connect("mongodb+srv://JobPortal:getAJob@123@getajob.dpi4njt.mongodb.net/getAJob?retryWrites=true&w=majority");

const app = express();
 
app.listen(300, () => {
    console.log("server is running on port 3000");
});