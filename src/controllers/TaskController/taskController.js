const mongoose = require("mongoose");
const TasksModel = require('../../models/todoModel/TodoModel.js')


// Create todo controller section =================
async function taskController(req, res){
  try{
    let {UserName, TodoSubject, TodoDiscription, TodoStatus,TodoDate} = req.body
    let Task = new TasksModel({
      UserName,
      TodoSubject,
      TodoDiscription,
      TodoStatus,
      TodoDate,
    })
    Task.save()
    res.send({success: "Task Created Successfully"})
  }catch(err){
    res.status(200).json({ status: "error", error: err.toString() });
  }
}


// Get all data section using find =================
async function TaskRead(req, res){
    let data = await TasksModel.find({})
    res.send(data)
    res.send({success: "Task Read Successfully"})
}


// Get all data using aggregate =================
async function getAllProduct(req, res){
    try {
      let data = await TasksModel.aggregate([{$project:{UserName:1, TodoSubject:1, TodoDiscription:1, TodoStatus:1, TodoDate:1, TodoUpdateDate:1}}]);
      res.status(200).json({ status: "Successfully you get all data", data: data});
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
};


// Get Single data =======================================
async function getSingleProduct(req, res){
    let id = new mongoose.Types.ObjectId(req.params.id);
    try {
      let data = await TasksModel.aggregate([{ $match: { _id: id } }]);
      res.status(200).json({ status: "Success", data: data });
    } catch (e) {
      res.status(200).json({ status: "error", error: e.toString() });
    }
  };


//! Update todo 2 way ==============================
async function updateTask(req, res){
    // try {
    //   let id = new mongoose.Types.ObjectId(req.params.id);
    // avabe update korte hole req url / id number diye korte hbe
    //   let query = { _id: id };
    //   let reqBody = req.body;
    //   let data = await TasksModel.updateOne(query, reqBody);
    //   res.status(200).json({ status: "Success", data: data });
    // } catch (e) {
    //   res.status(200).json({ status: "error", error: e.toString() });
    // }
    try {

      let query = req.body["_id"];
      let reqBody = req.body;
      let data = await TasksModel.updateOne({_id: query}, {$set: reqBody}, {upsert: true});
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