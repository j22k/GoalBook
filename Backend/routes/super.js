const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/jwt')
const superHelpers = require('../helpers/superHelpers');

router.post('/signin',async (req,res)=>{
    console.log("server 1 : ",req.body);
    result = await superHelpers.SignIn(req.body)
    console.log("Server 2",result);
    if(result.status){
      console.log(result.user);
      console.log(result);
      const token = jwt.sign({ id: result.user._id,user : result.user.username }, jwtSecret, { expiresIn: '1h' })
      console.log(token);
      res.status(200).json({message : "Loged succesfully",token});
    }
    else{
      res.status(201).json({ error: 'Unauthorized', message: result.message });
    }
  }),
  
router.post('/add_admin',async (req,res)=>{
  console.log("server 1 : ",req.body);
  result = await superHelpers.CreateAdmin(req.body)
  console.log("Server 2",result);
  if(result.status){
    const token = jwt.sign({ id: result.user._id,user : result.user.username }, jwtSecret, { expiresIn: '1h' })
    console.log(token);
    res.status(200).json({message : "succesfull",token});
  }
  else{
    res.status(201).json({ error: 'Unauthorized', message: result.message });
  }
}),

  module.exports = router;