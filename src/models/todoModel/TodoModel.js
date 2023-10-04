const mongoose = require('mongoose')
const {Schema} = mongoose

const DataTodoModel = new Schema({
    name:{
        type: String
    },
    roll:{
        type: Number,
        min:[2, "min number is 2 but you given number = {VALUE}"],
        max:[4, "min number is 2 but you given number = {VALUE}"]
    },
    className:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        default: "Bangla"
    },
    id:{
        type: Number,
        unique: true,
    },
    mobile:{
        // custom validation
        type: String,
        validate:{
            validator:function(val){
                if(val.length !== 11){
                    return false;
                }else{
                    return true
                }
            },
            message: "11 digit is required"
        }
    },
    mobile2:{
        // regex validation
        type: String,
        validate:{
            validator:function(val){
                return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(val)
            },
            message: "Invalid bangladeshi mobile number"
        }
    }
    
})
module.exports = mongoose.model("TasksModel", DataTodoModel)