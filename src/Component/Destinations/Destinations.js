import React from 'react';
import classes from "./Destinations.module.css"
import DestCards from "../DestCards/DestCards";
import { dests } from "../../Constant/index";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Destinations = () => {
  return (
    <div className={classes.destination}>
        <h3>Popular Destinations</h3>
        <p>See the beauty of the world easily with Vacay<span>s.</span></p>

        <AnimationOnScroll animateIn="animate__fadeInLeft" animateDelay="800ms">
        <div className={classes.Thecards}>
        {dests.map((item) =>(
            <DestCards 
            key={item.id}
            img={item.image}
            word={item.text}
            />
        ))}
        
        </div>
        </AnimationOnScroll>
    </div>


  )
}

export default Destinations