import React, { useState } from "react";
import classes from "./Hero.module.css";
import venue from "../../assets/venue.svg";
import date from "../../assets/date.svg";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Hero = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState(new Date());

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = () => setModalIsOpen(false);

  return (
    <div className={classes.section}>
      <div className={classes.hero}>
        <div className={classes.herosection}>
          <h2>
            Vacay<span>s.</span> give you the chance to plan the ideal getaway.
          </h2>
        </div>
      </div>

      <div className={classes.booking}>
        <div className={classes.book}>
          <div className={classes.number}>
            <select>
              <option hidden selected disabled>
                Number of Travelers
              </option>
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
              <option>4 Travelers</option>
            </select>
          </div>

          <div className={classes.data}>
            <div className={classes.venue}>
              <img src={venue} alt="venue" />
              {/* <input placeholder="Going to"/> */}
              <select>
                <option hidden selected disabled>
                  Going to
                </option>
                <option>Lagos</option>
                <option>Abuja</option>
                <option>Ibadan</option>
                <option>Port-Harcout</option>
              </select>
            </div>

            <div className={classes.Check}>
              <div className={classes.checkin}>
                <p>Check-in</p>
                <div className={classes.calendar}>
                  <img src={date} alt="date" />
                  <div className={classes.picker}>
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      isClearable
                      placeholderText="April 10"
                    />
                  </div>
                  {/* <select>
                    <option hidden selected disabled>
                      Apr 10
                    </option>
                    <option>Apr 10</option>
                    <option>Apr 10</option>
                    <option>Apr 10</option>
                    <option>Apr 10</option>
                  </select> */}
                </div>
              </div>
              <div className={classes.checkin}>
                <p>Check-out</p>
                <div className={classes.calendar}>
                  <img src={date} alt="date" />
                  <div className={classes.picker}>
                    <DatePicker
                      selected={startDate2}
                      onChange={(date) => setStartDate2(date)}
                      isClearable
                      placeholderText="May 4"
                    />
                  </div>
                  {/* <select>
                    <option hidden selected disabled>
                      May 4
                    </option>
                    <option>May 4</option>
                    <option>May 4</option>
                    <option>May 4</option>
                    <option>May 4</option>
                  </select> */}
                </div>
              </div>
            </div>
          </div>

          <div className={classes.bookbutton}>
            <button onClick={() => setModalIsOpen(true)}>BOOK</button>
          </div>

          {modalIsOpen && 
            <div className={classes.modal}>
              <h5> The website is still in progress</h5>
              <p>You will be able to book soon</p>
              <p>Thank you for visiting</p>
              <button onClick={handleClick}>Done</button>
            </div>
          }

          {modalIsOpen && ( <div className={classes.overlay}></div>)}
        </div>
      </div>
    </div>
  );
};

export default Hero;
