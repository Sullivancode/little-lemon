import React from 'react'
import styles from './Hero.module.css'
import foodPhoto from '../../images/restauranfood.jpg'


const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.text}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned mediterranean resraurant, focused on traditional recipes served with a modern twist.</p>
      </div>

      <a className={styles.reserve_btn} href="">
      <btn><b>Reserve a Table</b></btn>
      </a>

      <img src={foodPhoto} alt="restaurant food photo" className={styles.overhang_img}/>
      
    </div>
  )
}

export default Hero