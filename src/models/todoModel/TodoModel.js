const mongoose = require('mongoose')
const {Schema} = mongoose

const DataTodoModel = new Schema({
    UserName:{
        type: String
    },
    TodoSubject:{
        type: String
    },
    TodoDiscription:{
        type: String
    },
    TodoStatus:{
        type: String,
        default: "Pending"
    },
    TodoDate:{
        type: Date,
        default: Date.now
    },
    TodoUpdateDate:{
        type: Date,
    }
    // mobile:{
    //     // custom validation
    //     type: String,
    //     validate:{
    //         validator:function(val){
    //             if(val.length !== 11){
    //                 return false;
    //             }else{
    //                 return true
    //             }
    //         },
    //         message: "11 digit is required"
    //     }
    // },
    // mobile2:{
    //     // regex validation
    //     type: String,
    //     validate:{
    //         validator:function(val){
    //             return /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/.test(val)
    //         },
    //         message: "Invalid bangladeshi mobile number"
    //     }
    // }
    
}, {versionKey: false})
module.exports = mongoose.model("TasksModel", DataTodoModel)