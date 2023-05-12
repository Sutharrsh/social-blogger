import React, { useContext } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Helpers/AuthContext';

export default function Blog() {
    
    const [listofPosts,setlistofPosts]=useState([]);
    const [likedPost,setlikedPosts]=useState([]);
    
    const {authState} = useContext(AuthContext);
    let history=useNavigate();
    useEffect(()=>{
        if(!authState.status){
            axios.get("http://localhost:7240/Posts/blog").then((response)=>{
                setlistofPosts(response.data.listofPosts);
                });
            }
            else{
                history('/');
            }
            
               
},[]);
  return (
    <div>
      <div className='postBody'>  
    {
      listofPosts.map((val,key)=>{
        return (
        <section style={{margin:'2rem'}}>
        <div className='post' >
          <div className='box' >
          <div className='body'>
          <div className='title'>
            
          <img src={val.postImage}/>
            <span>{val.title}</span></div>
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
  )
}
