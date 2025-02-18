import React , {useState} from 'react';
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const[menu,setMenu] = useState ("shop");
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm bg-white rounded">
        <div class="container">
          <div className="nav-logo d-flex">
            <img src={logo} alt="logo-error" className="logo" />
            <p class="navbar-brand mt-3">SHOPPER</p>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item fw-bold" onClick={()=>setMenu("shop")}>
               <Link style={{textDecoration:'none', color:'black'}} to='/'>Shop</Link>{menu=="shop"?<hr/>:<></>}
              </li>
              <li class="nav-item fw-bold" onClick={()=>setMenu("mens")}>
              <Link style={{textDecoration:'none', color:'black'}} to ='/mens'>Men</Link> {menu=="mens"?<hr/>:<></>}
              </li>
              <li class="nav-item fw-bold" onClick={()=>setMenu("womens")}>
              <Link style={{textDecoration:'none', color:'black'}} to ='/womens'>Women</Link> {menu=="womens"?<hr/>:<></>}
              </li>
              <li class="nav-item fw-bold" onClick={()=>setMenu("kids")}>
              <Link style={{textDecoration:'none', color:'black'}} to ='/kids'>Kids</Link>{menu=="kids"?<hr/>:<></>}
              </li>
            </ul>
            <form class="left-navbar d-flex">
              <Link to ='/login'> <button type="submit">Login</button></Link>
              <Link to ='/cart'><img src={cart_icon} alt="cart_icon_error" className="cart_icon ms-3" /></Link>
              <div className="cart_count">0</div>
            </form>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;