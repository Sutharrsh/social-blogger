import React from 'react'

export default function Bot() {
  return (
    <div className='blur'> 
    <div className='bot'>
        <div className='title'>Ask Anything</div>
      <div className='body'>
        <div className='left'>Hello ,How May i help you?</div>
        <br/>
        <div className='right'>Hello</div>
      </div>
      <div className='send'>

        <input type="text"/>

        <input type="submit" value="send"/>
      </div>
    </div>
    </div>
  )
}
