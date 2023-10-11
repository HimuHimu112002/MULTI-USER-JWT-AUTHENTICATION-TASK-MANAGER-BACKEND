const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const UserResistration = require('../../models/userRegistration/UserRegistration.js')


async function UserRegistrationInfo(req, res){
    try{
        let {firstName, lastName, userName, email,password,phone} = req.body
        //token create after registration
        let Payload={
            exp:Math.floor(Date.now()/1000) + (24 * 60 * 60),
            data: {Name: "HMHimu", City: "Dhaka", admin: true}
        }
        let Token = jwt.sign(Payload, "SecretKey123");

        let UserInfo = new UserResistration({
            firstName, lastName, userName, email,password,phone
        })
        UserInfo.save()
        res.send({success: "Registration Successfully", token:Token})
        //res.send({token:Token});
    }catch(err){
        res.send({ status: "error", error: err.toString() });
    }


    //let AuthInfoBody = req.body
    // UserResistration.create(AuthInfoBody, (err, data)=>{
    //     if(err){
          
    //       res.status(400).json({status: "error", error: err.toString() })
    //     }else{
    //       res.status(200).json({status: "Task Created Successfully"});
    //     }

    // })

}

async function UserLoginInfo(req, res){
    let {email,password} = req.body

    let EmailExist = await UserResistration.find({email: email, password: password})
    if(EmailExist.length > 0){
        res.send({success: "Loging Successfully"})
    }else{
        res.json({"error":"Login Failed"})
    }

}

module.exports = {UserRegistrationInfo,UserLoginInfo}