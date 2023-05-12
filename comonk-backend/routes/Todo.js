const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const {todo} = require('../models');
const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'comonk'
});

router.post("/",async(req,res)=>{
    const comment  = req.body.val;
   con.query('insert into todos (Task) values(?)',[comment],(err,rs)=>{
    if(!err)
    res.json("Data inserted");
   })
});


router.get("/show",async(req,res)=>{
    con.query('select id,Task from todos',(err,rs)=>{
    if(!err)
    res.json(rs);
   })
});

router.delete("/:id",async(req,res)=>{
        const id = req.params.id;
   con.query('DELETE FROM `todos` WHERE id=?',[id],(err,rs)=>{
    if(!err)
    res.json(`Row No:${id} is deleted successfully`);
   });
    
    
});

router.put("/:id",async(req,res)=>{
    const id = req.params.id;
    const comment  = req.body.func;
    console.log( comment);
con.query(`UPDATE todos SET Task =? WHERE id =?`,[comment,id],(err,rs)=>{
if(!err){
console.log(rs);
res.json(`Row No:${id} is updated successfully`);
}
else{
    console.log(err);
}
});


});
module.exports = router;