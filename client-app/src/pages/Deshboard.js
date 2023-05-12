import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { useNavigate, useParams } from 'react-router-dom'
import { Delete, DeleteForeverOutlined } from '@mui/icons-material';
import './Profile.css'
function Deshboard() {
  const history = useNavigate();
  let {id}=useParams();
  const [username,setUsername]=useState("");
  const [listofPosts,setlistofPost]=useState([]);
  const [check,setCheck]=useState(0);
  const [listofPost,setlistofPosts]=useState([]);
  const [following,setFollowing]=useState([]);
  const [follower,setFollower]=useState([]);
  const [state,setDefualt]=useState(false);
  
  const [sta,setDefua]=useState(false);
  const [stat,setDefual]=useState(false);
  
  const [image,setImage]=useState([]);
  const [showBio,setBio]=useState([0]);
    
  const [textbody,setText]=useState("");
  const [showImage,setShow]=useState([]);
  const [likedPost,setlikedPosts]=useState([]);
  const LinkData = [
    {
    id:1,
    title:'Uploaded Post',
    
  },
  {
    id:2,
    title:'Liked Post',
    }
]
const handleClick=()=>{
  const formdata = new FormData();
  formdata.append('Image',image);
  console.log(formdata);
  axios.post('http://localhost:7240/Profile',formdata,
  { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res)=>{
      alert(res.data.err);
  })
}
const delPost=()=>{
axios.delete('http://localhost:7240/Profile',
  { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res)=>{
      console.log('working');
      alert(res.data.result);
  })
}

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
  const sendBio =()=>{
    axios.post(`http://localhost:7240/Bio`,{textbody} , { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res)=>{
    setBio(res.data);  
    console.log(res.data);
  })
  }
  useEffect(()=>{
    axios.get(`http://localhost:7240/Profile`,  { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res)=>{
            setShow(res.data);
            console.log(res.data);
        })
        axios.get(`http://localhost:7240/Bio/${id}` , { headers: { accessToken: localStorage.getItem("accessToken") }}).then((res)=>{
          setBio(res.data);
          console.log(res.data.Bio);
      })
      
        
    axios.get(`http://localhost:7240/auth/basicinfo/${id}`).then((res)=>{
    setUsername(res.data.username);
    });
    axios.get(`http://localhost:7240/posts/byuserid/${id}`).then((res)=>{
      setlistofPost(res.data);
    });
    
    axios.get(`http://localhost:7240/Posts/${id}`).then((res)=>{
      setlistofPosts(res.data);
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
              })} &nbsp;
              <span onClick={()=>{setDefual(!stat)}}>Edit Profile Picture</span>
              
            <span onClick={()=>{setDefua(!sta)}}>Edit Bio Picture</span>
             { stat?<div id='Edit'>
              <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/><div onClick={delPost} style={{background:'#eee',color:'#000',margin:'0.3rem',borderRadius:'1em',padding:'0.5rem'}}>Delete</div>
      <input type="submit" onClick={handleClick} value="Set Profile" style={{border:'none',padding:'1rem',borderRadius:'1em',margin:'0.3rem'}}/>
      
              </div>:null}
              </div>
            
            <div style={{color:'#000'}}>
              
              {sta?<div id='model'>
                
              <h1>Edit Bio</h1>
              <span onClick={()=>{setDefua(!sta)}}>X</span>
                <div id="card">
                <input type="text"  onChange={(e)=>setText(e.target.value)} defaultValue={`${showBio.Bio}`} required/>
            <input type="submit" onClick={sendBio} value="Edit" onChange={()=>{setDefua(!sta)}}/></div></div>:null}
            <div >
                {showBio.Bio}
              </div>
            
            </div>
          </h5>
        </div>
      <div className='sub-nav'>
            {LinkData?.map((val)=>{
               return( <button onClick={()=>{setDefualt(!state);
                setCheck(val.id);
            }} style={{background:check===val.id ? 'coral' :'#000'}}>{val.title}</button>
            )})}
        
      </div>
        <div  className='ListPost'>
      
      <div className='postBody'>  
      
    {
      state? listofPosts.map((val,key)=>{
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
        :
        
      listofPost.map((val,key)=>{
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
            <DeleteForeverOutlined onClick={()=>{
              likePost(val.id);
              alert('Liked Post Removed From Profile!!')
            }} className={likedPost.includes(val.id)? "unlike" :" Like"}>Remove</DeleteForeverOutlined>
            
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

export default Deshboard