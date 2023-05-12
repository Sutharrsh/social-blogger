const express = require('express');
const { validateToken}= require('../middlewares/Authmiddleware');
const router = express.Router();
const {Profile} = require('../models');
const { route } = require('./Likes');
const multer = require('multer');

// const { Sequelize, Op } = require("sequelize");
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//         cb(null,'/uploads');
//     },
//     filename: function(req, file, cb) {
//         cb(null, new Date().toISOString() + file.originalname);
//     }
// });
const upload = multer({ dest:'uploads/'});


router.post('/',upload.single('Image'),validateToken,async (req,res)=>{
    try{
    const result= req.body;
    

        result.Image=req.file.path;
        result.userId = req.user.id;
    
    console.log(result);
     await Profile.create(result);
     res.json({err:'Profile Photo has been uploaded'});
    }
    catch(err){
        res.json({err:'Profile Picture Already Uploaded! Remove Image to Set New One'});
    }

});

router.get('/select',async (req,res)=>{

    const result = await Profile.findAll();
     res.json(result);

});

router.get('/',validateToken,async(req,res)=>{
    const id = req.user.id;
    const result= await Profile.findAll({
        where:{
            userId:id
        }
    });
    res.json(result);
})

router.get('/:id',validateToken,async(req,res)=>{
    const id = req.params.id;
    const result= await Profile.findAll({
        where:{
            userId:id
        }
    });
    res.json(result);
})
router.delete('/',validateToken,async(req,res)=>{
    const id = req.user.id;
    const result = await Profile.destroy({
        where:{
            userId:id
        }
    })
    res.json({result:'Profile Photo Deleted!'});
})
module.exports = router;