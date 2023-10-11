const mongoose = require('mongoose')
const {Schema} = mongoose

const Registration = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String
    },
    userName:{
        type: String,
        required: true,
        //unique: true
    },
    email:{
        type: String,
        required: true,
        //unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        validate:{
            validator:function(val){
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(val)
            },
            message: "Invalid Mobile Number"
        }

    }
    
    
}, {versionKey: false})
module.exports = mongoose.model("UserAuthInfo", Registration)