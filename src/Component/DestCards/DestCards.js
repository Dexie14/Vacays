import React from 'react';
import classes from "./DestCards.module.css";

const DestCards = ({img, word}) => {
  return (
    <div className={classes.card}>
        <img src={img} alt="card1" />
        <h6>{word}</h6>
    </div>
  )
}

export default DestCards