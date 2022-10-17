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

    function handleChange(event){
      const {name, value} = event.target
      setJoke(prevState =>({
          ...prevState,
          [name]:value
      }))
    }

  return (
    <div className='main-section'>
        <div action="" className='main-form'>
            <input type="text" className='meme-input' placeholder='top text' name='topText' value={joke.topText} onChange={handleChange}/>
            <input type="text" className='meme-input' placeholder='lower text' name="botttomText" value={joke.botttomText} onChange={handleChange}/>
            <button 
            className='meme-btn' 
            onClick = {handle}
            >
              Get a new meme Image 🖼
            </button>
        </div>

        <div className="meme-text">
                <img className='meme-img' src={joke.randomImage} alt="" />
                <h2 className='top text'>{joke.topText}</h2>
                <h2 className='bom text'>{joke.botttomText}</h2>
                {/* <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2> */}
            </div>

          
         
    </div>
  )
}

export default Main