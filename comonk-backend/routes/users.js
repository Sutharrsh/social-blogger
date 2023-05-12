const express = require('express');
const router = express.Router();
const {validateToken} = require('../middlewares/Authmiddleware');
const bcrypt = require('bcrypt');
const {users} = require('../models');
const { Sequelize, Op, or } = require("sequelize");
const {sign} = require('jsonwebtoken');
router.post("/",async(req,res)=>{
    const {username,password,email} = req.body;
    bcrypt.hash(password,10).then((hash)=>{
        users.create({
            username:username,
            password:hash,
            email:email
        })
        res.json({welcome:"welcom to comonk"});
    })
});
router.post('/login',async(req,res)=>{
    const {username,password}=req.body;
    const user = await users.findOne({where:{   [Op.or]: [{ email: username }, { username: username }]}});
    try{
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
    }catch(err){
        res.json("Password does't match");
    }
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
router.get('/user',async(req,res)=>{
    const basicinfo = await users.findAll();
    res.json(basicinfo);
})

router.get('/send',async(req,res)=>{
    const basicinfo = await users.findAll({attributes:{exclude:['password']}});
    res.json(basicinfo);
})

router.post('/search',async(req,res)=>{
    const searchTerm =  req.body.search;
    try{
    const searchResults =await users.findAll({where:{username:
        {
            [Op.like]:"%"+ searchTerm + "%"}}});
    res.send(searchResults);
    res.json(searchResults);}
    catch(err){}
  
})
module.exports = router;