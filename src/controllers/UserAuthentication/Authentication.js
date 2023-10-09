const mongoose = require("mongoose");
const UserResistration = require('../../models/userRegistration/UserRegistration.js')


async function UserRegistrationInfo(req, res){
    //let AuthInfoBody = req.body
    try{
        let {firstName, lastName, userName, email,password,phone} = req.body

        let UserInfo = new UserResistration({
            firstName, lastName, userName, email,password,phone
        })
        UserInfo.save()
        res.send({success: "Registration Successfully"})
      }catch(err){
        res.send({ status: "error", error: err.toString() });
      }
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