import React, {useState} from 'react'
import styles from './Navbar.module.css'
import Logo from '../../images/Logo.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  const [nav, setNavbar] = useState(false)

  return (
    <header className={styles.navbar}>
      <a href="/">
      <img src={Logo} alt='Little Lemon Logo'/>
      </a>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <a className={styles.active} href='/'><b>Home</b></a>
          </li>
          <li>
            <a href='/'><b>About</b></a>
          </li>
          <li>
            <a href='/'><b>Menu</b></a>
          </li>
          <li>
            <a href='/'><b>Reservations</b></a>
          </li>
          <li>
            <a href='/'><b>Order Online</b></a>
          </li>
          <li>
            <a href='/'><b>Login</b></a>
          </li>
        </ul>
      </nav>
      <btn onClick={()=> setNavbar(!nav)} class={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
      </btn>
    </header>
  )
}

export default Navbar