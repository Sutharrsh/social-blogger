const express = require('express');
const { validateToken}= require('../middlewares/Authmiddleware');
const router = express.Router();
const mysql = require('mysql2');
const db= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'comonk',
   
})
// Follow a user
router.post('/api/follow', validateToken,(req, res) => {
    const followerId = req.body.userId;
    const followedId = req.user.id;
    console.log(followerId);
    if(followedId!==followerId){
    const query = `INSERT INTO follow_relationships (follower_id, followed_id) VALUES (?, ?)`;
    db.query(query, [followerId, followedId], (err, result) => {
      if (err) {
            res.json(`Your Already Following User:${followerId}`);
    } else {
        res.json('Followed user successfully');
      }
    });
    }
    else{
        res.json("you can't follow your self");
    }
  });
  
  // Unfollow a user
  router.post('/api/unfollow',validateToken, (req, res) => {
  
    const followerId = req.body.userId;
    const followedId = req.user.id;
    console.log(followerId);
    const query = `DELETE FROM follow_relationships WHERE follower_id = ? AND followed_id = ?`;
    db.query(query, [followerId, followedId], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        res.status(200).send('Unfollowed user successfully');
      }
    });
  });
  router.get('/:id',(req,res)=>{
    const followedId = req.params.id;
     const query =  `SELECT followed_id, COUNT(*) AS num_following FROM follow_relationships where followed_id=?;`
    db.query(query,[followedId],(err,rs)=>{
        if(!err)
        res.json(rs);
        else    
        res.send(err)
    })
  }
)

router.get('/user/:id',(req,res)=>{
  const followerId = req.params.id;
   const query =  `SELECT COUNT(followed_id) AS followers
   FROM follow_relationships
   WHERE follower_id = ?;
   `
  db.query(query,[followerId],(err,rs)=>{
      if(!err)
      res.json(rs);
      else    
      res.send(err)
  })
}
)
module.exports = router;