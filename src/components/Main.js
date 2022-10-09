import React from 'react'

function Main() {
  const handle = function(){
    console.log("i was clicked")
  }
  return (
    <div className='main-section'>
        <div action="" className='main-form'>
            <input type="text" className='meme-input' placeholder='top text'/>
            <input type="text" className='meme-input' placeholder='lower text'/>
            <button 
            className='meme-btn' 
            onClick = {handle}
            // onMouseEnter= {handle}
            >
              Get a new meme Image
            </button>
        </div>
    </div>
  )
}

export default Main