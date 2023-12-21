import React from "react";
import "./thirdstyle.css";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";
const Thirdp = () => {
    gsap.registerPlugin(ScrollTrigger)
    useEffect(()=>{
        gsap.to('.thirdpinner2',{
          scrollTrigger:{
            trigger:'.thirdpinner2',
            start:'top top',
            end:'130% bottom ',
            scrub:1,
            pin:true,
           
          }}),
        gsap.to('.darkfront',{
          opacity:.6,
          scrollTrigger:{
            trigger:'.thirdpinner2',
            start:'top top',
            end:'130% bottom ',
            scrub:1,
           
          }
        })
    })
  return (
    <div className="thirdpmain">
      <div className="thirdpinner1">
        <div className="thirdpinner1-txt">
          <h1>Timeless design, contemporary interpretation.</h1>
          <p>
            The shape of the 911 Carrera is unmistakable because of its iconic
            flyline and elegant roof lines. These have characterised Porsche
            since 1963, as have sports cars with astonishing performance.{" "}
          </p>
        </div>
       <video poster="/grayCarpre.webp" autoPlay muted loop src="/grayCarVid.mp4"></video>
      </div>
      <div className="thirdpinner2">
        <img src="/porsche-normal.webp" alt="" />
       <div className="darkfront"></div>
      </div>
      <div className="uppermover">
        <h1>
        The harmony of tradition and modernity–the iconic flyline and the continuous light strip. 
        </h1>
      </div>
    </div>
  );
};

export default Thirdp;
