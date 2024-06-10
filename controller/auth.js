const userDataModel = require("../model/auth")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretKey = "JSON_WEBTOKEN_FOR_ALL_uSERS"

const signUp = async (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const passwordHast = bcrypt.hashSync(req.body.password, salt)

    const newData = new userDataModel({...req.body, password: passwordHast})
    const savedData = await newData.save()
    res.json({
        savedData
    })
}

const logIn = async (req, res) => {

    const user = await userDataModel.findOne({email: req.body.email})

    if (!user) {
        return res.json({
          message: "User not found, please register first",
        });
      }

    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password)

    const payload = {
        userId: user._id,
        userName: user.name,
    }

    const token = jwt.sign(payload, secretKey);

    if(isPasswordValid){
        return res.json({
            token,
        })
    }
}

const controllers = {signUp, logIn}

module.exports = controllers;