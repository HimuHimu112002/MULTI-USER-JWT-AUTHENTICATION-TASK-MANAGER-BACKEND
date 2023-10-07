const jwt = require('jsonwebtoken');

async function TokenVerified(req, res, next){
    let Token = req.headers['token-key']
    jwt.verify(Token, "SecretKey123", function(err, decoded){
        if(err){
            res.status(401).json({status:"Invalide token", data: err})
        }else{
            next()
        }
    })

}
module.exports = TokenVerified;