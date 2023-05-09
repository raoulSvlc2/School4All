const { validationResult } = require("express-validator");
const UsersSchema = require("../models/users");
const bcrypt = require("bcrypt");
const jwebtoken = require("jsonwebtoken");

exports.addUsers = async(req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty) {
    return res.status(422).json({
      message: "failed, form not filled correctly",
      error: error.array(),
    });
  }
  try{
  const salt = await bcrypt.genSalt()

  const hashPassword = await bcrypt.hash( req.body.password, salt)
  const familyName = req.body.familyName;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const password =hashPassword ;
  const role = req.body.role;
  const newUsers = new UsersSchema({
    familyName: familyName,
    lastname: lastname,
    email: email,
    password: password,
    role: role,
    creator: { name: "Raoul Soh" },
  });
  
  newUsers
    .save()
    .then((result) => {
      res.status(201).json({
        massage: "user added successfully",
        user: result,
      });
    })
    .catch((err) => {
      res.status(500).json({ err: "could not create new user" });
    });
  } catch{res. status(500).send()}
};

exports.signinUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedUser;
  UsersSchema.findOne({ email: email })
    .then((user) => {
      if (!user) {
        const error = new Error("no user with this email");
        error.statusCode = 401;
        throw error;
      }
      loadedUser = user;
      return bcrypt.compare(password, user.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        const error = new Error("Wrong password");
        error.statusCode = 401;
        throw error;
      }
      const token = jwebtoken.sign(
        {
          email: loadedUser.email,
          userId: loadedUser._id.toString(),
        },
        "somesupersecret",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        userId: loadedUser._id.toString(),
        role: loadedUser.role,
        firstName: loadedUser.familyName,
        lastname: loadedUser.lastname
      });
    })
    .catch((err) => {
      console.log(err)
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
