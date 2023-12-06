import React from 'react';
import styles from './Reservations.module.css';
import Navbar from '../../components/navbar/Navbar'

function Reservations() {
  return (
    
    <>
    <Navbar />
    <div  className={styles.reservations}>
      <div className={styles.text}>
        <h1>Reservations</h1>
      </div>

      <label className={styles.radio_label}>
        <input className={styles.input} type="radio" name="seatingOption" value="option1" />
        <b>Indoor seating</b>
        <span className={styles.checkmark}></span>
      </label>

      <label className={styles.radio_label2}>
        <input className={styles.input2} type="radio" name="seatingOption" value="option2" />
        <b>Outdoor seating</b>
        <span className={styles.checkmark2}></span>
      </label>
      </div>

    </>
  )
}

export default Reservations