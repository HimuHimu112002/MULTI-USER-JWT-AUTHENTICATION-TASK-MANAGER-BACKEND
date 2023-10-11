const express = require('express')
const router = express.Router()
const {taskController,TaskRead,getAllProduct,getSingleProduct,deleteTask,updateTask,updateTodoStatus, FilterByTodoList,FilterByDateList} = require("../controllers/TaskController/taskController.js")

// token create and decoded
const {JWtTokenCreate,DecodeJWtToken} = require('../helper/JwtToken/jwttoken.js')

// user Ragistration and login
const {UserRegistrationInfo,UserLoginInfo} = require('../controllers/UserAuthentication/Authentication.js')

// token verify from midleware
const TokenVerify = require("../midleware/TokenVerify.js")

router.post("/taskCreate",taskController);
router.get("/TaskRead",TaskRead);
router.get("/getall",TokenVerify,getAllProduct);
// majhe TokenVerify dilam mane data get korte hole obossoi verify korte hobe jodi verify na kori tahole data get kora jabena
router.get("/getSingleData/:id",getSingleProduct);

//router.post("/deleteTask/:id",deleteTask);
// jodi url /id diye delete korte chai tahole api link avebe create korte hobe and postman api er pore / dite id dite hbe

router.post("/deleteTask",deleteTask);
router.post("/updateTask",updateTask);
router.post("/updateTodoStatus",updateTodoStatus);
router.post("/FilterByTodoList",FilterByTodoList);
router.post("/FilterByDateList",FilterByDateList);





// Token Create and decoded
router.get("/createToken",JWtTokenCreate)
router.get("/DecodeToken",DecodeJWtToken)

//==================== UserRegistrationInfo
router.post("/UserRegistrationInfo",UserRegistrationInfo)
router.post("/UserLoginInfo",TokenVerify,UserLoginInfo)

module.exports = router