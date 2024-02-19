import React, {useState} from 'react';
import styles from './Reservations.module.css';
import Navbar from '../../components/navbar/Navbar';
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { LiaGlassCheersSolid } from "react-icons/lia";
import { IoMdAlarm } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import CustomDropdown from '../../components/CustomDropdown/CustomDropdown';

function Reservations() {

  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'Birthday', label: 'Birthday' },
    { value: 'Engagement', label: 'Engagement' },
    { value: 'Anniversary', label: 'Anniversary' },
  ];

  const handleSelect = (option) => {
    setSelectedOption(option);
    // Do something with the selected option
  };
  return (

    <React.Fragment>
      <Navbar />
      <div  className={styles.reservations}>
      <div className={styles.text}>
        <h1>Reservations</h1>
      </div>

      <div className={styles.reserve_a_table}>

       <div className={styles.radiobtn}>

        <label className={styles.radio_label1}>
          <input className={styles.input1} type="radio" name="seatingOption" value="option1" />
          <b>Indoor seating</b>
          <span className={styles.checkmark1}></span>
        </label>

        <label className={styles.radio_label2}>
          <input className={styles.input2} type="radio" name="seatingOption" value="option2" />
          <b>Outdoor seating</b>
          <span className={styles.checkmark2}></span>
        </label>

       </div>

        <div className={styles.reserve_date}>
          <p>Date</p>
          <button type='button' id='myButton1' className={styles.dropbtn1}>
          <CiCalendar className={styles.CiCalendar}/>
          <b className={styles.date_text}>Select Date</b>
          <IoIosArrowDown className={styles.IoIosArrowDown} />
          </button>
        </div>

        <div className={styles.reserve_diners}>
          <p>Number of Diners</p>
          <button className={styles.dropbtn2}>
          <CiUser className={styles.CiUser}/>
          <b className={styles.diners_text}>No. of Diners</b>
          <IoIosArrowDown className={styles.IoIosArrowDown} />
          </button>
        </div>

        <div className={styles.reserve_occasion}>
          <p>Occasion</p>
        <CustomDropdown
        options={options}
        onSelect={handleSelect}
        placeholder="Occasion"
        selectedOption={selectedOption}
        />
        </div>

        <div className={styles.reserve_time}>
          <p>Time</p>
          <button className={styles.dropbtn4}>
          <IoMdAlarm className={styles.IoMdAlarm} />
          <b className={styles.time_text}>Select Time</b>
          <IoIosArrowDown className={styles.IoIosArrowDown} />
          </button>
        </div>


      </div>
      </div>

    </React.Fragment>
  )
}

export default Reservations