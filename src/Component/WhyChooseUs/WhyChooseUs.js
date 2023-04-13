import React from "react";
import classes from "./WhyChooseUs.module.css";

const WhyChooseUs = () => {
  return (
    <div className={classes.why}>
      <h3>Why Choose Us</h3>

      <div className={classes.whycard}>
        <h4>
          <span>01. </span>International partnership
        </h4>
        <p>
          International partnerships provide opportunities to attract a more
          diverse student body, and to promote greater mobility of staff and
          students. These partnerships also have the potential to make an impact
          on curriculum development, collaborative teaching programmes and
          research networks.
        </p>
      </div>

      <div className={classes.whycard}>
        <h4>
          <span>02. </span>Learning on Vacations
        </h4>
        <p>
          Educational travel combines travelling to somewhere new, either
          overseas or domestically in order to take classes in something that
          interests you. Travel teaches you confidence, independence and
          freedom. It boosts your self-awareness and your problem-solving skills
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
