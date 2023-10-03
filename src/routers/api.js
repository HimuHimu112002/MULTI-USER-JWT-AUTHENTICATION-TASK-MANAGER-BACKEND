const express = require('express')
const router = express.Router()
const {taskController,TaskRead,getAllProduct,getSingleProduct,deleteTask,updateTask} = require("../controllers/taskController.js")

router.post("/taskController",taskController);
router.get("/TaskRead",TaskRead);

router.get("/getall",getAllProduct);
router.get("/getSingleData/:id",getSingleProduct);
router.post("/deleteTask/:id",deleteTask);
router.post("/updateTask/:id",updateTask);

module.exports = router