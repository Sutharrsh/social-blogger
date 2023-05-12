import React ,{useState}from "react";
import './header.css';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import $ from 'jquery';
const Appbar = () =>{  
    const [show,setShow]=useState(false);
    
  
    return(
        <div className="Appbar">
            
             <div className="navbar flex justify-con">
                <div className="left flex">
                    <div className="logo mg-1 res">COMONK
                    <div className="Burgur" id="Burgur" onClick={()=>setShow(!show)}>
             <div className="BG"></div>
             <div className="BG"></div>
            <div className="BG"></div>
             </div>
        
                    </div>
                    <div className="Panel background">
                    <ul className="flex none">
                        <li><Link to="/" className="Link">Home</Link></li>
                        <li><Link to="/" className="Link">Explore</Link></li>
                        <li><Link to="/" className="Link">Contact</Link></li>
                        <li><Link to="/" className="Link">one-to-one</Link></li>
                    </ul>
                  { show?<ul className="flex center-nav noneBig background color">
                        <li><Link to="/" className="Link color">Home</Link></li>
                        <li><Link to="/" className="Link">Explore</Link></li>
                        <li><Link to="/" className="Link">Contact</Link></li>
                        <li><Link to="/" className="Link">one-to-one</Link></li>
                    </ul>:null }  
                    </div>
                </div>
                <div className="right background">
                <ul className="flex  none">
                        <li><Link to="/login" className="Link">login</Link></li>
                        <li><Link  to="/Register" className="Link" >Register</Link></li>
                        <li><Link to="/" className="Link">Profile</Link></li>
                    </ul>
                    {show?<ul className="flex center-nav noneBig background color">
                        <li><Link to="/login" className="Link">login</Link></li>
                        <li><Link to="/Register" className="Link">Register</Link></li>
                        <li><Link to="/" className="Link">Profile</Link></li>
                    </ul>:null}
                </div>
                
             </div>
             </div>
  
    );
}


export default Appbar;