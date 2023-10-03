const mongoose = require('mongoose')
const {Schema} = mongoose

const DataTodoModel = new Schema({
    name:{
        type: String
    },
    roll:{
        type: Number
    }
    
})
module.exports = mongoose.model("TasksModel", DataTodoModel)