import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <h1 className="title">Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="email_form">
            <input type="email" placeholder='Your email id' />
            <button className="subscribe_btn">Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter