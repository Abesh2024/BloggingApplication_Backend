const userModel = require("../model/auth")
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");


// const authMiddle = async (req, res, next) => {

//     const authHeader = req.headers.authorization;

//     if(!authHeader) {
//         return res.status(401).json({
//             message: "PLEASE PASS THE AUTH TOKEN"
//         })
//     } 
//     // const token = authHeader.split(' ')[1];
    
//     try {
//         jwt.verify(authHeader, secretKey)
//     } catch(err) {
//         return res.status(401).json({
//             message: "Unauthorised user", 
//         })
//     }

//     const tokenData = jwt.decode(authHeader);

//     console.log(tokenData);
//     // const userId = tokenData.userId;
//     const user = await userModel.findById(tokenData.userId);
//     console.log(user.role);
//     if(!user) {
//         return res.json({
//             message: "unauthorised user"
//         })
//     }
//     req.user = user;
//     next()
// }

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'JSON_WEBTOKEN_FOR_ALL_uSERS';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    // console.log(err, "EXPRESS>JS>>>>>");
    // userModel.findOne({id: jwt_payload.sub}, function(err, user) {
    //     console.log(err, "==========>>>>>>");
    //     if (err) {
    //         return done(err, false);
    //     }
    //     if (user) {
    //         return done(null, user);
    //     } else {
    //         console.log(err, "NODEJS>>>>>>");
    //         return done(null, false);
    //         // or you could create a new account
    //     }
    // });
    userModel.findOne({id: jwt_payload.sub}).then((user, err)=> {
        if (err) {
            console.log("stringERR");
            return done(err, false);
        }
        if (user) {
            console.log("user");
            return done(null, user);
        } else {
            console.log("NOUSER>>>>>>");
            return done(null, false);
        }
    })
    .catch((err)=> console.log(err))
}));

module.exports = {passport};