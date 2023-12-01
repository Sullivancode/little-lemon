import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../images/Logo.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Navbar() {
  const [nav, setNavbar] = useState(false);
  const location = useLocation();

  return (
    <header className={styles.navbar}>
      <Link to="/">
        <img src={Logo} alt='Little Lemon Logo' />
      </Link>
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <Link className={`${styles.nav_link} ${location.pathname === '/' ? styles.active : ''}`} to='/'>
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link className={`${styles.nav_link} ${location.pathname === '/About' ? styles.active : ''}`} to='/About'><b>About</b></Link>
          </li>
          <li>
            <Link className={`${styles.nav_link} ${location.pathname === '/Menu' ? styles.active : ''}`} to='/Menu'><b>Menu</b></Link>
          </li>
          <li>
            <Link className={`${styles.nav_link} ${location.pathname === '/Reservations' ? styles.active : ''}`} to='/Reservations'><b>Reservations</b></Link>
          </li>
          <li>
            <Link className={`${styles.nav_link} ${location.pathname === '/Orderonline' ? styles.active : ''}`} to='/Orderonline'><b>Order Online</b></Link>
          </li>
          <li>
            <Link className={`${styles.nav_link} ${location.pathname === '/Login' ? styles.active : ''}`} to='/Login'><b>Login</b></Link>
          </li>
        </ul>
      </nav>
      <btn onClick={() => setNavbar(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </btn>
    </header>
  );
}

export default Navbar;
