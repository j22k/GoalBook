const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/jwt')
const superHelpers = require('../helpers/superHelpers');

router.post('/signin',async (req,res)=>{
    result = await superHelpers.SignIn(req.body)
    if(result.status){
      const token = jwt.sign({ id: result.user._id,user : result.user.username }, jwtSecret, { expiresIn: '1h' })
      console.log(token);
      res.status(200).json({message : "Loged succesfully",token});
    }
    else{
      res.status(201).json({ error: 'Unauthorized', message: result.message });
    }
  }),
  
router.post('/add_admin',async (req,res)=>{
  result = await superHelpers.CreateAdmin(req.body)
  if(result.status){
    const token = jwt.sign({ id: result.user._id,user : result.user.username }, jwtSecret, { expiresIn: '1h' })
    res.status(200).json({message : "succesfull",token});
  }
  else{
    res.status(201).json({ error: 'Unauthorized', message: result.message });
  }
}),

router.get('/fetch_admins',async (req,res)=>{
  result = await superHelpers.getAllAdmins()
  if(result.status){
    res.status(200).json({message : "succesfull",admins :result.admins});
  }
  else{
    res.status(201).json({ error: 'Unauthorized', message: result.message });
  }
}),

  module.exports = router;