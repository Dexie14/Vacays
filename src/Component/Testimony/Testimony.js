import React from "react";
import classes from "./Testimony.module.css";
import jeremy from "../../assets/jeremy.svg";
import steve from "../../assets/steve.svg";
import lily from "../../assets/LILY.svg";
import right from "../../assets/rightA.svg";
import left from "../../assets/leftA.svg";
import circle1 from "../../assets/circle1.svg"
import circle2 from "../../assets/circle2.svg"
import { AnimationOnScroll } from "react-animation-on-scroll";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background: "white",position: "absolute", top: "30%" }}
    >
      <img onClick={onClick} src={right} alt="right" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "white",
        position: "absolute",
        top: "30%",
        left: "-10%",
      }}
    >
      <img onClick={onClick} src={left} alt="left" />
    </div>
  );
}

export default function CustomArrows() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
  };

  return (
    <div className={classes.testify}>
        <img src={circle1} alt="" className={classes.circleq}/>
        <img src={circle2} alt="" className={classes.circle2}/>
      <h4>Loved by over million travelers</h4>
      <div className={classes.clients}>
          <AnimationOnScroll animateIn="animate__headShake" animateDelay="800ms">
        <Slider {...settings} className={classes.testcards}>
          {/* <div className={classes.testcards}> */}
          <div>
            <div className={classes.test}>
              <img src={jeremy} alt="jeremy" />
              <h5>Jeremy Diaz Theophilus</h5>
              <p>Geospatial Analyst</p>
              <p>
                "Just wanted to let you know that the trip was fantastic and
                everything worked out seamlessly! The hotels and the tours you
                recommended were excellent! Hotel locations in particular were
                ideal.{" "}
              </p>
            </div>
          </div>

          <div>
            <div className={classes.test}>
              <img src={steve} alt="steve" />
              <h5>Steve Stone Apple</h5>
              <p>Engineer</p>
              <p>
                “Booking through you was very easy and made our lives so much
                easier. I have nothing bad to say! Thank you for giving us tips
                and guidance before we left on what to bring and such, that was
                very helpful! Thanks again.
              </p>
            </div>
          </div>

          <div>
            <div className={classes.test}>
              <img src={lily} alt="lily" />
              <h5>Lily Diana Ruth</h5>
              <p>Tourist</p>
              <p>
                "Thank you so much for being proactive (awesome memory, by the
                way). Maybe it seems like no big deal to you but this is amazing
                customer service and is greatly appreciated.
              </p>
            </div>
          </div>

          <div>
            <div className={classes.test}>
              <img src={jeremy} alt="jeremy" />
              <h5>Jeremy Diaz Theophilus</h5>
              <p>Geospatial Analyst</p>
              <p>
                "Just wanted to let you know that the trip was fantastic and
                everything worked out seamlessly! The hotels and the tours you
                recommended were excellent! Hotel locations in particular were
                ideal.{" "}
              </p>
            </div>
          </div>

          <div>
            <div className={classes.test}>
              <img src={steve} alt="steve" />
              <h5>Steve Stone Apple</h5>
              <p>Engineer</p>
              <p>
                “Booking through you was very easy and made our lives so much
                easier. I have nothing bad to say! Thank you for giving us tips
                and guidance before we left on what to bring and such, that was
                very helpful! Thanks again.
              </p>
            </div>
          </div>

          <div>
            <div className={classes.test}>
              <img src={lily} alt="lily" />
              <h5>Lily Diana Ruth</h5>
              <p>Tourist</p>
              <p>
                "Thank you so much for being proactive (awesome memory, by the
                way). Maybe it seems like no big deal to you but this is amazing
                customer service and is greatly appreciated.
              </p>
            </div>
          </div>
        </Slider>
          </AnimationOnScroll>
      </div>
    </div>
  );
}
