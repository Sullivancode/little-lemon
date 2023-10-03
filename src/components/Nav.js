import React from 'react'
import styles from './Nav.css'
import Logo from '../images/Logo.svg'

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
      

    </header>
  )
}

export default Nav