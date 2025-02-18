import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'
import instagramIcon from '../assets/instagram_icon.png'
import pinterestIcon from '../assets/pintester_icon.png'
import whatsappIcon from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="Logo_emart">
            <img src={logo} alt="logo_error" />
            <h3>SHOPPER</h3>
        </div>
        
            <ul className='links_items'>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
       
        <div className="platforme_icon">
            <img src={instagramIcon} alt="instagramIconError" className="icon" />
            <img src={pinterestIcon} alt="pinterestIconError" className="icon" />
            <img src={whatsappIcon} alt="whatsappIconError" className="icon" />
        </div>
        <div className="footerCopyRights">
            <div className="border_line"></div>
            <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer