const mongoose = require("mongoose");
const TasksModel = require('../../models/todoModel/TodoModel.js')


// Create section =================
async function taskController(req, res){
  try{
    let {name, roll, className, id,mobile,mobile2} = req.body
    let Task = new TasksModel({
      name,
      roll,
      className,
      id,
      mobile,
      mobile2
    })
    Task.save()
    res.send({success: "Task Created Successfully"})
  }catch(err){
    res.status(200).json({ status: "error", error: err.toString() });
  }
}


// Read all data section =================
async function TaskRead(req, res){
    let data = await TasksModel.find({})
    res.send(data)
    res.send({success: "Task Read Successfully"})
}


// Get all data =================
async function getAllProduct(req, res){
    try {
      let data = await TasksModel.aggregate([
        {
          $project: {
            name: 1,
            roll: 1,

          },
        },
      ]);
      res.status(200).json({ status: "Successfully you get all data", data: data});
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
};


//! Get Single data =======================================
async function getSingleProduct(req, res){
    let id = new mongoose.Types.ObjectId(req.params.id);
    try {
      let data = await TasksModel.aggregate([{ $match: { _id: id } }]);
      res.status(200).json({ status: "Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
  };


//! Update Product==============================
async function updateTask(req, res){
    try {
      let id = new mongoose.Types.ObjectId(req.params.id);
      let query = { _id: id };
      let reqBody = req.body;
      let data = await TasksModel.updateOne(query, reqBody);
      res.status(200).json({ status: "Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
};


//! Delete Product ========================================
async function deleteTask(req, res){
    let id = new mongoose.Types.ObjectId(req.params.id);
    let query = { _id: id };
    try {
      let data = await TasksModel.deleteOne(query);
      res.status(200).json({ status: "Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
  };
  
module.exports = {taskController,TaskRead, getAllProduct,getSingleProduct,deleteTask,updateTask}