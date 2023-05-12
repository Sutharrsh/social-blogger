import axios from 'axios';
import * as React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Homepage.css";

export default function Homepage() {
    const [listofPosts,setlistofPosts]=useState([]);
  const  history = useNavigate();
    useEffect(()=>{
        
            axios.get("http://localhost:7240/Posts/blog").then((response)=>{
                setlistofPosts(response.data.listofPosts);
                });
       
 })
   return (
        <>
            <div id='cover'>
                <div id='cover-text'>
                    <p className='para'>A narrow wedge of light from a half-open service hatch framed a heap of discarded fiber optics and the chassis of a skyscraper canyon. Before they could stampede, take flight from the Chinese program’s thrust.</p>
                    <p id='title'>COMONK</p>
                    <p id='tagline'>creation is a game of phase</p>
                    <span className='cover-mail'>
                    <input type='email' placeholder='subscribe us'/>
                    <button>subscribe</button>
                    </span>
                </div>
            </div>
              
        <label style={{
                padding: '2rem',
                position: 'relative',
                top: '1rem'
        }}>Our Recent Blogs</label>
        <hr style={{    position: 'relative',
    top: '2rem'}}/>
            <div>
      <div className='trend'>
      <marquee direction='up' style={{height:'20rem'}}>
    {
      listofPosts.map((val,key)=>{
        return (
        <section style={{margin:'2rem'}}>
        <div className='blogs' >
          <div className='blog-box' >
          <div className='box-body'>
          <div className='body-title'>
            
          <img src={`http://localhost:7240/${val.postImage}`} height="200px"/>
            </div>
          <div className="body-text" onClick={()=>{history(`/post/${val.id}`)}}>
          <span style={{background:'#000',color:'#fff',height:'1rem',padding:'1rem',    borderRadius:' 0rem 1rem 0rem 0rem'}}>{val.title}</span>
            <p>{
              val.postText
            }</p></div>
            </div>
          
            <div className='body-footer'>{val.username}
          </div>
          </div>
        </div>
        </section>
        );
      })
        }
        
        </marquee>
    </div>
    </div>
  
</>
    )
}

