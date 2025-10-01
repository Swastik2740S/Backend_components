const express = require('express');
const router = express.Router();
const user = require('../controller/userController');
const auth = require('../middleware/authMiddleware');


router.post("/",user.createUser); 
router.get("/",auth,user.getUser);
//applying auth middleware here as the request first pass through the 
// middleware to check a successfull login only after that you can request other routes.

module.exports = router;