import React from "react";
import classes from "./Footer.module.css";
import insta from "../../assets/insta.svg"
import tiktok from "../../assets/tiktok.svg"
import tweet from "../../assets/twitter.svg"

const Footer = () => {
  return (
    <footer id="footer">

    <main>
      <div className={classes.flex}>
        <h5>Vacays Agency</h5>
        <p>
          Founded in 2022 and created for travel market professionals, Vacays
          has become one of the fastest-growing platforms for B2B industry
          players. An innovative and reliable partner for tens of thousands of
          travel agents, tour operators, and corporate clients.
        </p>
      </div>

      <div className={classes.flex}>
        <h5>Explore</h5>
        <p>Travel Blog</p>
        <p>Rentals</p>
        <p>Vacays Hotel</p>
        <p>Reviews</p>
      </div>

      <div className={classes.flex}>
        <h5>Help & Supports</h5>
        <p>Cancel your Vacay</p>
        <p>Refund Policy</p>
        <p>Customer Support</p>
        <p>Travel Coupon</p>
      </div>

      </main>


      <div>
        <h4>Follow US</h4>
        <div className={classes.logo}>
            <img src={tiktok} alt="tiktok"/>
            <img src={insta} alt=""/>
            <img src={tweet} alt="tweet"/>
        </div>
      </div>


      <hr></hr>
    </footer>
  );
};

export default Footer;
