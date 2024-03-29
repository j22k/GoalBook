const express = require('express');
const router = express.Router();
const userHelpers = require('../helpers/userHelpers')
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/jwt')

router.post('/signin',async (req,res)=>{
    console.log("server 1 : ",req.body);
    result = await userHelpers.SignIn(req.body)
    if(result.status){
      console.log(result.user);
      console.log(result);
      const token = jwt.sign({ id: result.user._id,user : result.user.username,name : result.user.name,  authourozation : result.authourozation }, jwtSecret, { expiresIn: '1h' })
      console.log(token);
      res.status(200).json({message : "Loged succesfully",token});
    }
    else{
      res.status(201).json({ error: 'Unauthorized', message: result.message });
    }
  })

  module.exports = router;