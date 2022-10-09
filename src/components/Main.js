import React from 'react'

function Main() {
  return (
    <div className='main-section'>
        <form action="" className='main-form'>
            <input type="text" className='meme-input' placeholder='top text'/>
            <input type="text" className='meme-input' placeholder='lower text'/>
            <button className='meme-btn'>Get a new meme Image</button>
        </form>
    </div>
  )
}

export default Main