/*
        <>
        <div id='main'>
                <div id="search">
                    <p id='title'>COMONK</p>
                    <p id='slogan'>Career is Carrier of Life</p>
                </div>
        </div>

        <div id='about-div'>
            <span id='about-title'>
                Providing Information which is
                <p className='orange'>SHORT, SIMPLE & SUMMARIZED</p>
            </span>
            <div id='box'>
                CoMonk is world's most renowned website for Career counselling for students studying in class 10th or 12th. It is the best platform to get Carreer counselling because here we provide To the point inforation in such a Short, Simple & Summarized way so that it can be unerstood by even 10 year old child.            </div>
        </div>

        <div id='career-title'>
            <p className='orange'>EXPLORE</p>
            <p>YOUR DREAM</p>
            <p className='orange'>CAREER</p>
        </div>
        
        <marquee behavior="" direction="left">
        <div id='features'>
            <div id='c1'>
                <p id='ctitle'>ENGINEER</p>
                <img src='/assets/settings icon.png' height="100rem" width="100rem"></img>
            </div>
            
            <div id='c2'>
                <p id='ctitle'>ENGINEER</p>
                <img src='/assets/settings icon.png' height="100rem" width="100rem"></img>
            </div>

            <div id='c1'>
                <p id='ctitle'>ENGINEER</p>
                <img src='/assets/settings icon.png' height="100rem" width="100rem"></img>
            </div>
            
            <div id='c2'>
                <p id='ctitle'>ENGINEER</p>
                <img src='/assets/settings icon.png' height="100rem" width="100rem"></img>
            </div>

            <div id='c1'>
                <p id='ctitle'>ENGINEER</p>
                <img src='/assets/settings icon.png' height="100rem" width="100rem"></img>
            </div>
            
            <div id='c2'>
                <p id='ctitle'>ENGINEER</p>
                <img src='/assets/settings icon.png' height="100rem" width="100rem"></img>
            </div>
            
        </div>
        </marquee>

        <div id='youtube'>
            <div id='video'>

            </div>
            <span id='youtube-title'>
                <p>SUBSCRIBE</p>
                TO OUR YOUTUBE CHANNEL FOR
                <p>FREE GYAN</p>
            </span>
        </div>

        <div id='feature-title'>
            <p className='orange'>FEATURES</p>
            <p>WHICH MAKES US</p>
            <p className='orange'>UNIQUE</p>
        </div>

        <div id='features'>
            <div id='c1'>
                <p id='ctitle'>AI CHAT BOT</p>
                <p>GDFFKFHGKFDHFDKHFDHJDFLGJDFJGKDGHFDHFD DFHGDG DRJGDFODRG ORGJJR ORRN DRGINREGT FSDFG SDGHS</p>
                <p>GDFFKFHGKFDHFDKHFDHJDFLGJDFJGKDGHFDHFD DFHGDG DRJGDFODRG ORGJJR ORRN DRGINREGT FSDFG SDGHS</p>
            </div>
            
            <div id='c2'>
                <p id='ctitleorange'>SHORT, SIMPLE & SUMMARIZED INFORMATION</p>
                <p>GDFFKFHGKFDHFDKHFDHJDFLGJDFJGKDGHFDHFD DFHGDG DRJGDFODRG ORGJJR ORRN DRGINREGT FSDFG SDGHS</p>
                <p>GDFFKFHGKFDHFDKHFDHJDFLGJDFJGKDGHFDHFD DFHGDG DRJGDFODRG ORGJJR ORRN DRGINREGT FSDFG SDGHS</p>
            </div>
            
            <div id='c1'>
                <p id='ctitle'>CONTENT CREATOR</p>
                <p>GDFFKFHGKFDHFDKHFDHJDFLGJDFJGKDGHFDHFD DFHGDG DRJGDFODRG ORGJJR ORRN DRGINREGT FSDFG SDGHS</p>
                <p>GDFFKFHGKFDHFDKHFDHJDFLGJDFJGKDGHFDHFD DFHGDG DRJGDFODRG ORGJJR ORRN DRGINREGT FSDFG SDGHS</p>
            </div>

        </div>
        </>

        
            <div id='features'>
                <p id='f-title1'>INFORMATION</p>
                <p id='f-title2'>which is</p>

                <div id='f-container'>
                    <div id='c1'>
                        <p id='ctitle'>SHORT</p>
                        <img src='/assets/sum.jpg'/>
                    </div>

                    <div id='c1'>
                        <p id='ctitle'>SUMMARIZED</p>
                        <img src='/assets/short.jpg'></img>
                    </div>

                    <div id='c1'>
                        <p id='ctitle'>SIMPLE</p>
                        <img src='/assets/ha.jpg'></img>
                    </div>

                </div>
            </div>

            <div id='about'>
                <img src='/assets/short.jpg'></img>
                <div id='a-info'>
                    <p id='a-title'>HELPING YOU TO FIND YOUR DREAM CAREER</p>
                    <p style={{fontSize:'1.5rem',textAlign:'justify'}}>CoMonk is world's most renowned website for Career counselling for students studying in class 10th or 12th. It is the best platform to get Carreer counselling because here we provide To the point inforation in such a Short, Simple & Summarized way so that it can be unerstood by even 10 year old child.
                    </p></div>
            </div>

            <div id='unique'>
                <p id='u-title1'>FEATURES</p>

                <div id='u-container'>
                    <div id='u1'>
                        <p id='utitle'>FREE INFORMATION</p>
                        CoMonk is world's most renowned website for Career counselling for students studying in class 10th or 12th. It is the best platform to get Carreer counselling.
                    </div>

                    <div id='u1'>
                        <p id='utitle'>SKILL DEVELOPMENT</p>
                        CoMonk is world's most renowned website for Career counselling for students studying in class 10th or 12th. It is the best platform to get Carreer counselling.
                    </div>

                    <div id='u1'>
                        <p id='utitle'>ONE TO ONE CONSULTANCY</p>
                        CoMonk is world's most renowned website for Career counselling for students studying in class 10th or 12th. It is the best platform to get Carreer counselling.
                    </div>

                </div>
            </div>
{/* 
            <div id='explore'>
                <div id='e-info'>
                    <p id='e-title'>EXPLORE YOUR DREAM CAREER WITH US</p>
                    <input type='text' defaultValue='Search your Career' id='searchbar'></input>
                </div>
                <img src='/assets/minion writing.png' style={{height:'20rem',    padding: '11rem 4rem'}}/>
            </div>
            <label className='co-ex'>Explore Blogs</label>
            <div className='boxclass'>
            <div className='box-1'>
                <span>blog</span>
            </div>
            <div className='box-1'>
                <span>blog</span>
            </div>
            <div className='box-1'>
                <span>blog</span>
            </div>
            <div className='box-1'>
                <span>blog</span>
            </div>
            </div>
            <div id='opportunity'>
                <div id='o-info'>
                    <p id='o-title'>OPPORTUNITY JUST FOR YOU</p>
                    Hey... 
                    <p>Now you can also became Influencer & utilize our platforms to earn money from Day 1 only by becoming a Content Creator at Comonk</p>
                    <p>For more Information, just contact us.</p>
                </div>
            </div>

 <div className='careerbox-title'>
 Get started by selecting your preferred career category
 </div>
 <div className='careerbox'>
     <div className='box'>
         <label>Engineering</label>
         <img src="/assets/eng.png"/>
     </div>
     <div className='box'>
         <label>Medical</label>
         
         <img src="/assets/med.png"/>
     </div>
     <div className='box'>
         <label>Pure Science</label>
         
         <img src="/assets/tech.png"/>
     </div>
     <div className='box'>
         <label>Architecture</label>
         
         <img src="/assets/arc.png"/>
     </div>
     <div className='box'>
         <label>Agriculture</label>
         
         <img src="/assets/arg.png"/>
     </div>
     <div className='box'>
         <label>Allied Health<br/> Sciences</label>
         
         <img src="/assets/med.png"/>
     </div>
     <div className='box'>
         <label>Commerce</label>
         
         <img src="/assets/eng.png"/>
     </div>
     <div className='box'>
         <label>Arts & Humanities</label>
         
         <img src="/assets/art.png"/>
     </div>
 </div>

 <div id='youtube'>
     <div id='y-info'>
         <p id='y-title1'>SUBSCRIBE</p>
         <p id='y-title2'>TO OUR YOUTUBE CHANNEL FOR</p>
         <p id='y-title3'>FREE GYAN</p>
     </div>
     <iframe width="420" height="235" style={ {    padding: '4rem 0rem' , border:'none'}}src="https://www.youtube.com/embed/HiaMAwtQvUo">
     </iframe>
 </div>

 <div id='blogspot'>
     
 </div>

        */