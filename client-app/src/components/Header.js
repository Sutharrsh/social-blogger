import { useContext, useState } from 'react';
import { useEffect } from 'react';
import {AuthContext} from '../Helpers/AuthContext';
import { Link, useNavigate, useParams} from 'react-router-dom';

import axios from 'axios';

export default function Header() {
    const history = useNavigate();
    const {authState} = useContext(AuthContext);
    
      const logout=()=>{
        localStorage.removeItem("accessToken");
        authState({username:"",id:0,status:false});
        history('/');
      }
  return (
    <div>
       <div className='header'>
            <div className='logo'>
          <label><img src='/assets/mascot.png'  style={{margin: '-0.6rem 0rem',width:'2rem'}}></img>COMONK</label>
          </div>
          <div className='left'>
          <Link to ="/search" className='aa'>Discover Career</Link>
          <Link to ="/Blogs" className='aa'>Blogs</Link>
          <Link to ="/" className='aa'>Home</Link>
          <Link to="/about" className='aa'>About Us</Link>
          <Link className='aa'>Contact Us</Link> 
         
          </div>
          {!authState.status ? (
          <div className='hovers'>
          <Link className='Drop-down float '>Login/Register</Link>
          <div className=' float-down-t'>
          <Link to ="/login" >Login</Link>
          <Link to ="/Register" >Register</Link>
          </div>
           </div>) : (
          <span className='hovers'>
          <Link className='Drop-down float '>{authState.username}</Link>
          <div className=' float-down'>
            <Link to ="/createPost">create a post</Link>
         <Link onClick={logout}>Log-out</Link>
           
         <Link to={`/Deshboard/${authState.id}`}>{authState.username}</Link> 
              
         </div></span>
         )}
         
          
         </div>
    </div>
  )
}
