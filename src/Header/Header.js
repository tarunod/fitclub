import React from 'react'
import "./Header.css"
import Logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className="Header">
      <img  src={Logo} alt="" className="logo"/>

<ul className='HeadeMenu'>
  <li>Home</li>
  <li>Programss</li>
  <li>why us</li>
  <li>Plans</li>
  <li>Testimonials</li>
</ul>

    </div>
  )
}

export default Header
