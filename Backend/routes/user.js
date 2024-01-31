const express = require('express');
const router = express.Router();


router.post('/signin',async (req,res)=>{
    console.log(req.body);
    // result = await userHelpers.dosignin(req.body)
    // if(result.status){
    //   console.log(result.user);
    //   console.log(result);
    //   const token = jwt.sign({ id: result.user._id,user : result.user.username }, jwtSecret, { expiresIn: '1h' })
    //   console.log(token);
    //   res.status(200).json({message : "Loged succesfully",token});
    // }
    // else{
    //   console.log(result);
    //   res.status(201).json(result.message);
    // }
  })

  module.exports = router;