import React from 'react'
import styles from './Hero.module.css'


const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned mediterranean resraurant, focused on traditional recipes served with a modern twist.</p>
      </div>
      <a className={styles.reserve_btn} href="">
      <btn>Reserve a Table</btn>
      </a>
    </div>
  )
}

export default Hero