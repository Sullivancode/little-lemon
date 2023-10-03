import React from 'react'
import Logo from '../images/Logo.svg'
import './Footer.css'

function Footer() {
  return (
    <>
      <img src={Logo} alt='Little Lemon Logo'/>
      <div class=''>
      <h5>Doormat Navigation</h5>
      <ul>
        <li><a href='Home'>Home</a></li>
        <li><a href='About'>About</a></li>
        <li><a href='Menu'>Menu</a></li>
        <li><a href='Reservations'>Reservations</a></li>
        <li><a href='Order Online'>Order Online</a></li>
        <li><a href='Login'>Login</a></li>
      </ul>
      </div>
      <h5>Contact </h5>
      <ul>
        <li>Address</li>
        <li>Phone Number</li>
        <li>Email</li>
      </ul>

      <h5>Social media links</h5>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Youtube</li>
      </ul>
      
    </>
  )
}

export default Footer