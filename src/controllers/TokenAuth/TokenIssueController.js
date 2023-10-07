const jwt = require('jsonwebtoken');

async function Tokenauth(req, res){
    let Payload={
        exp:Math.floor(Date.now()/1000) + (60 * 60),
        data: {Name: "Himu", City: "Dhaka", admin: true}
    }
    let Token = await jwt.sign(Payload, "SecretKey123");
    res.send(Token)

}
module.exports = Tokenauth;