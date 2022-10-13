import React, {useState} from 'react'
import Meme from "./memedata"

function Main() {
    // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/1ihzfe.jpg")

    const [joke, setJoke] = useState({
      topText:"",
      botttomText:"",
      randomImage: "https://i.imgflip.com/1ihzfe.jpg"
    })

    const [allData, setAllData] = useState(Meme)

    // const [memeImage, setMemeImage] = React.useState("")
    function handle (){
    const memeArray = allData.data.memes
    const randNum = Math.floor(Math.random()* memeArray.length) !== 0 ? Math.floor(Math.random()* memeArray.length) : Math.floor(Math.random()* memeArray.length) + 1;
    const url = memeArray[randNum].url    
    // const {url}= memeArray[randNum]
    
            setJoke((prevState) => {
              return {
                ...prevState,
                randomImage : url
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

        <img className='meme-img' src={joke.randomImage} alt="" />
    </div>
  )
}

export default Main