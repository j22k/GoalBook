const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/jwt')
const adminHelpers = require('../helpers/adminHelpers');

router.post('/add_employee',async (req,res)=>{
    result = await adminHelpers.CreateEmployee(req.body)
    if(result.status){
      const token = jwt.sign({ id: result.user._id,user : result.user.username }, jwtSecret, { expiresIn: '1h' })
      console.log(token);
      res.status(200).json({message : "succesfull",token});
    }
    else{
      res.status(201).json({ error: 'Unauthorized', message: result.message });
    }
  }),

  router.get('/fetch_employee',async (req,res)=>{
    result = await adminHelpers.getAllEmployee()
    if(result.status){
      res.status(200).json({message : "succesfull",employee :result.employee});
    }
    else{
      res.status(201).json({ error: 'Unauthorized', message: result.message });
    }
  }),
module.exports = router;