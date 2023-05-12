import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import './Profile.css'
function Profile() {
  const history = useNavigate();
  let {id}=useParams();
  
  const [image,setImage]=useState([]);
    
  const [showImage,setShow]=useState([]);
  const [username,setUsername]=useState("");
  const [listofPosts,setlistofPost]=useState([]);
  const [following,setFollowing]=useState([]);
  const [follower,setFollower]=useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:7240/Profile/${id}`,  { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res)=>{
      setShow(res.data);
      console.log(res.data);
  })

    axios.get(`http://localhost:7240/auth/basicinfo/${id}`).then((res)=>{
    setUsername(res.data.username);
    });
    axios.get(`http://localhost:7240/posts/byuserid/${id}`).then((res)=>{
      setlistofPost(res.data);
    });
    
    axios.get(`http://localhost:7240/Follow/${id}`).then((res)=>{
        setFollowing(res.data);       
        console.log(res);
    });
    
    axios.get(`http://localhost:7240/Follow/user/${id}`).then((res)=>{
        setFollower(res.data);       
        console.log(res);
    });
  },[])
  return (
    <div style={{overflow:'hidden'}}>
      <div className='Profile-Container' style={{margin: '4rem 4rem 1rem 0rem;'}}>
        <div className='Basic-Info'>
          <h5>
          <div style={{margin: '3rem 0rem'}}>
              
              
              <span >
              {
        showImage?.map((val)=>{
            return(
              <div className='img'>
                
                <img  src={`http://localhost:7240/${val.Image}`} height="200px" style={{padding:'1rem'}}></img>
                
              </div>
            )
        })
      }
    
                
                
                </span></div>
            
            <div className='bio'>
            <span>{username}</span> 
              &nbsp;{following.map((val)=>{
                return <span>Following:{val.num_following}</span>
              })}
              &nbsp;{follower.map((val)=>{
                return <span>Follower:{val.followers}</span>
              })}
              </div>
              
            <div style={{color:'#000'}}>sutharrsh@comonk.com</div>
            
            <div style={{color:'#000'}}>Softwere Developer and Graphics Designers</div>
          </h5>
        </div>
        <div  className='ListPost'>
        
      <div className='postBody'>  
    {
      listofPosts.map((val,key)=>{
        return (
        <section style={{margin:'2rem'}}>
        <div className='post' >
          <div className='box' >
          <div className='body'>
          <div className='title'>{val.title}</div>
          <div className="text" onClick={()=>{history(`/post/${val.id}`)}}>
            {
              val.postText
            }</div>
            <div className='footer'>{val.username}
            </div>
          
          </div>
          </div>
        </div>
        </section>
        );
      })
        }
    </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
