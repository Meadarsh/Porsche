import React, { useEffect, useState } from "react";
import "./sixthstyle.css";
import gsap from "gsap";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const Sixthpage = () => {
  const [picIndex, setPicIndex] = useState(1);
  const [color, setColor] = useState(1);
  const [alloy, setAlloy] = useState(1);
  const select = [
    ".white",
    ".black",
    ".red",
    ".yellow",
    ".metal-black",
    ".grey",
    ".navyblue",
    ".maroon",
    ".blue",
    ".cream",
  ];

  useEffect(() => {
    gsap.to(".color-box", {
      border: "2px solid transparent",
      boxShadow: "rgba(0, 0, 0, 0.0) 0px 3px 8px",
    });
    gsap.to(`${select[color - 1]}`, {
      border: "2px solid red",
      boxShadow: "rgba(0, 0, 0, 0.44) 0px 3px 8px",
    });
  }, [color]);
  useEffect(() => {
    gsap.from(".image-contt img", {
      opacity: 0,
    });
    gsap.to(".image-contt img", {
      opacity: 1,
      duration: 0.3,
    });
  }, [picIndex]);
  return (
    <div className="sixth-main">
      <div className="image-contt">
        <div className="slider-button">
          <div
            className="slider-button-icon"
            onClick={() => {
              if (picIndex > 1) setPicIndex(picIndex - 1);
            }}
          >
            <BsArrowLeftCircle />
          </div>
          <div
            className="slider-button-icon"
            onClick={() => {
              if (picIndex < 6) {
                setPicIndex(picIndex + 1);
              } else setPicIndex(1);
            }}
          >
            <BsArrowRightCircle />
          </div>
        </div>
        <img
          src={`/customiztion/porsche-${picIndex}${color}${alloy}.jpeg`}
          alt="N/A"
        />
      </div>
      <div className="custom-main">
        <h2>Exterior Color</h2>
        <div>
          <p>Standard Colors</p>
          <div className="color-main">
            <div onClick={() => setColor(1)} className="white color-box"></div>
            <div onClick={() => setColor(2)} className="black color-box"></div>
            <div onClick={() => setColor(3)} className="red color-box"></div>
            <div onClick={() => setColor(4)} className="yellow color-box"></div>
          </div>
          <p>Metalic Colors</p>
          <div className="color-main">
            <div
              onClick={() => setColor(5)}
              className=" metal-black color-box"
            ></div>
            <div onClick={() => setColor(6)} className="grey color-box"></div>
            <div
              onClick={() => setColor(7)}
              className="navyblue color-box"
            ></div>
          </div>
          <p>Special Colors</p>
          <div className="color-main">
            <div onClick={() => setColor(8)} className="maroon color-box"></div>
            <div onClick={() => setColor(9)} className="blue color-box"></div>
            <div onClick={() => setColor(10)} className="cream color-box"></div>
          </div>
        </div>
        <h2>Wheels</h2>
        <div className="alloy-main">
          <div onClick={() => setAlloy(1)} className="wheel">
            <img src="public/wheel-1.png" alt="N/A" />
          </div>
          <div onClick={() => setAlloy(2)} className="wheel">
            <img src="public/wheel-2.png" alt="N/A" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixthpage;
