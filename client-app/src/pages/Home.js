import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Helpers/AuthContext';
import './blog.css'
function Home() {
    const [listofPosts,setlistofPosts]=useState([]);
    const [likedPost,setlikedPosts]=useState([]);
    
    const {authState} = useContext(AuthContext);
    let history=useNavigate();
    
  useEffect(()=>{
    if(!authState.status){
     history('/'); 
    }else{
    axios.get("http://localhost:7240/Posts",{
      headers:{accessToken:localStorage.getItem('accessToken')}
    }).then((response)=>{
      setlistofPosts(response.data.listofPosts);
      setlikedPosts(response.data.likedPost.map((like)=>{
        return like.PostId;
      }));
    })
    }
  
  },[]);
  const likePost = (postId) =>{
    axios.post('http://localhost:7240/Likes',{PostId:postId},{
      headers:{accessToken:localStorage.getItem('accessToken')}
    }).then((res)=>{
     
      setlistofPosts(listofPosts.map((post)=>{
        if(post.id===postId){
          if(res.data.liked){
          return{
            ...post,Likes:[...post.Likes,0]
          }
        }else
        { 
          const likeArray = post.Likes;
          likeArray.pop();
          return{
            ...post,Likes:likeArray
          }
        }

        }else{
          return post
        }
      }))
      if(likedPost.includes(postId)){
          setlikedPosts(
            likedPost.filter((id)=>{
              return id != postId;
            })
          );
      }else{
          setlikedPosts([...likedPost,postId]);
      }
    });
  }
  
  const [following, setFollowing] = useState(false);
  
  const followUser = (userId) => {
    axios.post('http://localhost:7240/Follow/api/follow',{userId}, {
      headers: {
        accessToken:localStorage.getItem('accessToken')
      }
    })
    .then((res) => {
      setFollowing(true);
      alert(res.data);
    })
    .catch((error) => {
      console.log('some:'+error);
    });
  };
  
  const unfollowUser = (userId) => {
    axios.post('http://localhost:7240/Follow/api/unfollow',{userId}, {
      headers: {
        accessToken:localStorage.getItem('accessToken')
      }
    })
    .then((res) => {
      setFollowing(false);
      alert(res.data);
    })
    .catch((error) => {
      console.log('some:'+error);
    });
  };
  return(

    <div className='postBody' style={{background:"#eee"}}>  
   
    {
      listofPosts.map((val,key)=>{
        return (
        <section style={{margin:'2rem'}}>
        <div className='post' >
       {/* <button onClick={()=>unfollowUser(val.id)} >
        unfollow
       </button> */}
          <div className='box' >
          <div className='body'>
          <div className='title'>
            
          <img src={`http://localhost:7240/${val.postImage}`}/>
            <span>{val.title}</span></div>
          <div className="text" onClick={()=>{history(`/post/${val.id}`)}}>
            {
              val.postText
            }</div>
            <div className='footer'><label  onClick={()=>history(`/profile/${val.userId}`)}>{val.username}</label>
            
        <button onClick={()=>followUser(val.userId)} id="Follow">
          +
       </button>
            <button onClick={()=>{
              likePost(val.id);
            }} className={likedPost.includes(val.id)? "unlike" :" Like"}>&hearts;</button>
            <label>{val.Likes.length}</label>
            <label style={{float:'right'}}>{val.createdAt}</label>
            </div>
          
          </div>
          </div>
        </div>
        </section>
        );
      })
        }
    </div>
  );
}

export default Home;
