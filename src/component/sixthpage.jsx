import React, { useEffect, useState } from "react";
import "./sixthstyle.css";
import gsap from "gsap";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
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
const arrFor6img =[3,2,3,4,5,6]
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
  return (
    <div className="sixth-main">
      <div className="image-contt">      
         <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
    >
     {arrFor6img.map((e,index)=>(
      <SwiperSlide><img key={index}
      src={`/customiztion/porsche-${e}${color}${alloy}.jpeg`}
      alt="N/A"
    /></SwiperSlide>
     )) }
    </Swiper>
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
            <img src="/wheel-1.png" alt="N/A" />
          </div>
          <div onClick={() => setAlloy(2)} className="wheel">
            <img src="/wheel-2.png" alt="N/A" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixthpage;
