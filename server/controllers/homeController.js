var mongoose = require("mongoose"), 
  User= mongoose.model('User'); 

module.exports = { 
    registerUser : function(req, res){
        // console.log("Registering from Controller");
        // console.log("name:", req.body.name, "email:", req.body.email, "password:",req.body.password,"password:",req.body.cpassword );
        User.create({name: req.body.name, email:req.body.email, password: req.body.password, cpassword: req.body.cpassword})
        res.json("Success");
        
        
    },
    loginUser: function(req, res){
        User.findOne({email: req.body.email}, function(err, userFound){
            if(!userFound){
                console.log("error:", err);  
                res.json("fail")
                
            } else {
            console.log("user found:", userFound);
            req.session.user = userFound;
            res.json('success');
            }
        })
    },
}
