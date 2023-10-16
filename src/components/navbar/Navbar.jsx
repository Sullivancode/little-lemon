import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/Logo.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Nav() {
  const [nav, setNav] = useState(false)

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt='Little Lemon Logo'/>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
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
      <btn onClick={()=> setNav(!nav)} class={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
      </btn>
    </header>
  )
}

export default Nav