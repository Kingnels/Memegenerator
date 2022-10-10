import React from 'react'
import Meme from "./memedata"

function Main() {

    function handle (){
    const memeArray = Meme.data.memes
    const randNum = Math.floor(Math.random()* memeArray.length)
    const url = memeArray[randNum].url

    // const {url}= memeArray[randNum]
    console.log(url)
    // console.log(randNum)
  }

  return (
    <div className='main-section'>
        <div action="" className='main-form'>
            <input type="text" className='meme-input' placeholder='top text'/>
            <input type="text" className='meme-input' placeholder='lower text'/>
            <button 
            className='meme-btn' 
            onClick = {handle}
            >
              Get a new meme Image
            </button>
        </div>
    </div>
  )
}

export default Main
// onMouseEnter= {handle}