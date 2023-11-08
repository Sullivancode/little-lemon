import React from 'react'
import styles from './Special.module.css'

function special() {
  return (
    <div className={styles.special}>

      <div className={styles.special_text}>
        <h2>This weeks specials!</h2>
      </div>

      <a className={styles.online_menu_btn} href="">
      <btn>Online Menu</btn>
      </a>

      <div className={styles.card}>
        
      </div>

    </div>
  )
}

export default special