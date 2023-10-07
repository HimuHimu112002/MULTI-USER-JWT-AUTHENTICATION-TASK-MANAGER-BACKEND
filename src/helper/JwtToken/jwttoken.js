const jwt = require('jsonwebtoken');

async function JWtTokenCreate(req, res){
    let Payload={
        exp:Math.floor(Date.now()/1000) + (60 * 60),
        // (60 * 60) meaning holo 1 ghonta pore token invalid hoiye jabe
        data: {Name: "Himu", City: "Dhaka", admin: true}
    }
    let Token = await jwt.sign(Payload, "SecretKey123");
    res.send(Token)

}

async function DecodeJWtToken(req, res){
    let Token = req.headers['token-key']
    jwt.verify(Token, "SecretKey123", function(err, decoded){
        if(err){
            res.status(401).json({status:"Invalide token", data: err})
        }else{
            res.status(200).json({status:"Valid token", data: decoded})
        }
    })

}
module.exports = {JWtTokenCreate,DecodeJWtToken};