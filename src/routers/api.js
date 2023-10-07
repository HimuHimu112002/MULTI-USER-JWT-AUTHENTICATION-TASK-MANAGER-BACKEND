const express = require('express')
const router = express.Router()
const {taskController,TaskRead,getAllProduct,getSingleProduct,deleteTask,updateTask} = require("../controllers/TaskController/taskController.js")

// token create and decoded
const {JWtTokenCreate,DecodeJWtToken} = require('../helper/JwtToken/jwttoken.js')

const Tokenauth = require("../controllers/TokenAuth/TokenIssueController.js")
const TokenVerify = require("../midleware/TokenVerify.js")

router.post("/taskCreate",taskController);
router.get("/TaskRead",TaskRead);

router.get("/getall",TokenVerify,getAllProduct);
// majhe TokenVerify dilam mane data get korte hole obossoi verify korte hobe jodi verify na kori tahole data get kora jabena
router.get("/getSingleData/:id",getSingleProduct);
router.post("/deleteTask/:id",deleteTask);
router.post("/updateTask/:id",updateTask);


router.get("/createToken",JWtTokenCreate)
router.get("/DecodeToken",DecodeJWtToken)

router.get("/Tokenauth",Tokenauth)

module.exports = router