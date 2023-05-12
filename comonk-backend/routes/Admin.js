const express = require('express');
const router = express.Router();
const {validateToken} = require('../middlewares/Authmiddleware');
const bcrypt = require('bcrypt');
const {Admin} = require('../models');

const { Sequelize, Op } = require("sequelize");
const {sign} = require('jsonwebtoken');
router.post("/",async(req,res)=>{
    const {username,password} = req.body;
    bcrypt.hash(password,10).then((hash)=>{
        Admin.create({
            username:username,
            password:hash
        })
        res.json({welcome:"welcom to comonk"});
    })
});
router.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user = await Admin.findOne({where:{username:username}});
    if(!user)
        res.json({error:"user not exists"});
    bcrypt.compare(password,user.password).then((match)=>{
        if(!match)
            res.json({
            error:"wrong username or password"
            });
        const accessToken = sign({username:user.username,id:user.id},"important");
        res.json({token:accessToken,username:username,id:user.id});
    });
})
router.get('/auth',validateToken,(req,res)=>{
    res.json(req.user);
})

router.get('/basicinfo/:id',async (req,res)=>{
    const id = req.params.id;
    const basicinfo = await users.findByPk(id,{attributes:{exclude:['password']},
});
res.json(basicinfo);
})
module.exports = router;