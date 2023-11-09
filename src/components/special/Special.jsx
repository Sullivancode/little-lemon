import React from 'react'
import styles from './Special.module.css'
import Lemond from '../../images/lemon dessert.jpg'
import Greek from '../../images/greek salad.jpg'
import Bread from '../../images/bruchetta.svg'
import {MdDeliveryDining} from 'react-icons/md'

function special() {
  return (
    <div className={styles.special}>

      <div className={styles.special_text}>
        <h2>This weeks specials!</h2>
      </div>

      <a className={styles.online_menu_btn} href="">
      <btn><b>Online Menu</b></btn>
      </a>

      <div className={styles.card1}>
        <img src={Greek} alt='Greek Salad'/>
        <div className={styles.card1_container}>
          <h4>Greek salad</h4>
          <p className={styles.price1}>$12.99</p>
          <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          <a href=""><b>Order online</b> <MdDeliveryDining /></a>
        </div>
      </div>

      <div className={styles.card2}>
        <img src={Bread} alt='Bruchetta'/>
        <div className={styles.card2_container}>
          <h4>Bruchetta</h4>
          <p className={styles.price2}>$5.99</p>
          <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <a href=""><b>Order online</b> <MdDeliveryDining /></a>
        </div>
      </div>

      <div className={styles.card3}>
        <img src={Lemond} alt='Lemon dessert'/>
        <div className={styles.card3_container}>
          <h4>lemon dessert</h4>
          <p className={styles.price3}>$5.00</p>
          <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          <a href=""><b>Order online</b> <MdDeliveryDining /></a>
        </div>
      </div>


    </div>
  )
}

export default special