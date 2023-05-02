const {validationResult}= require('express-validator');
const UsersSchema= require('../models/users');

exports.addUsers= (req, res, next)=>{
    const error = validationResult(req);
    if (!error.isEmpty) {
        return res.status(422).json({
            message:"failed, form not filled correctly",
            error: error.array()
        })
    }

    const familyName= req.body.familyName;
    const lastname= req.body.lastname;
    const email= req.body.email;
    const password= req.body.password;
    const role= req.body.role;
    const newUsers= new UsersSchema({
        familyName:familyName,
        lastname: lastname,
        email:email,
        password:password,
        role:role,
        creator:{name: 'Raoul Soh'},
    });
    newUsers.save()
        .then(result=>{
            res.status(201).json({
                massage: "user added successfully",
                user: result
            })
        })
        .catch(err=>{
            res.status(500).json({err:"could not create new user"})
        })
}

