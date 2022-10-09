import React from 'react';
import img from "./Troll.png";

function Header() {
  return (
    <div className='header'>
        <img src={img} alt="" />
        <h2 className='header-title'>Meme Generator</h2>
        <h4>React Course-Project 3 </h4>
    </div>
  )
}

export default Header