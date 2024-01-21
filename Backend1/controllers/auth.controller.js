// const signUpUser =  (req, res) =>{
//     console.log("I am here");
//     console.log(res.body);
// };
// module.exports = signUpUser

const signUpUser = (req, res) => {
    console.log("I am here");
    console.log(req.body); // Changed res.body to req.body
};

module.exports = {
    signUpUser: signUpUser
};
