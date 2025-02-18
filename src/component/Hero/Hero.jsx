import React from 'react'
import './Hero.css'
import HandShake_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'
const Hero = () => {
  return (
    <div className='Hero'>
        <div className="left-hero">
            <h4>NEW ARRIVALS ONLY</h4>
            <div className='hand_icon'>
                <h1>new</h1>
                <img src={HandShake_icon} alt="hand_iconError"/>
                
            </div>
            <h1>colections<br/>for everyone</h1>
            <div className="button-left">
                <p>Latest Collection</p>
                <img src={arrow_icon} alt="arrow_error"/>
                
            </div>
        </div>
        <div className="right-hero">
            <img src={hero_image} alt="Hero_image_error" className="right-hero-img" />
        </div>
    </div>
  )
}

export default Hero