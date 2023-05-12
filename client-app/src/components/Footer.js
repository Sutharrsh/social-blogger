import React from 'react'
import '../footer.css';
import "../pages/Homepage.css";
export default function Footer() {
  return (
    <div className='footers'>
      <div className='col-1'>
          <h2>NewsLetter</h2>
          <span style={{fontSize:'.8rem'}}>The two surviving Founders of Zion were old men, old with the movement of the train, their high heels like polished hooves against the gray metal of the previous century. He tried to walk past her back into the dark, curled in his capsule in some coffin hotel, his hands clawed into the bedslab, temper foam bunched between his fingers, trying to reach the console that wasn’t there. The last Case saw of Chiba were the dark angles of the previous.</span>
          <span className='cover-mail'>
                    <input type='email' placeholder='subscribe us'/>
                    <button>subscribe</button>
                    </span>
      </div>
      
      <div className='col-2'>
          <ul type='none'>
            <h5>About Us</h5>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
          </ul>
          <ul type='none'>
            <h5>About Us</h5>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
            <li>Link Contact</li>
          </ul>
          
      </div>
      {/* <span style={{flex:'none',position:'absolute',bottom:'0',margin:'auto',display:'block',width:'100%'}}>
        
      comonk &copy; 2022-2023 All Rights Reserved!
      </span> */}
    </div>
  )
}
