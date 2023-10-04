import React from 'react'
import styles from './Nav.css'
import Logo from '../images/Logo.svg'
import {AiOutlineMenu} from 'react-icons/ai'

function Nav() {
  return (
    <header class={styles.navbar}>
      <img src={Logo} alt='Little Lemon Logo'/>
      <nav>
        <ul class={styles.menu}>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Menu</a>
          </li>
          <li>
            <a href='/'>Reservations</a>
          </li>
          <li>
            <a href='/'>Order Online</a>
          </li>
          <li>
            <a href='/'>Login</a>
          </li>
        </ul>
      </nav>
      <btn class={styles.mobile_btn}>
        <AiOutlineMenu size={25}/>
      </btn>
    </header>
  )
}

export default Nav