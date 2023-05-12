const express = require('express');
const { validateToken}= require('../middlewares/Authmiddleware');
const router = express.Router();
const {Posts,Likes} = require('../models');
const { route } = require('./Likes');
const multer = require('multer');
const { Sequelize, Op } = require("sequelize");

const upload = multer({ dest:'uploads/'});

router.get("/blog",async(req,res)=>{
    const listofPosts = await Posts.findAll();
    res.json({listofPosts});
});
router.get("/",validateToken,async(req,res)=>{
 const listofPosts = await Posts.findAll({include:[Likes]});
 const likedPost = await Likes.findAll({where:{userId:req.user.id}});
 res.json({listofPosts:listofPosts,likedPost:likedPost});
});
router.post("/",validateToken,upload.fields([{ name: 'postImage', maxCount: 1 },{ name: 'videoLink', maxCount: 1 },{ name: 'videoLinkTwo', maxCount: 1 }]), async (req, res) => {
   console.log(req.body);
    console.log(req.files);
    const post = req.body;
        post.postImage= req.files["postImage"][0].path; 
        post.videoLink= req.files["videoLink"][0].path; 
        post.videoLinkTwo= req.files["videoLinkTwo"][0].path; 
        
        post.username = req.user.username;
         post.userId = req.user.id;
        await Posts.create(post);

});

router.get("/:id",async(req,res)=>{
    const Id= req.params.id;
 const listofPosts = await Posts.findAll(  {include: [{
    model: Likes,
    where: { userId:Id }
  }]});
  res.json(listofPosts)
});
// router.post("/",validateToken,async (req,res)=>{
//     const post = req.body;
//     post.username = req.user.username;
//     post.userId = req.user.id;
//    await Posts.create(post);

//fields([{ name: 'postImage', maxCount: 1 },{ name: 'postImage2', maxCount: 1 },{ name: 'postImage3', maxCount: 1 }])
//    res.json(post);
// });
router.delete('/:postId',validateToken,async(req,res)=>{
    const postId = req.params.postId;
    await Posts.destroy({
        where:{
            id:postId,
        }
    });
    res.json({delete:"Your Post is Deleted!"});
})
router.get('/byId/:id',async(req,res)=>{
     const id = req.params.id;
     const post= await Posts.findByPk(id);
     res.json(post);
 })
router.get('/byuserId/:id',async(req,res)=>{
    const id = req.params.id;
    const post= await Posts.findAll({where:{userId:id}});
    res.json(post);
})

router.post("/search", async (req, res) => {
    const searchTerm =  req.body.search;
    try{
    const searchResults =await Posts.findAll({where:{title:
        {
            [Op.like]:"%"+ searchTerm + "%"}}});
    res.send(searchResults);
    res.json(searchResults);}
    catch(err){}
  });
module.exports = router;