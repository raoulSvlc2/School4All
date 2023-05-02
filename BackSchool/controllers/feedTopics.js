const {validationResult}= require('express-validator');
const UsersSchema= require('../models/topics');

exports.addTopic= (req, res, next)=>{
    const error = validationResult(req);
    if (!error.isEmpty) {
        return res.status(422).json({
            message:"failed, form not filled correctly",
            error: error.array()
        })
    }

    const label= req.body.label;
    const newTopic= new UsersSchema({
        label:label,
        creator:{name: 'Raoul Soh'},
    });
    newTopic.save()
        .then(result=>{
            res.status(201).json({
                massage: "topic added successfully",
                user: result
            })
        })
        .catch(err=>{
            res.status(500).json({err:"could not create new topic"})
        })
}

