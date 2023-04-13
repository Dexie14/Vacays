import React from "react";
import classes from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={classes.subscribe}>
      <div className={classes.explore}>
        <h5>
          Explore a world of travel with VACAYs, subscribe to our newsletter to
          be updated by amazing locations
        </h5>
        <input placeholder="Enter your Email-address"/>
        <button>SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Subscribe;
