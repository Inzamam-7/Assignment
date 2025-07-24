import React from 'react'
import headerImage from '../assets/headerImage.jpg'
const Header = () => {
  return (
    <div>
        <img src={headerImage} alt='header Image' style={{height:"400px", width:"100%", objectFit:"cover"}}/>
    </div>
  )
}

export default Header