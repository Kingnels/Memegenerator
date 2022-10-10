import React, {useState} from 'react'
import Meme from "./memedata"

function Main() {
    const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1ihzfe.jpg")
    // const [memeImage, setMemeImage] = React.useState("")
    function handle (){
    const memeArray = Meme.data.memes
    const randNum = Math.floor(Math.random()* memeArray.length)
    const url = memeArray[randNum].url
    // const {url}= memeArray[randNum]
    setMemeImage(() => {
      if(url === 0){
      return url + 1
      }else{
        return url
      }
    })
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
              Get a new meme Image 🖼
            </button>
        </div>

        <img className='meme-img' src={memeImage} alt="" />
    </div>
  )
}

export default Main
// onMouseEnter= {handle}