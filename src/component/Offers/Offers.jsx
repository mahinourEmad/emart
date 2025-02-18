import React from 'react'
import './Offers.css'
import exclusiveImage from '../assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="leftPart_offers">
            <h1>Exclusive<br/>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='check_button'>Check now</button>
        </div>
        <div className="rightPart_offers" style={{width:"300px"}}>
            <img src={exclusiveImage} alt="exclusiveImage_error" className="exclusiveImg" style={{width:"100%", minWidth:"300px"}} />
        </div>

    </div>
  )
}

export default Offers