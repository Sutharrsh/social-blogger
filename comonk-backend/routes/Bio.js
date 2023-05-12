const express = require('express');
const { validateToken}= require('../middlewares/Authmiddleware');
const router = express.Router();
const {Bio} = require('../models');
const { route } = require('./Likes');

router.post('/', validateToken, async (req, res) => {
    const result = req.body;
    result.Bio = req.body.textbody;
    result.userId = req.user.id;
  
    try {
      // Find the Bio record that matches the user ID
      const found = await Bio.findOne({ userId: req.user.id });
  
      if (!found) {
        // If no matching Bio record is found, create a new one
        const newBio = await Bio.create(result);
        res.json('Bio inserted');
      } else {
        // If a matching Bio record is found, update it with the new data
        await Bio.update({Bio: result.Bio },{where:{ userId: req.user.id }});
        res.json('Bio updated');
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  });
  
  router.get('/:id',validateToken,async(req,res)=>{
        const id = req.params.id;
        const result = await Bio.findOne({where:{userId:id}});
        if(result)
        res.json(result);
        else
        res.json({Bio:"Not Found"});   
  })
  
// router.post('/',validateToken,async(req,res)=>{
//     const result = req.body;
//     result.Bio=req.body.textbody;
//     result.userId = req.user.id
    
//     const found = await Bio.findOne(result);
//     if(!found){
//     const second = await Bio.create(result);
    
//     res.json('data insertted');
//     }
//     else{
//         const second = await Bio.update({});
    
//         res.json('Bio Updated');
//     }
// })

module.exports = router;