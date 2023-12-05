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
      <div>
      <label>
        <input type="radio" name="seatingOption" value="option1" />
        Indoor seating 
      </label>

      <label>
        <input type="radio" name="seatingOption" value="option2" />
        Outdoor seating
      </label>
      </div>
    </div>
    </>
  )
}

export default Reservations